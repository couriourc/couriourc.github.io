---
author: couriourc
typora-root-url: ./assets
title: WebRTC 中的信令服务器约定
mathjax: true
tags:
  - -webrtc
categories: [前端]
nanoid: ij64Np7sAKDP_cuPsUlfB
date: 2021-05-01 12:55:55
abbrlink:
date created: 2023-03-11
date modified: 2023-06-25
---

## WebRTC 中的信令服务器约定

### Join

客户端发送: ` {"Event":"Join","Name":"test"}    `

服务器返回 `  {"Event":"Msg","Msg":"Join true"}`

## Show

客户端发送: `  {"Event":"Show"}    `

服务器返回: `  {"Event":"Show","allUsers":["user1","user2"]}`

## Call

客户端发送: `  {"Event":"Call","SrcName":"user","DestName":"user"}    `

服务器返回: ` {"Event":"Msg","Msg":"Call true"}`

## Accept

客户端发送: ` {"Event":"Accept","SrcName":"user","DestName":"user","isAccept":Bool}  `  

服务器返回: `{"Event":"Msg","Msg":"Accept true"}`

## Offer  

  客户端发送: ` {"Event":"Offer","Offer":"Offer","SrcName":"user","DestName":"user"} `  

 服务器返回： {"Event":"Msg","Msg":"Offer true"}

## Candidate

客户端发送: `{"Event":"Candidate","Candidate":"Candidate","SrcName":"user","DestName":"user"}   `

 服务器返回 `{"Event":"Msg","Msg":"Candidate true"}`

## Answer

客户端发送: `{"Event":"Answer","Answer":"Answer","SrcName":"user","DestName":"user"}`

服务器返回 `{"Event":"Msg","Msg":"Answer true"}`

## Hangup

客户端发送: ` {"Event":"Hangup","SrcName":"user","DestName":"user"}  `

服务器返回 `     {"Event":"Msg","Msg":"Hangup true"}`

## Leave

客户端发送: `{"Event":"Leave","Name":"user"} `  

服务器返回 `{"Event":"Msg","Msg":"Leave true"}`
