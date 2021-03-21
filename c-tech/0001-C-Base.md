---
title: C语言基础-基础入门
date: 2008-01-20
author: SpringSongs
tags: 
  - C语言基础
location: China  
---

## C语言简介
C语言诞生于美国的贝尔实验室，由D.M.Ritchie以B语言为基础发展而来，在它的主体设计完成后，Thompson和Ritchie用它完全重写了UNIX，且随着UNIX的发展，c语言也得到了不断的完善。为了利于C语言的全面推广，许多专家学者和硬件厂商联合组成了C语言标准委员会，并在之后的1989年，诞生了第一个完备的C标准，简称“C89”，也就是“ANSI c”，截至2020年，最新的C语言标准为2017年发布的 “C17”。 
C语言之所以命名为C，是因为C语言源自Ken Thompson发明的B语言，而B语言则源自BCPL语言。

C语言是一门面向过程的、抽象化的通用程序设计语言，广泛应用于底层开发。C语言能以简易的方式编译、处理低级存储器。C语言是仅产生少量的机器语言以及不需要任何运行环境支持便能运行的高效率程序设计语言。

C语言很强大，所有其他语言能实现的功能，C语言都能实现。
## “Hello World!”示例
```c
#include<stdio.h>
int main(){
    printf("hello world\n");
    return 0;
}
```
::: tip
1. #include<stdio.h> 是一条预处理命令，用于告诉编译器在本程序中包含标准输入/输出库的信息。
2. main() 主函数方法是就是C语言中的唯一入口。int是main()方法返回的类型。
3. printf("hello world\n") 调用了stdio.h文件的printf方法打印hello world。printf永远没有转行，\n为转行转义符。
4. return 是函数的返回值，根据函数类型的不同，返回的值也是不同的。这里返回了int类型。
:::
## 注释
在程序中，由/* */两个符号包括起来的部份是程序的注释。写注释能为其他人（包括自已）更容易明白你写的程序。也就是说程序是写给人看的，不是写给计算机看的。注释可以单独写一行或者也可以写多行。/**/不会被编译器所编译。C99新增了别一种风格注释，与C++，Java一至，使用//来注释。
``` c
    /*这是一行注释*/

    /*这是第一行注释
      这是第二行注释*/

    /*
      这是一行注释
    */

    //这是一行注释
```
## 数据类型
![SpringSongs：数据类型](/attachment/C/dataType.jpg)
### 基本数据类型
- `char` 字符型
- `short` 短整型
- `int` 整型
- `long` 长整型
- `float` 单精度浮点型
- `double` 双精度浮点型

``` c
#include<stdio.h>
#include<limits.h>
#include<float.h>
int main(){
    char  _char='A';//定义变量
    short _short='A';//定义变量
    int   _int=1;//定义变量
    long  _long=1;//定义变量
    float _float=1.1f;//定义变量
    double _double=1.1;//定义变量
    
   printf("char 存储大小 : %lu \n", sizeof(char));
   printf("char 最大值 : %d \n",CHAR_MAX);
   printf("char 最小值 : %d \n",CHAR_MIN);
   printf("short 存储大小 : %lu \n", sizeof(short));
   printf("short 最大值 : %d \n",SHRT_MAX);
   printf("short 最小值 : %d \n",SHRT_MIN);
   printf("int 存储大小 : %lu \n", sizeof(int));
   printf("int 最大值 : %d \n",INT_MAX);
   printf("int 最小值 : %d \n",INT_MIN);
   printf("long 存储大小 : %lu \n", sizeof(long));
   printf("long 最大值 : %ld \n",LONG_MAX);
   printf("long 最小值 : %ld \n",LONG_MIN);
   printf("float 存储大小 : %lu \n", sizeof(float));
   printf("float 最大值 : %f \n",FLT_MAX);
   printf("float 最小值 : %f \n",FLT_MIN);
   printf("double 存储大小 : %lu \n", sizeof(double));
   printf("double 最大值 : %f \n",DBL_MAX);
   printf("double 最小值 : %f \n",DBL_MIN);
}

```
::: tip 提示
数据如数字、文字、符号、图形、音频、视频等数据都是以二进制形式存储在内存中的，它们并没有本质上的区别，是0与1的各种组成。
所以为了区分数据，就定义了数据类型。数据类型不仅提供了语法检法，还明确了变量所点用的内存空间，也就是字长。其实更为本质上是
CPU区分了不同的数据类型，不同的数据类型使用不同的运算器，比如CPU整型运算和CPU浮点运算。

