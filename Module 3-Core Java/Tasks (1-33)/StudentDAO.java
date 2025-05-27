import java.sql.*;
public class StudentDAO {
    private Connection conn;
    public StudentDAO(String dbUrl) throws SQLException, ClassNotFoundException {
        Class.forName("org.sqlite.JDBC");  
        this.conn = DriverManager.getConnection(dbUrl);
    }
    public void insertStudent(String name, String grade) throws SQLException {
        String sql = "INSERT INTO students (name, grade) VALUES (?, ?)";
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, name);
            pstmt.setString(2, grade);
            int rows = pstmt.executeUpdate();
            System.out.println("Inserted " + rows + " row(s)");
        }
    }
    public void updateStudentGrade(int id, String newGrade) throws SQLException {
        String sql = "UPDATE students SET grade = ? WHERE id = ?";
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, newGrade);
            pstmt.setInt(2, id);
            int rows = pstmt.executeUpdate();
            System.out.println("Updated " + rows + " row(s)");
        }
    }
    public void close() throws SQLException {
        if (conn != null && !conn.isClosed()) {
            conn.close();
        }
    }
    public static void main(String[] args) {
        String url = "jdbc:sqlite:students.db";
        try {
            StudentDAO dao = new StudentDAO(url);
            dao.insertStudent("Charlie", "C");
            dao.updateStudentGrade(1, "A+");
            dao.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
