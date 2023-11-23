---
typora-root-url: ./database-start
title: 数据库系统概论-数据依赖的公理系统
author: CouriourC
mathjax: true
date: '2023-01-017 19:25:57'
updated: '2023-01-017 19:25:57'
tags:
  - 数据库系统概论
  - 计算机基础
categories:
  - 计算机基础知识
nanoid: LZMWbG9bYoD61YXc6-SIF
sticky:
---



# Armstrong 公理系统

对于满足一组函数依赖 `F` 的关系模式 `R<U,F>`,其任何一个关系 $r$,若函数依赖 $X \rightarrow Y $都成立，则称 F 逻辑蕴涵。

设 `U` 为属性集总体，`F` 是 `U` 上的一组函数依赖，于是有关系模式 R<U,F>,则对于 R<U,F>来说，有以下推理规则：

1. `自反律`:若 $Y\subseteq X \subseteq U$ ，则 $X\subseteq Y$ 为 `F` 所蕴含。
2. `增广律`:若 $X\rightarrow Y $为 `F`所蕴涵，且 $Z\subseteq U$ ，则 $XZ\rightarrow YZ$ 为 `F` 所蕴涵。
3. `传递律`:若 $X\rightarrow Y$ 以及 $Y\rightarrow Z$ 为 `F` 所蕴含，则 $X\rightarrow Z$ 为 `F` 所蕴含。

看着有点绕，
