---
title: 使用 Git 对UE源码进行版本控制
---

## 为什么 Git 而非 SVN

### git 和 svn 命令

> 基本命令

| 作用           | git                                       | svn                 |
| -------------- | ----------------------------------------- | ------------------- |
| 版本库初始化   | git init                                  | svn create          |
| clone          | git clone                                 | svn co（checkout）  |
| add            | git add （.除去.gitignore，\*所有的文件） | svn add             |
| commit         | git commit                                | svn commit          |
| pull           | git pull                                  | svn update          |
| push           | git push                                  | -                   |
| 查看工作状态   | git status                                | svn status          |
| 创建分支       | git branch <分支名>                       | svn cp <分支名>     |
| 删除分支       | git branch -d <分支名>                    | svn rm <分支名>     |
| 分支合并       | git merge <分支名>                        | svn merge <分支名>  |
| 工作区差异     | git differ （-cached / head）             | svn diff            |
| 更新至历史版本 | git checkout <commit>                     | svn update -r <rev> |
| 切换 tag       | git checkout <tag>                        | svn switch <tag>    |
| 切换分支       | git checkout branch                       | svn switch branch   |
| 还原文件       | git checkout - path                       | svn revert path     |
| 删除文件       | git rm path                               | svn rm path         |
| 移动文件       | git mv path                               | git mv path         |
| 清除未追踪文件 | git clean                                 | svn status sed -e   |

### 存贮区别

1. git 是分布式的，有本地和远程两个版本库，SVN 是集中式，只有一个远程版本库；
2. git 的内容是按元数据方式存贮，所有控制文件在.git 中，svn 是按文件处理，所有资源控制文件在.svn 中；
3. svn 的分支是一个目录，git 不是；
4. git 没有一个全局的版本号，svn 有；
5. git 内容存贮是使用 SHA-1 哈希算法，能确保代码完整性;
6. git 有工作区，暂存区，远程仓库，git add 将代码提交到暂存区， commit 提交到本地版本库，push 推送到远程版本库。svn 是 add 提交到暂存，commit 是提交到远程版本库。

所以单个文件为单位的适合使用 SVN 管理

### Git LFS

由于 UE 又经常包含大文件，而对于包涵大文件（尤其是经常被修改的大文件）的项目，初始克隆需要大量时间，因为客户端会下载每个文件的每个版本。**Git LFS**（Large File Storage）是由 Atlassian, GitHub 以及其他开源贡献者开发的 Git 扩展，它通过延迟地（lazily）下载大文件的相关版本来减少大文件在仓库中的影响，具体来说，大文件是在 checkout 的过程中下载的，而不是 clone 或 fetch 过程中下载的。Git LFS 通过将仓库中的大文件替换为微小的*指针（pointer）*  文件来做到这一点。

当推送新的提交到服务器时，新推送的提交引用的所有 Git LFS 文件都会从本地 Git LFS 缓存传输到绑定到 Git 仓库的远程 Git LFS 存储（**即 LFS 文件内容会直接从本地 Git LFS 缓存传输到远程 Git LFS 存储服务器**）。

#### 加快克隆速度

```sh
git lfs clone <remote-url>
```

### 使用 Git LFS 跟踪文件

当向仓库中添加新的大文件类型时，需要通过使用 git lfs track 命令指定一个模式来告诉 Git LFS 对其进行跟踪：

```text
$ git lfs track "*.ogg"
Tracking *.ogg
```

## `ue`中配置`git`

打开`UE`后，在`UE`的顶部菜单中找到`Source Control`

![[使用 Git 对UE源码进行版本控制-20240401175934373.png]]

`UE`提供的列表中选中`Git`后，出现下图的窗口
![[使用 Git 对UE源码进行版本控制-20240401180024295.png]]

点击`Accept Settings`即可!

> 需要注意的是，这里还仅仅只是`commit`到本地，还需要在`git bash`中`git push`

## 在 UE 中合并蓝图代码

可以通过  `diff`  来检测我们此次相较于上次提交的版本做了哪些修改：在该蓝图类上右键  `Source Control`->`Diff Against Depot`，会弹出`diff`  窗口。我们可以看到我们在该蓝图类中修改了哪些东西。

![[使用 Git 对UE源码进行版本控制-20240401180537802.png]]

![[使用 Git 对UE源码进行版本控制-20240401180435332.png]]

比如创建了新的函数，提交内容。

![[使用 Git 对UE源码进行版本控制-20240401180645797.png]]
![[使用 Git 对UE源码进行版本控制-20240401180735856.png]]
在蓝图类上右键 ->`Source Control`下共有以下几个选项：`Check In`/`Refresh`/`History`/`Diff Against Depot`/`Revert`，其中  `Check In`  和`Diff Against Depot`的用途上面已经说过了。

**Check In**提交当前文件。

**Refresh**刷新当前文件 (蓝图类) 状态(status)。

**History**查看提交 (Check In) 的历史，也可以提供当前未提交改动与某一提交版本的区别。

**Diff Against Depot**查看当前未提交 (Check In) 改动与上次提交版本的区别。

**Revert**丢弃当前未提交 (Check In) 改动 (就是回滚到上一次 Check In 时的状态)。注意：Revert 之后需要重启引擎才会生效，这应该是 UE(4.12.5) 的一个 BUG。**Revert**的效果等同于直接在 Git Bash 下执行`git checkout -- ${filename}`。
![[使用 Git 对UE源码进行版本控制-20240401181002380.png]]

> UE 中集成的 Source Control::Git 是不能够直接在虚幻编辑器中直接回滚到某一提交版本的，总的来说可供操作的功能还比较少 (蓝图的节点比对还是很爽的)，但是可以结合`Git Bash`  来使用 Git 的其他操作(版本回退 / 分支管理 / 远程推送等等)。

> 需要注意的是，使用  `Git Bash`  来进行版本回退的话一定要关闭虚幻编辑器，因为回退需要对文件进行改动，而虚幻编辑器正在占用 (打开) 该文件 (蓝图类)，而对未占用(打开) 的文件 (蓝图类) 进行版本回退也需要重启虚幻编辑器才可以(不重启不会看到回退效果)。

使用 Git 来推送 (push) 和拉取 (pull) 远程分支的话需要在 Git Bash 中执行。同样也需要关闭虚幻编辑器。注意编辑  `.gitignore`  来忽略不必要的文件来节省 push/pull 时间。
