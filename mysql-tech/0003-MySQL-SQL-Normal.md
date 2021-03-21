---
title: MySQL-数据定义语句
date: 2020-02-12
author: SpringSongs
tags: 
  - MySQL
location: China  
---

## SQL常用分类
![SpringSongs：Chapter 3.2 SQL Normal](/attachment/MySQL/Chapter_3/MySQL_Chapter_3_2_SQL_Normal.png)
## 创建数据库
![SpringSongs：Chapter 3.3 CREATE DATABASE Statement](/attachment/MySQL/Chapter_3/MySQL_Chapter_3_3_CREATE_DATABASE_Statement.png)

``` sql
CREATE DATABASE IF NOT EXISTS `springsongs` 
DEFAULT CHARACTER SET utf8mb4D
DEFAULT COLLATE utf8mb4_0900_ai_ci;
```
## 删除数据库
![SpringSongs：Chapter 3.4 DROP DATABASE Statement](/attachment/MySQL/Chapter_3/MySQL_Chapter_3_4_DROP_DATABASE_Statement.png)

``` sql
DROP DATABASE [IF EXISTS] `springsongs`;
DROP DATABASE `springsongs`;
```
## 更改数据库属性
![SpringSongs：Chapter 3.5 ALTER DATABASE Statement](/attachment/MySQL/Chapter_3/MySQL_Chapter_3_5_ALTER_DATABASE_Statement.png)

``` sql
ALTER DATABASE springsongs CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
ALTER DATABASE  springsongs CHARACTER SET utf8 COLLATE utf8_general_ci;
```

## 查询数据库
![SpringSongs：Chapter 3.6 SHOW DATABASE Statement](/attachment/MySQL/Chapter_3/MySQL_Chapter_3_6_SHOW_DATABASE_Statement.png)

``` sql
SHOW DATABASES;
SHOW SCHEMAS;
SHOW DATABASES LIKE 'springsongs';
SHOW DATABASES WHERE  `database` like '%springsongs%';
```

## 添加数据库表
![SpringSongs：Chapter 3.7 CREATE TABLE Statement](/attachment/MySQL/Chapter_3/MySQL_Chapter_3_7_CREATE_TABLE_Statement.png)

``` sql
CREATE TABLE  `business_card` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8COMMENT='名片表';
```

## 删除数据库表
![SpringSongs：Chapter 3.8 DROP TABLE Statement](/attachment/MySQL/Chapter_3/MySQL_Chapter_3_8_DROP_TABLE_Statement.png)

``` sql
DROP TABLE business_card;
DROP TABLE IF EXISTS business_card;
DROP TABLE business_card,user;
DROP TABLE IF EXISTS business_card,user;
```
## 修改数据库表属性
![SpringSongs：Chapter 3.9 ALTER TABLE Statement](/attachment/MySQL/Chapter_3/MySQL_Chapter_3_9_ALTER_TABLE_Statement.png)
``` sql
ALTER TABLE business_card COMMENT= '名片表';
ALTER TABLE business_card CHARACTER  SET utf8;
ALTER TABLE business_card COLLATE=utf8_general_ci;
ALTER TABLE business_card Engine=InnoDB;
```

## 重命名数据库表
![SpringSongs：Chapter 3.10 RENAME TABLE Statement](/attachment/MySQL/Chapter_3/MySQL_Chapter_3_10_RENAME_TABLE_Statement.png)

``` sql
RENAME TABLE business_card To businesscard;
ALTER TABLE business_card RENAME businesscard;
```
## 查询数据库表
![SpringSongs：Chapter 3.11 SHOW TABLES Statement](/attachment/MySQL/Chapter_3/MySQL_Chapter_3_11_SHOW_TABLES_Statement.png)

``` sql
#列出MySQL服务器主机上的数据库
show databases;

#MySQL新增数据库表
create database springsongs
default character set utf8mb4
default collate utf8mb4_0900_ai_ci;

#切换数据库
use springsongs;

#MySQL新增数据库表
create table businesscard(
 `id` int(11) not null auto_increment comment '主键',
 `truename` char(45) not null comment '真实姓名',
  primary key (`id`)
)
engine=innodb 
default character set utf8mb4
default collate utf8mb4_0900_ai_ci;
 
#MySQL新增数据库表
create table member(
 `id` int(11) not null auto_increment comment '主键',
 `truename` char(45) not null comment '真实姓名',
 primary key (`id`)
)
engine=innodb 
default character set utf8mb4
default collate utf8mb4_0900_ai_ci;
    
#列出MySQL数据库表
show tables;
show tables like '%member%';
```
## 查询数据库表结构
![SpringSongs：Chapter 3.18 DESC TABLE](/attachment/MySQL/Chapter_3/MySQL_Chapter_3_18_DESC_TABLE.png)

``` sql
DESC contact;
DESCRIBE contact;
SHOW COLUMNS FROM contact;
```
## 添加数据库表字段
![SpringSongs：Chapter 3.12 ALTER TABLE Statement ADD COLUMN](/attachment/MySQL/Chapter_3/MySQL_Chapter_3_12_ALTER_TABLE_Statement_ADD_COLUMN.png)

``` sql
ALTER TABLE contact ADD COLUMN email CHAR(45);
```
##  修改数据库表字段属性
![SpringSongs：Chapter 3.13 ALTER TABLE Statement MODIFY COLUMN](/attachment/MySQL/Chapter_3/MySQL_Chapter_3_13_ALTER_TABLE_Statement_MODIFY_COLUMN.png)

``` sql
ALTER TABLE contact MODIFY COLUMN email varchar(45) ;
ALTER TABLE contact MODIFY email varchar(45);
```
## 修改数据库表字段名
![SpringSongs：Chapter 3.14 ALTER TABLE Statement RENAME COLUMN](/attachment/MySQL/Chapter_3/MySQL_Chapter_3_14_ALTER_TABLE_Statement_RENAME_COLUMN.png)

``` sql
ALTER TABLE contact RENAME COLUMN  email TO qq;
```

## 修改数据库表字段名以及属性
![SpringSongs：Chapter 3.15 ALTER TABLE Statement CHANGE COLUMN](/attachment/MySQL/Chapter_3/MySQL_Chapter_3_15_ALTER_TABLE_Statement_CHANGE_COLUMN.png)

``` sql
ALTER TABLE contact  CHANGE COLUMN qq email char(45);;
```
## 删除数据库表字段
![SpringSongs：Chapter 3.16 ALTER TABLE Statement DROP COLUMN](/attachment/MySQL/Chapter_3/MySQL_Chapter_3_16_ALTER_TABLE_Statement_DROP_COLUMN.png)

``` sql
ALTER TABLE contact DROP COLUMN email;
```
## 添加数据库表字段属性
![SpringSongs：Chapter 3.17 ALTER TABLE tbl_name CHANGE column_definition](/attachment/MySQL/Chapter_3/MySQL_Chapter_3_17_ALTER_TABLE_tbl_name_CHANGE_column_definition.png)

``` sql
alter table contact change id id  int not null  auto_increment ;
```
## 查询数据库表字段
![SpringSongs：Chapter 3.18 DESC TABLE](/attachment/MySQL/Chapter_3/MySQL_Chapter_3_18_DESC_TABLE.png)

``` sql
DESC contact;
DESCRIBE contact;
SHOW COLUMNS FROM contact;
```