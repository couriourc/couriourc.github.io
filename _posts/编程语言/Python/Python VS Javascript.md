---
typora-root-url: ./assets
title: Python VS Javascript
mathjax: true
tags: '-Python'
categories:
  - 编程语言
nanoid: YaT8jvEw8I8TZkaPH9mYS
date: 2021-09-11 12:55:55
abbrlink:
---

## 代码块

### **Python和JavaScript中的代码块**

#### **Python如何定义代码块**

Python依靠缩进来定义代码块。当一系列连续的代码行在同一级别缩进时，它们被视为同一代码块的一部分。

```python
if x<5:
    print(x)

def foo(x):
    print(x)
```

> 在Python中使用缩进定义代码块

#### **JavaScript如何定义代码块**

在JavaScript中，我们使用花括号（{}）将属于同一代码块的语句分组。

以下是示例：

```javascript
if (x<5){
    console.log(x)
}

function foo(x){
    console.log(x)
}
```

> 使用花括号在JavaScript中定义代码块
> 代码块的作用是用于标识作用域的，以及便于阅读

## **Python和JavaScript中的变量定义**

要在Python中定义变量，我们要写出变量名，后跟等号（**=**）和将分配给该变量的值。

```python
<variable_name> = <value>

variable = 5
```

### **如何在JavaScript中定义变量**

语法在JavaScript中非常相似，但是我们只需要**var** 、**let** 、**const**在变量名称之前添加关键字。

```javascript
var variable = 5
let variable = 5
const CONSTANS= 5;
```

Python 中没有常量 如果需要常量可以如下定义

```python
 class const:
     class ConstError(TypeError):pass
     def __setter__(self,name,value):
         if name in self.__dict__:
             raise self.ConstError("禁止修改（%s）"%name)
         self.__dict__[name] = value
```

## **Python和JavaScript中的变量命名约定**

Python和JavaScript遵循两种不同的变量命名约定。

### **如何在Python中命名变量**

Python推荐使用蛇形命名法（**snake_case）**。

根据Python样式指南：

- 变量名遵循与函数名相同的约定。
- 函数名称应**小写**，**必要时**用下划线分隔单词**以提高可读性。

因此，Python中的典型变量名称如下所示：

```python
first_name = '咸鱼润'
```

### **如何在JavaScript中命名变量**

不过在JavaScript中，我们应该遵循小骆驼命名法（lowerCamelCase）为命名样式，暨以首字母小写，之后每个新单词以大写字母开头。

```javascript
let firstName = '咸鱼润'
```

> Python 和 JavaScript 常量均遵循 大写+下划线

## **Python和JavaScript中的数据类型和值**

### **数值数据类型**

Python有三种数值类型，可以帮助我们出于科学目的执行精确计算。这些数值类型包括：int (整数)、 float (浮点数)和complex。它们中的每一个都有自己的属性、特征和应用。

而JavaScript只有两种数值类型：Number和BigInt。整数和浮点数都被认为是Number类型。

#### **None vs. null**

在Python中，有一个名为None的特殊值，我们通常用它来指示变量在程序中的某个特定点没有值。

JavaScript中的等效值为null，这表示不存在任何对象值。

> 需要注意的是 typeof null 为`object`

#### **undefined 值**

> JavaScript 在未分配的时候会默认给一个初始值为**undefined**

在**Python中**，你必须为变量分配一个初始值。没有初始值就无法声明它。你可以讲None指定为Python变量的初始值，以表示缺少值。

#### **Python和JavaScript中的基础数据类型**

- **Python**具有四种基础数据类型：整数（int），浮点数（float），布尔值（bool）和字符串（str）。
- **JavaScript**具有六（七）种原始数据类型：**undefined**，**布尔值，字符串，数字BigInt**、**Symbol** 和（**null**）。因null 一直存在争议，null 因为null 又属于对象，但又不属于

## **如何用Python和JavaScript编写注释**

### **单行注释**

- 在**Python中**，我们使用井号（**#**）编写注释。该符号之后同一行上的所有字符均被视为注释的一部分。

```python
# 单行注释
```

- 在**JavaScript中**，我们写两个斜杠（**//**）来开始单行注释。

```javascript
// 单行注释
```

### **多行注释**

- 在**Python中**，要编写多行注释，我们要对每一行程序前都加上#号，以标识这行为注释。当然也可以使用''''''，其实是利用了多行字符串

