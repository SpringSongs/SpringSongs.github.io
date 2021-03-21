

队列也是一种线性表数据结构。后进者后出，先进者前出，这就是典型的“队列”。

![什么是队列](/attachment/DataStructureArithmetic/Queue/1.jpg)

队列基本的操作是两个：入队，放一个数据到队列尾部；出队，从队列头部取一个元素。

队列的应用也非常广泛，特别是一些具有某些额外特性的队列，比如循环队列、阻塞队列、并发队列。

实际上，栈既可以用数组来实现，也可以用链表来实现。用数组实现的队列，我们叫作顺序队列，用链表实现的队列，我们叫作链式队列。

下面是队列的代码学习:
```java
public class MyQueue {
	private int[] arr;
	private int elements;
	private int front;
	private int end;

	public MyQueue(int capacity) {
		arr = new int[capacity];
		this.elements = capacity;
	}

	private boolean insert(int value) {
		if (end == elements) {
			if (front == 0)
				return false;
			for (int i = front; i < end; i++) {
				arr[i - front] = arr[i];
			}
			end = end - front;
			front = 0;
		}
		arr[end++] = value;
		return true;
	}

	private int remove() {
		if (end == front)
			return -1;
		int vlaue = arr[front++];
		return vlaue;
	}

	public static void main(String[] args) {
		MyQueue myQueue = new MyQueue(4);
		myQueue.insert(10);
		myQueue.insert(11);
		myQueue.insert(12);
		myQueue.insert(13);

		System.out.print(myQueue.remove());
		System.out.print(myQueue.remove());
		System.out.print(myQueue.remove());
		System.out.print(myQueue.remove());
		System.out.print(myQueue.insert(14));
		System.out.print(myQueue.insert(15));
		System.out.print(myQueue.remove());
		System.out.print(myQueue.remove());
		System.out.print(myQueue.remove());
	}
}

```

