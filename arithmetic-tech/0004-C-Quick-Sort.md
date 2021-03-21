## 介绍
快速排序（Quicksort）是对冒泡排序算法的一种改进。快速排序由C. A. R. Hoare在1960年提出。
## 算法原理
通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列。
## 示例
```c
/*
 ===============================================
 Name        : QuickSort.c
 Author      : SpringSongs
 Version     : 0.0.1
 Description : 快速排序, Ansi-style
 ===============================================
 */
#include <stdio.h>
void quickSort(int *a, int start, int end);
int main()
{
    int i = 0;
    int n[10] = {25, 35, 68, 79, 21, 13, 98, 7, 16, 62};
    quickSort(n, 0, 9);
    printf("排序过后的数顺序:\n");
    for (i = 0; i < 10; i++)
    {
        printf("%d", n[i]);
        printf(",");
    }
    return 0;
}

void quickSort(int *a, int start, int end)
{
    if (start >= end)
    {
        return;
    }
    int i = start;
    int j = end;
    int key = a[start];
    while (i < j)
    {
        while (i < j && key <= a[j])
        {
            j--;
        }
        if (i < j)
        {
            a[i++] = a[j];
        }
        while (i < j && key >= a[i])
        {
            i++;
        }
        if (i < j)
        {
            a[j--] = a[i];
        }
    }
    a[i] = key;
    quickSort(a, start, i - 1);
    quickSort(a, i + 1, end);
};
```