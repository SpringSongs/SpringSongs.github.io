(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{415:function(n,s,t){"use strict";t.r(s);var a=t(42),e=Object(a.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("在POM.XML中加入spring-boot-starter-web依赖提供SpringMVC支持")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("<dependency>\n\t\t\t<groupId>org.springframework.boot</groupId>\n\t\t\t<artifactId>spring-boot-starter-web</artifactId>\n\t\t</dependency>\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br")])]),t("p",[n._v("在POM.XML中加入spring-cloud-starter-netflix-eureka-client依赖")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("\t\t<dependency>\n\t\t\t<groupId>org.springframework.cloud</groupId>\n\t\t\t<artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n\t\t</dependency>\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br")])]),t("p",[n._v("在POM.XML中加入spring-cloud-starter-netflix-ribbon依赖")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("\t\t<dependency>\n\t\t\t\t\t<groupId>org.springframework.cloud</groupId>\n\t\t\t\t\t<artifactId>spring-cloud-starter-netflix-ribbon</artifactId>\n\t\t\t\t</dependency>\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br")])]),t("p",[n._v("在src/main/resources/application.properties中配置数据源信息")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("server.port=8092\nspring.application.name=microservice-springcontactconsume\n###注册服务中心\neureka.client.serviceUrl.defaultZone=http://localhost:8090/eureka/\neureka.instance.ip-address=true\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br")])]),t("p",[n._v("创建实体")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("public class SpringContact {\n    private int id;\n    public int getId(){\n        return  this.id;\n    }\n    public void setId(int id){\n        this.id=id;\n    }\n\n    \n    private String userName;\n    public String getUserName(){\n        return  this.userName;\n    }\n    public void setUserName(String userName){\n        this.userName=userName;\n    }\n\n    private String mobile;\n    public String getMobile(){\n        return  this.mobile;\n    }\n    public void setMobile(String mobile){\n        this.mobile=mobile;\n    }\n\n  \n    private String tel;\n    public String getTel(){\n        return  this.tel;\n    }\n    public void setTel(String tel){\n        this.tel=tel;\n    }\n\n   \n    private String fax;\n    public String getFax(){\n        return  this.fax;\n    }\n    public void setFax(String fax){\n        this.fax=fax;\n    }\n}\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br"),t("span",{staticClass:"line-number"},[n._v("26")]),t("br"),t("span",{staticClass:"line-number"},[n._v("27")]),t("br"),t("span",{staticClass:"line-number"},[n._v("28")]),t("br"),t("span",{staticClass:"line-number"},[n._v("29")]),t("br"),t("span",{staticClass:"line-number"},[n._v("30")]),t("br"),t("span",{staticClass:"line-number"},[n._v("31")]),t("br"),t("span",{staticClass:"line-number"},[n._v("32")]),t("br"),t("span",{staticClass:"line-number"},[n._v("33")]),t("br"),t("span",{staticClass:"line-number"},[n._v("34")]),t("br"),t("span",{staticClass:"line-number"},[n._v("35")]),t("br"),t("span",{staticClass:"line-number"},[n._v("36")]),t("br"),t("span",{staticClass:"line-number"},[n._v("37")]),t("br"),t("span",{staticClass:"line-number"},[n._v("38")]),t("br"),t("span",{staticClass:"line-number"},[n._v("39")]),t("br"),t("span",{staticClass:"line-number"},[n._v("40")]),t("br"),t("span",{staticClass:"line-number"},[n._v("41")]),t("br"),t("span",{staticClass:"line-number"},[n._v("42")]),t("br"),t("span",{staticClass:"line-number"},[n._v("43")]),t("br"),t("span",{staticClass:"line-number"},[n._v("44")]),t("br")])]),t("p",[n._v("修改启动类")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("@EnableEurekaClient\n@SpringBootApplication\npublic class Application {\n\n\tpublic static void main(String[] args) {\n\t\tSpringApplication.run(Application.class, args);\n\t}\n\t\n\t@LoadBalanced\n\t@Bean\n\tpublic RestTemplate restTemplate() {\n\t\treturn new RestTemplate();\n\t}\n\n}\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br")])]),t("p",[n._v("创建Controller")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('@RestController\n@RequestMapping(value = "/SpringContact")\npublic class SpringContactController {\n\n\t\t@Autowired\n\t\tprivate RestTemplate restTemplate;\n\t\n\t\t@Autowired\n\t\tprivate LoadBalancerClient loadBalancerClient;\n\t\n\t\t@GetMapping("/get/{id}")\n\t\tpublic ResponseEntity<SpringContact> get(@PathVariable Long id) {\n\t\t\treturn this.restTemplate.getForEntity("http://MICROSERVICE-SPRINGCONTACT/SpringContact/" + id,\n\t\t\t\t\tSpringContact.class);\n\t\t}\n\t\n\t\tpublic void logSpringContactService() {\n\t\t\tServiceInstance serviceInstance = this.loadBalancerClient.choose("MICROSERVICE-SPRINGCONTACT");\n\t\t\tSystem.out.print("微服务：" + serviceInstance.getInstanceId() + ":" + serviceInstance.getHost() + ":"\n\t\t\t\t\t+ serviceInstance.getPort());\n\t\t}\n}\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br")])]),t("p",[n._v("启动微服务,访问http://127.0.0.1:8092/SpringContact/get/5返回结果")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{"id":5,"userName":"SpringSongs4","mobile":"12345678911","tel":"0777-955888","fax":"0777-955888"}\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br")])]),t("p",[n._v("查看Eureka注册中心\n"),t("img",{attrs:{src:"/attachment/SpringCloud/MicroService-SpringContactConsumeRibbon_0.jpg",alt:"SpringCloud构建Eureka服务注册中心"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);