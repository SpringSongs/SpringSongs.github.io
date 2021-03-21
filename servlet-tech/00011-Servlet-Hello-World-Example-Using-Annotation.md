---
title: Servlet Hello World使用注释的示例
date: 2011-01-28
author: SpringSongs
tags: 
  - Servlet
location: China  
---
## ServletAnnotationExample.java
```java
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 

@WebServlet("/HelloWorld")	
public class ServletAnnotationExample extends HttpServlet {
    private static final long serialVersionUID = 1L;
 
    public ServletAnnotationExample() {
 
    }
 
    protected void doGet(HttpServletRequest request, 
	   HttpServletResponse response)
	              throws ServletException, IOException {
	response.setContentType("text/html"); 
    	PrintWriter out = response.getWriter();
 
    	out.print("<h1>Hello World!</h1>");
 
    	out.close();
    }
}
```