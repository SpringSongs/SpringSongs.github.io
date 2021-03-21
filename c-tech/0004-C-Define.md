---
title: C语言基础-预处理命令
date: 2008-02-08
author: SpringSongs
tags: 
  - C语言基础
location: China  
---


## 1. 宏定义
#define 是预处理指令。预处理也就是在编译器在编译之前预处理一些事情。#define可以定义宏。宏就是用标识符来表示字符，如果预处理
在程序中找到宏的标识符，那么就用替换体来代替宏。
``` c
#include <stdio.h>
#define     AGE 50
//预处理指令  宏  替换体
int main(){
    if (AGE==30){
        printf("而立之年");
    }else if(AGE==40){
         printf("不惑之年");
    }else if(AGE==50){
        printf("知命之年");
    }else if(AGE==60){
        printf("耳顺之年");
    }
}
```
在main()方法中，AGE会被简单的替换成50。从宏变成最终替换文件的过程叫做宏展开。
宏定义的一般形式为：
``` c
#define  宏名  字符串
```
#表示这是一条预处理命令，所有的预处理命令都以 # 开头。宏名是标识符的一种，命名规则遵循标识符规则。字符串可以是数字、表达式、if 语句、函数等。
## 2. 带参数的宏定义
#include中可以使用参数创建外形和作用与函数类似的类函数宏。类函数宏可以有一个或者多个参数。
带参数的宏定义一般定义形式如下：
```
#include 宏名(参数例表) 替换体
```
实例：
``` c
#include <stdio.h>
#define SUM(X,Y) X+Y
int main(){
    int x=10;
    int y=15;
    int sum=SUM(x,y);
    printf("sum=%d",sum);
}
//输出 sum=25
```
::: tip 提示
1. 第2行 `#define` 定义了宏名 `SUM` ，替换体为 `X+Y`。
2. 第6行 `sum=SUM(x,y)` 为宏调用，宏展开为语句为 `sum=x+y`。
3. 宏只是简单的替换而以，并不参与运算;
:::
## 3. 宏与函数
::: tip 提示
1. 宏做的是简单的字符串替换(注意是字符串的替换,不是其他类型参数的替换)，而函数的参数的传递，参数是有数据类型的，可以是各种各样的类型。
2. 宏的参数替换是不经计算而直接处理的,而函数调用是将实参的值传递给形参，既然说是值，自然是计算得来的。
3. 宏在编译之前进行,即先用宏体替换宏名，然后再编译的，而函数显然是编译之后，在执行时，才调用的，因此，宏占用的是编译的时间，而函数占用的是执行时的时间。
4. 宏的参数是不占内存空间的，因为只是做字符串的替换，而函数调用时的参数传递则是具体变量之间的信息传递，形参作为函数的局部变量，显然是占用内存的。
5. 宏函数的定义和其他宏一样，但在定义其表达式时要注意在宏定义上加括号，否则会出现由运算优先级导致的问题。
6. 函数体量很小时，为了减小系统的开销时间，可以使用宏函数，而函数体比较复杂（需要递归、循环、判断、选择等...）。
:::
## 4. #运算和##运算
### 4.1 #的用法
#用来将宏参数转换为字符串，也就是在宏参数的开头和末尾添加引号。如：
``` c
#include <stdio.h>
#define STRING(X) #X
int main(){
    printf("%s\n",STRING(SpringSongs));
    printf("%s\n",STRING("SpringSongs"));
}
// 输出 SpringSongs "SpringSongs"

```
宏展开是
``` c
printf("%s", "SpringSongs");
printf("%s", "\"SpringSongs\"");
//因为宏只是简单的替换而以
```
### 4.2 ##的用法
##称为连接符，用来将宏参数或其他的串连接起来。
## 5. #include的使用
#include叫做文件包含命令，也是预处理指令的一种。它的功能是把#include后面的文件的内容包含到当前文件里面，替换源文件中
的#include指令。

#include的指令有两种形式
``` c
#include <stdio.h>
#include "myFunction.h"
```
::: tip 提示
1. 使用尖括号< >，编译器会到标准系统目录中查找头文件；
2. 而使用双引号" "，编译器首先在当前目录下查找头文件或者指定的目录中查找头文件，如果没有找到，再到系统路径下查找。
:::
## 6. 条件编译
### 6.1 #ifdef，#else和#endif指令
#### 语法
``` c
#ifdef  宏名
    语句块1
#else
    语句块2
#endif
```
也可以省略 #else：
#### 语法
``` c
#ifdef  宏名
    语句块
#endif
```
#### 实例
``` c
#include <stdio.h>
int main(){
    #ifdef SPRING_SONGS 
        //如果已经用#include 定义了 SPRING_SONGS 则执行以下指令
        printf("SpringSongs");
    #else  
        //如果没有用#include 定义了 SPRING_SONGS 则执行以下指令             
        printf("JackChen");
    #endif
}
```
### 6.2 #ifndef，#else和#endif指令
#### 语法
``` c
#ifndef  宏名
    语句块1
#else
    语句块2
#endif
```
也可以省略 #else：
#### 语法
``` c
#ifndef  宏名
    语句块
#endif
```
#### 实例
``` c
#include <stdio.h>
int main(){
    #ifdef SPRING_SONGS 
        //如果没有用#include 定义了 SPRING_SONGS 则执行以下指令
        printf("SpringSongs");
    #else  
        //如果已经用#include 定义了 SPRING_SONGS 则执行以下指令             
        printf("JackChen");
    #endif
}
```
### 6.3 #if，#else和#endif指令
#if 命令很像C语言中的if。#if指令后面常跟整型常量表达式，如果为真，则表达式为真。
#### 语法
``` c
#if 整型常量表达式1
    语句块1
#elif 整型常量表达式2
    语句块2
#else
    语句块4
#endif
```
#### 实例
``` c
#include <stdio.h>
int main(){
    #if __WIN32__
        printf("windows");
    #elif __linux__
        printf("linux");
    #else
        printf("mac");
    #endif
}
```
## 7. 预定义宏
C标准规定了一些预定义宏，可以直接拿来使用。
| 宏        | 含义           |
| ------------- |:-------------:|
| \_\_DATE\_\_        | 预处理器时间           |
| \_\_FILE\_\_        | 当前源文件的名称           |
| \_\_LINE\_\_        | 当前源代码的行号           |
| \_\_STDC\_\_        | 当要求程序严格遵循ANSI C标准时该标识被赋值为1           |
| \_\_STDC_HOSTED\_\_        | 本机环境设置为1，否则为0           |
| \_\_STDC_VERSION\_\_        | 支持C99标准，设置为199901L;支持C11标准，设置为201112L           |
| \_\_TIME\_\_        | 当前编译代码的时间           |
| \_\_cplusplus        | 当编写C++程序时该标识符被定义           |