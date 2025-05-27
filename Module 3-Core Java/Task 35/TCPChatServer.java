import java.io.*;
import java.net.*;
public class TCPChatServer {
    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(5000)) {
            System.out.println("Server started. Waiting for client...");
            Socket socket = serverSocket.accept();
            System.out.println("Client connected.");
            BufferedReader inputFromClient = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            BufferedWriter outputToClient = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
            BufferedReader keyboard = new BufferedReader(new InputStreamReader(System.in));
            String clientMsg, serverMsg;

            while (true) {
                clientMsg = inputFromClient.readLine();
                if (clientMsg == null || clientMsg.equalsIgnoreCase("exit")) {
                    System.out.println("Client disconnected.");
                    break;
                }
                System.out.println("Client: " + clientMsg);
                System.out.print("Server: ");
                serverMsg = keyboard.readLine();
                outputToClient.write(serverMsg);
                outputToClient.newLine();
                outputToClient.flush();

                if (serverMsg.equalsIgnoreCase("exit")) {
                    System.out.println("Server exiting...");
                    break;
                }
            }
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
