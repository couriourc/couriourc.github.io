---
author: couriourc
dg-publish: false
title: Flame基础概要
categories:
  - 游戏开发
date created: 2023-06-28 00:00:00
date modified: 2023-06-29 00:00:00
---

## 项目结构

**Flame** 所建议的一些项目结构如下，如标准的 Flutter Assets 目录，以及两个 `children`：`audio` 和 ` images `。

假定所使用的 `main` 代码如下：

```dart
void main() {
  FlameAudio.play('explosion.mp3');

  Flame.images.load('player.png');
  Flame.images.load('enemy.png');
}
```

那么 Flame 所推荐的目录设计如下：

```txt
.
└── assets
    ├── audio
    │   └── explosion.mp3
    └── images
        ├── enemy.png
        └── player.png
```

当然，也可以创建子目录，比如将音频文件夹分为两个子文件夹，一个用于音乐，一个用于 `SFX`。

!当然也不要忘了在 `pubspec.yaml` 添加资源信息。比如：

```yaml
flutter:
  assets:
    - assets/audio/explosion.mp3
    - assets/images/player.png
    - assets/images/enemy.png
```

如果不打算用这种方式来配置资源信息，可以在创建 `AssetsCache`, `ImagesCache`, `AudioCache`, 和 `SoundPool` 这些实例的时设置 `prefix` 。

## GAME 组件

```dart
class GameWidget<T extends Game> extends StatefulWidget { }; 
```

如上所示， `GameWidget` 是让 `Game` 作为 `Flutter Widget` 注入到 `Flutter Widget Tree` 的一个转换组件。它本身就已经有很多功能，可以直接作为 Flutter 的根组件。

```dart
main(){
	// flutter 入口
	runApp(
		GameWidget( game: MyGame )
	);
}
```

当然言下之意，`GameWidget` 可以作为正常的 `Flutter 组件使用`，可以插入任意深度的组件树，而且在同一个应用中，完全可以有多个 `GameWidget` 实例，来运行多个游戏。

### 组件说明

**布局约束** ，与 `Expand` 类似，会尽可能填充可用区域，又父组件约束。

**结构化事件组件**（和生命周期钩子类似，但是是以组件的形式使用）。

* [`loadingBuilder`](https://docs.flame-engine.org/latest/flame/game_widget.html#GameWidget-loadingBuilder) 加载时的显示效果，默认是一个空 `Container`
* [`errorBuilder`](https://docs.flame-engine.org/latest/flame/game_widget.html#GameWidget-errorBuilder)，加载出错时展示的内容。
* [`backgroundBuilder`](https://docs.flame-engine.org/latest/flame/game_widget.html#GameWidget-backgroundBuilder)
* [`overlayBuilderMap`](https://docs.flame-engine.org/latest/flame/game_widget.html#GameWidget-overlayBuilderMap) 设置游戏弹窗实例。

```dart
void main() {
  runApp(
    GameWidget(
      game: MyGame(),
      loadingBuilder: (context,game){
	      return Container();
      }
      overlayBuilderMap: {
        'PauseMenu': (context, game) {
          return Container(
            color: const Color(0xFF000000),
            child: Text('A pause menu'),
          );
        },
      },
    ),
  );
}
```

### 属性说明

* `initialActiveOverlays:List<String>?`  
设置初始的弹窗。  

* `focusNode:FocusNode`  
键盘聚焦该节点。  

* `autofocus:bool`  
是否自动聚焦  

* `mouseCursor:MouseCursor`  
动态设置鼠标的显示样式。  

* `addRepaintBoundary:bool`  
是否添加重绘边界。

## 事件循环

### FlameGame

这是在开发时最普遍的一个 `GAME` 类，实现了一个基于 `Game` 类的 `Component` 类，它维护了一个组件树，并且会调用挂载的组件的 `update` 和 `render` 方法。

> 这种组件系统，先约定为 Flame Component System，简称 FCS。

下面实现了一个简单的 `Game `，并且又两个 `Crate`，一个是通过 `onLoad` 时候添加的，一个是通过 `children` 传入的。

```dart
/// A component that renders the crate sprite, with a 16 x 16 size.
class MyCrate extends SpriteComponent {
  MyCrate() : super(size: Vector2.all(16));

  @override
  Future<void> onLoad() async {
    sprite = await Sprite.load('crate.png');
  }
}

class MyGame extends FlameGame {
  @override
  Future<void> onLoad() async {
    await add(MyCrate());
  }
}

main() {
  final myGame = MyGame(children: [MyCrate]);
  runApp(
    GameWidget(
      game: myGame,
    ),
  );
}
```

如果直接用构造器的方式设置，那么在 `Flutter` 树重建的时候，也会重绘。为了避免这种情况，可以在创建游戏的实例时，小部件结构中引用它，也可以使用 `gameWidget.controlled` 构造函数。

移除其中的小组件的时候可以用 `remove` 或者 `removeAll`。

### 渲染循环

有了组件树之后，下一步就是构建以及更新，基本上，大多数游戏都是基于这两种方法：

* **render (渲染)** : 采用画布来绘制游戏的当前状态。
* **updte (更新)** : 会获得更新的延迟时间，同时在里面更新动画的下一个状态。

` Flame` 的所有` Game` 都实现了调用这个的方法。

### (界面)Resize

当窗口大小发生改变的时候，`FlameGame` 将调用所有组件 `OnGameresize` 方法， `Camera` 和 `Viewport` 的信息会被传回来。