数据类型的长度与硬件特性有关，但要遵循以下规则，short和int类型至少为16位，而long至少为32位。现在个人计算法一般以32位存储一个int值。
::: 

## 格式化
| 符号        | 含义           |
| ------------- |:-------------:|
| %d / %i        | 有符号十进制整数           |
| %u        | 无符号十进制整数           |
| %c        | 无符号 char           |
| %s        | 字符串           |
| %p        | 十六进制形式的指针           |
| %o        | 无符号八进制整数           |
| %x / %X        | 无符号十六进制数           |
| %e        | 浮点数以指数格式e表示           |
| %E        | 浮点数以指数格式E表示           |
| %f        | double 十进制格式的数字           |
| %g / %G        | double 取决于值的十进制格式或指数格式的数字           |
| %lu        | 32位无符号整数           |
| %llu        | 64位无符号整数           |
## 标识符
C语言规定，标识符可以是字母(A～Z，a～z)、数字(0～9)、下划线_组成的字符串，并且第一个字符必须是字母或下划线。在使用标识符时还有注意以下几点
1. 由于库例程的名字通常以下划线开头，所以变量名不建议以划线开头。
2. 最好以见名知义的英文字母或者组合为变量，不能使用关键字做为变量名。
3. 变量名区分大小写，所以`springsongs`和`SpringSongs`是不同的变量名。
4. 符号常量名全部使用大写字母。
## 变量及赋值
计算机在进行运行运算时，数据是存在内存中的，在运算前我们要定义变量。这时侯定义变量要向内存申请一块内存空间，然后把变量值存进这块内存空间，
而这块内存空间的我们起一个好的名字，方便进行查找。通过这个变量，不用物理地址，我们可以对内存空间进行读写，操作系统会自动对变量进行地址分配。
在C语言中，可以通过指定数据类型和标识符来声明变量，其基本语法如下所示：

`DataType identifier;`或者`DataType identifier1,identifier2,identifier3...`;