```python
'''
多行注释
'''
```

- 在**JavaScript中**，多行注释以/*开头，以*/结束。这些符号之间的所有字符都被视为注释的一部分。

```javascript
/*
* 多行注释
*/
```

## **Python和JavaScript中的内置数据结构**

### **Tuples**

- 在Python中，有一个内置的数据结构，叫做元组，它和列表非常相似，但是不可更改。因此，它在程序执行过程中不能被改变，所以它被用来存储那些不应该被修改的数据。

- 在JavaScript中，并没有一个内置的具有这些特性的数据结构。虽然可以通过语言的某些特性来实现类似的数据结构。

### **列表List与数组Array**

- 在 **Python** 中，**List** 用于在同一数据结构中存储一系列值。可以在程序中对其进行修改，索引和使用。

> 对于 List 常用的方法
>
> 列出相关方法：dir(list)
>
> 队列方法：
>
> 增：list.insert()
>
> 删：list.pop(-1)
>
> 改：直接取出来改
>
> 栈方法
>
> 增：list.append()
>
> 删： list.pop()
>
> 改：取出来直接改
>
> 套件方法
>
> 增(数组合并)：list.extend()
>
> 删：指定删除：list.remove() 删除对应下标的值 del list[n] 删除列表：del list
>
> 查：查下标：list.index() ; 查数量：list.count() ；查值：直接取值
>
> 取值：下标取值：list[n];切片取值:name[n:m]  切片是不包含后面那个元素的值（顾头不顾尾）
>
> 功能方法
>
> 反转：list.reverse()
>
> 排序:  list.sort(reverse=True)降序排列，key 指定关键词，sorted()
>
 
 ```python
 sorted(iterable, cmp=None, key=None, reverse=False)
 # iterable -- 可迭代对象。
 # cmp -- 比较的函数，这个具有两个参数，参数的值都是从可迭代对象中取出，此函数必须遵守的规则为，大于则返回1，小于则返回-1，等于则返回0。
 # key -- 主要是用来进行比较的元素，只有一个参数，具体的函数的参数就是取自于可迭代对象中，指定可迭代对象中的一个元素来进行排序。
 # reverse -- 排序规则，reverse = True 降序 ， reverse = False 升序（默认）。
 ```
 
>
> 属性方法
>
> 获取长度：len(list)
>
> 获取最大值：max(list)
>
> 获取最小值：min(list)
>
> 遍历方法
>
> enumerate 同时取下标，元素

 ```python
 for i,v in enumerate(list):
     print(i,v)
 ```


 ```python
 #数组切片：
 name[n:m]  切片是不包含后面那个元素的值（顾头不顾尾）
 name[:m] 如果切片前面一个值缺省的话，从开头开始取
 name[n:] 如果切片后面的值缺省的话，取到末尾
 name[:] 如果全部缺省，取全部
 name[n:m：s] s：步长  隔多少个元素取一次
 ```

列表生成式：

```python
list1 = [1,2,3,4]
list2 = list(range(1,4))
list3 = list(x for x in range(4))
list4 = [x+y for x in range(4) for y in range(4)]
```

> 技巧：
>
> ```python
> ## 字典取值
> dict = {
>     'x':1,
>     'y':1,
>     'z':1,
> }
> [x+'='+v for k,v in dict.items()]
> ```
>
> 需要注意的是 Python 中的 list 没有 join 方法;请不要yy，此处☞我自己

- 在 **JavaScript中** ，可实现类似功能的数据结构称为 **Array** 。

> 对于 Array 常用的方法
>
> TODO:待总结

#### **哈希表 Map**

- 在**Python中**，有一个称为**字典**的内置数据结构，可帮助我们将某些值映射到其他值并创建键值对。可用作哈希表使用。叫做dict

