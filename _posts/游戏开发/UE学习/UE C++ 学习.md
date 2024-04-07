---
title: UE C++ 学习
---
## UE C++ 快速开启指南

作为 UE 的开发一种方式，没有C++，倘若只是使用蓝图开发，固然可以，但是正如来到了巴黎没有去看埃菲尔铁塔，吃夹心饼干，但是没有夹心，总是缺少一点儿核心的。

我们都知道在计算机中，不论什么开发方式，最终的目的都是去生成机器码，然后才能运行，而UE的开发内容，整体是以C++开启的，你的绘制也会由一种叫做 "Kismet" 转化为 C++ Native，从而进一步运行的，所以 UE 的开发从本质来看就是一个C++项目。因此本文会从 C++ 执行的角度来对 UE 项目进行一个重新介绍。

首先本文会简要介绍 C++ 的基本编译流程、简要讲解**预处理、编译、汇编、链接**的过程。

## C++基本的编译流程

![c++生成二进制流程](media/c++生成二进制流程.png)

### 预处理阶段
如上图所示，C++源码首先会被预处理，在这一步骤中，主要是为了进行一个静态替换，可以理解为编译器帮我们 Replace 了一遍：

```cpp
#include <iostream>
#define A 1
typedef int x;
using namespace std;

int main(){
	x a = 0 ;
	std::cout<<A+a;
	return 0;
}

```

```sh 
gcc -E main.cpp -o main.
```
```i
.....
# 5 "main.cpp"
typedef int x;

using namespace std;
int main (){
 x a = 0;
 std::cout<<1 +a;
 return 0;
}
```
![](media/m_1033babb3ac32e8529c55e898877f0ce_r.png)
先不看 #include 中展开的 #define ,我们直接看 main 函数部分，可以看到这个时候的 `A` 已经变成了 `1`，那这一步我们怎么在 visual studio 进行呢？其实很简单
![](media/m_62a130aa1d38e8818a20a3b77d8d4b51_r.png)
点击或进入配置数学在此处配置，可以选择是否保留注释。

![](media/m_59d25d675aae1fb833fca9a861c270ea_r.png)

经过静态替换之后，也就是说其实之前还是代码源文件处理的文本阶段（这一步在使用Rust开发的时候感慨颇深😒），经过替换后才进入编译器阶段。

### 编译器处理阶段
这一部分主要是编译原理的内容了，不过多深入。
1.扫描（词法分析），2.语法分析，3.语义分析，4.源代码优化（中间语言生成），5.代码生成，目标代码优化。
下列语句可以生成，但是相信我，没啥看的。因为这个时候就是一个二进制了。
```sh
gcc -s hello.c -o hello.s
```
### 汇编阶段（as）
主要作用：汇编器是将汇编代码转变成可以执行的指令，生成目标文件。

### 链接阶段（ld）
通过编译器的5个步骤后，我们获得目标代码，但是里面的各个地址还没有确定，空间还没有分配。

这里面值得我们关注和需要重点理解的是 ld 阶段，浙江有助于我们去理解和使用。链接（Link）其实就是一个"打包"的过程，它将所有二进制形式的目标文件(.o)和系统组件组合成一个可执行文件。C++程序编译的时候其实只识别.cpp文件，每个cpp文件都会分别编译一次，生成一个.o文件。这个时候，链接器除了将目标文件和系统组件组合起来，还需要将编译器生成的多个.o或者.obj文件组合起来，生成最终的可执行文件(Executable file)。


## UE 中开启 C++
首先进入项目，然后在 `Tools>New C++ Class`
![](media/m_be157f2bcda5d660e8dfd31c8d64b28e_r.png)
接着会弹出对话框，选择希望生成的类型模板。这里为了方便，选中 Actor 类型生成，
![](media/m_7fbc71a0f4a265e6b6752f3ea95b601e_r.png)

![](media/m_4aa4e9f6963fc805255737bd37b9626a_r.png)
这有两个值得关注的点，这个之后再描述，本文只是为了简要讲解如何开始一个C++项目，以及看的懂外部C++库引用。创建后，会提示询问是否重新编译，一般选**是**
![](media/m_521f70b8671af7fd55be9eb895dddb0e_r.png)
之后再次点击 `Tools>Open xx Project`,本文使用的是 `Rider`,
![](media/m_cb4c558e698ba807af0a66f86c75a617_r.png)
值得注意的是，和C++挂钩的环境配置都很麻烦。

|Unreal Engine Version|VS 2019 Version|VS 2022 Version|
|---|---|---|
|**5.3**|16.11.5 or later|17.4 or later, 17.6 recommended (Default)|
|**5.2**|16.11.5 or later|17.4 or later (Default)|
|**5.1**|16.11.5 or later (Default)|17.4 or later|

![](media/m_fb9987b2cdb0d44b59df169cd454aeec_r.png)

## 使用C++的Actor
就和正常创建 Actor 一样，选择蓝图类。
![](media/m_d9c80903ca032830032735add8677eb2_r.png)

---待更新