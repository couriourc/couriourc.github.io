typora-root-url: ./database-sql
title: 数据库系统概论-SQL
author: CouriourC
mathjax: true
tags:
  - SQL
  - 数据库系统概论
  - 计算机基础
categories:
  - database-system
nanoid: 31SdZglKb9mIhBC4DTRmM
date: 2023-02-11 19:25:57
updated: 2023-02-11 19:25:57
sticky:
---

# 关系数据库标准语言（SQL）

## SQL 的特点

### 综合统一

{% markmap 200px%}
- SQL
    - 语言构成
        - DDL(数据库定义语言)
        - DCL(数据控制语言)
        - DML(数据操作（管理）语言)

{% endmarkmap %}

-   是集数据定义语言（DDL），（DML），(DCL)于一体的非过程语言

-   可以独立完成数据库生命周期的全部活动
    -   定义和修改、删除关系模式，定义和删除视图，插入数据，建立数据库
        -   模式->CREATE SCHEMA schema_name AUTHORIZATION  username  
        -   视图->
        -   数据库：指的是插入数据
    -   对数据库的数据进行查询更新
    -   数据库重构和维护
    -   数据库安全性、完整性控制、以及事务控制
    -   **嵌入式SQL**和**动态SQL**
    
-   用户数据库投入运行后，可根据需要随时逐步修改模式，不影响数据库的运行

-   数据操作符统一

### 高度非过程化

-   非关系数据模型的数据操纵语言面向过程，必须指定存取路径，而**SQL** 只需要提出**做什么**。
-   SQL 的存取路径的选择以及SQL的操作过程，由系统自动完成

### 面向集合的操作方式

-   非关系数据模型采用面向记录的操作方式，操作对象是一条数据

-   SQL 操作对象、查找结果可以是元组的集合，他的一次插入、删除、更新操作的对象可以是元组的集合

### 以同一种语法结构提供多种使用方式

-   SQL 是 独立的语言，能够独立用于联机交互的使用方式
-   SQL 又是嵌入式语言，能嵌入到高级语言中，共程序员设计使用

### SQL 语言简洁，易学易用

| SQL功能       | 动词                                                         |
| ------------- | ------------------------------------------------------------ |
| 数据查询      | <span p-1 rounded-lg bg-green text-white ml-2>**SELECT**</span> |
| 数据定义(DDL) | <span p-1 rounded-lg bg-green text-white ml-2>**CREATE**</span><span p-1 rounded-lg bg-green text-white ml-2>**DROP**</span><span p-1 rounded-lg bg-green text-white ml-2>**ALTER**</span> |
| 数据管理(DML) | <span p-1 rounded-lg bg-green text-white ml-2>**INSERT**</span> <span p-1 rounded-lg bg-green text-white ml-2>**UPDATE**</span><span p-1 rounded-lg bg-green text-white ml-2>**DELETE**</span> |
| 数据控制(DCL) | <span p-1 rounded-lg bg-green text-white ml-2>**GRANT**</span> <span rounded-lg bg-green text-white>**REVOKE**</span> |

### SQL 的基本概念

基本表：

-   本身独立存在的表
-   SQL中一个关系就对应一个基本表
-   一个（或多个）基本表对应一个存储文件
-   一个表可以带若干索引

存储文件

-   逻辑结构构成了关系数据库的内模式
-   物理结构对用户是隐藏的

视图

-   从一个或几个基本表到处的表
-   数据库中只存放视图的定义而不存放视图对应的数据
-   视图是一个虚表
-   用户可以再视图上再定义视图



## 3.2 学生-课程 数据库

![image-20230215121643500](/image-20230215121643500.png)

```sql
CREATE SCHEMA IF NOT EXISTS `S-T`;
CREATE TABLE IF NOT EXISTS `Student`(
	`Sno` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `Sname` VARCHAR(255) NOT NULL DEFAULT 'unknown_name',
    `Ssex` TINYINT NOT NULL DEFAULT 0,
    `Sage` TINYINT NOT NULL DEFAULT 0,
    `Sdept` VARCHAR(255) NOT NULL DEFAULT 'unknown_dept'
);
CREATE TABLE IF NOT EXISTS `Course`( 
	`Cno` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `Cname` VARCHAR(255) NOT NULL DEFAULT 'unknown_name',  
    `Cpno` VARCHAR(255) NOT NULL DEFAULT 'unknown_pno',
    `Ccredit` FLOAT NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS `SC`( 
    `id` BIGINT  ,
    `Sno` BIGINT ,
    `Cno` BIGINT ,
    FOREIGN KEY (Sno) REFERENCES `Student`(`Sno`),
    FOREIGN KEY (Cno) REFERENCES `Course`(`Cno`),
    `Grade` TINYINT NOT NULL DEFAULT 0,
    PRIMARY KEY (`id`,`Sno`,`Cno`)
);
```

