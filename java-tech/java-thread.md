## 创建线程的多种方式
### 继承Thread类创建线程
```java
public class ThreadExtend extends Thread{
    @Override
    public void run() {
        System.out.println("用继承Thread方式实现了线程！");
    }

    public static void main(String[] arg) {
        Thread thread = new Thread(new ThreadExtend());
        thread.start();
    }

}
```
### 实现Runnable接口创建线程
```java
public class ThreadRunable implements Runnable {

    @Override
    public void run() {
        System.out.println("用实现Runnable接口方式实现了线程！");
    }

    public static void main(String[] arg) {
        Thread thread = new Thread(new ThreadRunable());
        thread.start();
    }

}
```
### 通过Callable和FutureTask创建线程
### 通过线程池创建线程