#### 实例
``` c
#include <stdio.h>
int main()
{
    int a;//定义一个整型变量，并取名a
    a = 10;//给a并赋值为10
    float x, y, z;//定三个浮点型变量，并取命x,y,z
    x = 1.1;//给x并赋值为1.1
    y = 1.2;//给y并赋值为1.2
    z = 1.3;//给z并赋值为1.3
    printf("%d\n", a);             //打印a整型变量
    printf("%f %f %f\n", x, y, z); //打印x,y,z浮点型变量
    return 0;
}
```
::: tip
在实例中，我们申请四块内存空间，并分别命名为a,x,y,z。当然你也可以给它们取别的名称。分号代表语句结束。
那定义好变量以后我们怎么把数据存进内存空间去呢。我们用‘=’号给变量赋值。赋值就是把数据放进内存去。赋值有两中方法
一种是先声明再赋值，一种是声明的同时赋值。`DataType identifier=value;`或者`DataType identifier1=value1,identifier2=value2,identifier3=value3...`;
::: 
#### 实例声明的同时赋值
``` c
#include <stdio.h>
int main(){
    int a=10;//定义一个整型变量，并取名a，并赋值为10
    float x=1.1,y=1.2,z=1.3;//定三个浮点型变量，并取命x,y,z，并分别赋值1.1,1.2,1.3
    printf("%d\n",a);//打印a整型变量
    printf("%f %f %f\n",x,y,z);//打印x,y,z浮点型变量
    return 0;
}

```
## 关键字
下表列出了 C 中的保留字。这些保留字不能作为常量名、变量名或其他标识符名称。
| auto        | break           | case           | char           | const           |
| ------------- |:-------------:|:-------------:|:-------------:|:-------------:|
| continue        | default           | do           | double           | else           |
| enum        | extern           | float           | for           | goto           |
| if        | int           | long           | register           | return           |
| short        | signed           | sizeof           | static           | struct           |
| switch        | typedef           | unsigned           | union           | void	           |
| volatile        | while           | _Bool           | _Complex           | _Imaginary	           |
| inline        | restrict           | _Alignas           | _Alignof           | _Atomic	           |
| _Generic        | _Static_assert           | _Thread_local           |            | 	           |
## 常量
常量是在程序执行期间不会改变的量。常量可以是任何的基本数据类型，比如整数常量、浮点常量、字符常量，或字符串字面值，也有枚举常量。
常量就像是常规的变量，只不过常量的值在定义后不能进行修改。
::: tip 规则
1. 整数常量，整数常量可以是十进制、八进制或十六进制的常量。
2. 浮点常量，浮点常量由整数部分、小数点、小数部分和指数部分组成。
3. 字符常量，字符常量是括在单引号中。
4. 字符串常量，字符串字面值或常量是括在双引号 "" 中的。
:::
### 实例
``` c
#include <stdio.h>
int main(){
    printf("%d\n",15);//整型常量
    printf("%f\n",15.4);//浮点型常量
    printf("%c\n",'A');//字符常量
    printf("SpringSongs\n");//字符串常量
    return 0;
}
```
### 常量的定义
常量的声明与变量的声明类似，不同之处在于常量之前带有const关键字，并且您始终需要指定一个值。通常将常量声明为大写。
像这样：
``` c
const int NUM=45;
```
定义常量的另一种方法是使用以下语法：
``` c
#define AGE 37
```
在这种情况下，您不需要添加类型，也不需要=等号，并且最后省略了分号。
## 转义符
| 转义符       | 含义           |
| ------------- |:-------------:|
| \\\\       | \ 字符           |
| \\'       | ' 字符           |
| \\"       | " 字符           |
| \\?       | 	? 字符           |
| \a       | 警报铃声           |
| \b       | 退格键           |
| \f       | 换页符           |
| \n       | 换行符           |
| \r       | 回车           |
| \t       | 水平制表符           |
| \v       | 垂直制表符           |
| \ooo       | 一到三位的八进制数           |
## 自动类型转换
在二元运算中如果有两个操作数具有不同的数据类型，那么在进行运算之前，会把“低类型”提高为“高类型”，运算的结果保存为“高类型”。
一般来说可以用以下规则：
1. 如果有一个操作数为double类型，则另一操作数则自动转为double类型2. 如果有一个操作数为float类型，则另一操作数则自动转为float类型3. 如果有一操作数为long类型,则另一操作数则自动转为long类型
4. char 和 short 参与运算时，必须先转换成 int 类型。
::: danger
注意，只能以“低类型”提高为“高类型”，不能“高类型”转为“低类型”。也就是说字节短的转为字节长的，不能字节长的转为字节短的。
:::
## 强制类型转换
在强制转换中如果高精度数据类型转为低精度类型则失去精度。
## 运算符号
C 语言内置了丰富的运算符，并提供了以下类型的运算符：
::: tip
1. 算术运算符
2. 关系运算符
3. 逻辑运算符
4. 位运算符
5. 赋值运算符
6. 杂项运算符
:::
### 算术运算符
下表显示了 C 语言支持的所有算术运算符。假设变量 A 的值为 10，变量 B 的值为 20，则：
| 名称        | 运算符号           | 实例           |
| ------------- |:-------------:|:-------------:|
| 加法运算    | + | A + B 将得到 30 |
| 减法运算    | - | A - B 将得到 -10 |
| 乘法运算    | * | A * B 将得到 200 |
| 除法运算    | / | B / A 将得到 2 |
| 取模运算    | % | B % A 将得到 0 |
| 自增运算    | ++ | A++ 将得到 11 |
| 自减运算    | -- | A-- 将得到 9 |
### 关系运算符
下表显示了 C 语言支持的所有关系运算符。假设变量 A 的值为 10，变量 B 的值为 20，则：
| 名称        | 运算符号           | 实例           |
| ------------- |:-------------:|:-------------:|
| ==    | 检查两个操作数的值是否相等，如果相等则条件为真。 | (A == B) 为假。 |
| !=    | 检查两个操作数的值是否相等，如果不相等则条件为真。 | (A != B) 为真。 |
| >    | 检查左操作数的值是否大于右操作数的值，如果是则条件为真。 | (A > B) 为假。 |
| <    | 检查左操作数的值是否小于右操作数的值，如果是则条件为真。 | (A < B) 为真。 |
| >=    | 检查左操作数的值是否大于或等于右操作数的值，如果是则条件为真。 | (A >= B) 为假。|
| <=    | 检查左操作数的值是否小于或等于右操作数的值，如果是则条件为真。 | (A <= B) 为真。 |
### 逻辑运算符
下表显示了 C 语言支持的所有关系逻辑运算符。假设变量 A 的值为 1，变量 B 的值为 0，则：
| 运算符号        | 描述           | 说明           |
| ------------- |:-------------:|:-------------:|
| &&    | 称为逻辑与运算符。如果两个操作数都非零，则条件为真。 | (A && B) 为假。 |
| \|\|    | 称为逻辑或运算符。如果两个操作数中有任意一个非零，则条件为真。 | (A \|\| B) 为真。 |
| !	    | 称为逻辑非运算符。用来逆转操作数的逻辑状态。如果条件为真则逻辑非运算符将使其为假。	 | !(A && B) 为真。 |
### 位运算符
位运算符作用于位，并逐位执行操作。&、 | 和 ^ 的真值表如下所示：
| A        | B           | A&B           | A\|B           | A^B           |
| ------------- |:-------------:|:-------------:|:-------------:|:-------------:|
| 0    | 0 | 0 | 0 | 0 |
| 0    | 1 | 0 | 1 | 1 |
| 1    | 1 | 1 | 1 | 0 |
| 1    | 0 | 0 | 1 | 1 |
### 赋值运算符
| 名称        | 运算符号           | 说明           |
| ------------- |:-------------:|:-------------:|
| 赋值    | += | 把右边操作数的值赋给左边操作数 |
| 加赋值    | += | 把右边操作数加上左边操作数的结果赋值给左边操作数 |
| 减赋值    | -= | 把左边操作数减去右边操作数的结果赋值给左边操作数 |
| 乘赋值    | *= | 把右边操作数乘以左边操作数的结果赋值给左边操作数 |
| 除赋值    | /= | 把左边操作数除以右边操作数的结果赋值给左边操作数 |
| 取余赋值    | %=| 求两个操作数的模赋值给左边操作数 |
| 左移且赋值运算符    | <<=|  |
| 右移且赋值运算符    | >>=|  |
| 按位与且赋值运算符    | &=|  |
| 按位异或且赋值运算符    | ^=|  |
| 按位或且赋值运算符    | \|=|  |

