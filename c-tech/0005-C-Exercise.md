## 001.C语言练习-用C程序打印星形正方形
> 用5*5网格
> 启动一个外部循环(行)，将迭代5次。
> 在外部循环下开始一个内部循环(列)，迭代相同的次数在内部循环中打印星号。

```c
/*
打印如下：
*****
*****
*****
*****
*****
 */

#include <stdio.h>
int main()
{
	int i;
	int j;
	for (i = 0; i < 5; i++)
	{
		for (j = 0; j < 5; j++)
		{
			printf("*");
		}
		printf("\n");
	}
	return 0;
}

```

## 002.C语言练习-用C程序打印数字正方形
> 用5*5网格
> 启动一个外部循环(行)，将迭代5次。
> 在外部循环下开始一个内部循环(列)，迭代相同的次数在内部循环中打印列号。

```c
/*
打印如下：
12345
12345
12345
12345
12345
 */

#include <stdio.h>
int main()
{
	int i;
	int j;
	for (i = 1; i <= 5; i++)
	{
		for (j = 1; j <= 5; j++)
		{
			printf("%d", j);
		}
		printf("\n");
	}
	return 0;
}

```

## 003.C语言练习-用C程序打印数字正方形
>用5*5网格
>启动一个外部循环(行)，将迭代5次。
>在外部循环下开始一个内部循环(列)，迭代相同的次数在内部循环中打印行号。

```c
/*
打印如下：
11111
22222
33333
44444
55555
 */

#include <stdio.h>
int main()
{
	int i;
	int j;
	for (i = 1; i <= 5; i++)
	{
		for (j = 1; j <= 5; j++)
		{
			printf("%d", i);
		}
		printf("\n");
	}
	return 0;
}

```

## 004.C语言练习-用C程序打印字母正方形
>用5*5网格
>启动一个外部循环(行)，将迭代5次。
>在外部循环下开始一个内部循环(列)，迭代相同的次数在内部循环中打印ASCII。
>A的ASCII是65,a的ASCII是97
```c
/*
打印如下：
AAAAA
BBBBB
CCCCC
DDDDD
EEEEE
 */

#include <stdio.h>
int main()
{
	int i;
	int j;
	int asscii_code_start = 65;
	for (i = 0; i < 5; i++)
	{
		for (j = 0; j < 5; j++)
		{
			printf("%c", asscii_code_start);
		}
		printf("\n");
		asscii_code_start++;
	}
	return 0;
}

```

## 005.C语言练习-用C程序打印星形直角三角形
>用10*10网格
>第一行一个星(1行号)
>第二行两个星(2行号)
>第三行三个星(3行号)
>第四行四个星(4行号)
>以此类推…
>从规律来看，每行打印的都与行号有关

```c
/*
打印如下：
*
**
***
****
*****
******
*******
********
*********
**********
 */

#include <stdio.h>
int main()
{
	int i;
	int j;
	for (i = 1; i <= 10; i++)
	{
		for (j = 1; j <= i; j++)
		{
			printf("*");
		}
		printf("\n");
	}
	return 0;
}

```

## 006.C语言练习-用C程序打印数字右直角三角形
>用10*10网格
>第一行一个数字(1行号)
>(2行号)
>第三行三个数字(3行号)
>第四行四个数字(4行号)
>以此类推…
>从规律来看，每行打印的都与行号有关
```c
/*
打印如下：
1
12
123
1234
12345
123456
1234567
12345678
123456789
12345678910
 */

#include <stdio.h>
int main()
{
	int i;
	int j;
	for (i = 1; i <= 10; i++)
	{
		for (j = 1; j <= i; j++)
		{
			printf("%d", j);
		}
		printf("\n");
	}
	return 0;
}

```

