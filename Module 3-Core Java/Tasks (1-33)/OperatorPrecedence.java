public class OperatorPrecedence {
    public static void main(String[] args) {
        int result1 = 10 + 5 * 2;
        int result2 = (10 + 5) * 2;
        int result3 = 100 / 10 + 5 * 2;
        int result4 = 100 / (10 + 5 * 2);

        System.out.println("Result 1 (10 + 5 * 2): " + result1); // 10 + (5*2) = 20
        System.out.println("Result 2 ((10 + 5) * 2): " + result2); // (10+5) * 2 = 30
        System.out.println("Result 3 (100 / 10 + 5 * 2): " + result3); // (100/10) + (5*2) = 10 + 10 = 20
        System.out.println("Result 4 (100 / (10 + 5 * 2)): " + result4); // 100 / (10 + 10) = 100 / 20 = 5
    }
}