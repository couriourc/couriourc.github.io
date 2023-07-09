---
author: couriourc
categories: [公司经历以及问题记录]
dg-publish: false
title: Monorepo 介绍
date-created: 2023-06-22
date-modified: 2023-07-08
---

# Monorepo 介绍

## 技术缘由

### 是什么？

所谓 `Monorepo` 就是将多个项目放置在一个项目中，并借助管理工具对项目之间的 `版本进度`，`部署状况`，`依赖信息`。可以达到规范团队风格，沉淀可复用的组件库，建立工具库的能力。现如今有许多公司，团队开始采用这种方案。如 `vue`, `unocss`。经典的安装方式 `@vue/…`， `@unocss/…a` 。

### 为什么？

#### 1. 苗条的项目包

```txt
|---project A       // for A Project
	|---node_modules 
		|--- vue
		|--- lodash.toString
	|---packages.json
|---project B        // for B Project
	|---node_modules 
		|--- vue
		|--- lodash.Object
	|---packages.json
|---porject C       // for C Project
	|---node_modules 
		|--- vue
		|--- lodash.Number
	|---packages.json
```

正如上图所示，我们在开发的时候，毫无疑问有许多不同的工程项目，`node_modules` 黑洞也就随之而来，比如 `vue` ，在项目中已经出现了不止一次。那么这个其实是不需要在 `Project B` 中又安装一次的。可以转而软链复用。

```txt
|---node_modules     // 通用的包
	|--vue
|---project A       // for A Project
	|---node_modules 
		|--lodash.toString
	|---packages.json
|---project B        // for B Project
	|---node_modules 
		|--lodash.Object
	|---packages.json
|---porject C       // for C Project
	|---node_modules 
		|--lodash.Number
	|---packages.json
|---packages.json    // 管理全局的通用包
|---*-workspace.yaml // 指定哪些文件是属于工作区的
```

这样就使得项目变得更加干净。  

在项目开发中，我们经常会有 `.eslintrc`，`.prettierc`， `.editorconfig`，`.stylelint`，以及一堆 `jsconfig.js`，`tsconfig.js`，之类的一堆规范化的工具。那么这些也可以借助上面实现通用。

#### 2. 自动化的文档管理

```txt
|---project A       // for A Project
	|---node_modules 
		|--vue
		|--lodash.toString
	|---packages.json
	|---READMD.md
|---project B        // for B Project
	|---node_modules 
		|--vue
		|--lodash.Object
	|---packages.json
	|---READMD.md
|---porject C       // for C Project
	|---node_modules 
		|--vue
		|--lodash.Number
	|---packages.json
	|---READMD.md
```

在每个项目开发完成之后, 也有一些 `README.md` 作为项目介绍，或者使用说明的文档。 在 `Monorepo` 中可以通过脚手架工具，将文档进行收集，管理。

#### 3. 简易的实验场

这种管理方式可大可小，可以作为自己写的一些小 `kit`，但是往往会发现自己写的东西有需要 copy，然后修改，然后发现一堆重复，不妨试一下 `workspace`，一句话管理。  
以 `pnpm-workspace` 为例：

```txt
|---node_modules     // 通用的包
	|--vue
|---project A       // for A Project
	|---node_modules  
		|--lodash.toString
	|---packages.json // name: @workspace/pa
|---project B        // for B Project
	|---node_modules 
		|--lodash.Object
	|---packages.json // name: @workspace/pb
|---porject C       // for C Project
	|---node_modules 
		|--lodash.Number
	|---packages.json // name: @workspace/pc
|---packages.json    // 管理全局的通用包
|---*-workspace.yaml // 指定哪些文件是属于工作区的
```

```sh
pnpm --filter @workspace/pc add @workspace/pa 
```

然后就当作依赖直接使用了. 进一步可以自己写一个 `cli` 工具， 实现自动化构建，部署等。

#### 4. 微模块化

这一部分思想 [Elux 基本概念 | Elux]( https://eluxjs.com/guide/concepts.html.  

微模块是一种集合，也是一个文件夹

- 划分视角: `业务功能`（非UI区域）
- 划分原则: `高内聚、低耦合`（模块之间应当松散，相关资源应当集中）

## 目前流行的方案

### Yarn 方案

[Workspaces | Yarn - Package Manager](https://yarnpkg.com/features/workspaces)

### Pnpm-workspace

`pnpm` 实现了依赖之间使用软链进行链接，从而减少了如同黑洞般的 `node_modules`，这也使得我们在 `npm install` 的时候速度嗖嗖的。除此之外，`pnpm` 还提供了 `workspace` 能力。

[工作空间（Workspace） | pnpm](https://pnpm.io/zh/workspaces)

除了基本的 `workspace` 包管理工具, 还需要版本管理工具, 用于自动化版本更新. 比如 `lerna`, `rush` , `changelist`.

## 进一步拓展应用

1. 逐步搭建自己的组件库. 让组件库能渐进式增长 (《人月神话》，产品应该是增长型的)。
2. 借助自动化工具，或打包工具，实现文档归集，逐步完善， 比如 `storybook` 。
3. 为组件库逐步赋能。  
这里放一个自己的例子: [Storybook](https://couriourc-monorepo.netlify.app/) [GitHub-monorepo-playground](https://github.com/couriourc/monorepo-playground)。
