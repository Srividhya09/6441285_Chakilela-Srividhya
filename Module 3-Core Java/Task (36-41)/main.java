public class VirtualThreads{
    public static void main(String[] args) throws InterruptedException {
        long start = System.currentTimeMillis();
        int totalThreads = 100_000;
        for (int i = 0; i < totalThreads; i++) {
            Thread.startVirtualThread(() -> {
                System.out.println("Hello from virtual thread: " + Thread.currentThread());
            });
        }
        Thread.sleep(3000);
        long end = System.currentTimeMillis();
        System.out.println("Time taken using virtual threads: " + (end - start) + " ms");
    }
}
