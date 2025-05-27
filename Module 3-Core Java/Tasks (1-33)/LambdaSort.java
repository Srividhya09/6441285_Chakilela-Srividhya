import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
public class LambdaSort {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();
        names.add("Nirudh");
        names.add("Anita");
        names.add("Bhagat");
        names.add("Zara");
        names.add("Rohan");
        Collections.sort(names, (a, b) -> a.compareToIgnoreCase(b));
        System.out.println("Sorted list:");
        for (String name : names) {
            System.out.println(name);
        }
    }
}
