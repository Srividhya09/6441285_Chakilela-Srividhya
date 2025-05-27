public class BytecodeDemo {
    public int square(int x) {
        return x * x;
    }
    public static void main(String[] args) {
        BytecodeDemo obj = new BytecodeDemo();
        System.out.println("Square of 5 is: " + obj.square(5));
    }
}
