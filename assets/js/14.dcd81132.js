(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{368:function(t,s,n){"use strict";n.r(s);var e=n(42),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("数组需要一块连续的内存空间来存储，对内存的要求比较高。如果我们申请一个大空间的数组，当内存中没有连续的、足够大的存储空间时，即便内存的剩余总可用空间大于所申请的内存空间，仍然会申请失败。")]),t._v(" "),n("p",[t._v("而链表恰恰相反，它并不需要一块连续的内存空间，它通过“指针”将一组零散的内存块串联起来使用，所以如果我们申请的是同样空间大小的链表，根本不会有问题。")]),t._v(" "),n("p",[t._v("链表通过指针将一组零散的内存块串联在一起。其中，我们把内存块称为链表的“结点”。为了将所有的结点串起来，每个链表的结点除了存储数据之外，还需要记录链上的下一个结点的地址。")]),t._v(" "),n("p",[t._v("与数组一样，链表也支持数据的查找、插入和删除操作。在链接中插入与删除元素所需要的时间复杂度为O(1)，随机访问的时间复杂度为O(N)。")]),t._v(" "),n("p",[t._v("经常用来检查链表是否正确的边界4个边界条件：")]),t._v(" "),n("p",[t._v("1.如果链表为空时，代码是否能正常工作？")]),t._v(" "),n("p",[t._v("2.如果链表只包含一个节点时，代码是否能正常工作？")]),t._v(" "),n("p",[t._v("3.如果链表只包含两个节点时，代码是否能正常工作？")]),t._v(" "),n("p",[t._v("4.代码逻辑在处理头尾节点时是否能正常工作？")]),t._v(" "),n("h2",{attrs:{id:"带头链表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#带头链表"}},[t._v("#")]),t._v(" 带头链表")]),t._v(" "),n("p",[n("img",{attrs:{src:"/attachment/DataStructureArithmetic/LinkedList/1.jpg",alt:"带头链表双端链表双向链表"}})]),t._v(" "),n("p",[t._v("下面是代码练习:")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('public class MyLinkedList<T> {\n\tprivate int elements;\n\tprivate Node node;\n\tprivate int count;\n\n\tpublic MyLinkedList(int capacity) {\n\t\tthis.node = new Node<>();\n\t\tthis.count = capacity;\n\t}\n\n\tprivate boolean insertNode(T data) {\n\t\tif (this.elements==count)return false;\n\t\tNode next = this.node.getNext();\n\t\tNode newNode = new Node(data, next);\n\t\tthis.node.setNext(newNode);\n\t\tthis.elements++;\n\t\treturn true;\n\t}\n\n\tprivate boolean deleteLastNode() {\n\t\tNode preNode = this.node;\n\t\tif (preNode.getNext() == null)\n\t\t\treturn false;\n\t\twhile (preNode.getNext().getNext() != null) {\n\t\t\tpreNode = preNode.getNext();\n\t\t}\n\t\tpreNode.setNext(null);\n\t\tthis.elements--;\n\t\treturn true;\n\t}\n\n\tprivate Node findByData(T data) {\n\t\tNode preNode = this.node;\n\t\twhile (preNode.getNext()!=null) {\n\t\t\tif (data.equals(preNode.getNext().getData())){\n\t\t\t\treturn preNode.getNext();\n\t\t\t}\n\t\t\tpreNode = preNode.getNext();\n\t\t}\n\t\treturn null;\n\t}\n\t\n\tprivate void displayAll() {\n\t\tNode preNode=this.node.getNext();\n\t\twhile(preNode!=null) {\n\t\t\tSystem.out.print(preNode.getData()+",");\n\t\t\tpreNode=preNode.getNext();\n\t\t}\n\t}\n\n\tprivate static class Node<T> {\n\t\tprivate T data;\n\t\tprivate Node next;\n\n\t\tpublic Node() {\n\t\t\tsuper();\n\t\t}\n\n\t\tpublic Node(T data, Node next) {\n\t\t\tthis.data = data;\n\t\t\tthis.next = next;\n\t\t}\n\n\t\tpublic Node getNext() {\n\t\t\treturn next;\n\t\t}\n\n\t\tpublic void setNext(Node next) {\n\t\t\tthis.next = next;\n\t\t}\n\n\t\tpublic T getData() {\n\t\t\treturn data;\n\t\t}\n\t}\n\t\n\tpublic static void main(String[] args) {\n\t\tMyLinkedList<Integer> myLinkedList=new MyLinkedList<Integer>(4);\n\t\tSystem.out.println(myLinkedList.insertNode(1));\n\t\tSystem.out.println(myLinkedList.insertNode(2));\n\t\tSystem.out.println(myLinkedList.insertNode(3));\n\t\tSystem.out.println(myLinkedList.insertNode(4));\n\t\t//myLinkedList.deleteLastNode();\n\t\t//myLinkedList.deleteLastNode();\n\t\tmyLinkedList.displayAll();\n\t}\n}\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br"),n("span",{staticClass:"line-number"},[t._v("44")]),n("br"),n("span",{staticClass:"line-number"},[t._v("45")]),n("br"),n("span",{staticClass:"line-number"},[t._v("46")]),n("br"),n("span",{staticClass:"line-number"},[t._v("47")]),n("br"),n("span",{staticClass:"line-number"},[t._v("48")]),n("br"),n("span",{staticClass:"line-number"},[t._v("49")]),n("br"),n("span",{staticClass:"line-number"},[t._v("50")]),n("br"),n("span",{staticClass:"line-number"},[t._v("51")]),n("br"),n("span",{staticClass:"line-number"},[t._v("52")]),n("br"),n("span",{staticClass:"line-number"},[t._v("53")]),n("br"),n("span",{staticClass:"line-number"},[t._v("54")]),n("br"),n("span",{staticClass:"line-number"},[t._v("55")]),n("br"),n("span",{staticClass:"line-number"},[t._v("56")]),n("br"),n("span",{staticClass:"line-number"},[t._v("57")]),n("br"),n("span",{staticClass:"line-number"},[t._v("58")]),n("br"),n("span",{staticClass:"line-number"},[t._v("59")]),n("br"),n("span",{staticClass:"line-number"},[t._v("60")]),n("br"),n("span",{staticClass:"line-number"},[t._v("61")]),n("br"),n("span",{staticClass:"line-number"},[t._v("62")]),n("br"),n("span",{staticClass:"line-number"},[t._v("63")]),n("br"),n("span",{staticClass:"line-number"},[t._v("64")]),n("br"),n("span",{staticClass:"line-number"},[t._v("65")]),n("br"),n("span",{staticClass:"line-number"},[t._v("66")]),n("br"),n("span",{staticClass:"line-number"},[t._v("67")]),n("br"),n("span",{staticClass:"line-number"},[t._v("68")]),n("br"),n("span",{staticClass:"line-number"},[t._v("69")]),n("br"),n("span",{staticClass:"line-number"},[t._v("70")]),n("br"),n("span",{staticClass:"line-number"},[t._v("71")]),n("br"),n("span",{staticClass:"line-number"},[t._v("72")]),n("br"),n("span",{staticClass:"line-number"},[t._v("73")]),n("br"),n("span",{staticClass:"line-number"},[t._v("74")]),n("br"),n("span",{staticClass:"line-number"},[t._v("75")]),n("br"),n("span",{staticClass:"line-number"},[t._v("76")]),n("br"),n("span",{staticClass:"line-number"},[t._v("77")]),n("br"),n("span",{staticClass:"line-number"},[t._v("78")]),n("br"),n("span",{staticClass:"line-number"},[t._v("79")]),n("br"),n("span",{staticClass:"line-number"},[t._v("80")]),n("br"),n("span",{staticClass:"line-number"},[t._v("81")]),n("br"),n("span",{staticClass:"line-number"},[t._v("82")]),n("br"),n("span",{staticClass:"line-number"},[t._v("83")]),n("br"),n("span",{staticClass:"line-number"},[t._v("84")]),n("br"),n("span",{staticClass:"line-number"},[t._v("85")]),n("br"),n("span",{staticClass:"line-number"},[t._v("86")]),n("br"),n("span",{staticClass:"line-number"},[t._v("87")]),n("br")])]),n("h2",{attrs:{id:"双端链表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#双端链表"}},[t._v("#")]),t._v(" 双端链表")]),t._v(" "),n("p",[n("img",{attrs:{src:"/attachment/DataStructureArithmetic/LinkedList/2.jpg",alt:"带头链表双端链表双向链表"}})]),t._v(" "),n("p",[t._v("双端链表与单链表十分相似，不同的是它新增一个对尾结点的引用。双端链表不是双向链表。")]),t._v(" "),n("p",[t._v("下面是代码练习:")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('public class MyFirstLastLinkedList {\n\n\tprivate int elements;\n\tprivate int count;\n\tprivate Node first;\n\tprivate Node last;\n\n\tpublic MyFirstLastLinkedList(int capacity) {\n\t\tthis.elements = capacity;\n\t}\n\n\tprivate boolean insertFirst(int value) {\n\t\tif (count== elements)\n\t\t\treturn false;\n\t\tNode newNode = new Node(value, null);\n\t\tif (first == null) {\n\t\t\tlast = newNode;\n\t\t}\n\t\tnewNode.next = first;\n\t\tfirst = newNode;\n\t\tcount++;\n\t\treturn true;\n\t}\n\n\tprivate boolean insertLast(int value) {\n\t\tif (count== elements)\n\t\t\treturn false;\n\t\tNode newNode = new Node(value, null);\n\t\tif (first == null) {\n\t\t\tfirst = newNode;\n\t\t} else {\n\t\t\tlast.next = newNode;\n\t\t}\n\t\tlast = newNode;\n\t\tcount++;\n\t\treturn true;\n\t}\n\n\tprivate boolean deleteFirst() {\n\t\tif (first == null) {\n\t\t\treturn false;\n\t\t}\n\t\tif (first.next == null) {\n\t\t\tlast = null;\n\t\t\tfirst = null;\n\t\t} else {\n\t\t\tfirst = first.next;\n\t\t}\n\t\tcount--;\n\t\treturn true;\n\t}\n\n\tprivate void displayAll() {\n\t\tNode preNode = first;\n\t\twhile (preNode != null) {\n\t\t\tSystem.out.print(preNode.data + ",");\n\t\t\tpreNode = preNode.next;\n\t\t}\n\t}\n\n\tpublic static class Node {\n\t\tprivate int data;\n\t\tprivate Node next;\n\n\t\tpublic Node(int data, Node next) {\n\t\t\tsuper();\n\t\t\tthis.data = data;\n\t\t\tthis.next = next;\n\t\t};\n\t}\n\t\n\tpublic static void main(String[] args) {\n\t\tMyFirstLastLinkedList myFirstLastLinkedList=new MyFirstLastLinkedList(6);\n\t\tmyFirstLastLinkedList.insertLast(10);\n\t\tmyFirstLastLinkedList.insertLast(11);\n\t\tmyFirstLastLinkedList.insertLast(12);\n\t\t//myFirstLastLinkedList.displayAll();\n\t\tmyFirstLastLinkedList.insertFirst(1);\n\t\tmyFirstLastLinkedList.insertFirst(2);\n\t\tmyFirstLastLinkedList.insertFirst(3);\n\t\tmyFirstLastLinkedList.deleteFirst();\n\t\tmyFirstLastLinkedList.deleteFirst();\n\t\tmyFirstLastLinkedList.deleteFirst();\n\t\tmyFirstLastLinkedList.deleteFirst();\n\t\tmyFirstLastLinkedList.deleteFirst();\n\t\tmyFirstLastLinkedList.deleteFirst();\n\t\tmyFirstLastLinkedList.deleteFirst();\n\t\tmyFirstLastLinkedList.insertLast(10);\n\t\tmyFirstLastLinkedList.insertLast(11);\n\t\tmyFirstLastLinkedList.insertLast(12);\n\t\tmyFirstLastLinkedList.displayAll();\n\t}\n}\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br"),n("span",{staticClass:"line-number"},[t._v("44")]),n("br"),n("span",{staticClass:"line-number"},[t._v("45")]),n("br"),n("span",{staticClass:"line-number"},[t._v("46")]),n("br"),n("span",{staticClass:"line-number"},[t._v("47")]),n("br"),n("span",{staticClass:"line-number"},[t._v("48")]),n("br"),n("span",{staticClass:"line-number"},[t._v("49")]),n("br"),n("span",{staticClass:"line-number"},[t._v("50")]),n("br"),n("span",{staticClass:"line-number"},[t._v("51")]),n("br"),n("span",{staticClass:"line-number"},[t._v("52")]),n("br"),n("span",{staticClass:"line-number"},[t._v("53")]),n("br"),n("span",{staticClass:"line-number"},[t._v("54")]),n("br"),n("span",{staticClass:"line-number"},[t._v("55")]),n("br"),n("span",{staticClass:"line-number"},[t._v("56")]),n("br"),n("span",{staticClass:"line-number"},[t._v("57")]),n("br"),n("span",{staticClass:"line-number"},[t._v("58")]),n("br"),n("span",{staticClass:"line-number"},[t._v("59")]),n("br"),n("span",{staticClass:"line-number"},[t._v("60")]),n("br"),n("span",{staticClass:"line-number"},[t._v("61")]),n("br"),n("span",{staticClass:"line-number"},[t._v("62")]),n("br"),n("span",{staticClass:"line-number"},[t._v("63")]),n("br"),n("span",{staticClass:"line-number"},[t._v("64")]),n("br"),n("span",{staticClass:"line-number"},[t._v("65")]),n("br"),n("span",{staticClass:"line-number"},[t._v("66")]),n("br"),n("span",{staticClass:"line-number"},[t._v("67")]),n("br"),n("span",{staticClass:"line-number"},[t._v("68")]),n("br"),n("span",{staticClass:"line-number"},[t._v("69")]),n("br"),n("span",{staticClass:"line-number"},[t._v("70")]),n("br"),n("span",{staticClass:"line-number"},[t._v("71")]),n("br"),n("span",{staticClass:"line-number"},[t._v("72")]),n("br"),n("span",{staticClass:"line-number"},[t._v("73")]),n("br"),n("span",{staticClass:"line-number"},[t._v("74")]),n("br"),n("span",{staticClass:"line-number"},[t._v("75")]),n("br"),n("span",{staticClass:"line-number"},[t._v("76")]),n("br"),n("span",{staticClass:"line-number"},[t._v("77")]),n("br"),n("span",{staticClass:"line-number"},[t._v("78")]),n("br"),n("span",{staticClass:"line-number"},[t._v("79")]),n("br"),n("span",{staticClass:"line-number"},[t._v("80")]),n("br"),n("span",{staticClass:"line-number"},[t._v("81")]),n("br"),n("span",{staticClass:"line-number"},[t._v("82")]),n("br"),n("span",{staticClass:"line-number"},[t._v("83")]),n("br"),n("span",{staticClass:"line-number"},[t._v("84")]),n("br"),n("span",{staticClass:"line-number"},[t._v("85")]),n("br"),n("span",{staticClass:"line-number"},[t._v("86")]),n("br"),n("span",{staticClass:"line-number"},[t._v("87")]),n("br"),n("span",{staticClass:"line-number"},[t._v("88")]),n("br"),n("span",{staticClass:"line-number"},[t._v("89")]),n("br"),n("span",{staticClass:"line-number"},[t._v("90")]),n("br"),n("span",{staticClass:"line-number"},[t._v("91")]),n("br"),n("span",{staticClass:"line-number"},[t._v("92")]),n("br"),n("span",{staticClass:"line-number"},[t._v("93")]),n("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);