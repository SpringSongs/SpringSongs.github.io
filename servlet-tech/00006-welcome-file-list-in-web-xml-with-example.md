---
title: Web.Xml中的默认页配置
date: 2011-01-10
author: SpringSongs
tags: 
  - Servlet
location: China  
---
## 如何运行

如果存在，则第一个Web服务器将查找welcome-file-list，然后会寻找第一个welcome-file中定义的文件。如果该文件存在，则将控制权转移到该文件，否则Web服务器将查看下一个欢迎文件，依此类推。

如果不存在欢迎文件列表或不存在在欢迎文件列表中定义的文件，则服务器将按照以下顺序查看默认的欢迎文件：index.html，index.htm，index.jsp，default.html， default.htm和default.jsp。

## 默认配置
```xml
<welcome-file-list>
    <welcome-file>index.html</welcome-file>
    <welcome-file>index.htm</welcome-file>
    <welcome-file>index.jsp</welcome-file>
    <welcome-file>default.html</welcome-file>
    <welcome-file>default.htm</welcome-file>
    <welcome-file>default.jsp</welcome-file>
</welcome-file-list>
```
## web.xml配置
### web.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
xmlns="http://java.sun.com/xml/ns/javaee" 
xmlns:web="http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" 
xsi:schemaLocation="http://java.sun.com/xml/ns/javaee 
http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" 
id="WebApp_ID" version="2.5">
 
  <welcome-file-list>
    <welcome-file>index.html</welcome-file>
  </welcome-file-list>
 
</web-app>
```
### index.html
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 
Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>HelloWorld</title>
</head>
	<body>
		<h1>HelloWorld!</h1>  
	</body>
</html>
```