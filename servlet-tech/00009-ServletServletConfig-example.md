---
title: Servlet初始化参数和ServletConfig接口
date: 2011-01-19
author: SpringSongs
tags: 
  - Servlet
location: China  
---

## 初始化参数：
初始化参数是指Servlet或过滤器的初始化参数。<init-param>属性用于定义一个init参数。<init-param>属性具有两个主要的子属性<param-name>和<param-value>。<param-name>包含参数的名称，而<param-value>包含参数的值。

## ServletConfig接口：
ServletConfig接口用于访问init参数。

## ServletConfig接口的方法：
1. getInitParameter（String name）：如果参数存在，则返回指定参数的值，否则返回null。
2. getInitParameterNames（）：如果servlet具有初始化参数，则将初始化参数的名称作为Enumeration返回，否则返回空的Enumeration。
3. getServletContext（）：返回ServletContext的实例。
4. getServletName（）：返回servlet的名称。

## 示例
### InitParamExample.java
```java
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 

public class InitParamExample extends HttpServlet {
	private static final long serialVersionUID = 1L;
 
        
        public InitParamExample() {
 
        }
 
      protected void doGet(HttpServletRequest request, 
		HttpServletResponse response)
	          throws ServletException, IOException {
	response.setContentType("text/html"); 
    	PrintWriter out = response.getWriter();
    	ServletConfig config=getServletConfig(); 
    	String userName = config.getInitParameter("userName");
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
    <servlet-name>InitParamExample</servlet-name>
    <servlet-class>
    	cn.springsongs.servlet.InitParamExample
    </servlet-class>
    <init-param>
    	<param-name>userName</param-name>
    	<param-value>SpringSpongs</param-value>
    </init-param>
  </servlet>
 
  <servlet-mapping>
    <servlet-name>InitParamExample</servlet-name>
    <url-pattern>/InitParamExample</url-pattern>
  </servlet-mapping>
 
</web-app>
```