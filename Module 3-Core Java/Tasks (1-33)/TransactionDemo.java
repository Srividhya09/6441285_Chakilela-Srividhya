import java.sql.*;
public class TransactionDemo {
    private Connection conn;
    public TransactionDemo(String dbUrl) throws SQLException, ClassNotFoundException {
        Class.forName("org.sqlite.JDBC"); 
        conn = DriverManager.getConnection(dbUrl);
        conn.setAutoCommit(true);
    }
    public void transferMoney(int fromAccountId, int toAccountId, double amount) throws SQLException {
        try {
            conn.setAutoCommit(false); 
            if (!updateBalance(fromAccountId, -amount)) {
                throw new SQLException("Debit failed, insufficient funds or account not found.");
            }
            if (!updateBalance(toAccountId, amount)) {
                throw new SQLException("Credit failed, destination account not found.");
            }
            conn.commit();
            System.out.println("Transaction successful: Transferred " + amount);

        } catch (SQLException e) {
            conn.rollback();
            System.out.println("Transaction failed, rollback executed.");
            throw e;
        } finally {
            conn.setAutoCommit(true);
        }
    }
    private boolean updateBalance(int accountId, double amount) throws SQLException {
        String sql = "UPDATE accounts SET balance = balance + ? WHERE account_id = ? AND (balance + ?) >= 0";
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setDouble(1, amount);
            pstmt.setInt(2, accountId);
            pstmt.setDouble(3, amount);
            int rows = pstmt.executeUpdate();
            return rows > 0;
        }
    }
    public void close() throws SQLException {
        if (conn != null && !conn.isClosed()) {
            conn.close();
        }
    }
    public static void main(String[] args) {
        String url = "jdbc:sqlite:bank.db";
        try {
            TransactionDemo demo = new TransactionDemo(url);
            demo.transferMoney(1, 2, 100);

            demo.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
