---
title: C语言基础-函数
date: 2008-02-08
author: SpringSongs
tags: 
  - C语言基础
location: China  
---

## 自定义函数
函数是一组语句，这些语句接受输入，进行一些特定的计算并产生输出。是将一些通常或重复完成的任务放在一起，组成一个函数，这样我们就可以调用函数，而不是为不同的输入一次又一次地编写相同的代码。
#### 自定义函数的一般格式如下：
``` c
DataType function_name ( [arg_type arg1, ..., arg_type argN]){body}
```
::: tip 提示
1. return-type表示函数返回的数据类型。如果函数没有返回值，则可以void在函数名称之前使用关键字。否则，您将指定函数返回值类型（int对于整数，float对于浮点值，const char *对于字符串等）。
2. function_name表示函数的名称，命名规则和标识符相同。
3. []表示可以省略。参数省略表示该函数是无参函数，参数不省略表示该函数是有参函数;
一个函数可以有参数。它们是可选的。如果没有它们，则在括号内插入void也可以什么都不用写，如下所示：
``` c
void doSomething(void) {
   /* ... */
}
//或者
void doSomething() {
   /* ... */
}
//在这种情况下，当我们调用该函数时，将在括号内不加任何名称的情况下调用该函数：
doSomething();
```
如果有一个参数，则指定参数的类型和名称，如下所示：
``` c
void doSomething(int value) {
   /* ... */
}
//调用函数时，将在括号中传递该参数，如下所示：
doSomething(3);
```
或者多个参数，如下所示：
``` c
void doSomething(int value1,int value2) {
   /* ... */
}
//调用函数时，将在括号中传递该参数，如下所示：
doSomething(3,4);
```
4. 自定义函数一般放在main()方法的上面，如果需要放在上面，则需要在main()前先声明自定义函数。定义格式为
`return-type function_name ( [arg_type arg1, ..., arg_type argN]);`
:::
#### 实例
``` c
#include <stdio.h>
int max(int a,int b);//声明自定义函数
int main(int argc, char const *argv[])
{
    int result=max(10,15);//调用自定义函数
    printf("result=%d",result);
    return 0;
}
//自定义函数
int max(int a,int b){
    if (a>b){
        return a;
    }else{
        return b;
    }
}
```

## 标准库函数和自定义函数
C语言已经为我们封装好了很多函数，比如`stdio.h`提供输出函数，使用函数时引入对应的头文件即可。C语言自带的函数称为标准库函数（Library Function）。

## 形参和实参的区别
函数的参数分为形参和实参两种：
1. 形参是在定义函数名和函数体的时候使用的参数,目的是用来接收调用该函数时传入的参数,称为形式参数，简称形参。
2. 实参是在调用时传递该函数的参数，称为实际参数，简称实参。

函数的形参和实参具有以下特点：
1. 形参变量只有在函数被调用时才会分配内存，调用结束后，立刻释放内存，所以形参变量只有在函数内部有效，不能在函数外部使用。
2. 实参可以是常量、变量、表达式、函数等，无论实参是何种类型的数据，在进行函数调用时，它们都必须有确定的值，以便把这些值传送给形参，所以应该提前用赋值、输入等办法使实参获得确定值。
3. 实参和形参在数量上、类型上、顺序上必须严格一致，否则会发生“类型不匹配”的错误。

## 全局变量和局部变量
1. 局部变量也称为内部变量。局部变量是在函数内作定义说明的。其作用域仅限于函数内， 离开该函数后再使用这种变量是非法的。在复合语句中也可定义变量，其作用域只在复合语句范围内。
``` c
void doSomeThing(){
	int a;//局部变量,仅在doSomeThing内有效
	int b;//局部变量,仅在doSomeThing内有效
	return a+b;
}
int main(){
	int a;//局部变量,仅在main内有效
	int b;//局部变量,仅在main内有效
	return 0;
}
```
2. 全局变量也称为外部变量，它是在函数外部定义的变量。它不属于哪一个函数，它属于一个源程序文件。其作用域是整个源程序。
``` c
int a,b;//全局变量
void doSomeThing1(){
	/* ... */
}
int i,j;//全局变量
void doSomeThing2(){
	/* ... */
}
int main(){
	/* ... */
	return 0;
}
```