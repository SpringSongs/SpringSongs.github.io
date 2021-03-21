---
title: JavaScript基础
---
## 语言简介
JavaScript（缩写：JS）是一门完备的 动态编程语言。当应用于 HTML 文档时，可为网站提供动态交互特性。
JavaScript 的应用场合极其广泛，简单到幻灯片、照片库、浮动布局和响应按钮点击，复杂到游戏、2D/3D 动画、大型数据库驱动程序等等。
## “Hello World!”示例
1. 首先创建一个目录，在目录下分别创建一个index.html，main.js文件。
2. 在main.js文件写入以下代码
``` js
document.write("Hello World!");
```
3. 在index.html文件写入以下代码
``` js
<script src="main.js"></script>
```
4. 用浏览器打开index.html即可
## 数据类型
最新的 ECMAScript 标准定义了 8 种数据类型:
#### 基本类型
- `Number` 数值
- `String` 字符串
- `Boolean` 布尔型
- `Null` 空
- `BigInt` 可以表示任意精度格式的整数
- `Undefined` 未定义
- `Symbol` (ECMAScript 2015 新增)独一无二的值
#### 引用数据类型
- `Object` 对象

####  实例
``` js
    var param;
	console.log(typeof(param)); // param 为undefined
	
	param = "SpringSongs";
	console.log(typeof(param)); // param 为字符串
	
	param = 101010;
	console.log(typeof(param)); // param 为数字
	
	param = true;
	console.log(typeof(param)); // param 为布尔
	
	param = null;
	console.log(typeof(param)); // param 为对象
	
	param = {};
	console.log(typeof(param)); // param 为对象
	
	param = [1, 2, 3, 4, 5];
	console.log(typeof(param)); // param 为对象
	
	param = function() {};
	console.log(typeof(param)); // param 为函数
	
	param = Symbol('param');
	console.log(typeof(param)); // param 为Symbol
``` 
::: tip
1. JavaScript 是一种弱类型或者说动态语言。这意味着你不用提前声明变量的类型，在程序运行过程中，类型会被自动确定。这也意味着你可以使用同一个变量保存不同类型的数据。
2. 使用 Array.isArray 或者 Object.prototype.toString.call区分数组和普通对象
3. 由于 null 代表的是空指针（大多数平台下值为 0x00），因此，null 的类型标签是 0，typeof null 也因此返回 "object"。
:::

##  检查数据类型方法
1. `typeof` 检查类型方法。
``` js
    var param;
	console.log(typeof(param)); // param 为undefined
	
	param = "SpringSongs";
	console.log(typeof(param)); // param 为字符串
	
	param = 101010;
	console.log(typeof(param)); // param 为数字
	
	param = true;
	console.log(typeof(param)); // param 为布尔
	
	param = null;
	console.log(typeof(param)); // param 为对象
	
	param = {};
	console.log(typeof(param)); // param 为对象
	
	param = [1, 2, 3, 4, 5];
	console.log(typeof(param)); // param 为对象
	
	param = function() {};
	console.log(typeof(param)); // param 为函数
	
	param = Symbol('param');
	console.log(typeof(param)); // param 为Symbol
``` 
2. `instanceof` 检测引用数据类型，不能用于检测null和undefined。
``` js
    var param=function(){};
	if (param instanceof Array) {
		console.log("This is an Array");
	}
	if (param instanceof Boolean) {
		console.log("This is a Boolean");
	}
	if (param instanceof Date) {
		console.log("This is a Date");
	}
	if (param instanceof String) {
		console.log("This is a String");
	}
	if (param instanceof Function) {
		console.log("This is a function");
	}
```
3. `constructor` constructor能用于检测js的基本类型和引用类型，但当对象的原型更改之后，constructor便失效了。
``` js
	var param = new Array();
	if (param.constructor == Array) {
		console.log("This is an Array");
	}
	if (param.constructor == Boolean) {
		console.log("This is a Boolean");
	}
	if (param.constructor == Date) {
		console.log("This is a Date");
	}
	if (param.constructor == String) {
		console.log("This is a String");
	}
```
4. `Object.prototype.toString.call()` 可用于检测js所有的数据类型。
``` js
    console.log(Object.prototype.toString.call(null));//”[object Null]”
	console.log(Object.prototype.toString.call(undefined));//”[object Undefined]”
	console.log(Object.prototype.toString.call('SpringSongs'));//”[object String]”
	console.log(Object.prototype.toString.call(123));//”[object Number]”
	console.log(Object.prototype.toString.call(true));//”[object Boolean]”
	console.log(Object.prototype.toString.call(function(){}));//”[object Function]”
```

