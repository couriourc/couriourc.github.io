---
author: couriourc
categories: [前端]
date: 2020-10-01 11:25:12
date created: 2023-03-11
date modified: 2023-06-25
title: Vue 简化版实现总结
---

## 简化版本Vue总结

我们都知道`Vue`是一个`渐进式`的框架 ，它有两大核心：（`数据驱动` `组件系统`），这里将提供`数据驱动`的一些思路，`组件系统` 将在之后探讨。

### 思路

我们都知道，Vue是一个MVVM的框架，这里所谓的MVVM，其实说的是M(model)-V(view)-VM(V--M) [数据模型 - 视图层 - 视图层之间的桥梁]，其中最为重要的 `VM` 就是`Vue` 的核心——`数据驱动` . 要实现这一点，我们就有一下几大难点:

1. `监测值` (diff算法)
   1. `监测值` 也就是我们需要绑定的对象也或者是值，我们要如何去监测值是否发生了变化，我们或许有时候需要拦截这种改变，进行一些加工的操作。
2. `视图`
   1. `虚拟Dom`
   2. `节点`

### 核心关键点

`Object.defineProperty` 可以对对象的 `getter`、`setter` 进行设置，所谓 `getter` 、`setter` 就是就是指获取对象的某个值的时候触发什么，设置某个值的时候自动触发什么，熟悉 `java` 的朋友应该知道这玩意。

其中 `set` 和 `get` 方法就起到了一个监测值改变的作用，这里单独拿出来分析一下：

```javascript
Object.defineProperty(this.$data, key, {
        configurable: false, //该状态下的配置不可被修改
        enumerable: false, //该状态下的属性描述符不可被枚举
        get() {
           // get 是获得属性值的方法 ， 当获取值的时候会触发这个方法
            return currentVal;
        },
        set(changeVal) {
            // set 是一种设置值的方法 ， 当设置这个值的时候触发这个方法
          if (changeVal !== currentVal) {
            // 修改的值和原来的不等
            currentVal = changeVal;
            // 通知所有元素的监听者元素发生了修改
            watcherObj.forEach((element) => {
              element.update();
            });
            // return currentVal;
          }
```

 再举一个例子(针对`get`)：

```javascript
let obj = {}; 
Object.defineProperty( obj , 'key' ,{
    get(){
        console.log("key say 你在调动我！！ ");
        return "我来当做当前的值>（#'.'）'>";
    }
})
console.log(obj.key)
/*运行结果：
*"key say 你在调动我"
*"我来充当当前值>（#'.'）'>"
*/
```

（针对 `set`）

```javascript
let obj = {}; 
Object.defineProperty( obj , 'key' ,{
    get(newVal){
        console.log("key say 你在改变我>（#'.'）'>");
        //这里不能有 return 
    }
})
obj.key = 12
/*运行结果：
*"key say 你在改变我>（#'.'）'>"
*/
```

### 描述符可拥有键值

|            | `configurable` | `enumerable` | `value` | `writable` | `get`  | `set`  |
| ---------- | -------------- | ------------ | ------- | ---------- | ------ | ------ |
| 数据描述符 | 可以           | 可以         | 可以    | 可以       | 不可以 | 不可以 |
| 存取描述符 | 可以           | 可以         | 不可以  | 不可以     | 可以   | 可以   |

以上的含义：

```javascript
let obj = {};
Object.defineProperty( obj , "newKey" , {
    get :function(){}|undefined,
    set :function(){}|undefined,
    configurable : true | false,
    enumable : true | false,
    writable : true | false
} )
```

下面用一张图来表示

![Object.defineProperty描述](/media/Vue%20%E7%AE%80%E5%8C%96%E7%89%88%E5%AE%9E%E7%8E%B0%E6%80%BB%E7%BB%93/v2-d182f410945ced52a6d559fdf51eafd7_1440w.jpg)

有了以上的基础我们可以开始为每一个子节点绑定上对应的属性点：也就是下面的observe部分：

```javascript
observe() {
    // 遍历拿出需要检测的 对象
    for (let key in this.$data) {
      let currentVal = this.$data[key];
      //初始化观察对象的盒子
      this.watcherObj[key] = [];
      let watcherObj = this.watcherObj[key];
      Object.defineProperty(this.$data, key, {
        configurable: false, //该状态下的配置不可被修改
        enumerable: false, //该状态下的属性描述符不可被枚举
        get() {
          return currentVal;
        },
        set(changeVal) {
          if (changeVal !== currentVal) {
            // 修改的值和原来的不等
            currentVal = changeVal;
            // 通知所有元素的监听者元素发生了修改
            watcherObj.forEach((element) => {
              element.update();
            });
            // return currentVal;
          }
        },
      });
    }
```

第二部分就是重构节点，这里只是对自定义组件进行一个探索，对于插值语法日后再论：