## 分支结构之简单if语句
if语句用于条件判定，语句执行时，会先计算条件表达式的值，如果值为真，则执行语句块。
::: tip 语法：
    if (条件表达式) {        语句块;    }
:::
#### 实例
``` c
#include <stdio.h>
int main()
{
    int grade=70;
    if (grade>60){
        printf("passed");
    }
    return 0;
}
```
实例执行流程图如下：
![SpringSongs：分支结构之简单if语句](/attachment/C/ifcontroller.jpg)
## 分支结构之简单if-else语句
if语句用于条件判定，语句执行时，会先计算条件表达式的值，如果值为真，则执行语句块1。如果真为假执行语句块2。
::: tip 语法：
    if (表达式) {        语句块1;    } else {        语句块2;    }
:::
#### 实例
``` c
#include <stdio.h>
int main()
{
    int grade = 50;
    if (grade > 60)
    {
        printf("passed");
    }
    else
    {
        printf("faild");
    }
    return 0;
}
```
实例执行流程图如下：
![SpringSongs：分支结构之简单if-else语句](/attachment/C/ifelsecontroller.jpg)
#### 
## 分支结构之多重if-else语句
这种if语句用于多路条件判定。其中的各个表达式将会进行运算，如果条件表达式的值为真，则执行生相应语句块。
最后的else是当以上条件都不成立的情况下默认执行语句块。
::: tip 语法：
    if(表达式1) {        语句块1;    } else if(表达式2) {        语句块2;    ...    } else if(表达式n) {        语句块n;    } else {        语句块n+1;    }
