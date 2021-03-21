---
title: Servlet中的HttpSession
date: 2011-02-02
author: SpringSongs
tags: 
  - Servlet
location: China  
---

## 如何创建HttpSession
```java
session.setAttribute("attName", "attValue"); 
```
## 如何获取HttpSession
```java
String value = (String) session.getAttribute("attName"); 
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
import javax.servlet.http.HttpSession;

public class LoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
 
    public LoginServlet() {
 
    }
 
    protected void doPost(HttpServletRequest request, 
    	   HttpServletResponse response)
                   throws ServletException, IOException {
	response.setContentType("text/html"); 
    	PrintWriter out = response.getWriter();
 
    	String userName = request.getParameter("userName").trim();
    	String password = request.getParameter("password").trim();
 
    	if(userName == null || userName.equals("") || 
    			password == null || password.equals("")){
    		out.print("Please enter both username " +
    				"and password. <br/><br/>");
    		RequestDispatcher requestDispatcher = 
    			request.getRequestDispatcher("/login.html");
    		requestDispatcher.include(request, response);
    	}
    	else if(userName.equals("SpringSongs") && password.equals("123456")){
    		HttpSession session=request.getSession();  
                session.setAttribute("userName",userName);  
                session.setAttribute("password",password);
    		out.println("Logged in successfully.<br/>"); 
    		out.println("Click on the below link to see " +
    			"the values of Username and Password.<br/>");
    		out.println("<a href='DisplaySessionValueServlet'>" +
    				"Click here</a>");
    	    out.close();
    	}else{
    		out.print("Wrong username or password. <br/><br/>");
    		RequestDispatcher requestDispatcher = 
    			request.getRequestDispatcher("/login.html");
    		requestDispatcher.include(request, response);
    	}
    }
}
```
### DisplaySessionValueServlet.java
```java
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
 

public class DisplaySessionValueServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
 
    public DisplaySessionValueServlet() {
 
    }
 
    protected void doGet(HttpServletRequest request, 
	    HttpServletResponse response)
	             throws ServletException, IOException {
	response.setContentType("text/html"); 
    	PrintWriter out = response.getWriter();
 
    	HttpSession session=request.getSession(false);  
        String userName =(String)session.getAttribute("userName");  
        String password =(String)session.getAttribute("password");  
 
    	out.println("Username: " + userName + "<br/><br/>");
    	out.println("Password: " + password);
 
    	out.close();
    }
}
```
### login.html
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 
Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
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
### web.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app id="WebApp_ID" version="2.4" 
xmlns="http://java.sun.com/xml/ns/j2ee" 
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee 
http://java.sun.com/xml/ns/j2ee/web-app_2_4.xsd">
 
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
    <servlet-name>DisplaySessionValueServlet</servlet-name>
    <servlet-class>
    	cn.springsongs.servlet.DisplaySessionValueServlet
    </servlet-class>
  </servlet>
 
  <servlet-mapping>
    <servlet-name>DisplaySessionValueServlet</servlet-name>
    <url-pattern>/DisplaySessionValueServlet</url-pattern>
  </servlet-mapping>
 
  <welcome-file-list>
    <welcome-file>login.html</welcome-file>
  </welcome-file-list>
 
</web-app>
```