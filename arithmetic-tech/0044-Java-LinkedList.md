

数组需要一块连续的内存空间来存储，对内存的要求比较高。如果我们申请一个大空间的数组，当内存中没有连续的、足够大的存储空间时，即便内存的剩余总可用空间大于所申请的内存空间，仍然会申请失败。

而链表恰恰相反，它并不需要一块连续的内存空间，它通过“指针”将一组零散的内存块串联起来使用，所以如果我们申请的是同样空间大小的链表，根本不会有问题。

链表通过指针将一组零散的内存块串联在一起。其中，我们把内存块称为链表的“结点”。为了将所有的结点串起来，每个链表的结点除了存储数据之外，还需要记录链上的下一个结点的地址。

与数组一样，链表也支持数据的查找、插入和删除操作。在链接中插入与删除元素所需要的时间复杂度为O(1)，随机访问的时间复杂度为O(N)。

经常用来检查链表是否正确的边界4个边界条件：

1.如果链表为空时，代码是否能正常工作？

2.如果链表只包含一个节点时，代码是否能正常工作？

3.如果链表只包含两个节点时，代码是否能正常工作？

4.代码逻辑在处理头尾节点时是否能正常工作？

## 带头链表
![带头链表双端链表双向链表](/attachment/DataStructureArithmetic/LinkedList/1.jpg)


下面是代码练习:
```java
public class MyLinkedList<T> {
	private int elements;
	private Node node;
	private int count;

	public MyLinkedList(int capacity) {
		this.node = new Node<>();
		this.count = capacity;
	}

	private boolean insertNode(T data) {
		if (this.elements==count)return false;
		Node next = this.node.getNext();
		Node newNode = new Node(data, next);
		this.node.setNext(newNode);
		this.elements++;
		return true;
	}

	private boolean deleteLastNode() {
		Node preNode = this.node;
		if (preNode.getNext() == null)
			return false;
		while (preNode.getNext().getNext() != null) {
			preNode = preNode.getNext();
		}
		preNode.setNext(null);
		this.elements--;
		return true;
	}

	private Node findByData(T data) {
		Node preNode = this.node;
		while (preNode.getNext()!=null) {
			if (data.equals(preNode.getNext().getData())){
				return preNode.getNext();
			}
			preNode = preNode.getNext();
		}
		return null;
	}
	
	private void displayAll() {
		Node preNode=this.node.getNext();
		while(preNode!=null) {
			System.out.print(preNode.getData()+",");
			preNode=preNode.getNext();
		}
	}

	private static class Node<T> {
		private T data;
		private Node next;

		public Node() {
			super();
		}

		public Node(T data, Node next) {
			this.data = data;
			this.next = next;
		}

		public Node getNext() {
			return next;
		}

		public void setNext(Node next) {
			this.next = next;
		}

		public T getData() {
			return data;
		}
	}
	
	public static void main(String[] args) {
		MyLinkedList<Integer> myLinkedList=new MyLinkedList<Integer>(4);
		System.out.println(myLinkedList.insertNode(1));
		System.out.println(myLinkedList.insertNode(2));
		System.out.println(myLinkedList.insertNode(3));
		System.out.println(myLinkedList.insertNode(4));
		//myLinkedList.deleteLastNode();
		//myLinkedList.deleteLastNode();
		myLinkedList.displayAll();
	}
}
```

## 双端链表

![带头链表双端链表双向链表](/attachment/DataStructureArithmetic/LinkedList/2.jpg)

双端链表与单链表十分相似，不同的是它新增一个对尾结点的引用。双端链表不是双向链表。

下面是代码练习:
```java
public class MyFirstLastLinkedList {

	private int elements;
	private int count;
	private Node first;
	private Node last;

	public MyFirstLastLinkedList(int capacity) {
		this.elements = capacity;
	}

	private boolean insertFirst(int value) {
		if (count== elements)
			return false;
		Node newNode = new Node(value, null);
		if (first == null) {
			last = newNode;
		}
		newNode.next = first;
		first = newNode;
		count++;
		return true;
	}

	private boolean insertLast(int value) {
		if (count== elements)
			return false;
		Node newNode = new Node(value, null);
		if (first == null) {
			first = newNode;
		} else {
			last.next = newNode;
		}
		last = newNode;
		count++;
		return true;
	}

	private boolean deleteFirst() {
		if (first == null) {
			return false;
		}
		if (first.next == null) {
			last = null;
			first = null;
		} else {
			first = first.next;
		}
		count--;
		return true;
	}

	private void displayAll() {
		Node preNode = first;
		while (preNode != null) {
			System.out.print(preNode.data + ",");
			preNode = preNode.next;
		}
	}

	public static class Node {
		private int data;
		private Node next;

		public Node(int data, Node next) {
			super();
			this.data = data;
			this.next = next;
		};
	}
	
	public static void main(String[] args) {
		MyFirstLastLinkedList myFirstLastLinkedList=new MyFirstLastLinkedList(6);
		myFirstLastLinkedList.insertLast(10);
		myFirstLastLinkedList.insertLast(11);
		myFirstLastLinkedList.insertLast(12);
		//myFirstLastLinkedList.displayAll();
		myFirstLastLinkedList.insertFirst(1);
		myFirstLastLinkedList.insertFirst(2);
		myFirstLastLinkedList.insertFirst(3);
		myFirstLastLinkedList.deleteFirst();
		myFirstLastLinkedList.deleteFirst();
		myFirstLastLinkedList.deleteFirst();
		myFirstLastLinkedList.deleteFirst();
		myFirstLastLinkedList.deleteFirst();
		myFirstLastLinkedList.deleteFirst();
		myFirstLastLinkedList.deleteFirst();
		myFirstLastLinkedList.insertLast(10);
		myFirstLastLinkedList.insertLast(11);
		myFirstLastLinkedList.insertLast(12);
		myFirstLastLinkedList.displayAll();
	}
}
```