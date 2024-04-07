---
title: UE 幸福感提升秘籍
---

## 视窗操作篇

### Actor 上的视窗操作

- 对屏幕外物体进行位移旋转缩放
	按住键盘上的 Ctrl 键不放，同时用鼠标 左键 或者 右键 或者 左键+右键，来进行远距离的位移旋转缩放。

- 循环变换（空格）和变换（W/E/R）

- 世界场景/局部场景变换（`Ctrl+``）

- 物体吸附到模型顶点
	在移动模式下，按住键盘上的 V 键不放，加鼠标拖动物体移动轴心，可以吸附到附近物体的顶点上。

- 屏幕编队
	用快捷键 Ctrl + 数字（0-9），可以对当前相机状态编队。 再用数字（0- 9）返回之前相机编队的状态。

- 落到正下方物体
	大部分时候 End ,Alt + End 会按照轴心点吸附,而吸附实际上算的是模型的 bounds ； `Show> Advanced >Bounds` 可以显示模型的`Bounds`。
	![](/media/m_f9f0af9ce90911aa70fbf5c0cfc6f75b_r.png)

- 显示与隐藏
	相关的常用操作有这么四个
	hide selected 隐藏选中 Actor （`H`）
	show selected 显示选中 Actor (`Shift+H`)
	show all actors 显示所有场景中的 Actor (`Ctrl+H`)
	show only selected 只显示当前选中的 Actor (，一般未设置，`Shift+I`)

![](media/m_5a81b319904d307fe9d27f86e17b42ae_r.png)

![](media/m_299acf72d23c24fc138c324f16eb819b_r.png)

![](media/m_2505de50d4e29620a0f42e4a6c02e0e4_r.png)

- 设置枢轴位置（鼠标右键 ->"枢轴（pivot）"->"在此设置枢轴偏移（Set pivot offset here）
	也可以在点击的地方（Alt + 鼠标中键），或通过鼠标中键拖动，把它放在我们需要的地方。
	> 附加诀窍：可以更改变换吸附的默认值，`（Editor Preferences）”>“（Level Editor）”>“（Viewport）”>“（Grid Snapping）`。
	> ![](media/m_28b215b7b10aa099dcbd56fe743319b1_r.png)

![](media/m_b1d936e69c121d424fc97dcdeaa63ed7_r.png)

附加 Actor 可能在多种情况下都很有用，你也许可以自己想到一些用途，不过前提是你必须知道有这种操作。只要记住两个 Object 的移动性设置必须相同就好（静态/可移动）。

- 显示轮廓（G）
	![](media/m_185aa61331db6c1a049284a49f5e1de8_r.png)

- 视图模式，这些模式在各种情况下都很方便，所以应该了解它们的存在和访问它们的方法。
	![](media/m_71813e0d8a1b4f97d17bf9a433f1bcd6_r.png)

- 显示导航（P）
	查看关卡中是否有任何 Object 可能挡住 AI 或玩家的去路。
	![](media/m_9fe09d5068ee694c8ac0fffc35e81ff0_r.png)
	绿色表示可通行。

- 透视/侧视/顶视/前视图（Alt + G/K/H/J）
	熟悉 vim 快捷键的知道，h,j,k,l 的含义。

- 使 Object 吸附到视图和视图吸附到 Object
	![](media/m_68e83b9cbc5aaf463239d7da934f6ada_r.png)
	这个诀窍在我想要把摄像机准确放到我所观察的位置时最有用。将选定的 Object 吸附到摄像机，然后不仅更改其位置，还更改旋转，这样一来上述摄像机就会准确地指向你在视口中所观察的位置。
	![](media/m_31433834dbba571de410e5fbeac24371_r.png)

- 选项卡导航（Ctrl + Tab）
	算是双屏福利吧 ~{：-}

- 编组和取消编组（Ctrl +G/Shift + G）

- 选择 Object 的关卡——设置为当前关卡（M）

## 资源操作篇

- 在内容浏览器中查找资源（Ctrl + B）
	一个技巧,`Ctrl+B`然后使用资源的指定键，丝滑选类。
	选中 Reference Viewer 中的资产，可以再次使用 Ctrl+B 查看选中资产的存放位置；也可以使用 Ctrl + E 打开该资产的编辑面板;也可以双击某个节点，查看该节点的引用关系。

	> 只比双击快一点点，鼠标寿命堪忧 ~{：)}

- 显示引用（Alt + Shift + R）

	> 只比右键快一点点。

- ContentBrowser 骚操作
	在 Content Browser 的搜索栏，输入 空格， 可以查看该文件夹下的所有文件。
	在当前 ContentBrowser 面板锁定的情况下，使用快捷键 Ctrl + B ，可以快速调出新的 ContentBrowser 面板。
	当需要多个 ContentBrowser 面板去同时操作多个资产的时候，不用在 UI 里慢慢点开新的 ContentBrowser 面板了。
	![](media/m_5f089a1ae2e6aa40a805946930b692d8_r.png)

- 快速调用资产
	Ctrl + P Open Asset,类似 vscode 中的 ctrl+e 的作用，用来做资源快速查找的。输入快捷键后，会调入这样一个小面板，可以在 搜索栏中按名称查找到自己想要的资产，可以配合左侧的 filters 过滤想要的资产类型。相当于一个快速简洁、没有文件夹结构的 content browser， 要求对想要调用的资产名称很熟悉。
	![](media/m_53ffd4d995ae69ae074ec7727805893f_r.png)
	在需要调用使用率很高的模型，或者需要赋予一些使用率极高的基础材质或者测试材质时，很方便。（记得找到的资产要拖进场景里，不是双击）

## 资源管理篇

- Add to Favorites
	可以将选中文件夹添加到 Favorites，后面就可以快速打开这些常用文件夹。同时， Set Color 可以对文件夹指定颜色，方便用右脑记忆文件夹。比如可以把像素流接口，主关卡文件放在一个集合里面，方便查找。

- Collections
	对于 Content Browser 面板中的资产，右键 > Manage Collections 可以将该资产置于某个 Collection 中，方便以后快速调用。Collection 不会移动资产的位置，仅仅将一批资产位置的引用收集在一起。用户可以根据自己的需求，将一些常用、或者相关性较高的细碎文件，放在一个 collection 中方便后续快速调用。

## Debug 篇

- 展示帧率（show fps）`Ctrl + Shift + H`
	显示当前运行帧率（非常快速查看帧率的方法，相当于命令行输入 stat fps）,也可以勾选 Editor Preferences> Performance> Show Frame Rate and Memory 选项,让引擎右上角一直显示帧率 和 内存使用情况：

- profile GPU 显示当前状态 GPU 消耗`Ctrl + Shift + ,（逗号）`

- 进入 Debug Mode`(Playing) ;`
	在 Play 状态下，按键盘上的 ； （分号键），可以进入。有点类似于 Play 状态下按 F8 的弹出，但是 Debug 模式 是第一人称视角的， 快速检查一下周围环境，比 F8 的弹出使用方便。

- ~ 号键打开控制台
	在什么都不输入的情况下，使用键盘上的 箭头 ↑ 键，可以看到并且选择之前已经输入过的控制台指令，反复开关某些指令的时候，非常实用

## 常用控制台命令

- stat fps
	显示帧率

- stat unit
	显示包括 Draw Call ，游戏逻辑等各种项的消耗

- stat rhi
	显示各种 GPU 上的消耗细则

- r.Tonemapper.Sharpen
	锐化，后面跟数字表示锐化强度。比如：r.Tonemapper.Sharpen 3

- r.Streaming.PoolSize
	![](media/m_a8fa5aa0861c25518b87ef6af31da494_r.png)
	当你的场景稍微复杂一些的时候，默认纹理流送池就会被挤爆，导致部分贴图加载成很小的 lod，画面会糊。
	默认有 1G 显存分配给了纹理流送池，不够用的时候可以手动调大。
	比如，r.Streaming.PoolSize 4096，就可以分配 4G 显存给纹理流送池。 这个参数吧，量力而行就可以了。
	当然，懒人最爱用的是 r.Streaming.PoolSize 0，可以设置纹理流送池 无上限。
	![](media/m_b780047f183a8569f5f545f3e14d5a48_r.png)

- slomo
	游戏运行下的运行速度；很多时候要仔细观察某些视觉效果的时候，可以把整个运行速度调慢。
	可以使用 slomo 0.1 ，即可将运行速度变成正常的十分之一。 默认参数为 1

- r.TonemapperFilm
	开关后处理效果

- ShowFlag.PostProcessing
	开关后期盒子的效果

- HighResShot
	使用自己指定的尺寸截图， 比如 HighResShot 1920x1080 （注意，数字之间是字母，x 捱科思，不是 乘号）

- r.AOSpecularOcclusionMode
	可以让 skylight 产生的 DFAO 产生更准确的高光， 0 为开启，1 为关闭。大多数项目中，粗暴地设置 r.AOSpecularOcclusionMode 0 ，都可以直接获得的 skylight 照明提升

## Tips

- 蓝图编辑器上编译按钮右边的小箭头上菜单中隐藏着一个小小的菜单。
	菜单内可以让你选择什么情况下进行保存。里面有三个选项：
	永不（Never）： 默认设定，手动保存；
	仅在成功时（On Success Only）： 我喜欢的选项，编译通过后自动保存；
	总是（Always）： 无论成功与否，只要编译就保存。这样就可以把保存按钮去掉了（:-；

- 显示编辑器实时信息
	![](media/m_416b4c8ae451b4fcef42c998909f7b7c_r.png)

	> 甚至能看到窗口没聚焦时编辑器的摸鱼现场（FPS=3）

- 打包项目后发现内容不一致怎么办？
	在 项目设置 →（正在）打包 选项卡的 Project 选项集内勾选 完整重编译 选项，即可解决这一问题。（实际上官方也推荐我们这样做）
	![](media/m_7bfd84b90ab2945cc8fd37f4bd68d6bc_r.png)

- 项目打包后发现内容缺失怎么办？
	在一些特殊情况下，我们的工程中可能存在某些不会被直接引用的项目内容，但这些内容又恰恰和项目功能息息相关。
	UE4 在打包的时候往往会将这些看似无关的东西偷偷放走，然后导致成品游戏中的某些功能突然不能用，更有甚者会带来一次愉悦的崩溃……
	打开 项目设置 选中 项目-正在打包 菜单栏，在 Packaging 分类下的 要打包的非资源额外目录 设置项增加一个数组元素，然后将需要打包的目录填进去即可。

- 解决因为蓝图错误导致的引擎启动失败
	修改启动配置来禁止蓝图启动重编译。在无法启动编辑器的时候，我们可以选择的方法只有修改配置文件。打开 ../Saved/Config/Windows/Engine.ini （引擎配置）文件并将以下内容填写并保存。

```ini
[/Script/Engine.Blueprint]
bRecompileOnLoad=False

[/Script/Engine.LevelScriptBlueprint]
bRecompileOnLoad=False

[/Script/Engine.AnimBlueprint]
bRecompileOnLoad=False
```

造成引擎启动崩溃的原因可能多种多样，主要的原因一般是 中文路径 、某些输入法、先决条件缺失、引擎组件损坏、代码挖坑 逐项针对排查解决即可。

- 都改过哪里全忘了，细节面板右侧设置按钮，【仅显示已经修改的属性】。
	![](media/m_42e02483d480562459246c91f05ba16a_r.png)

- 关卡缩略图，【右键关卡，资产操作-捕获缩略图】
	![](media/m_247ad2795a723a429d5794b4b71d0f15_r.png)

## 引用

> (戴巍：[UE4]偏门实用技巧合集)[https://www.zhihu.com/question/351992572/answer/1559289946]
> (十个"并无卵用"的虚幻 4 使用小技巧)[https://www.sakuraneko.tech/2020/01/30/Ten-Tips-for-Using-Unreal-Engine/]
