

## 一、树
1. 树的常用概念
根节点、叶子节点、父节点、子节点、兄弟节点，还有节点的高度、深度以及层数，树的高度。
2. 概念解释
	- 节点：树中的每个元素称为节点
	- 父子关系：相邻两节点的连线，称为父子关系
	- 根节点：没有父节点的节点
	- 叶子节点：没有子节点的节点
	- 父节点：指向子节点的节点
	- 子节点：被父节点指向的节点
	- 兄弟节点：具有相同父节点的多个节点称为兄弟节点关系
	- 节点的高度：节点到叶子节点的最长路径所包含的边数
	- 节点的深度：根节点到节点的路径所包含的边数
	- 节点的层数：节点的深度+1（根节点的层数是1）
	- 树的高度：等于根节点的高度
	
## 二、二叉树
1.概念
①什么是二叉树？
每个节点最多只有2个子节点的树，这两个节点分别是左子节点和右子节点。

②什么是满二叉树？
有一种二叉树，除了叶子节点外，每个节点都有左右两个子节点，这种二叉树叫做满二叉树。

③什么是完全二叉树？
有一种二叉树，叶子节点都在最底下两层，最后一层叶子节都靠左排列，并且除了最后一层，其他层的节点个数都要达到最大，这种二叉树叫做完全二叉树。

2.完全二叉树的存储
①链式存储
每个节点由3个字段，其中一个存储数据，另外两个是指向左右子节点的指针。我们只要拎住根节点，就可以通过左右子节点的指针，把整棵树都串起来。这种存储方式比较常用，大部分二叉树代码都是通过这种方式实现的。
②顺序存储
用数组来存储，对于完全二叉树，如果节点X存储在数组中的下标为i，那么它的左子节点的存储下标为2*i，右子节点的下标为2*i+1，反过来，下标i/2位置存储的就是该节点的父节点。注意，根节点存储在下标为1的位置。完全二叉树用数组来存储时最省内存的方式。

3.二叉树的遍历
3. ①前序遍历：对于树中的任意节点来说，先打印这个节点，然后再打印它的左子树，最后打印它的右子树。
3. ②中序遍历：对于树中的任意节点来说，先打印它的左子树，然后再打印它的本身，最后打印它的右子树。
3. ③后序遍历：对于树中的任意节点来说，先打印它的左子树，然后再打印它的右子树，最后打印它本身。
```java
前序遍历的递推公式：

preOrder(r) = print r->preOrder(r->left)->preOrder(r->right)

中序遍历的递推公式：

inOrder(r) = inOrder(r->left)->print r->inOrder(r->right)

后序遍历的递推公式：

postOrder(r) = postOrder(r->left)->postOrder(r->right)->print r
```
时间复杂度：3种遍历方式中，每个节点最多会被访问2次，所以时间复杂度是O(n)。

二叉树练习
```java
public class BanarySearchTree {
	private Node root;

	public boolean insert(int value) {
		if (root == null) {
			root = new Node(value);
			return true;
		}
		Node parent = root;
		while (parent != null) {
			if (parent.data > value) {
				if (parent.left == null) {
					parent.left = new Node(value);
					return true;
				}
				parent = parent.left;
			} else {
				if (parent.right == null) {
					parent.right = new Node(value);
					return true;
				}
				parent = parent.right;
			}
		}
		return false;
	}

	public Node find(int value) {
		Node current = root;
		while (current != null) {
			if (current.data > value) {
				current = current.left;
			} else if (current.data < value) {
				current = current.right;
			} else {
				return current;
			}
		}
		return null;
	}

	public boolean delete(int value) {
		Node current = root;
		Node parent = root;
		Boolean isLeft = true;
		while (current.data != value) {
			parent = current;
			if (current.data > value) {
				current = current.left;
				isLeft = true;
			} else {
				current = current.right;
				isLeft = false;
			}
			if (current == null)
				return false;
		}
		if (current.left == null && current.right == null) {
			if (current == root) {
				root = null;
			} else if (isLeft) {
				parent.left = null;
			} else {
				parent.right = null;
			}
		} else if (current.left == null) {
			if (current == root) {
				root = current.right;
			} else if (isLeft) {
				parent.left = current.right;
			} else {
				parent.right = current.right;
			}
		} else if (current.right == null) {
			if (current == root) {
				root = current.left;
			} else if (isLeft) {
				parent.left = current.left;
			} else {
				parent.right = current.left;
			}
		} else {
			Node successor = getSuccessor(current);
			if (current == root) {
				root = successor;
			} else if (isLeft) {
				parent.left = successor;
			} else {
				parent.right = successor;
			}
			successor.left = current.left;
		}
		return true;
	}

	public Node getSuccessor(Node delNodel) {
		Node successor = delNodel;
		Node successorParent = delNodel;
		Node current = delNodel.right;
		while (current != null) {
			successorParent = successor;
			successor = current;
			current = current.left;
		}

		if (successor != delNodel.right) {
			successorParent.left = successor.right;
			successor.right = delNodel.right;
		}
		return successor;
	}

	public void preOrder(Node localNode) {
		if (localNode != null) {
			System.out.print(localNode);
			preOrder(localNode.left);
			preOrder(localNode.right);
		}
	}

	public void inOrder(Node localNode) {
		if (localNode != null) {
			inOrder(localNode.left);
			System.out.print(localNode.data);
			inOrder(localNode.right);
		}
	}

	public void postOrder(Node localNode) {
		if (localNode != null) {
			postOrder(localNode.left);
			postOrder(localNode.right);
			System.out.print(localNode.data);
		}
	}

	public static void main(String[] args) {
		BanarySearchTree banarySearchTree = new BanarySearchTree();
		banarySearchTree.insert(3);
		banarySearchTree.insert(10);
		banarySearchTree.insert(7);
		banarySearchTree.insert(11);
		banarySearchTree.insert(15);
		banarySearchTree.insert(12);
		banarySearchTree.insert(20);
		// banarySearchTree.delete(10);
		// System.out.println(banarySearchTree.tree.data);
		// System.out.println(banarySearchTree.tree.right.data);
		// System.out.println(banarySearchTree.tree.right.right.data);
		// System.out.println(banarySearchTree.tree.right.right.left.data);
		// System.out.println(banarySearchTree.tree.right.right.right.data);
		banarySearchTree.inOrder(banarySearchTree.root);
	}

	public static class Node {
		private int data;
		private Node left;
		private Node right;

		public Node(int data) {
			this.data = data;
		}
	}

}
```