## 007.C语言练习-用C程序打印星形左倒置直角三角形
>用10*10网格
>第一行10个星(0行号)
>第二行9个星(1行号)
>第三行8个星(2行号)
>第四行7个星(3行号)
>以此类推…
>从规律来看，每行打印的都与行号有关
```c
/*
 打印如下：
********
*******
******
*****
****
***
**
*
 */

#include <stdio.h>
int main()
{
	int i;
	int j;
	for (i = 0; i < 10; i++)
	{
		for (j = 0; j < 10 - i; j++)
		{
			printf("*");
		}
		printf("\n");
	}
	return 0;
}

```
## 008.C语言练习-用C程序打印数字倒置直角三角形
>用10*10网格
>第一行10个数字(0行号)
>第二行9个数字(1行号)
>第三行8个数字(2行号)
>第四行7个数字(3行号)
>以此类推…
>从规律来看，每行打印的都与行号有关
```c
/*
打印如下：
1111111111
222222222
33333333
4444444
555555
66666
7777
888
99
10
 */

#include <stdio.h>
int main()
{
	int i;
	int j;
	int count = 1;
	for (i = 0; i < 10; i++)
	{
		for (j = 0; j < 10 - i; j++)
		{
			printf("%d", count);
		}
		printf("\n");
		count++;
	}
	return 0;
}
```

## 009.C语言练习-用C程序打印右星形直角三角形
>用10*10网格
>第一行9个空格(10-1行号)和一个星号(1行号)
>第二行8个空格(10-2行号)和两个星号(2行号)
>第三行7个空格(10-3行号)和三个星号(3行号)
>第四行6个空格(10-4行号)和四个星号(4行号)
>以此类推…
>从规律来看，每行打印的都与行号有关

```c
/*
打印如下：
         *
        **
       ***
      ****
     *****
    ******
   *******
  ********
 *********
**********
 */

#include <stdio.h>
int main()
{
	int i;
	int j;
	for (i = 1; i <= 10; i++)
	{
		for (j = 0; j < 10 - i; j++)
		{
			printf(" ");
		}
		for (j = 0; j < i; j++)
		{
			printf("*");
		}
		printf("\n");
	}
	return 0;
}
```

## 010.C语言练习-用C程序打印数字右直角三角形
>用10*10网格
>第一行9个空格(10-1行号)和一个数字(1行号)
>第二行8个空格(10-2行号)和两个数字(2行号)
>第三行7个空格(10-3行号)和三个数字(3行号)
>第四行6个空格(10-4行号)和四个数字(4行号)
>以此类推…
>从规律来看，每行打印的都与行号有关
```c
/*
打印如下：
         1
        12
       123
      1234
     12345
    123456
   1234567
  12345678
 123456789
12345678910
 */

#include <stdio.h>
int main()
{
	int i;
	int j;
	for (i = 1; i <= 10; i++)
	{
		for (j = 0; j < 10 - i; j++)
		{
			printf(" ");
		}
		for (j = 1; j <= i; j++)
		{
			printf("%d", j);
		}
		printf("\n");
	}
	return 0;
}

```

## 011.C语言练习-用C程序打印星形右倒置直角三角形
>用10*10网格
>第0行打印0个空格和10个星号(10-0)
>第1行打印1个空格和9个星号(10-1)
>每2行打印2个空格和8个星号(10-2)
>第3号打印3个空格和7个星号(10-3)
>以此类推
>从规律来看，每行打印的都与行号有关
```c
/*
打印如下：
**********
 *********
  ********
   *******
    ******
     *****
      ****
       ***
        **
         *
 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    for (i = 0; i < 10; i++)
    {
        for (j = 0; j < i; j++)
        {
            printf(" ");
        }
        for (j = 0; j < 10-i; j++)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
```

## 012.C语言练习-用C程序打印星形右倒置直角三角形
>用10*10网格
>第0行打印0个空格10个星
>第1行打印1个空格
>第2行打印2个空格
>以此类推
>从第1行开始列如果(j==0||j==10-i-1)则打印星，否则打印空格
```c
/*
打印如下：
**********
 *       *
  *      *
   *     *
    *    *
     *   *
      *  *
       * *
        **
         *
 */

#include <stdio.h>
int main()
{
	int i;
	int j;
	for (i = 0; i < 10; i++)
	{
		for (j = 0; j < i; j++)
		{
			printf(" ");
		}
		for (j = 0; j < 10; j++)
		{
			if (i == 0)
			{
				printf("*");
			}
			else if (j == 0 || j == 10 - i - 1)
			{
				printf("*");
			}
			else
			{
				printf(" ");
			}
		}
		printf("\n");
	}
	return 0;
}

```