![image-20230215123735800](/image-20230215123735800.png)

```sql
INSERT INTO `Student` (`Sname`,`Ssex`,`Sage`,`Sdept`) VALUES
( '李勇' ,1,20,'CS'),
( '刘晨' ,0,19,'CS'),
( '王敏' ,0,18,'MA'),
( '张立' ,1,19,'IS') 
;
```

![image-20230215133708074](/image-20230215133708074.png)

----


 ![image-20230215131918332](/image-20230215131918332.png)

```sql
INSERT INTO `Course` ( `Cname`,`Cpno`,`Credit` ) VALUES 
('数据库'	,'5',	4),
('数学'		,'' , 2 ),
('信息系统'	,'1',	4),
('操作系统'	,'6',	3),
('数据结构'	,'7',	4),
('数据处理'		,'',2),
('PASCAL语言'	,'6',	4)
;
```

![image-20230215133652902](/image-20230215133652902.png)

-----

![image-20230215133005148](/image-20230215133005148.png)

```sql

INSERT into `SC`(`id`,`Sno`,`Cno`,`Grade`) VALUES 
(1,1,1,92),
(2,2,2,85),
(3,3,3,88),
(4,4,4,90);
```

![image-20230215133720872](/image-20230215133720872.png)

----

## 数据定义

### SQL 数据定义功能

-   视图和索引定义

-   模式

-   表定义

    >   tips:
    >
    >   模式与数据库、数据库中的表的关系：
    >   1个数据库下，可以有多个模式。 
    >
    >   1个模式下，可以有0个或多个表 。 

| 操作对象 | 创建          | 删除        | 修改        |      |
| -------- | ------------- | ----------- | ----------- | ---- |
| 视图     | CREATE VIEW   | DROP VIEW   |             |      |
| 索引     | CREATE INDEX  | DROP INDEX  | ALTER INDEX |      |
| 模式     | CREATE SCHEMA | DROP SCHEMA |             |      |
| 表       | CREATE TABLE  | DROP TABLE  | ALTER TABLE |      |

### 模式

数据库（有的系统称为目录）-> 模式 -> 表以及视图、索引

现代关系数据库系统提供了一个层次化的对象命名机制

-   一个关系数据库管理系统的实例中可以有多个数据库
-   一个数据库可以建立多个模式
-   一个模式下通常包括多个表、视图和索引等数据库对象

![image-20230215140428334](/image-20230215140428334.png)

#### 模式的定义与删除

##### 定义

-   定义模式实际上定义了一个命名空间。

-   在这个空间中可以定义该模式包含的数据库对象，例如基本表、视图、索引等。

-   在CREATE SCHEMA中可以接受CREATE TABLE，CREATE VIEW和GRANT子句。

    ```sql
    CREATE SCHEMA `SCHEMA_A` AUTHORIZATION `SYS_USER` 
    CREATE TABLE `TABLE_NAME` (
    	`COLUMN_NAME` TYPE [NOT NULL] [KEY_TYPE] [DEFAULT DEFAULT_VALUE]
        ....
        表名 表完整性约束
    )
    ```

##### 删除

```sql
DROP SCHEMA <模式名> <CASCADE|RESTRICT>
```

-   删除模式有两种额外选项

    -   级联：删除模式的同时把该模式中所有的数据库对象全部删除

    -   限制：如果该模式中定义了下属的数据库对象（如表，视图等），则拒绝该删除语句的执行

        >   也就是级联全部强制清空，格式化，限制就是确保为空的时候删除

        

#### 基本表的定义、删除

```sql
CREATE TABLE <表名> (
	<列名><数据类型>[列级完整性约束:e.g:NOT NULL],
    [<列名><数据类型>[列级完整性约束:e.g:NOT NULL]],
    [<表级完整性约束条件：e.g: PRIMARY KEY (...)>]
)
```

