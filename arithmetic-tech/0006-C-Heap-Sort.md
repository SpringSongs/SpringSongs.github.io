## 介绍
堆排序是利用堆这种数据结构而设计的一种排序算法，堆排序是一种选择排序，它的最坏，最好，平均时间复杂度均为O(nlogn)，它也是不稳定排序。首先简单了解下堆结构。

堆是具有以下性质的完全二叉树：每个结点的值都大于或等于其左右孩子结点的值，称为大顶堆；或者每个结点的值都小于或等于其左右孩子结点的值，称为小顶堆。

## 算法原理
堆排序的基本思想是：将待排序序列构造成一个大顶堆，此时，整个序列的最大值就是堆顶的根节点。将其与末尾元素进行交换，此时末尾就为最大值。
然后将剩余n-1个元素重新构造成一个堆，这样会得到n个元素的次小值。如此反复执行，便能得到一个有序序列了。

## 示例
```c
/*
 ===============================================
 Name        : HeapSort.c
 Author      : SpringSongs
 Version     : 0.0.1
 Description : 堆排序, Ansi-style
 ===============================================
 */
#include <stdio.h>
#include <stdlib.h>

void swap(int *a, int *b)
{
    int temp = *b;
    *b = *a;
    *a = temp;
}

void max_heapify(int arr[], int start, int end)
{
    int dad = start;
    int son = dad * 2 + 1;
    while (son <= end)
    {                                                  
        if (son + 1 <= end && arr[son] < arr[son + 1]) 
            son++;
        if (arr[dad] > arr[son]) 
            return;
        else
        { 
            swap(&arr[dad], &arr[son]);
            dad = son;
            son = dad * 2 + 1;
            printf("%d\n", son);
        }
    }
}

void heap_sort(int arr[], int len)
{
    int i;
    for (i = len / 2 - 1; i >= 0; i--)
    {
        max_heapify(arr, i, len - 1);
    }
    for (i = len - 1; i > 0; i--)
    {
        swap(&arr[0], &arr[i]);
        max_heapify(arr, 0, i - 1);
    }
}

int main()
{
    int arr[] = {25, 35, 68, 79, 21, 13, 98, 7, 16, 62};
    int len = (int)sizeof(arr) / sizeof(*arr);
    heap_sort(arr, len);
    int i;
    for (i = 0; i < len; i++)
        printf("%d ", arr[i]);
    printf("\n");
    return 0;
}
```