## 013.C语言练习-用C程序打印空心星形左直角三角形
>用10*10网格
>行号从1开始计算
>每行列号等于1或者列号等于行号打印1个星，最后一行打印10个星，否则打印空格
```c
/*
打印如下：
*
**
* *
*  *
*   *
*    *
*     *
*      *
*       *
**********
 */

#include <stdio.h>
int main()
{
	int i;
	int j;
	for (i = 1; i <= 10; i++)
	{
		for (j = 1; j <= i; j++)
		{
			if (j == 1 || j == i)
			{
				printf("*");
			}
			else if (i == 10)
			{
				printf("*");
			}
			else
			{
				printf(" ");
			}
		}
		printf("\n");
	}
	return 0;
}
```
## 014.C语言练习-用C程序打印空心星形金字塔
>用10*10网格
>第1行打印9个空格1个星
>第2行打印8个空格
>第3行打印7个空格
>以此类推
>从第1行开始列如果(j==1||j==i)则打印星，否则打印空格，最后一行打印10个星

```c
/*
 打印如下：
         *
        **
       * *
      *  *
     *   *
    *    *
   *     *
  *      *
 *       *
**********

 */

#include <stdio.h>
int main(){
	int i;
	int j;
	for(i=1;i<=10;i++){
		for(j=0;j<10-i;j++){
			printf(" ");
		}
		for(j=1;j<=i;j++){
			if (j==1||j==i){
				printf("*");
			}else if (i==10){
				printf("*");
			}else{
				printf(" ");
			}
		}
		printf("\n");
	}
	return 0;
}

```
## 015.C语言练习-用C程序打印星形棱形
>用5*10网格
>第0行打印5个空格和5个星
>第1行打印4个空格和5个星
>第2行打印3个空格和5个星

```c
/*
 打印如下：
     *****
    *****
   *****
  *****
 *****
 */

#include <stdio.h>
int main(){
	int i;
	int j;
	for(i=0;i<5;i++){
		for(j=0;j<10-5-i;j++){
			printf(" ");
		}
		for(j=0;j<5;j++){
			printf("*");
		}
		printf("\n");
	}
	return 0;
}

```

## 016.C语言练习-用C程序打印星形金字塔
>用10*10网格
>9个空格(10-1行号)和一个星号(1行号)
>第二行8个空格(10-2行号)和两个星号(2行号)
>第三行7个空格(10-3行号)和三个星号(3行号)
>第四行6个空格(10-4行号)和四个星号(4行号)
>以此类推…
>从规律来看，每行打印的都与行号有
```c
/*
 打印如下：
         *
        * *
       * * *
      * * * *
     * * * * *
    * * * * * *
   * * * * * * *
  * * * * * * * *
 * * * * * * * * *
* * * * * * * * * *
 */

#include <stdio.h>
int main(){
	int i;
	int j;
	for(i=1;i<=10;i++){
		for(j=0;j<10-i;j++){
			printf(" ");
		}
		for(j=1;j<=i;j++){
			printf("* ");
		}
		printf("\n");
	}
	return 0;
}

```

## 017.C语言练习-用C程序打印星形倒置金字塔
>用10*10网格
>第0行打印0个空格和10个星号(10-0)
>第1行打印1个空格和9个星号(10-1)
>每2行打印2个空格和8个星号(10-2)
>第3行打印3个空格和7个星号(10-3)
>以此类推
>从规律来看，每行打印的都与行号有关
```c
/*
 打印如下：
* * * * * * * * * *
 * * * * * * * * *
  * * * * * * * *
   * * * * * * *
    * * * * * *
     * * * * *
      * * * *
       * * *
        * *
         *
 */

#include <stdio.h>
int main(){
	int i;
	int j;
	for(i=0;i<10;i++){
		for(j=0;j<i;j++){
			printf(" ");
		}
		for(j=0;j<10-i;j++){
			printf("* ");
		}
		printf("\n");
	}
	return 0;
}

```

## 018.C语言练习-用C程序打印空心星形金字塔
>用10*10网格
>第1行打印9个空格
>第2行打印8个空格
>第3行打印7个空格
>以此类推
>从第1行开始列如果(j==1||j==i)则打印星，否则打印空格，最后一行打印10个星
```c
/*
 打印如下：
         *
        * *
       *   *
      *     *
     *       *
    *         *
   *           *
  *             *
 *               *
* * * * * * * * * *
 */

#include <stdio.h>
int main()
{
	int i;
	int j;
	for (i = 1; i <= 10; i++)
	{
		for (j = 0; j < 10 - i; j++)
		{
			printf(" ");
		}
		for (j = 1; j <= i; j++)
		{
			if (j == 1 || j == i)
			{
				printf("* ");
			}
			else if (i == 10)
			{
				printf("* ");
			}
			else
			{
				printf("  ");
			}
		}
		printf("\n");
	}
	return 0;
}

```

