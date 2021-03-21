---
title: HttpServlet类的实例
date: 2011-01-08
author: SpringSongs
tags: 
  - Servlet
location: China  
---
## HttpServlet类的方法：
1. service（ServletRequest req，ServletResponse res）：将请求分派到受保护的服务方法。在分派请求之前，它将请求和响应对象转换为http类型。
2. service（HttpServletRequest req，HttpServletResponse res）：从公共服务方法接收HTTP请求，并将该请求分派到此类中定义的doXXX方法。
3. doGet（HttpServletRequest req，HttpServletResponse res）： Web容器调用此方法以处理GET请求。
4. doPost（HttpServletRequest req，HttpServletResponse res）： Web容器调用此方法来处理POST请求。
5. doHead（HttpServletRequest req，HttpServletResponse res）： Web容器调用此方法来处理HEAD请求。
6. doOptions（HttpServletRequest req，HttpServletResponse res）： Web容器调用此方法来处理OPTIONS请求。
7. doPut（HttpServletRequest req，HttpServletResponse res）： Web容器调用此方法来处理PUT请求。
8. doTrace（HttpServletRequest req，HttpServletResponse res）： Web容器调用此方法以处理TRACE请求。
9. doDelete（HttpServletRequest req，HttpServletResponse res）： Web容器调用此方法来处理DELETE请求。
10. getLastModified（HttpServletRequest req）：它返回自格林尼治标准时间1970年1月1日午夜以来最后一次修改HttpServletRequest对象的时间。如果时间未知，它将返回负数。

## “ Hello World”示例
```java
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
public class HelloWorld extends HttpServlet {
    private static final long serialVersionUID = 1L;
 
    public HelloWorld() {
 
    }
 
    protected void doGet(HttpServletRequest request, HttpServletResponse 
             response) throws ServletException, IOException {
	response.setContentType("text/html");
	PrintWriter out = response.getWriter();
 
        out.println("<h1>Hello World!</h1>");
        out.close();
    }
}
```
## web.xml配置
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app id="WebApp_ID" version="2.4" 
xmlns="http://java.sun.com/xml/ns/j2ee" 
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee 
http://java.sun.com/xml/ns/j2ee/web-app_2_4.xsd">
 
	<servlet>
		<servlet-name>HelloWorld</servlet-name>
		<servlet-class>
		  cn.springsongs.servlet.HelloWorld
		</servlet-class>
	</servlet>
 
	<servlet-mapping>
		<servlet-name>HelloWorld</servlet-name>
		<url-pattern>/HelloWorld</url-pattern>
	</servlet-mapping>
 
</web-app>
```