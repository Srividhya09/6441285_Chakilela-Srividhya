import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
record Person(String name, int age) {}

public class RecordDemo {
    public static void main(String[] args) {
        Person p1 = new Person("Sri", 25);
        Person p2 = new Person("Vidhya", 17);
        Person p3 = new Person("Sreevani", 30);
        System.out.println(p1);
        System.out.println(p2);
        System.out.println(p3);
        List<Person> people = Arrays.asList(p1, p2, p3);
        List<Person> adults = people.stream()
                                    .filter(p -> p.age() >= 18)
                                    .collect(Collectors.toList());

        System.out.println("Adults:");
        adults.forEach(System.out::println);
    }
}
