---
author: couriourc
categories: [产品思考]
date-created: 2023-06-24
date-modified: 2023-07-08
dg-publish: true
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

#### 原则一：清楚数据如何来，去到哪儿

操作逻辑必须是保证贯通的，当用户对某一个步骤产生，“这个数据是怎么来的？”，这种问题的时候，毫无疑问，这个设计是失败的。甚至在自己开发的时候都产生疑问: 这堆数据究竟**TMD**是怎么来的🤡。

在前端开发时，应该注意在代码编排的时候，请求与鉴定顺序应该是一致的。下面是一种流程编排的思考方式。

```typescript
// 一种函数式的数据编排模式
task("submit-form") // 设定任务集，代表这个是什么流程
	.load(formData) // 填入数据
	.pipe(selfCheck) // 数据提交前的预检查
	.wait(submitForm) // 提交数据表，等待数据请求完成
	.pipe(fallback) // 请求成功结果的反馈
	.pipe(…) // 其他的并行请求，实现方式可以参考 gulp 的实现
	.pipe(norimalize) // 将返回的数据人性化处理[见后文，原则三]
```

还有一些额外的交互细节，比如防抖节流，加载加锁等。

#### 原则二：不存在无关或不可用的控件

一个页面中，不应该存在不可用的控件，每一个控件存在一定有它的意义。若是无用的控件放置在页面，会让用户认为自己被戏耍，或者认为页面出错了。

开发的时候经常会碰到，第二天就要上线了，但是还有部分功能处于开发中，或者还处于安排了，但是处于待定状态，可能很多时候会整一个 `disabled` 给用户，然后置灰，或者抛错，这是没有意义的，这可以说是滥竽充数了。可以考虑 `stash` 一个功能点，然后逐步 `push `，一部分一部分来。

#### 原则三 ：及时有用的反馈

B 端产品往往涉及到许多的表单，也就不可避免的考虑有效值的输入限制了，最好的控制方法就是，**提前的预警+有效的拦截**，当用户输入不可用的数据时，应该提供警告，甚至是给出最优建议值。

##### 提前的预警

用户总是不可信任的，对于数据的预检是很重要的，否则很容易流入脏数据，为了系统安全往往会引入数据校验，我们开发过程中，往往是以用户点击提交之后，才对数据进行校验，这使得用户在填完信息之后，才发现这个数据不能用。这是不靠谱的，我们应该提前把一些比如手机号格式校验，邮箱校验，有效值校验，在失去焦点之后，立即进行督促，并且一步步引导用户完成表单提交。

##### 有效的拦截

```typescript
// 一种表单校验设计方案
const form = {
	username: ''
	password: '',
	email: '',
	// 增加冗余字段
	_pass:true,
	_reason: '',
	check(){ 
		// 争对有效值及时的校验
		if (!valid(email)) {
			this._pass  = false;
			this._reason = "email not valid".tr; // tr 表示国际化后的文字，只做演示
			return false;
		}
		// 争对当前表单的校验
		if (!this.username) {
			// 进行轻提示
			 Message.error("please input username".tr) ;
			 return false;
		}
		return true;
	},
}

function useSubmit(form){
	if (!form?.check?.()) return; // 提前预检
	call(this,task("submit-task")); // 执行提交任务,这里具体如何都行
}

```

### 习以为常的快捷键

#### 原则五 ：不覆盖用户常用的快捷键

有一些历史悠久的操作快捷键，比如回车搜索，`Ctrl+ C|V` 系列的快捷键，尤其是对于富文本编辑，这个十分重要，这些对于大部分用户都已经习以为常，若是突然没了，或者改变了，会带来很多奇怪的操作。

常用的快捷方式，`ctrl+s <保存>`，`enter <搜索>` ，`ctrl+shift+v <格式粘贴>`，`ctrl+z` ……

为了便于精细化快捷操作设计，可以抽离到组件，或者直接使用指令实现。

```vue
<shortcut description="快捷键描述信息" :shortcut="{
		  'CTRL+Z': revoke,
		  'CTRL+S': save
}" >
	<!-or like this -->
	<input v-shortcut.ctrlB="Bold" /> 
</shortcut>
```

### 操作的容错性

>“当用户错误地选择了的某个功能后，系统需要提供一个明确的「紧急出口」，来让用户离开这个不想要的状态，无需额外的对话。支持撤销和重做”。——雅各布·尼尔森（Jakob Nielsen）

当用户选择一个错误的操作之后，应该给予一个明确的**后悔窗口**，

#### 可撤回可反馈

可撤回的形式有很多种，典型的表现为在消息完成提示时候，提供一个撤回按钮，还有一种就是回收站的形式。

可反馈就很好理解了，就是我们常说的客服反馈。

#### 不可逆操作给予警示

### 设计一致性

设计上下文的风格应该是一致的，基本的圆角，配色风格，排版整齐。入口统一，这样有利于用户养成“**好习惯**”，从而避免误操作带来不可预料的错误。