## 类型转换
- `String()` 可用于任意类型的数字、文字、变量或表达式。
- `toString()` 可用于任意类型的数字、文字、变量或表达式。
- `parseFloat()` 解析字符串并返回浮点数。
- `parseInt()` 解析字符串并返回整数。
- `Boolean()` 数值

## 分支结构之简单if语句
::: tip
	语法：
    if (条件表达式) {        语句块;    }
:::
#### 实例
``` js
	var condition=true;
	if (condition) {
	  console.log("code to run if condition is true");
	}
```
## 分支结构之简单if-else语句
::: tip
	语法：
    if (表达式) {        语句块1;    } else {        语句块2;    }
:::
#### 实例
``` js
	var condition=true;
	if (condition) {
	  console.log("code to run if condition is true");
	} else {
	  console.log("code to run if condition is false");
	}
```
## 分支结构之多重if-else语句
::: tip
	语法：
    if(表达式1) {        语句块1;    } else if(表达式2) {        语句块2;    ...    } else if(表达式n) {        语句块n;    } else {        语句块n+1;    }
:::
``` js
	var choice = 'sunny';
	if  (choice==='sunny') {
			console.log('sunny');
	}else if (choice==='rainy'){
			console.log('rainy');
	}else if (choice==='snowing'){
			console.log('snowing');
	}else if (choice==='overcast'){
			console.log('overcast');
	}else{
		console.log('sunny');
	}
```
## 分支结构之分支语句
::: tip
	语法：
    switch(表达式) {        case 值1:            语句块1;            break;        case 值2:            语句块2;            break;        …        case 值n:            语句块n;            break;        default:            语句块n+1;        break;    }
:::
#### 实例
``` js
	var choice = 'sunny';
	switch (choice) {
		case 'sunny':
			console.log('sunny');
			break;
		case 'rainy':
			console.log('rainy');
			break;
		case 'snowing':
			console.log('snowing');
			break;
		case 'overcast':
			console.log('overcast');
			break;
		default:
			console.log('sunny');
	}
```
## 循环结构之for循环
::: tip
	语法：
	for(条件表达式1;条件表达式2;条件表达式3) {		语句块;	}
:::
#### 实例
``` js
	//for循环
	var arr=[1,2,3,4,5,6,7,8,9,10];
	for(var i=0;i<arr.length;i++){
		console.log(arr[i])
	}
```
## 循环结构之for...of循环
::: tip
	语法：
	for(变量 of 对象) {		语句块;	}
:::
#### 实例
``` js
	var language = ['Java', 'Go', 'C', 'C++', 'Python', 'C#', 'PHP'];
	for(let i of language){
		console.log(i);
	}
	//输出Java Go C C++ Python C# PHP
```
## 循环结构之for...in循环
::: tip
	语法：
	for(变量 in 对象) {		语句块;	}
:::
#### 实例
``` js
	var language = ['Java', 'Go', 'C', 'C++', 'Python', 'C#', 'PHP'];
	for(let i in language){
		console.log(i);
	}
	//输出下标 0 1 2 3 4 5 6
```
## 循环结构之while循环
::: tip
	语法：
	while(条件表达式) {		语句块;	}
:::
#### 实例
``` js
	//while循环
	var i=0;
	while(i<arr.length){
		console.log(arr[i]);
		i++;
	}
```
## 循环结构之do-while循环
先执行,该循环至少会执行一次，即使条件为 false 它也会执行一次。
::: tip
	语法：
	do {		语句块;	}while(条件表达式);
