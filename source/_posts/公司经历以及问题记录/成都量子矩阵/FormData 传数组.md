author: couriourc
title: FormData 传数组
categories:
  - 公司经历以及问题记录
nanoid: QqLJXnbL3R1Wvc62JgBiq
date created: 2023-04-17 00:00:00
date modified: 2023-06-21 00:00:00
---

把数组直接 append 到 FormData 对象中，post 的请求会把数组拼接成一个字符串发送给服务器，又不想在服务器端截取字符串。

解决方案：遍历数组把数组项依次append添加到FormData对象，服务器端就可以获取数组了。
