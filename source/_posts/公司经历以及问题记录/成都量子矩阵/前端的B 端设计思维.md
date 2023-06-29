---
author: couriourc
categories: [公司经历以及问题记录]
date created: 2023-06-24
date modified: 2023-06-25
dg-publish: false
title: 前端的B 端设计思维
---

## 以“习惯”为本的设计

```plantuml
@startmindmap
<style>
mindmapDiagram {
	.red {BackgroundColor #e54d42;};
	.orange {BackgroundColor #f37b1d;};
	.yellow {BackgroundColor #fbbd08;};
	.olive {BackgroundColor #8dc63f;};
	.green {BackgroundColor #39b54a;};
	.cyan {BackgroundColor #1cbbb4;};
	.blue {BackgroundColor #0081ff;};
	.purple {BackgroundColor #6739b6;};
	.mauve {BackgroundColor #9c26b0;};
	.pink {BackgroundColor #e03997;};
	.brown {BackgroundColor #a5673f;};
	.grey {BackgroundColor #8799a3;};
	.black {BackgroundColor #333333;};
	.darkGray {BackgroundColor #666666;};
	.gray {BackgroundColor #aaaaaa;};
	.ghostWhite {BackgroundColor #f1f1f1;};
	.white {BackgroundColor #ffffff;};
	.redLight{BackgroundColor #fadbd9;};
	.orangeLight{BackgroundColor #fde6d2;};
	.yellowLight{BackgroundColor #fef2ce;};
	.oliveLight{BackgroundColor #e8f4d9;};
	.greenLight{BackgroundColor #d7f0db;};
	.cyanLight{BackgroundColor #d2f1f0;};
	.blueLight{BackgroundColor #cce6ff;};
	.purpleLight{BackgroundColor #e1d7f0;};
	.mauveLight{BackgroundColor #ebd4ef;};
	.pinkLight{BackgroundColor #f9d7ea;};
	.brownLight{BackgroundColor #ede1d9;};
	.greyLight{BackgroundColor #e7ebed;};
}
</style>

* 用户体验 
right side
**_ 符合用户操作的交互 <<purple>>
**_ 便捷的操作 <<purple>>
**_ 界面一致 <<purple>>
@endmindmap
```

**B 端**产品相对于**C 端**产品更加注重用户交互，一般 B 端用户对于界面的要求并不高，**习惯就好**。那么 **B 端**中的以人为本又是什么意思呢？ 其实对于 B 端使用很多细节其实是在抠"**习惯**"，可以说一款适合用户习惯的设计，就是一个合理的产品了。

### 逻辑清晰的设计

**原则一：清楚数据如何来，去到哪儿。** 操作逻辑必须是保证贯通的，当用户对某一个步骤产生，“这个数据是怎么来的？”，这种问题的时候，毫无疑问，这个设计是失败的。甚至在自己开发的时候都产生疑问: 这堆数据究竟**TMD**是怎么来的🤡。

**原则二：不存在无关或不可用的控件。** 一个页面中，不应该存在不可用的控件，每一个控件存在一定有它的意义。若是无用的控件放置在页面，会让用户认为自己被戏耍，或者认为页面出错了。

**原则三：及时有用的反馈。** B 端产品往往涉及到许多的表单，也就不可避免的考虑有效值的输入限制了，最好的控制方法就是，**提前的预警+有效的拦截**，当用户输入不可用的数据时，应该提供警告，甚至是给出最优建议值。

### 习以为常的快捷  

**原则四：设计一致性。** 设计上下文的风格应该是一致的，基本的圆角，配色风格，排版整齐。入口统一，这样有利于用户养成“**好习惯**”，从而避免误操作带来不可预料的错误。

**原则五：不覆盖用户常用的快捷键。** 有一些历史悠久的操作快捷键，比如回车搜索，`Ctrl+ C|V` 系列的快捷键，这些对于大部分用户都已经习以为常，若是突然没了，或者改变了，会带来很多奇怪的操作。

%%TODO 未完成~待更新%%
