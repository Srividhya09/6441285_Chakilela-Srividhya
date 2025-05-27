public class DecompileDemo {
    public String greet(String name) {
        return "Hello, " + name + "!";
    }
    public static void main(String[] args) {
        DecompileDemo demo = new DecompileDemo();
        System.out.println(demo.greet("World"));
    }
}