## 019.C语言练习-用C程序打印空心倒置星形金字塔
>用10*10网格
>第1行打印9个空格
>第2行打印8个空格
>第3行打印7个空格
>以此类推
>从第1行开始列如果(j==1||j==i)则打印星，否则打印空格，最后一行打印10个星
```c
/*
 打印如下：
* * * * * * * * * * 
 *               *   
  *             *     
   *           *       
    *         *         
     *       *           
      *     *             
       *   *               
        * *                 
         *                   

 */

#include <stdio.h>
int main()
{
	int i;
	int j;
	for (i = 0; i < 10; i++)
	{
		for (j = 0; j < i; j++)
		{
			printf(" ");
		}
		for (j = 0; j < 10; j++)
		{
			if (i == 0)
			{
				printf("* ");
			}
			else if (j == 0 || j == 10 - i - 1)
			{
				printf("* ");
			}
			else
			{
				printf("  ");
			}
		}
		printf("\n");
	}
	return 0;
}

```

## 020.C语言练习-C程序打印带有星形图案的锐角三角形
>绿色部份打印的是左直角三角形
>红色部份打印的是左倒置直角三角形
```c
/*
 打印如下：
*
**
***
****
*****
****
***
**
*
 */

#include <stdio.h>

int main(void)
{
    int i;
    int j;
    for (i = 1; i <= 5; i++)
    {
        for (j = 1; j <= i; j++)
        {
            printf("*");
        }
        printf("\n");
    }
    for (i = 1; i <= 5; i++)
    {
        for (j = 1; j <= 5 - i; j++)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}

```

## 021.C语言练习-C程序打印带有星形图案的锐角三角形
>绿色部份打印右星形直角三角形
>红色部份打印右倒置星形直角三角形
```c
/*
 打印如下：
    *
   **
  ***
 ****
*****
 ****
  ***
   **
    *
     
 */
#include <stdio.h>
int main()
{
    int i;
    int j;
    for (i = 1; i <= 5; i++)
    {
        for (j = 0; j < 5 - i; j++)
        {
            printf(" ");
        }
        for (j = 1; j <= i; j++)
        {
            printf("*");
        }
        printf("\n");
    }

    for (i = 1; i <= 5; i++)
    {
        for (j = 0 ; j < i; j++)
        {
            printf(" ");
        }
        for (j = 1; j <= 5-i; j++)
        {
            printf("*");
        }
        printf("\n");
    }
}
```

## 022.C语言练习-程序打印空心钻石与星星
>绿色部份打印右左倒置和右星倒置形直角三角形
>红色部份打印右星形直角三角形和右星形直角三角形
```c
/*
 打印如下：
**********
****  ****
***    ***
**      **
*        *
*        *
**      **
***    ***
****  ****
**********

 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    for (i = 0; i < 5; i++)
    {
        for (j = 0; j < 5 - i; j++)
        {
            printf("*");
        }
        for (j = 0; j < i; j++)
        {
            printf(" ");
        }
        for (j = 0; j < i; j++)
        {
            printf(" ");
        }
        for (j = 0; j < 5 - i; j++)
        {
            printf("*");
        }
        printf("\n");
    }
    for (i = 0; i < 5; i++)
    {
        for (j = 0; j <= i; j++)
        {
            printf("*");
        }
        for (j = 1; j < 5 - i; j++)
        {
            printf(" ");
        }
        for (j = 1; j < 5 - i; j++)
        {
            printf(" ");
        }
        for (j = 0; j <= i; j++)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
```

## 023.C语言练习-程序打印空心钻石与星星
>绿色部份打印左倒置三角形
>红色部份打印右三角形
```c
/*
打印如下：
* * * * * 
 * * * * 
  * * * 
   * * 
    * 
    * 
   * * 
  * * * 
 * * * * 
* * * * * 
 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    for (i = 0; i < 5; i++)
    {
        for (j = 0; j < i; j++)
        {
            printf(" ");
        }
        for (j = 0; j < 5 - i; j++)
        {
            printf("* ");
        }
        printf("\n");
    }
    for (i = 1; i <= 5; i++)
    {
        for (j = 0; j < 5 - i; j++)
        {
            printf(" ");
        }
        for (j = 1; j <= i; j++)
        {
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}

```