```javascript
compile(el) {
    let children = el.children;
    // 遍历子节点
    for (let i = 0; i < children.length; i++) {
      // 查找同级结点
      let child = children[i];
      // 递归遍历子节点
      if (child.children.length > 0) {
        this.compile(child);
      }
      // if exist the "cVue-on:click..."
     //...非关键点
      // if exist the "cVue-if"
     //...非关键点
      // if exist the "cVue-model"
      if (child.hasAttribute("cVue-model")) {
        let modelVal = child.getAttribute("cVue-model");
        child.addEventListener(
          "input",
           ((i)=>{
            this.watcherObj[modelVal].push(
              new viewUpdate(this, child, "value", modelVal)
            );
            return () => {
              this.$data[modelVal] = children[i].value;
            };
          })(i));
          //这里用到了闭包，这是一个解决addEventListener的this指针改变的一个方法，保证this的指针不改变而是继续指向当前的一个类，
      }
      // if exist the "cVue-text"
     //...非关键点
      //...
    }
  }
```

在compile中我们遍历了所有的子节点，然后对自定义事件属性的一个绑定，难度不是很高，

### 第三个部分（视图更新）

```javascript
// 用于更新视图
class viewUpdate {
  constructor(...args) {
    this.vm = args[0];
    this.el = args[1];
    this.attr = args[2];
    this.val = args[3];
    this.update();
  }
  update() {
    if (this.vm.$data[this.val] === true) {
      this.el.style.display = "block";
    } else if (this.vm.$data[this.val] === false) {
      this.el.style.display = "none";
    } else {
      this.el[this.attr] = this.vm.$data[this.val];
    }
  }
}

```

这一部分的话，总的来说也没有什么关键点，就是对v-if的一个简单更新，当然Vue会比这个复杂的多

### 总结

1. 数据的绑定:Object.defineProperty
2. 视图的更新，改变对应的值，触发 set 做出对应的改变
3. 附上简化版本的 Vue ，当然(`Vue`)会比这个复杂，这个只是在DOM下的一个做出响应这一部分的内容

```javascript
class cVue {
  constructor(options) {
    // the options of el
    this.$el = document.querySelector(options.el);
    this.$data = options.data;
    this.$methods = options.methods;
    // the Core code
    this.watcherObj = {};
    this.observe();
    this.compile(this.$el);
  }
  observe() {
    // 遍历拿出需要检测的 对象
    for (let key in this.$data) {
      let currentVal = this.$data[key];
      //初始化观察对象的盒子
      this.watcherObj[key] = [];
      let watcherObj = this.watcherObj[key];
      Object.defineProperty(this.$data, key, {
        configurable: false, //该状态下的配置不可被修改
        enumerable: false, //该状态下的属性描述符不可被枚举
        get() {
          return currentVal;
        },
        set(changeVal) {
          if (changeVal !== currentVal) {
            // 修改的值和原来的不等
            currentVal = changeVal;
            // 通知所有元素的监听者元素发生了修改
            watcherObj.forEach((element) => {
              element.update();
            });
            // return currentVal;
          }
        },
      });
    }
  }
  // 解析器部分开始，也就是转换为虚拟DOM
  // 对节点属性的自定义
  compile(el) {
    let children = el.children;
    // 遍历子节点
    for (let i = 0; i < children.length; i++) {
      // 查找同级结点
      let child = children[i];
      // 递归遍历子节点
      if (child.children.length > 0) {
        this.compile(child);
      }
      // 判断是否有添加自定义事件

      if (child.hasAttribute("cVue-on:click")) {
        // if exist then the event
        let eventVal = child.getAttribute("cVue-on:click");
        child.addEventListener(
          "click",
          this.$methods[eventVal].bind(this.$data)
        );
      }
      // if exist the "cVue-if"
      if (child.hasAttribute("cVue-if")) {
        let ifVal = child.getAttribute("cVue-if");
        this.watcherObj[ifVal].push(new viewUpdate(this, child, "", ifVal));
      }
      // if exist the "cVue-model"
      if (child.hasAttribute("cVue-model")) {
        let modelVal = child.getAttribute("cVue-model");
        child.addEventListener(
          "input",
           ((i)=>{
            this.watcherObj[modelVal].push(
              new viewUpdate(this, child, "value", modelVal)
            );
            return () => {
              this.$data[modelVal] = children[i].value;
            };
          })(i));
        
      }
      // if exist the "cVue-text"
      if (child.hasAttribute("cVue-text")) {
        let textVal = child.getAttribute("cVue-text");
        this.watcherObj[textVal].push(
          new viewUpdate(this, child, "innerText", textVal)
        );
      }
      //...
    }
  }
}

// 用于更新视图
class viewUpdate {
  constructor(...args) {
    this.vm = args[0];
    this.el = args[1];
    this.attr = args[2];
    this.val = args[3];
    this.update();
  }
  update() {
    if (this.vm.$data[this.val] === true) {
      this.el.style.display = "block";
    } else if (this.vm.$data[this.val] === false) {
      this.el.style.display = "none";
    } else {
      this.el[this.attr] = this.vm.$data[this.val];
    }
  }
}
```
