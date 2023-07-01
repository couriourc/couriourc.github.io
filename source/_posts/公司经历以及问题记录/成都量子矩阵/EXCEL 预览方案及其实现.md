---
author: couriourc
categories:
  - 公司经历以及问题记录
date created: 2023-06-25
date modified: 2023-06-25
dg-publish: false
nanoid: VB-ROP85jRNUYm7PxrA_k
tags:
  - 实现方案
  - 前端开发
title: EXCEL 预览方案及其实现
---

## 面临的问题

实现在线表格数据预览，目前比较通用的表格格式为 `xlsx` 、`xls` 、`csv` 等，在本次项目中，需要预览以及编辑单元格数据。

## 解决方案汇总

### Luckysheet

> 相关链接  
> [Luckysheet文档](https://mengshukeji.gitee.io/luckysheetdocs/zh/)  
> [luckysheet(1): 在线 excel 介绍及使用 - 掘金](https://juejin.cn/post/7102255426363719716)  
> [luckysheet(2) : 前后端存储展示实战 - 掘金](https://juejin.cn/post/7104175160315346957)  
> [luckysheet(3):基于 luckysheet 实现自定义报表 - 掘金](https://juejin.cn/post/7148683131418050590)

### 问题

需要在 `Vue` 中引入 `jQuery` 。

### 优点

- 包含大量常用电子表格功能。
- 最少的配置就能开始上手使用
- 社区驱动

## X-spreadsheet

>相关链接  
> [GitHub - myliang/x-spreadsheet: The project has been migrated to @wolf-table/table https://github.com/wolf-table/table](https://github.com/myliang/x-spreadsheet)  
> [X-Spreadsheet中文文档](https://hondrytravis.com/x-spreadsheet-doc/)  
> [在Vue中使用x-data-spreadsheet - 掘金](https://juejin.cn/post/7086261579083153445)  
> [x-spreadsheet学习 - 掘金](https://juejin.cn/post/6998707107138633758)  
> [web表格x-data-spreadsheet实践 | 个人技术的分享](https://starlightunion.github.io/blog/frontend/vue/x-data-spreadsheet-practice.html)

### 问题

需要引入 `less` ,不过作为预编的话，可以不影响其他东西。

### 优点

事件监听系统比较丰富，基于 `Canvas` 实现。

### 具体实验步骤

### 目标

- [ ] 支持导入 xlsx 、 xlx 、 csv 文件
- [ ] 支持导出 xlsx 文件
- [ ] 支持上传修改后的表格文件
- [ ] 支持从服务端下载表格文件

### 参考文章

[x-data-spreadsheet 在线编辑excel文件，支持导入/导出/上传/读取网络 excel，合并单元格（vue版本）\_Dreamy\_Lois的博客-CSDN博客](https://blog.csdn.net/qq_42120178/article/details/111636027)

### 前端

百分白按照参照对象实现。

> [!WARRING] 额外必备环境💡

```json
{
	"dependencied" : {
		"x-data-spreadsheet": "^1.1.8",
		"xlsx": "^0.15.1"
	},
	"devDependencies": {
		"less": "^4.1.3",
		"less-loader": "^11.1.0"
	}
}
```

![文件信息](Extras/Media/2146737de8948dfff78d5c73662c64ac_MD5.png)

### 后端

> 只对后端接收文件部分进行了测试，上传文件和本地上传文件道理一样，不额外测试

[Open file:](Extras/Media/34e9898f4d4a85cba2e68953db4b7401_MD5.png)  
![](Extras/Media/34e9898f4d4a85cba2e68953db4b7401_MD5.png)

> 均为 `MIT` 开源协议
