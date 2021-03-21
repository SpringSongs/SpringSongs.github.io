


数组（Array）是一种线性表数据结构。后进者先出，先进者后出，这就是典型的“栈”结构。

![什么是栈](/attachment/DataStructureArithmetic/Stack/1.jpg)

栈是一种“操作受限”的线性表，只允许在一端插入和删除数据。

当某个数据集合只涉及在一端插入和删除数据，并且满足后进先出、先进后出的特性，我们就应该首选“栈”这种数据结构。

实际上，栈既可以用数组来实现，也可以用链表来实现。用数组实现的栈，我们叫作顺序栈，用链表实现的栈，我们叫作链式栈。

把一个数据压入栈的时间复杂度为 O(1),如果是动态扩容的栈最大的时间复杂度是为 O(N),因为当数组内存空间不够
的时侯，需要申请一块更大的内存，然后把当前栈内的数据复杂到新的内存空间之内。

下面用数组来实现栈:
```java
public class MyArrayStack {
	private int[] arr;
	private int elements = -1;
	private int n = 0;

	public MyArrayStack(int capacity) {
		arr = new int[capacity];
		this.n = capacity;
	}

	private boolean push(int value) {
		if (elements + 1 == n)
			return false;
		arr[elements + 1] = value;
		++elements;
		return true;
	}

	private int pop() {
		if (elements == -1)
			throw new ArrayIndexOutOfBoundsException();
		return arr[elements--];
	}

	private boolean isEmpty() {
		if (elements == -1)
			return true;
		else
			return false;
	}
	
	

	public static void main(String[] args) {
		MyArrayStack myArrayStack=new MyArrayStack(10);
		myArrayStack.push(0);
		myArrayStack.push(1);
		myArrayStack.push(2);
		myArrayStack.push(3);
		myArrayStack.push(4);
		myArrayStack.push(5);
		myArrayStack.push(6);
		myArrayStack.push(7);
		myArrayStack.push(8);
		myArrayStack.push(9);
		System.out.print(myArrayStack.push(10));
	}
}

```