> dict 常用方法总结
>
> 列出相关方法：dir(dcit)
>
> ['clear', 'copy', 'fromkeys', 'get', 'items', 'keys', 'pop', 'popitem', 'setdefault', 'update', 'values']
>
> ## keys()、values() 和 items() 方法
>
> 将这三个方法放在一起介绍，是因为它们都用来获取字典中的特定数据：
>
> - keys() 方法用于返回字典中的所有键（key）；
> - values() 方法用于返回字典中所有键对应的值（value）；
> - items() 用于返回字典中所有的键值对（key-value）。
>
> ## copy() 方法
>
> copy() 方法返回一个字典的拷贝，也即返回一个具有相同键值对的新字典
>
> 注意，copy() 方法所遵循的拷贝原理，既有深拷贝，也有浅拷贝。
>
> 类似与javaScript 中的Object.assign方法
>
> ## update() 方法
>
> update() 方法可以使用一个字典所包含的键值对来更新己有的字典。  
>
> 在执行 update() 方法时，如果被更新的字典中己包含对应的键值对，那么原 value 会被覆盖；如果被更新的字典中不包含对应的键值对，则该键值对被添加进去。
>
> ## pop() 和 popitem() 方法
>
> pop() 和 popitem() 都用来删除字典中的键值对，不同的是，pop() 用来删除指定的键值对，而 popitem() 用来随机删除一个键值对
>
> ## setdefault() 方法
>
> setdefault() 方法用来返回某个 key 对应的 value
>
> 也就是说，setdefault() 方法总能返回指定 key 对应的 value：
>
> - 如果该 key 存在，那么直接返回该 key 对应的 value；
> - 如果该 key 不存在，那么先为该 key 设置默认的 defaultvalue，然后再返回该 key 对应的 defaultvalue。

- **JavaScript**没有这种类型的内置数据结构，但是有某些方法可以使用语言的某些元素来重现其功能。相当于直接就是对象字面量

> 对象常用方法太多了，可以通过打印下面语句查看
>
> ```javascript
> console.log(Object.keys(Object))
> ```

## **Python和JavaScript中的运算符**

### **取整除**

尽管大多数算术运算符在Python和JavaScript间的工作原理和使用方式完全相同，但在进行整除时却略有不同。

- 在**Python中**，用双斜杠（**//**）进行整除运算。
- 在**JavaScript中**，没有特定的取整除的运算符。但我们可以通过调用`Math.floor`方法将结果四舍五入为最接近的整数，还有 `Math.round`,`Math.ceil`。

> 取整技巧 \~\~

### **比较值和类型**

在**Python中**，我们使用**==**运算符比较两个值及其数据类型是否相等

在**JavaScript中**，的==运算符，它的执行工作原理是在比较之前将两个对象转换为相同的类型。

### **逻辑运算符**

- 在**Python中**，有：**and**，**or**，和**not**这三个逻辑运算符。
  
  > 优先级为 not and or
- 在**JavaScript中**，则是：**&&**，**||** 和 **!** 。

### **类型运算符**

- 在**Python中**，要检查对象的类型，可以使用`type()`函数。

```python
print(type(target))
```

- 在**JavaScript中**，我们使用**typeof**运算符。

```javascript
console.log(typeof target)
```

## **Python和JavaScript中的条件语句**

通过条件语句，我们可以根据特定条件来选择程序后续将要执行的部分。

### **if 语句**

- 在**Python中**，我们依靠缩进来指示哪些代码行属于条件代码。
- 在**JavaScript中**，必须用括号将条件括起来，用花括号将代码括起来。该代码也应缩进。

#### **if/else 语句**

else子句在两种语言中都非常相似。唯一的区别是：

- 在**Python中**， 我们在**else**关键字之后写一个冒号（:）
- 在**JavaScript中**， 我们用大括号({})将属于该子句的代码括起来。

#### **多条件语句**

- 在Python中，我们在条件后面写关键字elif。在条件之后，我们写一个冒号(:)，代码缩进下一行。

```python
if condition_1:
    pass
elif condition_2:
    pass
elif condtion_3:
    pass
```

- 在JavaScript中，我们编写关键字Else if，后跟条件(用圆括号括起来)。条件结束后，我们编写花括号，并在花括号中缩进代码。

```javascript
if (condition1){
    
} else if (condition2){
    
} else if (condition3){
    
}
```

#### **Switch 语句**

- 在JavaScript中，我们有一个额外的控制语句，可以用来根据表达式的值选择要执行的操作。此语句称为**switch**。

```javascript
switch (variable){
    case whenVariableCondition1:
        break;
    case whenVariableCondition2:
        break;
    case whenVariableCondition3:
        break;
    default:
        break;
}
```

- **Python**没有这种类型的语句。

## **Python和JavaScript中的For循环和While循环**

### **循环**

在Python中定义for循环的语法比JavaScript中的语法相对简单。

