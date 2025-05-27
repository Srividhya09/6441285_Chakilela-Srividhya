import java.lang.reflect.Method;
public class ReflectionDemo {
    public void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
    public int add(int a, int b) {
        return a + b;
    }
    public static void main(String[] args) {
        try {
            Class<?> clazz = Class.forName("ReflectionDemo");
            Object obj = clazz.getDeclaredConstructor().newInstance();
            Method[] methods = clazz.getDeclaredMethods();
            for (Method method : methods) {
                System.out.print("Method: " + method.getName() + " | Parameters: ");
                Class<?>[] paramTypes = method.getParameterTypes();
                for (Class<?> param : paramTypes) {
                    System.out.print(param.getSimpleName() + " ");
                }
                System.out.println();
            }
            Method greetMethod = clazz.getDeclaredMethod("greet", String.class);
            greetMethod.invoke(obj, "Reflection");
            Method addMethod = clazz.getDeclaredMethod("add", int.class, int.class);
            Object result = addMethod.invoke(obj, 10, 20);
            System.out.println("add(10, 20) result: " + result);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
