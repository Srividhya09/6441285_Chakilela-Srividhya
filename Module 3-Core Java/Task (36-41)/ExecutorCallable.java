import java.util.concurrent.*;
import java.util.*;
public class Executor{
    static class MyTask implements Callable<String> {
        private final int taskId;

        public MyTask(int taskId) {
            this.taskId = taskId;
        }
        @Override
        public String call() throws Exception {
            Thread.sleep(1000); // Simulate delay
            return "Task " + taskId + " completed by " + Thread.currentThread().getName();
        }
    }
    public static void ExecutorCallable(String[] args) throws InterruptedException, ExecutionException {
        ExecutorService executor = Executors.newFixedThreadPool(3);
        List<Future<String>> results = new ArrayList<>();
        for (int i = 1; i <= 5; i++) {
            Callable<String> task = new MyTask(i);
            Future<String> future = executor.submit(task);
            results.add(future);
        }
        for (Future<String> future : results) {
            System.out.println(future.get()); 
        }
        executor.shutdown();
    }
}