## 024.C语言练习-程序打印空心钻石与星星
>绿色部份打印右空心直角三角形
>红色部份打印右倒置直角三角形
```c
/*
 打印如下：
    * 
   * * 
  *   * 
 *     * 
*       * 
 *     * 
  *   * 
   * * 
    * 
 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    for (i = 1; i <= 5; i++)
    {
        for (j = 0; j < 5 - i; j++)
        {
            printf(" ");
        }
        for (j = 1; j <= i; j++)
        {
            if (j == 1 || j == i)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    for (i = 1; i < 5; i++)
    {
        for (j = 0; j < i; j++)
        {
            printf(" ");
        }
        for (j = 0; j < 5 - i; j++)
        {
            if (j == 0 || j == 5 - i - 1)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}

```

## 025.C语言练习-程序用星形图案打印1
>用了11*10网格
>如果行号为1且列号小于6打印星号
>如果列号为6打印星号
>如果行号为10打印星号
>其他打印空格
```c
/*
 打印如下：
******     
     *     
     *     
     *     
     *     
     *     
     *     
     *     
     *     
***********
 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    int middle = 6;
    for (i = 1; i <= 10; i++)
    {
        for (j = 1; j <= 11; j++)
        {
            if (i == 1 && j < middle)
            {
                printf("*");
            }
            else if (j == middle)
            {
                printf("*");
            }
            else if (i == 10)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```

## 026.C语言练习-程序用星形图案打印2
>用11*10网格
>如果行号等于1或者6或者11打印星号
>如果行号小于6且列号等于10打星号
>如果行号大于6且列号等于1打印星号
>其他打印空格
```c
/*
 打印如下：
**********
         *
         *
         *
         *
**********
*         
*         
*         
*         
**********
 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    int middle = 6;
    for (i = 1; i <= 11; i++)
    {
        for (j = 1; j <= 10; j++)
        {
            if (i == 1 || i == middle || i == 11)
            {
                printf("*");
            }
            else if (i < middle && j == 10)
            {
                printf("*");
            }
            else if (i > middle && j == 1)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```
## 027.C语言练习-程序用星形图案打印3
>用11*10网格
>如果行号等于1或者6或者11打印星号
>如果等于10打星号
>其他打印空格
```c
/*
 打印如下：
**********
         *
         *
         *
         *
**********
         *
         *
         *
         *
**********
 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    int middle = 6;
    for (i = 1; i <= 11; i++)
    {
        for (j = 1; j <= 10; j++)
        {
            if (i == 1 || i == middle || i == 11)
            {
                printf("*");
            }
            else if (j == 10)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```
## 028.C语言练习-程序用星形图案打印4
>用11*10网格
>如果列号等于1且行号小于6打印星号
>如果行号等于6打星号
>如果列号等于10打印星号
>其他打印空格
```c
/*
 打印如下：
*        *
*        *
*        *
*        *
*        *
**********
         *
         *
         *
         *
         *
 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    int middle = 6;
    for (i = 1; i <= 11; i++)
    {
        for (j = 1; j <= 10; j++)
        {
            if (j == 1 && i < middle)
            {
                printf("*");
            }
            else if (i == middle)
            {
                printf("*");
            }
            else if (j == 10)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```

## 029.C语言练习-程序用星形图案打印5
>用11*10网格
>如果行号等于1或者6或者11打印星号
>如果行号小于6或者列号等于1打印星号
>如果行号大于6或者列号等于10打印星号

```c
/*
 ============================================================================
 Name        : main.c
 Author      : SpringSongs
 Version     : 0.0.1
 Description : 程序用星形图案打印5, Ansi-style
 ============================================================================
 打印如下：
**********
*         
*         
*         
*         
**********
         *
         *
         *
         *
**********
 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    int middle = 6;
    for (i = 1; i <= 11; i++)
    {
        for (j = 1; j <= 10; j++)
        {
            if (i == 1 || i == middle || i == 11)
            {
                printf("*");
            }
            else if (i < middle && j == 1)
            {
                printf("*");
            }
            else if (i > middle && j == 10)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```

