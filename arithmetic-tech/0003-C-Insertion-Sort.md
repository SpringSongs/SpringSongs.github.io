---
title: C语言排序算法-插入排序
date: 2010-03-05
author: SpringSongs
tags: 
  - C语言排序算法
location: China  
---
## 算法原理
把数组分成已排序和未排序两个区间，以数组第一个元素当做已排序区间，剩下的即被当做未排序区间，每次都从未排序区间中找出一个元素来和已排序区间中的元素比较，并插入到已排序区间中的合适位置，直到未排序区间元素为 0 。
## 算法稳定性
如果待排序的序列中存在两个或两个以上具有相同关键词的数据，排序后这些数据的相对次序保持不变，即它们的位置保持不变，通俗地讲，就是两个相同的数的相对顺序不会发生改变，则该算法是稳定的；如果排序后，数据的相对次序发生了变化，则该算法是不稳定的。关键词相同的数据元素将保持原有位置不变，所以该算法是稳定的。
```c
/*
 ===============================================
 Name        : InsertionSort.c
 Author      : SpringSongs
 Version     : 0.0.1
 Description : 插入排序, Ansi-style
 ===============================================
 */
#include <stdio.h>
int main()
{
    int n[10] = {25, 35, 68, 79, 21, 13, 98, 7, 16, 62};
    int i, j, temp;
    for (i = 1; i < 10; i++)
    {
        int currentValue = n[i];
        j = i - 1;
        for (; j >= 0; j--)
        {
            if (currentValue < n[j])
            {
                n[j + 1] = n[j];
            }
            else
            {
                break;
            }
        }
        n[j + 1] = currentValue;
    }
    printf("排序过后的数顺序:\n");
    for (i = 0; i < 10; i++)
    {
        printf("%d", n[i]);
        printf(",");
    }
    return 0;
}

```