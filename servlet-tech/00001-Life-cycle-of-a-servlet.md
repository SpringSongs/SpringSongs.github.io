
Servlet的生命周期由Web容器管理。

Servlet生命周期步骤：
1. 加载Servlet类。
2. 创建Servlet实例。
3. 调用init（）方法。
4. 调用service（）方法。
5. 调用destoy（）方法。

1.加载Servlet类： Web容器在收到第一个请求时加载Servlet。在第一次请求时，该步骤仅执行一次。

2.创建Servlet实例：加载Servlet类Web容器后，创建Servlet实例。仅为一个servlet创建一个实例，并且所有并发请求都在同一个servlet实例上执行。

3.调用init（）方法：创建servlet实例后，Web容器将调用servlet的init方法。此方法用于在处理第一个请求之前初始化Servlet。Web容器仅调用一次。

4.调用service（）方法：初始化过程后，Web容器调用service方法。每个请求都会调用服务方法。servlet为每个请求创建一个单独的线程。

5.Call destoy（）方法：在删除servlet实例之前，Web容器会调用此方法。销毁方法要求Servlet释放与之关联的所有资源。当servlet的所有线程都退出或处于超时情况时，Web容器仅调用一次。