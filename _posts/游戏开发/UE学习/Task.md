---
title: Task
---

## UE 多人协同

## 程序化管道生成

- [ ] [Houdini+UE4 制作线条程序化管道\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1Rt411G7EJ/)
- [ ] [Sina Visitor System](https://weibo.com/3749571965/LupwdCvJO)
- [ ] [Houdini 程序化通道框架生成(Unity,UE4) - 知乎](https://zhuanlan.zhihu.com/p/53039879)

```bat
explorer C:\Users\123\Documents\Unreal Projects\spawnline
```

- [ ] [【UE5】虚幻 5 动态水材质教程(一)\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1U94y1Z7Hu/?share_source=copy_web&vd_source=64becc8dd5f04c65092c107c1fe0a5e2)

## 点位点击弹出框效果相关思路

- [x] [【精选】21 虚幻 4【UE4】鼠标碰撞检测(实现鼠标监听，从而实现点击场景模型(碰撞体)高亮函数)\_ue setrendercustomdepth_Ezms 的博客-CSDN 博客](https://blog.csdn.net/qq_41260655/article/details/123013358)

(1)通过鼠标左键、中键、右键绑定点击事件

(2)通过函数**ConverMouseLocationWorldSpace**  将鼠标 2D 位置转化为三维世界的坐标

(3)通过函数**LineTraceByChannel**根据点击的坐标位置，方向进行延申，形成一条射线，射中的第一个碰撞体接收命中的监测**OutHit**

(4)根据此 Actor 可设置其属性 RenderCustomDepth 高亮属性

- [x] [【UE4 Blueprint】使用射线检测在鼠标点击处生成物体\_ue4 打印鼠标点击的物体-CSDN 博客](https://blog.csdn.net/qq_31788759/article/details/89418283)

(1)生成一条从相机到鼠标点击位置方向的射线，在碰撞到的第一个 Location 生成 Actor 类

获得位置之后，在创建 UI 组件的时候，设置位置就行

## 像素流送

- [ ] [【UE5】分分钟简单使用像素流服务（Pixel Streaming）\_pixelstreaming-CSDN 博客](https://blog.csdn.net/dxs1990/article/details/131167273)
- [ ] [[虚幻引擎][UE][UE5]像素流送(Pixel Streaming)，像素流去掉黑边和按钮[UE5.1.0]，鼠标控制\_涟涟涟涟的博客-CSDN 博客](https://blog.csdn.net/weixin_43784914/article/details/127852696)
- [ ] [Vue3 中集成 Unreal 5.2 像素流(Pixel Streaming 插件)-CSDN 博客](https://blog.csdn.net/m0_51171995/article/details/131097118?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-1-131097118-blog-131167273.235%5Ev38%5Epc_relevant_sort_base1&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-1-131097118-blog-131167273.235%5Ev38%5Epc_relevant_sort_base1&utm_relevant_index=2)

1. **解释一下像素流送程序快捷方式的后缀命令**  
   **-AudioMixer**  像素流送默认是没有声音的，所以想要有声音，这个必须记得添加  
   **-PixelStreamingIP=xxxx**  像素流送的 IP 地址，这个可以根据需要修改  
   **-PixelStreamingPort=xxxx**  像素流送端口，同理也是可以修改的  
   **-forceres**强制运行，后面长接分辨率指令  
   **-ResX=1920 -ResY=1080**  设定分辨率 不用多说  
   **-RenderOffScreen**  如果不想打开像素流送窗口也想让程序流送，就使用这个命令，关闭时候可以在任务管理器中结束程序
2. **4.27 的 stun/turn 相关协议文件路径**  
   1.27 其实是没有 stun/turn 文件的，需要打包一个已经开启像素流送插件的 4.26 空项目，然后找到 release 文件夹，复制这个文件夹过来用，这个方法是可行的。
3. **使用 stun/turn 的时候记得要开启 19302 19303 两个端口**  
   开启方法百度一大把。
4. **为了方便开启一大堆程序，可以写一个. Bat 文件来执行**

```bat
target.exe -PixelStreamingIP=localhost -PixelStreamingPort=7777
```