:::
#### 实例
``` c
#include <stdio.h>
int main()
{
    int grade=88;
    if (grade>=90){
        printf("A");
    }else if (grade>=80){
        printf("B");
    }else if (grade>=70){
        printf("C");
    }else if (grade>=60){
        printf("D");
    }else{
         printf("E");
    }
    return 0;
}
```
## 分支结构之嵌套if-else语句
它的一般形式如下
::: tip 语法：
    if (表达式1) {        if (表达式2) {
            语句块1;
        } else {
            语句块2;
        }    } else {        语句块3;    }
:::
## 分支结构之switch语句
有时侯当我们有多个分支选择时，可以使用if else ... else if语句来写，但有时侯使用switch更方便。
::: tip 语法：
    switch(表达式) {        case 值1:            语句块1;            break;        case 值2:            语句块2;            break;        …        case 值n:            语句块n;            break;        default:            语句块n+1;        break;    }
:::
#### 实例
 ``` c
#include <stdio.h>
int main()
{
    int day=3;
    switch (day)
    {
    case 1:
        printf("星期一");
        break;
    case 2:
        printf("星期二");
        break;
    case 3:
        printf("星期三");
        break;
    case 4:
        printf("星期四");
        break;
    case 5:
        printf("星期五");
        break;
    case 6:
        printf("星期六");
        break;
    case 7:
        printf("星期天");
        break;
    default:
        break;
    }
    return 0;
}
```
#### 实例执行流程图如下：
![SpringSongs：分支结构之简单if-else语句](/attachment/C/muifelsecontroller.jpg)

::: danger 提示
1. 在case后的各常量表达式的值不能相同，否则会出现错误。
2. 在case子句后如果没有break;会一直往后执行一直到遇到break;才会离开switch语句。
3. switch后面的表达式语句只能是整型或者字符类型。
4. 在case后，允许有多个语句，可以不用{}括起来。
5. 各case和default子句的先后顺序可以变动，而不会影响程序执行结果。
6. default子句可以省略不用。
:::

## 三目运算符
执行过程是：先判断表达式1的值是否为真，如果是真的话执行表达式2；如果是假的话执行表达式3。可以用来替代 if...else 语句。
::: tip 语法：
    表达式1 ? 表达式2 : 表达式3;
:::
### 实例
``` c
#include <stdio.h>
int main(){
    int a=10,b=15;
    a>b?printf("a>b"):printf("a<b");
    return 0;
}
```
## 循环结构之while循环
程序先执行条件表达式，如果值为真，继续执行语句块。然后保持继续执行条件表式与语句块，直到条件表达式为假，终止循环。
::: tip 语法：
	while(条件表达式) {		语句块;	}
