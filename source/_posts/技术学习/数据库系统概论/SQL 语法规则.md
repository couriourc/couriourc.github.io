author: couriourc
title: SQL 语法规则
tag:
  - 数据库系统概论
dg-publish: true
categories:
  - 技术学习
nanoid: NTIMR0OE3F8jA5iujsEvD
date created: 2023-03-25 00:00:00
date modified: 2023-06-20 00:00:00
---

## 介绍

`SQL` (Structure Query Language): 结构化查询语言，是关系数据库的标准语言。

`SQL` 是一个通用的、功能极强的关系数据库语言。

## 特点

### 综合统一

#### [[专有名词库#DDL|DDL]]

主要包括对于[[专有名词库#数据库|数据库]]、[[专有名词库#模式|模式]]以及[[专有名词库#视图|视图]]的一些定义方式：`CREATE` `DROP` `ALTER`  

### 概览

```markmap

- 操作对象
	- 模式
		- 操作方式
			- 创建
				- CREATE SCHEMA
			- 删除
				- DROP SCHEMA
			- 修改
				- ALTER SCHEMA
	- 表
 		- 操作方式
			- 创建
				- CREATE TABLE
			- 删除
				- DROP TABLE
			- 修改
				- ALTER TABLE
	- 视图
 		- 操作方式
			- 创建
				- CREATE VIEW
			- 删除
				- DROP VIEW
			- 修改
				- ALTER VIEW
	- 索引
 		- 操作方式
			- 创建
				- CREATE INDEX
			- 删除
				- DROP INDEX
			- 修改
				- ALTER INDEX
```

现代关系数据库管理系统提供了一个层次化的数据库对象命名机制

- 一个关系数据库管理系统的实例（instance）中可以建立一个或者多个数据库
	- 一个数据库中可以建立多个模式
		- 一个模式下通常包括多个表、视图、索引等[[专有名词库#对象类型|数据库对象]]  

#### 模式

##### 创建（定义）

```sql
-- 为 wang 用户定义一个 S-T 课程模式
CREATE SCHEMA "S-T" AUTHORIZATION WANG;
-- 若是没有指定模式名，则模式名隐含为<用户名>
CREATE SCHEMA AUTHORIZATION WANG;
```

定义模式实际上是定义了一个命名空间。  
在这个空间中可以定义[[专有名词库#对象类型|数据库对象]]

也就是说：`CREATE SCHEMA ` 可以接受下列创建子句  
具体语法如下：

```sql
CREATE SCHEMA <schema_name> [AUTHORIZATION <dba_user>]
	[CREATE TABLE <table_name> ( 
		<<attribute_type> <attribute_name> [constraint]>,
		[<attribute_type> <attribute_name> [constraint]] 
	)]
;
```

`Constraint` 分为列级完整性约束条件和[[专有名词库#表级完整性约束条件|表级完整性约束条件]]。

> [!ERROR] 注意  
>  MySQL 中并不能支持字句嵌套。

##### 删除

```sql
DROP SCHEMA <schema_name> <CASCADE|RESTRICT>;

-- 级联的方式删除模式 ZAHNG
DROP SCHEMA ZHANG CASCADE;
-- 限制的方式删除模式 ZAHNG
DROP SCHEMA ZHANG RESTRICT;
```

- 对于 `CASCADE` ，在删除模式的同时把该模式中所有的数据库对象全部删除。  
- 对于 `RESTRICT`，如果该模式中定义了下属的数据库对象（如表、视图等），则拒绝该删除语句的执行。

#### 修改

#### DML

#### DCL

### TCL

### 可以独立完成数据库生命周期中的全部活动

#### 定义

#### 修改更新数据

#### 重构和维护

#### 数据库安全性、完整性、事务控制

#### 嵌入式 SQL 和动态 SQL 定义