:::
#### 实例
``` js
	var i=0;
	do{
		console.log(i);
		i++;
	}while(i<10);
```
## 三元运算符
``` js
	var condition=true;
	condition?"true":"false";
	console.log(condition);
```
## 结束语句之break语句
``` js
	var arr=[1,2,3,4,5,6,7,8,9,10];
	for(var i=0;i<arr.length;i++){
		console.log(arr[i])
		if (i===5){ //假如i===5终止循环
			break;
		}
	}
	
```
## 结束语句之continue语句
``` js
    var arr=[1,2,3,4,5,6,7,8,9,10];
	for(var i=0;i<arr.length;i++){
		console.log(arr[i])
		if (i===5){ //假如i===5结束本次循环
			continue;
		}
	}
```
## 对象属性与方法
在 JavaScript中，几乎所有的事物都是对象。
真实生活中，一个人是一个对象。
对象有它的属性，如姓名和体重身高喜好等，方法有说话，运动，吃饭等:
### 对象定义
#### 属性实例一
``` js
	var person={userName:"SpringSongs",weight:150,height:170,love:'吉他'}
	console.log(person);
	console.log(person.userName);
	console.log(person.weight);
	console.log(person.height);
	console.log(person.love);
	//循环用来遍历对象
	for(var item in person){
		console.log(person[item]);
	}
```
#### 属性实例二
``` js
	var person={}
	person.userName="SpringSongs";    //添加对象成员
	person.weight=150;                //添加对象成员
	person.height=170;				  //添加对象成员
	person.love='吉他';				   //添加对象成员
	console.log(person);
	console.log(person.userName);     //对象查找
	console.log(person.weight);		  //对象查找
	console.log(person.height);       //对象查找
	console.log(person.love);         //对象查找
	//循环用来遍历对象
	for(var item in person){
		console.log(person[item]);
	}
```
#### 属性实例三
``` js
	var person={}
	person['userName']="SpringSongs"; //点语法添加
	person['weight']=150;             //点语法添加
	person['height']=170;			  //点语法添加
	person['love']="吉他";			   //点语法添加
	console.log(person);
	console.log(person['userName']);     //点语法对象查找
	console.log(person['weight']);       //点语法对象查找
	console.log(person['height']);       //点语法对象查找
	console.log(person['love']);	     //点语法对象查找
	//循环用来遍历对象
	for(var item in person){
		console.log(person[item]);
	}
```
### 对象方法
#### 方法实例一
``` js
	var person={
		talk:function(){
			console.log("我是SpringSongs");
		},
		eat:function(){
			console.log("我正在吃饭");
		},
		exercise:function(){
			console.log("我正在运动");
		}
	}
	//方法调用
	person.talk();
	person.eat();
	person.exercise();
```
#### 方法实例二
``` js
	//使用 prototype 属性可以给对象的构造函数添加新的属性
	var Person=function(){};
	Person.prototype.talk = function() {
		console.log("我是SpringSongs");
	}
	Person.prototype.eat = function() {
		console.log("我正在吃饭");
	}
	Person.prototype.exercise = function() {
		console.log("我正在运动");
	}
	//创建对象
	var person=new Person();
	//方法调用
	person.talk();
	person.eat();
	person.exercise();
```
## 数组与方法
- `fill()` 将数组中指定区间的所有元素的值，都替换成某个固定的值。
``` js
	var language=['Java','Go','C','C++','Python','C#','PHP'];
	console.log(language.fill('chinese',1,6).toString());
	//输出 Java,chinese,chinese,chinese,chinese,chinese,PHP
```
- `pop()` 删除数组的最后一个元素，并返回这个元素。
``` js
	var language = ['Java', 'Go', 'C', 'C++', 'Python', 'C#', 'PHP'];
	console.log(language.pop().toString());
	//输出 PHP
```
- `push()` 在数组的末尾增加一个或多个元素，并返回数组的新长度。
``` js
	var language = ['Java', 'Go', 'C', 'C++', 'Python', 'C#', 'PHP'];
	console.log(language.push('JavaScript').toString());
	//输出 8
```
- `reverse()` 颠倒数组中元素的排列顺序，即原先的第一个变为最后一个，原先的最后一个变为第一个。
``` js
	var language = ['Java', 'Go', 'C', 'C++', 'Python', 'C#', 'PHP'];
	console.log(language.reverse().toString());
	//输出  PHP,C#,Python,C++,C,Go,Java
```
- `shift()` 删除数组的第一个元素，并返回这个元素。
``` js
	var language = ['Java', 'Go', 'C', 'C++', 'Python', 'C#', 'PHP'];
	console.log(language.shift().toString());
	//输出 Java
```
- `sort()` 对数组元素进行排序，并返回当前数组。
``` js
	var language = ['Java', 'Go', 'C', 'C++', 'Python', 'C#', 'PHP'];
	console.log(language.sort().toString());
	//输出 C,C#,C++,Go,Java,PHP,Python
```
- `splice()` 在任意的位置给数组添加或删除任意个元素。
``` js
	var language = ['Java', 'Go', 'C', 'C++', 'Python', 'C#', 'PHP'];
	//从第 1 位开始删除 0 个元素，插入“JavaScript”
	language.splice(1,0,'JavaScript');
	console.log(language.toString());
	//输出 Java,JavaScript,Go,C,C++,Python,C#,PHP
```
- `unshift()` 在数组的开头增加一个或多个元素，并返回数组的新长度。
``` js
	var language = ['Java', 'Go', 'C', 'C++', 'Python', 'C#', 'PHP'];
	console.log(language.unshift('JavaScript').toString());
	//输出 8
```
- `concat()` 返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组。
``` js
	var language = ['Java', 'Go', 'C', 'C++', 'Python', 'C#', 'PHP'];
	var languageOne=['TypeScript','Vue','React','Angular'];
	console.log(language.concat(languageOne).toString());
	//输出 Java,Go,C,C++,Python,C#,PHP,TypeScript,Vue,React,Angular
```
- `includes()` 判断当前数组是否包含某指定的值，如果是返回 true，否则返回 false。
``` js
	var language = ['Java', 'Go', 'C', 'C++', 'Python', 'C#', 'PHP'];
	console.log(language.includes('Java').toString());
	//输出 true
```
- `join()` 连接所有数组元素组成一个字符串。
``` js
    var language = ['Java', 'Go', 'C', 'C++', 'Python', 'C#', 'PHP'];
	console.log(language.join());
	//输出 Java,Go,C,C++,Python,C#,PHP
```
- `slice()` 抽取当前数组中的一段元素组合成一个新数组。
``` js
	//语法 arr.slice([begin[, end]])
	var language = ['Java', 'Go', 'C', 'C++', 'Python', 'C#', 'PHP'];
	console.log(language.slice(1).toString());
	//输出 Go,C,C++,Python,C#,PHP
```
- `indexOf()` 返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。
``` js
	var language = ['Java', 'Go', 'C', 'C++', 'Python', 'C#', 'PHP'];
	console.log(language.indexOf('Java').toString());
	//输出 0
```
- `lastIndexOf()` 返回数组中最后一个（从右边数第一个）与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。
``` js
	var language = ['Java', 'Go', 'C', 'C++', 'Python', 'C#', 'PHP','Python'];
	console.log(language.lastIndexOf('Python').toString());
	//输出 7
```
- `entries()` 返回一个数组迭代器对象，该迭代器会包含所有数组元素的键值对。
``` js
	var language = ['Java', 'Go', 'C', 'C++', 'Python', 'C#', 'PHP','Python'];
	var iterator=language.entries();
	for(var i=0;i<language.length+1;i++){
		var item=iterator.next();
		if (item.done!=true){
			console.log(item.value);
		}
	}
	//输出 [0, "Java"]
	//输出 [1, "Go"]
	//输出 [2, "C"]
	//输出 [3, "C++"]
	//输出 [4, "Python"]
	//输出 [5, "C#"]
	//输出 [6, "PHP"]
	//输出 [7, "Python"]
```
- `every()` 如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false。
``` js
	var language = ['Java', 'Go', 'C', 'C++', 'Python', 'C#', 'PHP','Python'];
	console.log(language.every((currentValue)=>currentValue.length>1));
	//输出 false
```
- `some()` 如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false。
``` js
	var language = ['Java', 'Go', 'C', 'C++', 'Python', 'C#', 'PHP','Python'];
	console.log(language.some((currentValue)=>currentValue.length>1));
	//输出 true
```
- `filter()` 将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回。
``` js
	var language = ['Java', 'Go', 'C', 'C++', 'Python', 'C#', 'PHP','Python'];
	console.log(language.filter((currentValue)=>currentValue.length>1).toString());
	//输出 Java,Go,C++,Python,C#,PHP,Python
```
- `find()` 找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined。
``` js
	var language = ['Java', 'Go', 'C', 'C++', 'Python', 'C#', 'PHP','Python'];
	console.log(language.find((currentValue)=>currentValue.length>1).toString());
	//输出 Java
```
- `findIndex()` 找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 -1。
``` js
	var language = ['Java', 'Go', 'C', 'C++', 'Python', 'C#', 'PHP','Python'];
	console.log(language.findIndex((currentValue)=>currentValue.length>1).toString());
	//输出 0
```
- `keys()` 返回一个数组迭代器对象，该迭代器会包含所有数组元素的键。
``` js
	var language = ['Java', 'Go', 'C', 'C++', 'Python', 'C#', 'PHP','Python'];
	var iterator=language.keys();
	for (const key of iterator) {
	  console.log(key);
	}
	//输出 0,1,2,3,4,5,6,7
```
- `map()` 返回一个由回调函数的返回值组成的新数组。
``` js
	var language = ['Java', 'Go', 'C', 'C++', 'Python', 'C#', 'PHP','Python'];
	console.log(language.map((currentValue)=>currentValue+' language').toString());
	//输出 Java language,Go language,C language,C++ language,Python language,C# language,PHP language,Python language
```
## 字符串方法
| 方法        | 描述           |
| ------------- |:-------------:|
| charAt, charCodeAt, codePointAt      | 返回字符串指定位置的字符或者字符编码。 |
| indexOf, lastIndexOf      | 分别返回字符串中指定子串的位置或最后位置。 |
| startsWith, endsWith, includes      | 返回字符串是否以指定字符串开始、结束或包含指定字符串。 |
| concat      | 连接两个字符串并返回新的字符串。 |
| fromCharCode, fromCodePoint      | 从指定的Unicode值序列构造一个字符串。这是一个String类方法，不是实例方法。 |
| split      | 通过将字符串分离成一个个子串来把一个String对象分裂到一个字符串数组中。 |
| slice      | 从一个字符串提取片段并作为新字符串返回。 |
| substring, substr      | 分别通过指定起始和结束位置，起始位置和长度来返回字符串的指定子集。 |
| match, replace, search      | 通过正则表达式来工作。 |
| toLowerCase, toUpperCase      | 分别返回字符串的小写表示和大写表示。 |
| normalize     | 按照指定的一种 Unicode 正规形式将当前字符串正规化。 |
| repeat     | 将字符串内容重复指定次数后返回。 |
| trim     | 去掉字符串开头和结尾的空白字符。 |
## 数字方法
| 方法        | 描述           |
| ------------- |:-------------:|
| abs()     | 绝对值 |
| sin(), cos(), tan()     | 标准三角函数;参数为弧度。 |
| asin(), acos(), atan(), atan2()     | 反三角函数; 返回值为弧度。 |
| sinh(), cosh(), tanh()     | 双曲三角函数; 参数为弧度。 |
| asinh(), acosh(), atanh()     | 反双曲三角函数;返回值为弧度。 |
| pow(), exp(), expm1(), log10(), log1p(), log2()     | 指数与对数函数。 |
| floor(), ceil()     | 返回小于等于参数的最大整数；返回大于等于参数的最小整数。 |
| min(), max()     | 返回一个以逗号间隔的数字参数列表中的较小或较大值(分别地)。 |
| random()    | 随机数0-0.999。 |
| round(), fround(), trunc(),    | 四舍五入和截断函数。 |
| sqrt(), cbrt(), hypot()    | 平方根，立方根，所有参数平方和的平方根 两个参数平方和的平方根 |
| sign()    | 数字的符号, 说明数字是否为正、负、零。 |
## 时间方法
- `new Date()` 无参数 : 创建今天的日期和时间。
- `.getFullYear()` 获取年份。
- `.getMonth()` 获取月。
- `.getDate()` 获取日。
- `.getHours()` 获取小时。
- `.getMinutes()` 获取分钟。
- `.getSeconds()` 获取秒。
- `.getDay()` 获取第几天。
- `.getTime()` 获取时间戳。
- `set` 用于设置Date对象的日期和时间的值。
## 正则表达式
- `new RegExp('')` 创建一个正则表达式。
- `\` 转义（Escaping）。
- `^` 匹配输入的开始。
- `$` 匹配输入的结束。
- `*` 匹配前一个表达式 0 次或多次。等价于 {0,}。
- `+` 匹配前面一个表达式 1 次或者多次。{1,}。
- `?` 匹配前面一个表达式 0 次或者 1 次。等价于 {0,1}。
- `.` （小数点）默认匹配除换行符之外的任何单个字符。
- `{n}` n 是一个正整数，匹配了前面一个字符刚好出现了 n 次。
- `{n,}` n是一个正整数，匹配前一个字符至少出现了n次。
- `{n,m}` n 和 m 都是整数。匹配前面的字符至少n次，最多m次。如果 n 或者 m 的值是0， 这个值被忽略。
- `[xyz]` 一个字符集合。匹配方括号中的任意字符，包括转义序列。
- `[xyz]` 一个反向字符集。也就是说， 它匹配任何没有包含在方括号中的字符。你可以使用破折号（-）来指定一个字符范围。
- `\d` 匹配一个数字。等价于[0-9]。
- `\D` 匹配一个非数字字符。等价于[^0-9]。
- `\s` 匹配一个空白字符，包括空格、制表符、换页符和换行符。
- `\S` 匹配一个非空白字符。
- `\w` 匹配一个单字字符（字母、数字或者下划线）。等价于 [A-Za-z0-9_]。
- `\W` 匹配一个非单字字符。等价于 [^A-Za-z0-9_]。