

## 一、散列表的由来？
1. 散列表来源于数组，它借助散列函数对数组这种数据结构进行扩展，利用的是数组支持按照下标随机访问元素的特性。
2. 需要存储在散列表中的数据我们称为键，将键转化为数组下标的方法称为散列函数，散列函数的计算结果称为散列值。
3. 将数据存储在散列值对应的数组下标位置。

## 二、如何设计散列函数？
总结3点设计散列函数的基本要求

1. 散列函数计算得到的散列值是一个非负整数。
2. 若key1=key2，则hash(key1)=hash(key2)
3. 若key≠key2，则hash(key1)≠hash(key2)

正是由于第3点要求，所以产生了几乎无法避免的散列冲突问题。
## 二、哈希化
1. 直接将关键字做为索引
2. 将单词转换为索引
   - 1. 将字母转换成 ASCII码,然后进行相加
   - 2. 幂的连乘
   - 3. 压缩可选值
## 三、散列冲突的解放方法？
1. 常用的散列冲突解决方法有2类：开放寻址法（open addressing）和链表法（chaining）
2. 开放寻址法
	- 1. 核心思想：如果出现散列冲突，就重新探测一个空闲位置，将其插入。
	- 2. 线性探测法（Linear Probing）：
		- 1. 插入数据：当我们往散列表中插入数据时，如果某个数据经过散列函数之后，存储的位置已经被占用了，我们就从当前位置开始，依次往后查找，看是否有空闲位置，直到找到为止。
		- 2. 查找数据：我们通过散列函数求出要查找元素的键值对应的散列值，然后比较数组中下标为散列值的元素和要查找的元素是否相等，若相等，则说明就是我们要查找的元素；否则，就顺序往后依次查找。如果遍历到数组的空闲位置还未找到，就说明要查找的元素并没有在散列表中。
		- 3. 删除数据：为了不让查找算法失效，可以将删除的元素特殊标记为deleted，当线性探测查找的时候，遇到标记为deleted的空间，并不是停下来，而是继续往下探测。
结论：最坏时间复杂度为O(n)
	- 3. 二次探测（Quadratic probing）：线性探测每次探测的步长为1，即在数组中一个一个探测，而二次探测的步长变为原来的平方。
	- 4. 双重散列（Double hashing）：使用一组散列函数，直到找到空闲位置为止。
	- 5. 线性探测法的性能描述：
用“装载因子”来表示空位多少，公式：散列表装载因子=填入表中的个数/散列表的长度。
装载因子越大，说明空闲位置越少，冲突越多，散列表的性能会下降。
3. 链表法（更常用）
	- 插入数据：当插入的时候，我们需要通过散列函数计算出对应的散列槽位，将其插入到对应的链表中即可，所以插入的时间复杂度为O(1)。
	- 查找或删除数据：当查找、删除一个元素时，通过散列函数计算对应的槽，然后遍历链表查找或删除。对于散列比较均匀的散列函数，链表的节点个数k=n/m，其中n表示散列表中数据的个数，m表示散列表中槽的个数，所以是时间复杂度为O(k)。

散列表练习
```java
public class HashTable {

	private Info[] infos;

	public HashTable() {
		infos = new Info[100];
	}

	public void insert(Info info) {
		infos[info.getKey()] = info;
	}

	public Info find(int key) {
		return infos[key];
	}

	public static void main(String[] args) {
		Info info1 = new Info(1, "陈三");
		Info info2 = new Info(2, "陈四");
		HashTable hashTable=new HashTable();
		hashTable.insert(info1);
		hashTable.insert(info2);
		System.out.println(hashTable.find(1).getName());
		System.out.println(hashTable.find(2).getName());
	}

}

class Info {
	private int key;
	private String name;

	public Info(int key, String name) {
		this.key = key;
		this.name = name;
	}

	public int getKey() {
		return key;
	}

	public void setKey(int key) {
		this.key = key;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
```


添加哈希练习
```java
public class HashTable {

	private Info[] infos;

	public HashTable() {
		infos = new Info[100];
	}

	public void insert(Info info) {
		infos[info.getKey()] = info;
	}

	public Info find(int key) {
		return infos[key];
	}

	public int hashCode(String key) {
		int hashVal = 0;
		for (int i = key.length() - 1; i >= 0; i--) {
			int letter = key.charAt(i) - 96;
			hashVal += letter;
		}
		return hashVal;
	}
	
	public static void main(String[] args) {
		Info info1 = new Info("aaa", "陈三");
		Info info2 = new Info("bbb", "陈四");
		HashTableHash hashTable = new HashTableHash();
		hashTable.insert(info1);
		hashTable.insert(info2);
		System.out.println(hashTable.find("aaa").getName());
		System.out.println(hashTable.find("bbb").getName());
	}

}

class Info {
	private String key;
	private String name;
	
		public Info(String key, String name) {
			this.key = key;
			this.name = name;
		}
	
		public String getKey() {
			return key;
		}
	
		public void setKey(String key) {
			this.key = key;
		}
	
		public String getName() {
			return name;
		}
	
		public void setName(String name) {
			this.name = name;
		}

}
```

