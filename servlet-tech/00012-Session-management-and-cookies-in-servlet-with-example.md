---
title: Servlet中的Cookie
date: 2011-02-01
author: SpringSongs
tags: 
  - Servlet
location: China  
---

HTTP是一种无状态协议，这意味着当新请求到来时，它无法保留用户的先前请求的任何记录或状态。这就是为什么我们需要会话跟踪来维护用户状态的原因。

1. Cookie.
2. Hidden form field.
3. Url rewriting.
4. HttpSession.

## Cookie
如果使用cookie，则将带有少量信息的文本文件添加到第一个请求的响应中。它们存储在客户的计算机上。现在，当新请求到来时，默认情况下会在请求中添加cookie。通过此信息，我们可以确定它是新用户还是以前的用户。

### Cookies的优点
1. 它们存储在客户端，因此不需要任何服务器资源。
2. 简单的会话管理技术。
### Cookie的缺点
1. 可以从浏览器禁用Cookies。
2. 存在安全风险是因为cookie以文本文件形式存在，因此任何人都可以打开和读取用户的信息。

### Cookie的常用方法
1. setMaxAge(int expiry)
2. getMaxAge()
3. setValue(String newValue)
4. getValue()
5. getName()

### 如何创建Cookie
```java
Cookie cookie=new Cookie(“cookieName”,”cookieValue”);
response.addCookie(cookie);
```
### 如何获取Cookie
```java
Cookie[] cookies = request.getCookies();
for(Cookie cookie : cookies){
            out.println(“Cookie Name: ” + cookie.getName());
            out.println(“Cookie Value: ” + cookie.getValue());
}
```
### 如何删除Cookie
```java
Cookie cookie = new Cookie(“cookieName”, “”);
cookie.setMaxAge(0);
response.addCookie(cookie);
```
### Cookie示例
#### CreateCookieServlet.java
```java
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 

public class CreateCookieServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
 
    public CreateCookieServlet() {
 
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
    		Cookie cookie1 = new Cookie("userName",userName);
    		Cookie cookie2 = new Cookie("password",password);
    		response.addCookie(cookie1);
    		response.addCookie(cookie2);
    		out.print("<h3>Cookies are created. Click on the " +
    				"below button to get cookies."); 
    	  out.print("<form action='GetCookieServlet' method='POST'>");  
    	        out.print("<input type='submit' value='Get Cookie'>");  
    	        out.print("</form>");  
 
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
#### GetCookieServlet.java
```java
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 

public class GetCookieServlet extends HttpServlet {
   private static final long serialVersionUID = 1L;
 
    public GetCookieServlet() {
 
    }
 
    protected void doPost(HttpServletRequest request, 
		HttpServletResponse response)
	                  throws ServletException, IOException {
	response.setContentType("text/html"); 
    	PrintWriter out = response.getWriter();
 
    	try{
    	   Cookie cookies[] = request.getCookies();
    	   for(Cookie cookie : cookies){
    		out.println("Cookie Name: " + cookie.getName());
    		out.println("Cookie Value: " + cookie.getValue());
    		out.println("");
    	    }
 
    	  out.println("Click on the below button to delete cookies.");
    	  out.print("<form action='DeleteCookieServlet' method='POST'>");
    	  out.print("<input type='submit' value='Delete Cookies'>");
    	  out.print("</form>");
    	  out.close();  
    	}catch(Exception e){
    		e.printStackTrace();
    	}
    }
}
```
#### DeleteCookieServlet.java
```java
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 
public class DeleteCookieServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
 
    public DeleteCookieServlet() {
 
    }
 
    protected void doPost(HttpServletRequest request, 
	   HttpServletResponse response)
	                throws ServletException, IOException {
	response.setContentType("text/html"); 
    	PrintWriter out = response.getWriter();
 
    	try{
    		Cookie cookies[] = request.getCookies();
    		out.print("Deleted cookie are:");
    		for(Cookie cookie : cookies){
    		   cookie.setMaxAge(0);
    		   out.println("Cookie name: " + cookie.getName());
    	        }
 
    	    out.close();  
    	}catch(Exception e){
    		e.printStackTrace();
    	}
     }
}
```
#### login.html
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 
Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Login</title>
</head>
<body>
	<form action="CreateCookieServlet" method="post">
		Username:<input type="text" name="userName"/>
                <br/><br/>
		Password:<input type="password" name="password"/>
                <br/><br/> 
		<input type="submit" value="login"/> 
	</form>  
</body>
</html>
```
#### web.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app id="WebApp_ID" version="2.4" 
xmlns="http://java.sun.com/xml/ns/j2ee" 
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee 
http://java.sun.com/xml/ns/j2ee/web-app_2_4.xsd">
 
  <servlet>
    <servlet-name>CreateCookieServlet</servlet-name>
    <servlet-class>
   		cn.springsongs.servlet.CreateCookieServlet
    </servlet-class>
  </servlet>
 
  <servlet-mapping>
    <servlet-name>CreateCookieServlet</servlet-name>
    <url-pattern>/CreateCookieServlet</url-pattern>
  </servlet-mapping>
 
  <servlet>
    <servlet-name>GetCookieServlet</servlet-name>
    <servlet-class>
    	cn.springsongs.servlet.GetCookieServlet
    </servlet-class>
  </servlet>
 
  <servlet-mapping>
    <servlet-name>GetCookieServlet</servlet-name>
    <url-pattern>/GetCookieServlet</url-pattern>
  </servlet-mapping>
 
  <servlet>
    <servlet-name>DeleteCookieServlet</servlet-name>
    <servlet-class>
    	cn.springsongs.servlet.DeleteCookieServlet
    </servlet-class>
  </servlet>
 
  <servlet-mapping>
    <servlet-name>DeleteCookieServlet</servlet-name>
    <url-pattern>/DeleteCookieServlet</url-pattern>
  </servlet-mapping>
 
  <welcome-file-list>
    <welcome-file>login.html</welcome-file>
  </welcome-file-list>
 
</web-app>
```