<表名>：索要定义的基本表的名字

<列名>：组成该表的各个属性

<列级完整性约束条件>：涉及相应属性列的完整性约束条件

-   `UNIQUE`
-   `PRIMARY KEY`
-   `NOT NULL`
-   `FOREIGN KEY`
-   `AUTO_INCREMENT`
-   `DEFAULT`
-   `CHECK`

<表级完整性约束条件>：涉及一个或多个属性列的完整性约束条件

-   PRIMARY KEY ( <列名>,[<列名>] )
-   如果完整性约束条件涉及到该表的多个属性列，则必须定义在表级，不然的话就可以定义在列级

>   也就是 
>
>   PRIMARY KEY 和 PRIMARY KEY ( ) 的区别 

##### 数据类型

-   SQL 中的域的概念用**数据类型**来实现

-   定义表的属性时需要指明其数据类型以及长度

-   选用那种数据类型需要从取值范围和运算角度来思考

    | 序号 | 数据类型                          | 含义                                                         | 范围 |
    | ---- | --------------------------------- | ------------------------------------------------------------ | ---- |
    | 1    | `CHAR(n)`,`CHARACTER(n)`          | 长度为 n 的定长字串                                          |      |
    | 2    | `VARCHAR(n)`,`CHARACTEVARYING(n)` | 最大长度为 n 的边长字串                                      |      |
    | 3    | `CLOB`                            | 字符串大对象                                                 |      |
    | 4    | `BLOB`                            | 二进制大对象                                                 |      |
    | 5    | `INT`，`INTEGER`                  | 长整数（4字节）                                              |      |
    | 6    | `BIGINT`                          | 大整数（8字节）                                              |      |
    | 7    | `SMALLINT`                        | 短整数（2字节）                                              |      |
    | 8    | `NUMERIC(p,d)`                    | 定点数，由 p 位数字（不包括符号位，小数点）组成，小输后面由 d 位 |      |
    | 9    | `DECIMAL(p,d),DEC(p,d)`           | 同 NUMERIC                                                   |      |
    | 10   | `REAL`                            | 取决于机器精度的单精度浮点数                                 |      |
    | 11   | `DOUBLE PRECISION`                | 取决于机器精度的双精度浮点数                                 |      |
    | 12   | `FLOAT(n)`                        | 可选精度的浮点数，精度至少为 n 位数字                        |      |
    | 13   | `BOOLEAN`                         | 逻辑布尔量                                                   |      |
    | 14   | `DATE`                            | 日期,YYYY-MM-DD                                              |      |
    | 15   | `TIME`                            | 时间，HH:MM:SS                                               |      |
    | 16   | `TIMESTAMP`                       | 时间戳类型                                                   |      |
    | 17   | `INTERVAL`                        | 时间间隔类型                                                 |      |

    >    每一个基本表都属于某一个模式
    >
    >   一个模式包含多个基本表
    >
    >   定义基本表所属模式
    >
    >   -   方法一 在表名中明显地给出模式名 
    >
    >       ```sql
    >       Create table"S-T".Student(......);     /*模式名为 S-T*/
    >       Create table "S-T".Cource(......);
    >       Create table "S-T".SC(......); 
    >       ```
    >
    >       方法二：在创建模式语句中同时创建表 
    >
    >       方法三：设置所属的模式 

-   创建基本表（其他数据库也一样）时候，没有指定模式，系统根据搜索路径来确定对象所属的模式

    >   在 use database_name; 的时候选择的模式

-   关系数据库管理系统会使用模式列表中第一个存在的模式作为数据库对象的模式名

-   若搜索路径中的模式明都不存在，系统将会报错

-   数据库管理员用户可以设置搜索路径，然后定义基本表

##### 修改表

```sql
ALTER TABLE <表名>
[ADD[COLUMN] <新列名>]
[ADD <表级完整性约束>]
[DROP[COLUMN] <列名> [CASCADE | RESTRICT]]
[DROP CONSTRAINT <完整性约束名> [RESTRICT|CASCADE]]
[DROP COLUMN <列名><数据类型>]
[ALTER COLUMN <列名><数据类型>]

ALTER TABLE `Student` ADD `S_entrance` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
ALTER TABLE `Student` ADD `new_column`;
ALTER TABLE `Student` DROP CONSTRAINT PK_[列名] | FK_[列名] | UC_[列名] [CASCADE|RESTRICT];
ALTER TABLE `Student` DROP COLUMN `old_column`;

....
```