- 在**Python中**，我们在关键字 for 后面写循环变量的名称，关键字 in，及调用 range() 函数，指定必要的参数。然后，我们写一个冒号(:)，后面是缩进的循环主体。

```python
for i in range(n):
    do_someting()
```

- 在JavaScript中，我们必须明确地指定几个值。我们用for关键字开始，后面是括号。在这些括号中，我们定义了循环变量的初始值，必须为False才能停止循环的条件，以及如何在每次迭代时更新变量。然后，我们写大括号来创建一个代码块，在大括号内我们写出循环的主体缩进。

```javascript
for (let i =0 ; i < n i++) {
    doSomething();
}
```

#### **遍历可迭代对象**

- 在 Python 中，我们在关键字 for 后面写上循环变量、in 关键字和迭代符。然后，我们写一个冒号（:）和循环的主体（缩进）。

```python
for i in iteriable:
    do_something()
```

- 在JavaScript中，我们可以使用一个for ... 的循环。我们在for关键字后面写上小括号，在小括号内写上关键字var，后面写上循环变量、关键字of和可迭代。我们用大括号包围循环的主体，然后缩进。

```javascript
for(let i of iteriable){
    doSomething();
}
```

#### **While循环**

- 在Python中，在关键字while后面写上条件、冒号(:)，然后在新的一行中写上循环的主体(缩进)。

```python
while condition_is_true:
    do_something()
```

- 在JavaScript中，语法非常相似。不同的是，必须用括号包围条件，用大括号将循环体括起来。

```javascript
while (conditionIsTrue){
    doSomething()
}
```

#### **do..while 循环**

在**JavaScript中**，还有一种Python不存在的循环类型。

这种类型的循环称为**do..while**循环，因为它至少执行一次操作，并在条件为时继续运行True。

> Python 不存在 do while

## **Python和JavaScript中的函数**

- 在 Python 中，在关键字 def 后面写上函数的名称，并在括号中写上参数列表。在这个列表之后，写一个冒号（:）和函数的主体（缩进）。

```python
def foo():
    pass
```

- 在JavaScript中，唯一不同的是，我们使用function关键字定义函数，并在函数的主体周围加上大括号。

```javascript
function foo(){
    
}
```

### **函数参数的数量**

- 在 Python 中，传递给函数调用的参数数必须与函数定义中定义的参数数相匹配。如果不是这样，就会发生异常。

> Python 中的可选参量
>
>

- 在JavaScript中，这不是必需的，因为参数是可选的。您可以使用比函数定义中定义的参数更少或更多的参数来调用函数。缺省的参数被赋予未定义的值，额外的参数可以通过Arguments对象访问。

```javascript
function foo(...args){
    console.log(arguments);
    console.log(args);
}
```

## **Python和JavaScript进行面向对象的编程**

### **Class**

类定义的第一行在Python和JavaScript中非常相似。我们在关键字**class**后跟类的名称。

唯一的区别是：

- 在**Python中**，在类名之后，我们写了一个冒号（**:**）

- 在**JavaScript中**，我们用大括号（**{}**）包围了类的内容

#### **构造函数和属性**

构造函数是一种特殊的方法，当创建类的新实例（新对象）时会调用该方法。它的主要目的是初始化实例的属性。

- 在**Python中**，调用了初始化新实例的构造函数**init** （带有两个前导和尾随下划线）。创建类的实例以初始化其属性时，将自动调用此方法。其参数列表定义了创建实例必须传递的值。该列表以**self**第一个参数开头。

```python
class A_class:
    def __init__(self):
        pass
```

- 在**JavaScript中**，构造函数方法被调用，**constructor**并且它还具有一个参数列表。

```javascript
class AClass{
    constructor(){
    }
}
```

## **Python和JavaScript中的方法**

- 在**Python中**，我们使用**def**关键字，其名称和括号内的参数列表定义方法。此参数列表以参数开头，**self**以引用正在调用该方法的实例。在此列表之后，编写一个冒号（**:**），并将该方法的主体缩进。

- 在**JavaScript中**，方法是通过编写其名称，后跟参数列表和花括号来定义的。在花括号内，编写方法的主体。

### **实例**

要创建类的实例：

- 在**Python中**，编写类的名称，并在括号内传递参数。

```python
instance = A_class()
```

- 在**JavaScript中**，需要**new**在类名之前添加关键字。

```javascript
let instance = new AClass()
```
