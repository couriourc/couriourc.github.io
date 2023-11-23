---
author: couriourc
categories: [技术学习]
dg-publish: false
tag:
  - 数据库系统概论
title: SQL 函数
date-created: 2023-06-22
date-modified: 2023-07-02
---

## 聚合函数

`AVG(表达式)`: 返回表达式中所有的平均值。仅用于数字列，并**自动忽略 `NULL` 值**  
`COUNT(表达式)`: 返回表达式中**非 `NULL` 值的数量**。可用于数字和字符。  
`COUNT(*)`: 返回表达式中的行数（**包括有 `NULL` 值的列**）。  
`MAX(表达式)`: 返回表达式中的最大值，**忽略 `NULL` 值** 。可用于数字和字符列。  
`MIN(表达式)`: 返回表达式中的最小值，**忽略 `NULL` 值** 。可用于数字和字符列。  
`SUM(表达式)`: 返回表达式中的总和，**忽略 `NULL` 值** 。仅数字列。

## 转换函数

`CONVERT(data_type[(length)],expression[,style])`  
`CAST( expression AS data_type )`  

```sql
-- 将学号转为 varchar 类型
select CONVERT(varchar(10),stuno) as stuno,stuname from student;
-- 将学号转为 varchar 类型
select CAST(stuno as varchar(10)) as stuno,stuname from student;
```

`Cast` 和` Convert` 都是用来将一种数据类型的表达式转换为另一种数据类型的表达式。`CAST` 和 `CONVERT` 提供相似的功能，只是语法不同。在时间转化中一般用到 `convert`,因为它比 `cast` 多加了一个 style,可以转化成不同时间的格式。

## 日期函数

由于不能直接执行算术函数，所以日期函数就十分有用。

`GETDATE()`: 当前的系统日期

`DATEADD(日期部分,number,date)`: 返回带有指定数字(number)的日期(date),该数字添加到指定的日期部分(datepart)

`DATEDIFF(日期部分,date1,date2)` 返回两个日期中指定的`日期部分之间的差值`。

`DATENAME(日期部分,date)` 返回日期中日期部分的 `字符串形式`。

`DATEPART(日期部分,date)` 返回日期中指定的日期部分的 `整数形式`。  

`YEAR(date)` 返回指定日期的 `年份` 数值。  

`MONTH(date)` 返回指定日期的 `月份` 数值

`DAY(date)` 返回指定日期的 `天数` 值

## 数字函数  

`ABS (num_expr) `返回数值表达式的绝对值。

### 三角函数

`ACOS (float_expr) ` 返回角 (以弧度表示), 它的余弦值近似于指定的浮点表达式。  
`ASIN (float_expr) `返回角 (以弧度表示), 它的正弦值近似于指定的浮点表达式。  
`ATAN (float_expr)` 返回角 (以弧度表示), 它的正切值近似于指定的浮点表达式。  
`ATN2 (float_expr 1, float_expr 2)` 返回角 (以弧度表示), 它的正切值在两个近似的浮点表达式之间。  
`CEILING (num_expr) `返回大于或等于数值表达式的最小整数。  
`COS (float_expr)` 返回以浮点表达式表示的近似于指定角度 (以弧度表示)的余弦三角函数的值。  
`COT (float_expr) `返回以浮点表达式表示的近似于指定角度 (以弧度表示)的余切三角函数的值。  
`DEGREES (num_expr)`返回数值表达式表示的弧度值对应的度值。  
`TAN (float_expr) ` 返回以浮点表达式表示的近似于指定角度 (以弧度表示)的正切三角函数的值。

### 精度转换

`EXP (float_expr) `根据指定的近似浮点表达式, 返回指数值。  
`FLOOR (num_expr)` 返回小于或等于数值表达式的最大整数  
`LOG (float_expr)` 根据指定的近似浮点表达式, 返回自然对数值。  
`LOG10 (float_expr)` 根据指定的近似浮点表达式, 返回以为底的对数。  
`PI () `返回常量值. 141592653589793  
`POWER (num_expr, y)` 返回幂为 y 的数值表达式的值。  
`RADIANS (num_expr)` 返回数值表达式表示的度值对应的弧度值。  
`RAND ([seed])` 随机返回的到之间的近似浮点值, 可以对 seed 指定为整数表达式 (可选)。  
`ROUND (num_expr, length)` 对数值表达式截取指定的整数长度, 返回四舍五入后的值。  
`SIGN (num_expr) `对正数执行+1 操作, 对负数和零执行-1 操作。  
`SIN (float_expr) `返回以浮点表达式表示的近似于指定角度 (以弧度表示)的正弦三角函数的值。  
`SQUARE (float_expr)` 返回浮点表达式的平均值。  
`SQRT (float_expr)` 返回指定的近似浮点表达式的平方根。

## 字符串函数

## 系统函数

> ~ 用于返回元数据或配置设置。

## 文本和图像函数

通常返回有关文本和图像数据所需的信息。文本和图像数据是以二进制格式的形式进行存储的。

`TEXTPTR (col_name)` 返回 varbinary 格式的文本指针值。对文本指针进行检查以确保它指向第一个文本页。

`TEXTVALID ('table_name. Col_name', text_ptr)`检查给定的文本指针是否有效。返回表示有效, 返回表示指针无效。  