#### 删除表

```Sql
DROP TABLE <表名> [RESTRICT | CASCADE];


DROP TABLE `S-T`.sc CASCADE;

```

>   `RESTRICT`、`CASCADE` 效果同之前删除模式一样 

-   基本表定义被删除，数据被删除

-   表上建立的索引、视图、触发器等一般也将被删除

    若表上建有视图，选择 `RESTRICT `时表不能被删除；选择 `CASCADE` 时，视图也自动删除。

```sql
CREATE VIEW VIEW_STUDENT AS
SELECT Sno, Sname,Sage From Student
WHERE Sdept='ls';
```



****

#### 索引表的定义、删除

-   建立索引的目的：加快查询速度

-   关系数据库管理系统中常见索引
    -   顺序文件上的索引
    -   B+ 索引 :taco: 具有动态平衡的有点
    -   散列索引：查找速度很快
    -   位图索引

{% markmap 200px %}

-   索引

    -   谁可以建立索引
        -   数据库管理员，也就是建表的主人

    -   谁维护索引
        -   关系数据库管理系统自动完成

    -   谁使用索引
        -   关系管理系统自动选择合适的索引作为存取路径，用户不必也不能显示的选择索引

{% endmarkmap %}

##### 建立索引

```sql	
CREATE [UNIQUE|CLUSTER] INDEX <索引名> ON <表名>(<列名>[<次序>],....)

CREATE UNIQUE INDEX Stusno ON Student(Sno);
```

>   个人理解，INDEX 的使用场景应该是在静态的表中，也就是内部数据的使用，比如我要放一个百科手册在里面，对这个手册我在之后并不会改他，或者说我在很久远之后，而且是作为管理员的我，来修改，这个时候建立索引性价比就比较高。
>
>   索引是属于表的，所以不存在修改索引到哪个表啥的。

##### 修改索引

```sql
ALTER INDEX <旧索引名> RENAME TO <新索引>;

ALTER INDEX Stusno  RENAME TO Stuid;
```

##### 删除索引

```sql
DROP INDEX <索引名>;

DROP INDEX Stusno;
```

### 阶段总结

>   阶段总结：以上都是 DML 相关的语句
>
>   对于表进行创建，删除
>
>   他主要有一下几个方面:
>
>   -   模式
>
>       -   ```sql
>           CREATE SCHEMA <模式名> [AUTHORIZATION <USER_NAME>]; 
>           ```
>
>       -   ```sql
>           DROP SCHEMA <模式名> [CASCADE | RESTRICT];
>           ```
>
>   -   基本表
>
>       -   创建 
>
>           ```sql
>           CREATE TABLE <TABLE_NAME> VALUES
>           ( ....,
>            ....
>           );
>           ```
>
>       -   删除
>
>           ```sql
>           DROP TABLE <TABLE_NAME> [CASCADE |RESTRICT];
>           ```
>
>       -   修改
>
>           
```sql
ALTER TABLE <表名>
[ADD[COLUMN] <新列名>]
[ADD <表级完整性约束>]
[DROP[COLUMN] <列名> [CASCADE | RESTRICT]]
[DROP CONSTRAINT <完整性约束名> [RESTRICT|CASCADE]]
[DROP COLUMN <列名><数据类型>]
[ALTER COLUMN <列名><数据类型>]

ALTER TABLE `Student` ADD `S_entrance` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
ALTER TABLE `Student` ADD `new_column`;
ALTER TABLE `Student` DROP CONSTRAINT PK_[列名] | FK_[列名] | UC_[列名] [CASCADE|RESTRICT];
ALTER TABLE `Student` DROP COLUMN `old_column`;

....
```

-   视图

    -   创建

        ```sql
        CREATE VIEW <视图名> AS
        SELECT ..... ;
        ```

        

    -   删除

        ```sql
        DROP VIEW <视图名> ;
        ```

        

-   索引

    ```sql
    DROP INDEX <索引名>;
    
    DROP INDEX Stusno;
    ```

    
