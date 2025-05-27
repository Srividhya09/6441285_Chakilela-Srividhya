public class TypeCasting{
    public static void main(String[] args) {

        double myDouble = 9.78;
        int castedInt = (int) myDouble;
        System.out.println("Double value: " + myDouble);
        System.out.println("After casting to int: " + castedInt);

        int myInt = 42;

        double castedDouble = (double) myInt;
        System.out.println("Int value: " + myInt);
        System.out.println("After casting to double: " + castedDouble);
    }
}