## 030.C语言练习-程序用星形图案打印6
>用11*10网格
>如果行号等于1或者6或者11打印星号
>如果列号等于1打印星号
>如果行号大于6或者列号等于10打印星号
```c
/*
 打印如下：
**********
*         
*         
*         
*         
**********
*        *
*        *
*        *
*        *
**********
 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    int middle = 6;
    for (i = 1; i <= 11; i++)
    {
        for (j = 1; j <= 10; j++)
        {
            if (i == 1 || i == middle || i == 11)
            {
                printf("*");
            }
            else if (j == 1)
            {
                printf("*");
            }
            else if (i > middle && j == 10)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```
## 031.C语言练习-程序用星形图案打印7
>用10*10网格
>如果行号等于1打印星号
>如果列号等于10打印星号
>其他打印空格
```c
/*
 打印如下：
**********
         *
         *
         *
         *
         *
         *
         *
         *
         *
 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    int middle = 6;
    for (i = 1; i <= 10; i++)
    {
        for (j = 1; j <= 10; j++)
        {
            if (i == 1)
            {
                printf("*");
            }
            else if (j == 10)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```
## 032.C语言练习-程序用星形图案打印8
>用11*10网格
>如果行号等于1或者6或者10打印星号
>如果列号等于1或者10打印星号
>其他打印空格
```c
/*
 打印如下：
**********
*        *
*        *
*        *
*        *
**********
*        *
*        *
*        *
*        *
**********
 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    int middle = 6;
    for (i = 1; i <= 11; i++)
    {
        for (j = 1; j <= 10; j++)
        {
            if (i == 1 || i == middle || i == 11)
            {
                printf("*");
            }
            else if (j == 1 || j == 10)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```

## 033.C语言练习-程序用星形图案打印9
>用11*10网格
>如果行号等于1或者6或者11打印星号
>如果行号小于6且列号等于1打印星号
>如果列号等于10打印星号
>其他打印空格
```c
/*
 打印如下：
**********
*        *
*        *
*        *
*        *
**********
         *
         *
         *
         *
**********
 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    int middle = 6;
    for (i = 1; i <= 11; i++)
    {
        for (j = 1; j <= 10; j++)
        {
            if (i == 1 || i == middle || i == 11)
            {
                printf("*");
            }
            else if (j == 1 && i < middle)
            {
                printf("*");
            }
            else if (j == 10)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```

## 034.C语言练习-程序用星形图案打印0
>用10*10网格
>如果行号等于1或者10打印星号
>如果列号等于1或者10打印星号
>其他打印空格
```c
/*
 打印如下：
**********
*        *
*        *
*        *
*        *
*        *
*        *
*        *
*        *
**********

 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    for (i = 1; i <= 10; i++)
    {
        for (j = 1; j <= 10; j++)
        {
            if (i == 1 || i == 10)
            {
                printf("*");
            }
            else if (j == 1 || j == 10)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```
## 035.C语言练习-程序用星形图案打印A
>用11*10网格
>如果行号等于1或者6打印星号
>如果列号等于1或者10打印星号
>其他打印空格
```c
/*
 打印如下：
**********
*        *
*        *
*        *
*        *
**********
*        *
*        *
*        *
*        *
*        *


 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    int middle = 6;
    for (i = 1; i <= 11; i++)
    {
        for (j = 1; j <= 10; j++)
        {
            if (i == 1 || i == middle)
            {
                printf("*");
            }
            else if (j == 1 || j == 10)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```

## 036.C语言练习-程序用星形图案打印B
>用11*10网格
>如果行号等于1或者6或者11打印星号
>如果列号等于2或者10打印星号
>其他打印空格
```c
/*
 打印如下：
**********
 *       *
 *       *
 *       *
 *       *
**********
 *       *
 *       *
 *       *
 *       *
**********


 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    int middle = 6;
    for (i = 1; i <= 11; i++)
    {
        for (j = 1; j <= 10; j++)
        {
            if (i == 1 || i == middle || i == 11)
            {
                printf("*");
            }
            else if (j == 2 || j == 10)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```

## 037.C语言练习-程序用星形图案打印C
>用10*10网格
>如果行号等于1或者10打印星号
>如果列号等于1打印星号
>其他打印空格
```c
/*
 打印如下：
**********
*         
*         
*         
*         
*         
*         
*         
*         
**********
 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    for (i = 1; i <= 10; i++)
    {
        for (j = 1; j <= 10; j++)
        {
            if (i == 1 || i == 10)
            {
                printf("*");
            }
            else if (j == 1)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```