:::
#### 实例
``` c
#include <stdio.h>
int main()
{
    int count=10;
    int i=0;
    while(i<count){
        printf("i=%d",i);
        i++;
    }
    return 0;
}
```
#### 实例执行流程图如下
![SpringSongs：循环结构之while循环](/attachment/C/whilecontroller.jpg)
## 循环结构之do-while循环
while循环和for循环都是在执行条件表达式以后，如果为真则行语句块。所以有可能根本不会执行到语句块。在C语言中还有先执行语句块，再
校验表达式的循环，这保证至少执行循环体内语句块一次。这种循环被称为do-while循环。
::: tip 语法：
	do {		语句块;	}while(条件表达式);
:::
#### 实例
``` c
#include <stdio.h>
int main()
{
    int count=10;
    int i=0;
    do{
        printf("i=%d",i);
        ++i;
    }while(i<count);
    return 0;
}
```
#### 实例执行流程图如下
![SpringSongs：循环结构之do-while循环](/attachment/C/dowhilecontroller.jpg)
## 循环结构之for循环
for也和while一样能够执行循环体。
::: tip 语法：
	for(条件表达式1;条件表达式2;条件表达式3) {		语句块;	}
:::
#### 实例
 ``` c
#include <stdio.h>
int main()
{
    for(int i=0;i<10;i++){
        printf("%d",i);
    }
    return 0;
}
```
#### 实例执行流程图如下
![SpringSongs：循环结构之for循环](/attachment/C/forcontroller.jpg)
::: warning
1. 条件表达式1。
2. 再执行条件表达式2，如果运算结果值为真，则执行语句块，否则结束循环。
3. 再执行条件表达式3。
4. 重复执行第2和3步，直至条件表达式2为假，退出循环。
5. 第1步仅在程序第一次执行循环体时执行。
:::
## 循环结构之多重循环
一般形式如下：
``` c
while(条件表达式1) {		while(条件表达式2) {
			while(条件表达式3) {
				语句块;
			}
		}}
```
``` c
	do {		do {
			do {
				语句块;
			}while(条件表达式1);
		}while(条件表达式2);	}while(条件表达式3);
```
``` c
	for(条件表达式1;条件表达式2;条件表达式3) {		for(条件表达式4;条件表达式5;条件表达式6) {
			for(条件表达式7;条件表达式8;条件表达式9) {
				语句块;
			}
		}	}
```
## 结束语句之break语句
break能中断循环结构，而执行整个循环语句后面的代码。当中断条件满足时，会终止循环。如果内嵌循环内中断，则中断内嵌循环体。
#### 实例一
 ``` c
#include <stdio.h>
int main()
{
   for(int i=0;i<10;i++){
       if (i==5){//假如i等于5会中断循环体,跳到return语句。
           break;
       }
       printf("%d",i);
   }
    return 0;
}
//输出 01234
```
#### 实例二
 ``` c
#include <stdio.h>
int main()
{
    for (int i = 0; i < 10; i++)
    {
        for (int j = 0; j < 10; j++)
        {
            if (j == 5)
            { //假如j等于5会中断循环体,跳到上一层for语句继续执行循环体。
                break;
            }
            printf("%d", i);
        }
    }
    return 0;
}
//输出 00000111112222233333444445555566666777778888899999
```
## 结束语句之continue语句
continue也能中断循环结构，但它和break不同的是，contine只跳过本次循环，继续执行后面的循环。如果内嵌循环内中断，则只跳过内嵌循环体本次循环。
#### 实例一
 ``` c
#include <stdio.h>
int main()
{
    for(int i=0;i<10;i++){
        if (i==5)continue;//假如i等于5跳过本次循环
        printf("%d",i);
    }
    return 0;
}
//输出 012346789
```


## 臭名远扬之goto语句
goto 语句允许把控制无条件转移到同一函数内的被标记的语句。
``` c
#include <stdio.h>
int main(){
    int i=0;
    LOOP:if (i<10){
        printf("%d",i);
        i++;
        goto LOOP;
    }
    return 0;
}
```
::: danger 提示
在任何编程语言中，都不建议使用 goto 语句。因为它使得程序的控制流难以跟踪，使程序难以理解和难以修改。
:::