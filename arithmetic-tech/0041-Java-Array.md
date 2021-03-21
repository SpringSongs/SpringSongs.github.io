


数组（Array）是一种线性表数据结构。它会申请一组连续的内存空间，来存储一组具有相同类型的数据。

![数组内存分配](/attachment/DataStructureArithmetic/Array/1.jpg)

计算机会给每个内存单元分配一个地址，计算机通过地址来访问内存中的数据。当计算机需要随机访问数组中的某个元素时，它会首先通过下面的寻址公式，计算出该元素存储的内存地址：

```java
a[i]_address = base_address + i * data_type_size
```

数组支持随机访问，根据下标随机访问的时间复杂度为 O(1)。排好序的数组，用二分查找，时间复杂度是 O(logn).

数组复杂的插入与删除,数组在后面插入一个元素时间的复杂度为O(1),如果在数组前面插入元素最大时间的复杂度为
O(N),因为需要把每一位元素都需要往后移一位。数组在后面删除一个元素时间的复杂度为O(1)，如果在数组删除元素最大时间的复杂度为
O(N),因为需要把每一位元素都需要往前移一位。

下面是数组的练习
```java
public class MyArrayList {
	private int[] arr;
	private int elements;
	private int n = 0;

	// 构造器
	public MyArrayList(int capacity) {
		arr = new int[capacity];
		this.n = capacity;
	}

	// 插入数据
	private boolean insert(int value) {
		if (elements == n)
			throw new ArrayIndexOutOfBoundsException();
		arr[elements] = value;
		++elements;
		return true;
	}

	// 查找数据
	private long find(int index) {
		if (index < 0 || index >= elements)
			throw new ArrayIndexOutOfBoundsException();
		return arr[index];
	}

	// 移除数据
	private boolean remove(int index) {
		if (index < 0 || index > elements) {
			throw new ArrayIndexOutOfBoundsException();
		}
		for (int i = index; i < elements - 1; i++) {
			arr[i] = arr[i + 1];
		}
		--elements;
		return true;
	}

	// 插入数据
	private boolean insert(int index, int value) {
		if (elements == n)
			throw new ArrayIndexOutOfBoundsException();
		if (index < 0 || index > elements) {
			throw new ArrayIndexOutOfBoundsException();
		}
		for (int i = elements; i > index; --i) {
			arr[i] = arr[i - 1];
		}
		arr[index] = value;
		++elements;
		return true;
	}

	// 打印数据
	private void printAll() {
		for (int i = 0; i < elements; i++) {
			System.out.print(arr[i] + " ");
		}
	}

	public static void main(String[] args) {
		MyArrayList arr = new MyArrayList(10);
		arr.insert(10);
		arr.insert(12);
		arr.insert(13);
		arr.insert(14);
		arr.insert(15);
		arr.insert(16);
		arr.insert(17);
		arr.insert(18);
		arr.insert(19);
		arr.insert(20);
		arr.remove(0);
		arr.insert(1, 16);
		arr.printAll();
	}
}
```