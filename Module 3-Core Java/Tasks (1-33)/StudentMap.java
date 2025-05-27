import java.util.HashMap;
import java.util.Scanner;
public class StudentMap{
    public static void main(String[] args) {
        HashMap<Integer, String> studentMap = new HashMap<>();
        Scanner scanner = new Scanner(System.in);
        String choice;
        System.out.println("Add student entries (ID and Name). Type 'done' to stop.");
        while (true) {
            System.out.print("Enter Student ID (or 'done'): ");
            choice = scanner.nextLine();
            if (choice.equalsIgnoreCase("done")) 
            break;
            try {
                int id = Integer.parseInt(choice);

                System.out.print("Enter Student Name: ");
                String name = scanner.nextLine();

                studentMap.put(id, name);
            } catch (NumberFormatException e) {
                System.out.println("Please enter a valid integer ID.");
            }
        }
        System.out.print("\nEnter a Student ID to retrieve the name: ");
        try {
            int searchId = Integer.parseInt(scanner.nextLine());

            if (studentMap.containsKey(searchId)) {
                System.out.println("Student Name: " + studentMap.get(searchId));
            } else {
                System.out.println("No student found with ID: " + searchId);
            }
        } catch (NumberFormatException e) {
            System.out.println("Invalid ID format.");
        }
        scanner.close();
    }
}
