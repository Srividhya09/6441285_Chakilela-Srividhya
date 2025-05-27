import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
public class StreamFilter {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(5, 12, 7, 18, 9, 24, 3, 16);

        List<Integer> evenNumbers = numbers.stream()
                                           .filter(n -> n % 2 == 0)
                                           .collect(Collectors.toList());
        System.out.println("Even numbers: " + evenNumbers);
    }
}