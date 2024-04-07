---
title: 【UE 推荐教程集锦】
---

## 基础

### 视频类

- [【虚幻 4】UE4 初学者系列教程合集](https://www.bilibili.com/video/BV164411Y732?p=1&vd_source=7f97f243f348f7f28f03f399b2063fe6)

1. P9~P11: 视图编辑部分基础，学到这一部分，虽然对于每一个东西可能并不是很了解，但是这儿是前端思考方式和 UE 思考方式的分水岭，因为作为 Javascriptor,我们更加习惯使用各种二维式的布局，很少去手动定位，但是 UE 毕竟是号称给美术家们的工具。

- [【UE 必看】【UE5 节点大全】](https://www.bilibili.com/video/BV1QP4y1U7H3/?spm_id_from=333.337.search-card.all.click&vd_source=c7d03b0109b9075369185655605ec392)
    确实是必看，这玩意用来做复习，挺不错，

- [UE4 智慧城市可视化实例教程](https://www.bilibili.com/video/BV19T4y1P7RS/?spm_id_from=333.999.0.0&vd_source=7f97f243f348f7f28f03f399b2063fe6)

1. p11~p13 部分：通过这一部分，可以学到基本如何用 UNG，对于前端 er 来说，值得注意的是 UMG 是相对更加熟悉的，但是又不会太熟悉，熟悉的是那些布局方式，和所谓的锚点（transition-origin)，但是不熟悉的是，这个在有过对浏览器渲染有一定理解之后，思考起来会更加得心应手（主要是部分 HUD，可以对照思考 Canvas)。

2. 这个 UP 主的案例，还算是比较有设计感的，是不是没有想法的时候就来看一下。

- [【数字孪生-教程】UE5+Cesium 智慧城市&园区全流程开发-数据篇](https://www.bilibili.com/video/BV1op4y1V71r?p=1&vd_source=7f97f243f348f7f28f03f399b2063fe6)

1. Mark 住，这儿用到的时候再看吧，大概是对城市一些地形场景中会用到，（本人也只是粗看勒一下目录，大概知道有哪些功能。

- [虚幻引擎倾囊相授计划：AI 行为树系统教程](https://www.bilibili.com/video/BV1dz4y1A7G3?p=6&vd_source=c7d03b0109b9075369185655605ec392)
    (●'◡'●)最近也还在看。

### 文档类

视频看起来始终没有书籍看着快，因为文档或者书本，总是一些列总结性的句子。比起会看视频学习，查文档总是更加高效的办法，当然更加简单的就是(GPT)了，顺便推荐一个网站 [poe](https://poe.com)。

- [官方文档](https://dev.epicgames.com/documentation/zh-cn/unreal-engine/unreal-engine-5-3-documentation)
    官方文档一直被吐槽,不是没有原因的,内容杂乱,很难看懂,作为一枚菜鸡,把这个文档翻了不下 10 次之后,总算知道这个文档的正确用法了,这个文档最多的是例子,对于很多流程性质的和概念性质的讲的是是而非,要想弄懂究竟这篇文档讲什么,就需要搞懂他主要有用的模块和可以作为字典来查的模块.

1. 内容管理模块：也就是下面部分
   ![](http://cloud.datamatrixai.com:30137/uploads/ue-web/images/m_3f2e7d3d7356afe75b834c22e89accde_r.png)
   然后就可以知道如何开启一个新项目了，当然也要跳着看，比如
   ![](http://cloud.datamatrixai.com:30137/uploads/ue-web/images/m_d60c920762bf5f235170ae3692de1991_r.png)
   (╯°□°）╯︵ ┻━┻ 这一部分放前面 Duck 不必啊，当作字典来查就好了。
2. 基本概念模块
   ![](http://cloud.datamatrixai.com:30137/uploads/ue-web/images/m_65acd3b33f307b77900e7e39466be1d6_r.png)
   相对而言这一部分，最好跳过先，不然会迷糊的，但是这个作为一个探寻的地图入口还是靠谱的。
3. References
   ![](http://cloud.datamatrixai.com:30137/uploads/ue-web/images/m_85308498c62f0f59670e7b3e542f175e_r.png)
   个人感觉官方文档的案例写的都挺虎头虎脑的，看起来很复杂，至少菜鸡如我的中间的案例，如看，这些参看文档是他最后的宝藏了，至于如何看懂这个文档，这个就得分模块了，我也只能是现查现用，具体模块也还没分出来。

- [Awesome 系列](https://github.com/insthync/awesome-unreal)
    喜闻乐见的 Awesome 系列，这里有很多工具，平常的时候看到个名字有个印象就可以了。

- [Unreal Engine 4 学习总动员——C++编程](https://www.tdpress.com/cms/book/851)
    微信读书上有，配合大象无形效果更好，知道简单的 API 和，就已经可以理解和运行 UE 中的 C++了

## 进阶

### C++

- [基础理解](https://www.bilibili.com/video/BV1jj42197DL/)

1. 这个视频的作用，大概就是和前端去理解了事件循环和代码之间的作用，看了这一部分，大概可以理解 UE 中大概是如何开始运行的。

- [Guide-UnrealEngine](https://github.com/MrRobinOfficial/Guide-UnrealEngine)

1. 必须 Mark 住，简单过一圈，能对很多有的没得对象有个记忆就很不错了，但罪常看的还是前面几个 CheatSheet，名字对应节点（准确来说蓝图的方法名来源于 C++的方法名，所以用的时候，从蓝图到 C++ 的思考方式就是你用到的节点名，当然更复杂的就是 C++ 基础了。

- [【（中字）UE5 虚幻引擎 5 C++：创建自定义编辑器工具-哔哩哔哩】](https://b23.tv/WOibCFp)
    (●'◡'●)最近也还在看。

## 个人在看(ing)书单

- [ 大象无形 ](https://github.com/couriourc/couriourc.github.io/blob/source/_posts/%E4%B9%A6%E5%8D%95/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B1%BB/%E5%A4%A7%E8%B1%A1%E6%97%A0%E5%BD%A2%EF%BC%9A%E8%99%9A%E5%B9%BB%E5%BC%95%E6%93%8E%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1%E6%B5%85%E6%9E%90.pdf)
- [Unreal Engine 4 材质完全学习教程](https://github.com/couriourc/couriourc.github.io/blob/source/_posts/%E4%B9%A6%E5%8D%95/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B1%BB/Unreal%20Engine%204%20%E6%9D%90%E8%B4%A8%E5%AE%8C%E5%85%A8%E5%AD%A6%E4%B9%A0%E6%95%99%E7%A8%8B.pdf)
- [Unreal Engine 4 游戏开发入门经典](https://github.com/couriourc/couriourc.github.io/blob/source/_posts/%E4%B9%A6%E5%8D%95/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B1%BB/Unreal%20Engine%204%E6%B8%B8%E6%88%8F%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8%E7%BB%8F%E5%85%B8%EF%BC%88%E5%BC%82%E6%AD%A5%E5%9B%BE%E4%B9%A6%EF%BC%89.pdf)

## 总结

整体而言，UE 这东西毕竟是工具，既然是使用工具，那么知道在哪儿用比知道他怎么产生会更加快一些，但是如果只是知道工具怎么用，不是不可以，但是很显然，将知识的原理拍平，会发现很多都是通用的。当然只是会用的话，只需要知道下面步骤就行：

1. 知道流水线（流程）【(●'◡'●)个人也还在梳理】
2. 调用 API，发现很卡，然后开始优化
3. 知道如何构建，打包。
