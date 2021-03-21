---
title: Servlet接口实例
date: 2011-01-03
author: SpringSongs
tags: 
  - Servlet
location: China  
---

## servlet接口的方法：
1. init（ServletConfig config）：用于初始化servlet。Web容器在加载Servlet时仅调用一次此方法。
2. service（ServletRequest请求，ServletResponse响应）：用于响应请求。Web容器针对每个新请求调用它。
3. destroy（）：用于销毁servlet。当servlet的所有线程都已退出或处于超时情况时，Web容器仅会调用一次此方法。
4. getServletConfig（）：它返回一个servlet配置对象。此配置对象在init方法中传递。Servlet配置对象包含此Servlet的初始化参数和启动配置。
5. getServletInfo（）：它返回有关servlet的作者，版本和版权等的信息字符串。

## “ Hello World”示例
```java
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.Servlet;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
 
public class HelloWorld implements Servlet {
    private static final long serialVersionUID = 1L;
 
    public HelloWorld() {
 
    }
 
    ServletConfig config=null;
 
    @Override
    public void init(ServletConfig config) throws ServletException {
    	this.config = config;
    	System.out.println("初始化...");		
    }
 
    @Override
    public void destroy() {
	System.out.println("销毁...");
    }
 
    @Override
    public ServletConfig getServletConfig() {
       	return config;
    }
 
    @Override
    public String getServletInfo() {
	return "SpringSongs";
    }
 
    @Override
    public void service(ServletRequest request, ServletResponse response)
		throws ServletException, IOException {
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