---
title: Servlet上下文参数和ServletContext接口
date: 2011-01-22
author: SpringSongs
tags: 
  - Servlet
location: China  
---
## 上下文参数：
上下文参数是指应用程序所有servlet的初始化参数。<context-param>属性用于定义上下文参数。<context-param>属性具有两个主要的子属性<param-name>和<param-value>。<param-name>包含参数的名称，而<param-value>包含参数的值。
## ServletContext接口：
ServletContext接口用于访问上下文参数。
## ServletContext接口的常用方法：
1. getInitParameter（String name）：如果参数存在，则返回指定参数的值，否则返回null。
2. getInitParameterNames（）：如果servlet具有上下文参数，则将上下文参数的名称作为Enumeration返回，否则返回空的Enumeration。
3. setAttribute（String name，Object object）：将指定的对象绑定到指定的属性名称，并将此属性放入应用程序范围。
4. getAttribute（String name）：如果存在则返回指定的属性，否则返回null。
5. removeAttribute（String name）：删除指定的属性。
## 示例
### ContextParamExample.java
```java
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
public class ContextParamExample extends HttpServlet {
   private static final long serialVersionUID = 1L;
 
    public ContextParamExample() {
 
    }
 
    protected void doGet(HttpServletRequest request, 
		HttpServletResponse response)
	              throws ServletException, IOException {
	response.setContentType("text/html"); 
    	PrintWriter out = response.getWriter();
    	ServletContext context=getServletContext();  
    	String userName = context.getInitParameter("userName");
    	out.print("<h1>" + userName + "</h1>");
    	out.close();
    }
 
}
```
### web.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
xmlns="http://java.sun.com/xml/ns/javaee" 
xmlns:web="http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" 
xsi:schemaLocation="http://java.sun.com/xml/ns/javaee 
http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" 
id="WebApp_ID" version="2.5">
 
  <servlet>
    <servlet-name>ContextParamExample</servlet-name>
    <servlet-class>
    	cn.springsongs.servlet.ContextParamExample
    </servlet-class>
  </servlet>
 
  <context-param>
  	<param-name>userName</param-name>  
	<param-value>SpringSongs</param-value>  
  </context-param>
 
  <servlet-mapping>
    <servlet-name>ContextParamExample</servlet-name>
    <url-pattern>/ContextParamExample</url-pattern>
  </servlet-mapping>
 
</web-app>
```