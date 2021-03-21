---
title: RequestDispatcher接口实例
date: 2011-01-13
author: SpringSongs
tags: 
  - Servlet
location: China  
---

RequestDispacher是一个接口，提供了将请求转发到另一个资源或包括另一个资源的内容的功能。RequestDispacher提供了一种从Servlet调用另一个资源的方法。另一个资源可以是servlet，jsp或html。

## RequestDispacher接口的方法：
1. forward（ServletRequest请求，ServletResponse响应）：此方法将请求从Servlet转发到服务器上的另一个资源。
2. include（ServletRequest request，ServletResponse response）：此方法在响应中包含资源的内容。
## 如何获取RequestDispacher的对象
```java
RequestDispatcher requestDispatcher = request.getRequestDispatcher(“/”);
requestDispatcher.forward(request, response);
//或者
requestDispatcher.include(request, response);
```
## 示例
### LoginServlet.java
```java
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
public class LoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
 
    public LoginServlet() {
 
    }
 
    protected void doPost(HttpServletRequest request, 
    		HttpServletResponse response) throws 
    		  ServletException, IOException {
 
    	response.setContentType("text/html"); 
    	PrintWriter out = response.getWriter();
 
    	String userName = 
    		request.getParameter("userName").trim();
    	String password = 
    		request.getParameter("password").trim();
 
    	if(userName == null || userName.equals("") 
    			|| password == null || password.equals("")){
    		out.print("Please enter both username" +
    				" and password. <br/><br/>");
    		RequestDispatcher requestDispatcher = 
    			request.getRequestDispatcher("/login.html");
    		requestDispatcher.include(request, response);
    	}
    	else if(userName.equals("springsongs") && 
    			password.equals("123456")){
    		RequestDispatcher requestDispatcher = 
    			request.getRequestDispatcher("WelcomeServlet");
    		requestDispatcher.forward(request, response);
    	}else{
    		out.print("Wrong username or password. <br/><br/>");
    		RequestDispatcher requestDispatcher = 
    			request.getRequestDispatcher("/login.html");
    		requestDispatcher.include(request, response);
    	}
	}
}
```
### WelcomeServlet.java
```java
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 
public class WelcomeServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
 
    //no-argument constructor
    public WelcomeServlet() {
 
    }
 
     protected void doPost(HttpServletRequest request, 
	  HttpServletResponse response)
	     throws ServletException, IOException {
 
	    	response.setContentType("text/html"); 
	    	PrintWriter out = response.getWriter();
 
	    	out.println("<html><body>");
	    	out.println("<h1>You are logged " +
	    			"in successfully.</h1>");
	    	out.println("</html></body>");	    	
	}
}
```
### login.html
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 
Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" 
		content="text/html; charset=ISO-8859-1">
		<title>Login</title>
	</head>
<body>
	<form action="LoginServlet" method="post">
		Username:<input type="text" name="userName"/>
		<br/><br/>
		Password:<input type="password" name="password"/>
		<br/><br/> 
		<input type="submit" value="login"/> 
	</form>  
</body>
</html>
```
### web.xml配置
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
xmlns="http://java.sun.com/xml/ns/javaee" 
xmlns:web="http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" 
xsi:schemaLocation="http://java.sun.com/xml/ns/javaee 
http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" 
id="WebApp_ID" version="2.5">
 
  <servlet>
    <servlet-name>LoginServlet</servlet-name>
    <servlet-class>
    	cn.springsongs.servlet.LoginServlet
    </servlet-class>
  </servlet>
 
  <servlet-mapping>
    <servlet-name>LoginServlet</servlet-name>
    <url-pattern>/LoginServlet</url-pattern>
  </servlet-mapping>
 
  <servlet>
    <servlet-name>WelcomeServlet</servlet-name>
    <servlet-class>
    	cn.springsongs.servlet.WelcomeServlet
    </servlet-class>
  </servlet>
 
  <servlet-mapping>
    <servlet-name>WelcomeServlet</servlet-name>
    <url-pattern>/WelcomeServlet</url-pattern>
  </servlet-mapping>
 
  <welcome-file-list>
    <welcome-file>login.html</welcome-file>
  </welcome-file-list>
 
</web-app>
```