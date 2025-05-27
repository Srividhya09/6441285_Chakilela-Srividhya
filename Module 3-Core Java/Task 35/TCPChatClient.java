import java.io.*;
import java.net.*;
public class TCPChatClient {
    public static void main(String[] args) {
        try (Socket socket = new Socket("localhost", 5000)) {
            System.out.println("Connected to server.");
            BufferedReader inputFromServer = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            BufferedWriter outputToServer = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
            BufferedReader keyboard = new BufferedReader(new InputStreamReader(System.in));
            String serverMsg, clientMsg;
            while (true) {
                System.out.print("Client: ");
                clientMsg = keyboard.readLine();
                outputToServer.write(clientMsg);
                outputToServer.newLine();
                outputToServer.flush();
                if (clientMsg.equalsIgnoreCase("exit")) {
                    System.out.println("Client exiting...");
                    break;
                }

                serverMsg = inputFromServer.readLine();
                if (serverMsg == null || serverMsg.equalsIgnoreCase("exit")) {
                    System.out.println("Server disconnected.");
                    break;
                }
                System.out.println("Server: " + serverMsg);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
