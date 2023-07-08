---
author: couriourc
categories: [公司经历以及问题记录]
dg-publish: false
title: ElmentUI-Uploader-Bug
date-created: 2023-06-22
date-modified: 2023-07-08
---

## 问题描述

当拖拽文件夹上传时，实际上将文件夹当作文件上传的。换言之，并没有拿到实际的文件列表，包括在多选的时候，选上了文件夹。如果抛弃使用 `element-ui` 的 `uploader`，使用 `input` ,在拖拽的时候，若是没有权限允许，以久没办法拿到文件信息。

[Open file:](Extras/Media/4c67138c7fc7af237846734bbe2e308b_MD5.png)  
![](Extras/Media/4c67138c7fc7af237846734bbe2e308b_MD5.png)

## 解决思路

1. 在 `drop` 事件中获取 `e.dataTransfer. Items` ，是一个 `DataTransferItemList` 对象，遍历得到 `DataTransferItem` 对象
2. 用 `webkitGetAsEntry` 方法得到 `FileSystemEntry` 对象
3. 根据 `isFile` 属性判断 entry 是文件还是文件夹。是文件的话，用 `file` 方法获取 `File` 对象；是文件夹的话，递归地用 `reader` 读取包含的文件

```vue
<template>  
  <el-container>  
    <el-upload  
        class="upload-demo"  
        :auto-upload="false"  
        drag  
        action="#"  
        multiple  
        :file-list.sync="fileList"  
        :before-upload="handleChange"  
        :on-change="handleChange"  
        :show-file-list="false"  
    >  
      <i class="el-icon-upload"></i>  
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>  
      <div class="el-upload__tip" slot="tip">  
        只能上传jpg/png文件，且不超过500kb  
      </div>  
    </el-upload>  
  </el-container>  
</template>  
  
<script>  
export default {  
  name: 'App',  
  components: {},  
  directives: {  
    webkitdirectory: {  
      inserted(el) {  
        // 递归获取  
        function getFileFromEntryRecur(entry, cb) {  
          if (entry.isFile) {  
            entry.file(file => {  
              let path = entry.fullPath.substring(1);  
              cb({file, path});  
            });  
          } else {  
            let reader = entry.createReader();  
            reader.readEntries(entries => {  
              entries.forEach(entry => {  
                getFileFromEntryRecur(entry,cb);  
              });  
            },e=>{  
              console.log(`e-->`, e);  
            });  
          }  
        }  
        // Hack 部分  
        el.querySelector('.el-upload-dragger').addEventListener('drop', (data) => {  
          for (let each of data.dataTransfer.items) {  
            const entry = each.webkitGetAsEntry();  
            getFileFromEntryRecur(entry, (file) => {  
              console.log(`file-->`, file);  
            });  
          }  
        });  
      },  
    },  
  },  
  data() {  
    return {  
      fileList: [],  
    };  
  },  
  methods: {  
    handleChange(file) {  
      console.log(file);  
    },  
  },  
};  
</script>
```

同样的对于 `input`，也可以基于此方法进行修改。

但是，文件的相对路径格式不统一，需要处理，统一格式为`文件夹 1/文件夹 2/a.txt `。

途径相对路径说明

[Open file:](Extras/Media/e16b57707f97dd9fd77b1db44d89be2a_MD5.png)  
![](Extras/Media/e16b57707f97dd9fd77b1db44d89be2a_MD5.png)

## API 兼容情况

[Open file:](Extras/Media/86c6b77fe3af9faf18de1493fd00a3c7_MD5.png)  
![](Extras/Media/86c6b77fe3af9faf18de1493fd00a3c7_MD5.png)

## 注意事项

>!注意  
> `webkitGetAsEntry` 这个函数在读取某个文件夹的文件数大于100个时只会读取前100个

## 参考信息

> 参考链接  
> [上传三合一：拖拽上传、上传文件、上传文件夹，一次搞定！\_呀呀夫斯基的博客-CSDN博客](https://blog.csdn.net/tangran0526/article/details/104156857#:~:text=%E4%B8%8A%E4%BC%A0%E4%B8%89%E5%90%88%E4%B8%80%EF%BC%9A%E6%8B%96%E6%8B%BD%E4%B8%8A%E4%BC%A0%E3%80%81%E4%B8%8A%E4%BC%A0%E6%96%87%E4%BB%B6%E3%80%81%E4%B8%8A%E4%BC%A0%E6%96%87%E4%BB%B6%E5%A4%B9%EF%BC%8C%E4%B8%80%E6%AC%A1%E6%90%9E%E5%AE%9A%EF%BC%81%201%201%20%E6%8B%96%E6%8B%BD%E4%B8%8A%E4%BC%A0%20%E5%9C%A8%20drop%20%E4%BA%8B%E4%BB%B6%E4%B8%AD%E9%80%9A%E8%BF%87%20e.dataTransfer.items,%E4%B8%89%E5%90%88%E4%B8%80%20%E8%BF%99%E4%B8%89%E7%A7%8D%E4%B8%8A%E4%BC%A0%E9%80%94%E5%BE%84%EF%BC%8C%E6%9C%80%E7%BB%88%E9%83%BD%E6%8B%BF%E5%88%B0%20File%20%E5%AF%B9%E8%B1%A1%EF%BC%9A%20%E4%BD%86%E6%98%AF%EF%BC%8C%E6%96%87%E4%BB%B6%E7%9A%84%E7%9B%B8%E5%AF%B9%E8%B7%AF%E5%BE%84%E6%A0%BC%E5%BC%8F%E4%B8%8D%E7%BB%9F%E4%B8%80%EF%BC%8C%E9%9C%80%E8%A6%81%E5%A4%84%E7%90%86%EF%BC%8C%E7%BB%9F%E4%B8%80%E6%A0%BC%E5%BC%8F%E4%B8%BA%20%E6%96%87%E4%BB%B6%E5%A4%B91%2F%E6%96%87%E4%BB%B6%E5%A4%B92%2Fa.txt%20%E3%80%82%20)  
> [GitHub - fex-team/webuploader: It's a new file uploader solution!](https://github.com/fex-team/webuploader)  
>[拖拽本地文件夹到浏览器中，展示所有文件结构\_webkitgetasentry\_呀呀夫斯基的博客-CSDN博客](https://blog.csdn.net/tangran0526/article/details/104108551)
