public class Threads implements Runnable {
    private String threadName;

    public Threads(String name) {
        this.threadName = name;
    }
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(threadName + " is running - iteration " + i);
            try {
                Thread.sleep(500); // pause for 500ms for clarity in output
            } catch (InterruptedException e) {
                System.out.println(threadName + " interrupted.");
            }
        }
    }

    public static void main(String[] args) {
        Threads task1 = new Threads("Thread 1");
        Threads task2 = new Threads("Thread 2");
        Thread t1 = new Thread(task1);
        Thread t2 = new Thread(task2);
        t1.start();
        t2.start();
    }
}