开放地址法
```java
public class HashTable {

	private Info[] infos;

	public HashTable() {
		infos = new Info[100];
	}

	public void insert(Info info) {
		int hashValue = hashCode(info.getKey());
		while (infos[hashValue] != null && infos[hashValue].getName() != null) {
					++hashValue;
					hashValue %= infos.length;
		}
		infos[hashCode(info.getKey())] = info;
	}

	public Info find(int key) {
		int hashValue = hashCode(key);
		while (infos[hashValue] != null) {
					if (infos[hashValue].getKey().equals(key)) {
						return infos[hashValue];
					}
					++hashValue;
					hashValue %= infos.length;
		}
		return null;
	}

	public int hashCode(String key) {
		int hashVal = 0;
		for (int i = key.length() - 1; i >= 0; i--) {
			int letter = key.charAt(i) - 96;
			hashVal += letter;
		}
		return hashVal;
	}
	
	public static void main(String[] args) {
		Info info1 = new Info("aaa", "陈三");
		Info info2 = new Info("bbb", "陈四");
		HashTableHash hashTable = new HashTableHash();
		hashTable.insert(info1);
		hashTable.insert(info2);
		System.out.println(hashTable.find("aaa").getName());
		System.out.println(hashTable.find("bbb").getName());
	}

}

class Info {
	private String key;
	private String name;
	
		public Info(String key, String name) {
			this.key = key;
			this.name = name;
		}
	
		public String getKey() {
			return key;
		}
	
		public void setKey(String key) {
			this.key = key;
		}
	
		public String getName() {
			return name;
		}
	
		public void setName(String name) {
			this.name = name;
		}

}
```

链表练习
```java
public class Info {
	private String key;
	private String name;
	public String getKey() {
		return key;
	}
	public void setKey(String key) {
		this.key = key;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Info(String key, String name) {
		super();
		this.key = key;
		this.name = name;
	}
	
}

public class MyLinkList{
	private Node node;

	public MyLinkList() {
		this.node = new Node<>();
	}

	public void insert(Info info) {
		Node<?> node = this.node.getNext();
		Node newNode = new Node(info, node);
		this.node.setNext(newNode);
	}

	public Node find(String key) {
		Node currentNode = this.node;
		while (currentNode.next != null) {
			Info info = (Info) currentNode.next.data;
			if (info.getKey().equals(key)) {
				return currentNode.next;
			}
		}
		return null;
	}

	static class Node<T> {
		private T data;
		private Node next;

		public T getData() {
			return data;
		}

		public void setData(T data) {
			this.data = data;
		}

		public Node getNext() {
			return next;
		}

		public void setNext(Node next) {
			this.next = next;
		}

		public Node() {

		}

		public Node(T data, Node next) {
			super();
			this.data = data;
			this.next = next;
		}
	}
}

public class HashTable {

	private MyLinkList[] infoList;

	public HashTable() {
		infoList = new MyLinkList[100];
	}

	public void insert(Info info) {
		int hashValue = hashCode(info.getKey());
		if (infoList[hashValue] == null) {
			infoList[hashValue] = new MyLinkList();
		}
		infoList[hashValue].insert(info);
	}

	public Info find(String key) {
		int hashValue = hashCode(key);
		Info info = (Info) infoList[hashValue].find(key).getData();
		if (null != info)
			return info;
		else
			return null;

	}

	public int hashCode(String key) {
		int hashVal = 0;
		for (int i = key.length() - 1; i >= 0; i--) {
			int letter = key.charAt(i) - 96;
			hashVal += letter;
		}
		return hashVal;
	}
	
	public static void main(String[] args) {
		Info info1 = new Info("aaa", "陈三");
		Info info2 = new Info("bbb", "陈四");
		HashTable hashTable = new HashTable();
		hashTable.insert(info1);
		hashTable.insert(info2);
		System.out.println(hashTable.find("aaa").getName());
		System.out.println(hashTable.find("bbb").getName());
		
	}
}

```