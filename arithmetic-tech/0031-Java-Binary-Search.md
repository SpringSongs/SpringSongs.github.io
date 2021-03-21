

## 一、什么是二分查找？
二分查找针对的是一个有序的数据集合，每次通过跟区间中间的元素对比，将待查找的区间缩小为之前的一半，直到找到要查找的元素，或者区间缩小为0。
## 二、时间复杂度分析？
1. 时间复杂度
假设数据大小是n，每次查找后数据都会缩小为原来的一半，最坏的情况下，直到查找区间被缩小为空，才停止。所以，每次查找的数据大小是：n，n/2，n/4，…，n/(2^k)，…，这是一个等比数列。当n/(2^k)=1时，k的值就是总共缩小的次数，也是查找的总次数。而每次缩小操作只涉及两个数据的大小比较，所以，经过k次区间缩小操作，时间复杂度就是O(k)。通过n/(2^k)=1，可求得k=log2n，所以时间复杂度是O(logn)。
2. 认识O(logn)
   - ①这是一种极其高效的时间复杂度，有时甚至比O(1)的算法还要高效。为什么？
   - ②因为logn是一个非常“恐怖“的数量级，即便n非常大，对应的logn也很小。比如n等于2的32次方，也就是42亿，而logn才32。
   - ③由此可见，O(logn)有时就是比O(1000)，O(10000)快很多。

代码练习
```java
public class BanarySearchUtils {

	public static void main(String[] args) {
		int[] a = { 10, 20, 23, 18, 19, 23, 25 };
		Arrays.sort(a);
		System.out.print(banarySearch(a, 20));

	}

	private static int banarySearch(int arr[], int value) {
		int low = 0;
		int high = arr.length - 1;
		while (low <= high) {
			int mid = (high + low) / 2;
			if (arr[mid] < value) {
				low = mid + 1;
			} else if (arr[mid] > value) {
				high = mid - 1;
			} else {
				return mid;
			}
		}
		return -1;
	}

}
```