## 038.C语言练习-程序用星形图案打印D
>用10*10网格
>如果行号等于1或者10打印星号
>如果列号等于2或者10打印星号
>其他打印空格
```c
/*
 打印如下：
**********
 *       *
 *       *
 *       *
 *       *
 *       *
 *       *
 *       *
 *       *
**********
 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    for (i = 1; i <= 10; i++)
    {
        for (j = 1; j <= 10; j++)
        {
            if (i == 1 || i == 10)
            {
                printf("*");
            }
            else if (j == 2 || j == 10)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```
## 039.C语言练习-程序用星形图案打印E
>用11*10网格
>如果行号等于1或者6或者11打印星号
>如果列号等于1打印星号
>其他打印空格
```c
/*
 打印如下：
**********
*         
*         
*         
*         
**********
*         
*         
*         
*         
**********
 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    int middle = 6;
    for (i = 1; i <= 11; i++)
    {
        for (j = 1; j <= 10; j++)
        {
            if (i == 1 || i == middle || i == 11)
            {
                printf("*");
            }
            else if (j == 1)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```
## 040.C语言练习-程序用星形图案打印F
>用11*10网格
>1或者6打印星号
>如果列号等于1打印星号
>其他打印空格
```c
/*
 打印如下：
**********
*         
*         
*         
*         
**********
*         
*         
*         
*         
*     
 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    int middle = 6;
    for (i = 1; i <= 11; i++)
    {
        for (j = 1; j <= 10; j++)
        {
            if (i == 1 || i == middle)
            {
                printf("*");
            }
            else if (j == 1)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```

## 041.C语言练习-程序用星形图案打印G
>用11*10网格
>如果行号等于1或者11打印星号
>如果列号等于1打印星号
>如果列号等于10且行号大于6打印星号
>其他打印空格
```c
/*
 打印如下：
**********
*         
*         
*         
*         
*         
*        *
*        *
*        *
*        *
**********  
 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    int middle = 6;
    for (i = 1; i <= 11; i++)
    {
        for (j = 1; j <= 10; j++)
        {
            if (i == 1 || i == 11)
            {
                printf("*");
            }
            else if (j == 1)
            {
                printf("*");
            }
            else if (j == 10 && i > middle)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```
## 042.C语言练习-程序用星形图案打印H
>用11*10网格
>如果行号等于6打印星号
>如果列号等于1或者10打印星号
>其他打印空格
```c
/*
 打印如下：
*        *
*        *
*        *
*        *
*        *
**********
*        *
*        *
*        *
*        *
*        *
 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    int middle = 6;
    for (i = 1; i <= 11; i++)
    {
        for (j = 1; j <= 10; j++)
        {
            if (i == middle)
            {
                printf("*");
            }
            else if (j == 1 || j == 10)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```
## 043.C语言练习-程序用星形图案打印I
>用10*11网格
>如果行号等于1或者10打印星号
>如果列号等于6打印星号
>其他打印空格
```c
/*
 打印如下：
***********
     *     
     *     
     *     
     *     
     *     
     *     
     *     
     *     
***********

 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    int middle = 6;
    for (i = 1; i <= 10; i++)
    {
        for (j = 1; j <= 11; j++)
        {
            if (i == 1 || i == 10)
            {
                printf("*");
            }
            else if (j == middle)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```
## 044.C语言练习-程序用星形图案打印J
>用10*11网络
>如果行号等于1打印星号
>如果列号等于6打印星号
>如果行号等于10且列号小于6打印星号
>其他打印空格
```c
/*
 打印如下：
***********
     *     
     *     
     *     
     *     
     *     
     *     
     *     
     *     
******     
 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    int middle = 6;
    for (i = 1; i <= 10; i++)
    {
        for (j = 1; j <= 11; j++)
        {
            if (i == 1)
            {
                printf("*");
            }
            else if (j == middle)
            {
                printf("*");
            }
            else if (j < middle && i == 10)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```
## 045.C语言练习-程序用星形图案打印K
>对于第一部分(用绿色标记)，第一列有星号，然后有空格
>然后又是星号。当行数增加时，请注意星星之间的间距
>减少。使用这个条件(column <= (row_length - row))
>对于第二部分(用红色标记)，第一列有星号，然后有空格
>然后又是星号。随着行数的增加，星星之间的间距也会增加
>增加。使用这个条件(column == row)
```c
/*
 打印如下：
*    *
*   *
*  *
* *
**
**    
* *   
*  *  
*   * 
*    *
 */

#include <stdio.h>
int main()
{
    int row, column;
    int row_length = 5;
    int column_length = 5;
    for (row = 1; row <= row_length; row++)
    {
        printf("*");
        for (column = 1; column <= column_length; column++)
        {
            if (column <= (row_length - row))
            {
                printf(" ");
            }
            else
            {
                printf("*");
                break;
            }
        }
        printf("\n");
    }
    for (row = 1; row <= row_length; row++)
    {
        printf("*");
        for (column = 1; column <= column_length; column++)
        {
            if (column == row)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```
## 046.C语言练习-程序用星形图案打印L
>用10*10网络
>如果列号等于1打印星号
>如果行号等于10打印星号
>其他打印空格
```c
/*
 打印如下：
*         
*         
*         
*         
*         
*         
*         
*         
*         
**********
 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    for (i = 1; i <= 10; i++)
    {
        for (j = 1; j <= 10; j++)
        {
            if (j == 1)
            {
                printf("*");
            }
            else if (i == 10)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```
## 047.C语言练习-程序用星形图案打印M
>用10*11网格
>如果行号等于1打印星号
>如果列号等于1或者11打印星号
>如果列号等于6或者行号小于等于5打印星号
>其他打印空格
```c
/*
 打印如下：
***********
*    *    *
*    *    *
*    *    *
*    *    *
*         *
*         *
*         *
*         *
*         *
 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    for (i = 1; i <= 10; i++)
    {
        for (j = 1; j <= 11; j++)
        {
            if (j == 1 || j == 11)
            {
                printf("*");
            }
            else if (i == 1)
            {
                printf("*");
            }
            else if (j == 6 && i <= 5)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```
## 048.C语言练习-程序用星形图案打印N
>用10*10网格
>如果列号等于1或者等于10打印星号
>如果列号等于行号打印星号
>其他打印空格
```c
/*
 打印如下：
*        *
**       *
* *      *
*  *     *
*   *    *
*    *   *
*     *  *
*      * *
*       **
*        *

 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    for (i = 1; i <= 10; i++)
    {
        for (j = 1; j <= 10; j++)
        {
            if (j == 1 || j == 10)
            {
                printf("*");
            }
            else if (j == i)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```
## 049.C语言练习-程序用星形图案打印O
>用10*10网格
>如果行号等于1或者10打印星号
>如果列号等于1或者10打印星号
>其他打印空格
```c
/*
 打印如下：
**********
*        *
*        *
*        *
*        *
*        *
*        *
*        *
*        *
**********

 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    for (i = 1; i <= 10; i++)
    {
        for (j = 1; j <= 10; j++)
        {
            if (j == 1 || j == 10)
            {
                printf("*");
            }
            else if (i == 1 || i == 10)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```
## 050.C语言练习-程序用星形图案打印P
>用11*10网格
>如果行号等于1或者6打印星号
>如果列号等于1打印星号
>如果列号等于10且行号小于6打印星号
>其他打印空格
```c
/*
 打印如下：
**********
*        *
*        *
*        *
*        *
**********
*         
*         
*         
*         

 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    for (i = 1; i <= 10; i++)
    {
        for (j = 1; j <= 10; j++)
        {
            if (i == 1 || i == 6)
            {
                printf("*");
            }
            else if (j == 1)
            {
                printf("*");
            }
            else if (j == 10 && i < 6)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```
## 051.C语言练习-程序用星形图案打印Q
>用10*10网格
>如果行号等于1或者10打印星号
>如果列号等于1或者10打印星号
>如果行号大于等于6且列号等于行号打印星号
>其他打印空格
```c
/*
 打印如下：
**********
*        *
*        *
*        *
*        *
*    *   *
*     *  *
*      * *
*       **
**********    

 */

#include <stdio.h>
int main()
{
    int i;
    int j;
    for (i = 1; i <= 10; i++)
    {
        for (j = 1; j <= 10; j++)
        {
            if (i == 1 || i == 10)
            {
                printf("*");
            }
            else if (j == 1 || j == 10)
            {
                printf("*");
            }
            else if (j == i && i >= 6)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
```