---
title: UE 与前端交互接口封装
---
## 预置

### 基本介绍

利用**像素流送**可以在用户不可见的电脑上远程运行虚幻引擎应用程序。举例而言，这台电脑可以是机构中的一台实体电脑，也可以是云端服务提供的虚拟机。虚幻引擎将使用该电脑可用的资源（CPU、GPU、内存等）来运行游戏逻辑并渲染每一帧。它会不断将此渲染输出编码到一个媒体流送中，再通过一个轻量级的网页服务堆栈进行传递。用户即可在其他电脑和移动设备上运行的标准网页浏览器中查看直播流送。

![](media/m_59a4dd3f56ffaf639361e39edd3f3fb1_r.png)

> 本文将重点阐述**前端**与**UE**的交互过程。

### 背景

在像素流送过程中，不仅需要考虑 UE 如和展示在界面上，往往还需要**前端**与**UE**交互，但是官方提供的接口，有一种类似[UDP](https://www.cloudflare.com/zh-cn/learning/ddos/glossary/user-datagram-protocol-udp/)，那种让人不安全的感觉，如果只是单发送，单接收还好，但涉及到逐步交互，就需要将逻辑拆开来处理，比如打开 **UE** 场景中的一些模型，操作这个模型，结束操作，获得这个信息，用户的注意力会从前端转到**UE**，再从**UE**转到**前端**，而我们更加习惯使用**异步**或者**回调**的方式去理解接口。因此便有了本次封装。

### 相关接口预置知识

像素流送，分为三个端去理解（准确来说，WebRTC 这种模式都需要三个端去理解）

- Browser 浏览器
- Signal 信令服务器（不过多描述）
- UE Application UE 应用（不过多描述）

#### 浏览器与 UE 应用 通信

在浏览器中，会引入对应的库，目前是直接挂在 Windows 对象下，可以直接调用

- 发送消息：`window.emitUIInteraction`函数向 UE 应用 发送消息，
- 接收消息：使用 `window.addResponseEventListener` ,监听 UE 应用发送过来的消息，完成分步交互。

## 接口封装

```typescript
/**
 - @typeParam T - 接收到的数据体
 - */
export interface IUECommandStruct<T> {
    commandType: string;
    commandData: T;
}
export const event_map = new Map<string, Set<Function>>();
/**
 - @desc 发送到 UE
 - @param {string} commandType 接口类型
 - @param commandData 传入数据
 - @param receiveCommandType
 - @example
 - // 打开绘制编辑器
 - sendToUe("Test-Draw-Line","ID","Line").then(()=>{
 - }});
 - # Cancel
 - const helper = sendToUe();
 - helper.cancel();
 - */
export const sendToUe = (commandType: string, commandData: any, receiveCommandType?: string): Promise<IUECommandStruct<any>> => {
    //    记录当前消息的发送情况
    let reject;
    const promisify = new Promise<IUECommandStruct<any>>((resolve, _reject) => {
        window.emitUIInteraction({
            commandType,
            commandData,
        });
        // 如果是单项发送
        if (!receiveCommandType) return resolve({
            commandType,
            commandData: 'Success'
        });
        // 取消监听
        const unlisten = listenUe(receiveCommandType, (data, destroy) => {
            resolve(data as IUECommandStruct<any>);
            // 对于这种一次性数据，使用完之后就移除掉
            setTimeout(()=>{
                destroy();
            })
        });
        // 退出监听
        reject = () => {
            _reject();
            unlisten();
        };
    });
    // 执行后将移除本次监听
    // 是否取消本次监听
    /*@ts-ignore*/
    promisify.cancel = reject;
    return promisify;
};
/**
 - @desc 通过监听一个命令，获取数据
 - @param command 需要监听的命令
 - @param fn 回调,返回对应监听的列信息
 - */
export function listenUe(command: string, fn: (data: any, destroy: Function) => void) {
    const callback = (data: any, destroy: Function) => {
        fn(data, destroy);
    };
    // 监听事件信息
    listen(command, callback);
    return () => {
        // 移除对应函数
        // 事件一旦发生，这个就是不可保留的，可以进行回退，如果一次性取消全部的事件信息
        // 会导致其他对应能存储的事件无用了
        try {
            event_map.get(command)?.delete(callback);
        } catch {
            console.error(command, "it has destroyed");
        }
    };
}
/*
- 只供本文件使用
- */
function listen(command: string, callback: Function) {
    const fns = event_map.get(command);
    if (!fns) event_map.set(command, new Set<Function>());
    return event_map.get(command)!.add(callback);
}
// 分发任务
export function emit(command: string, data: any) {
    const fns = event_map.get(command);
    fns?.forEach((callback) => {
        // 遍历执行
        return callback(data, () => {
            // 异步的销毁本函数
            setTimeout(() => {
                fns.delete(callback);
            });
        });
    });
}
```

使用方法

```typescript
/*
 - 异步去监听事件打开，并在收到 Line 事件的时候返回
 - */
export const sendAndWaitResponse = (ID: string) => sendToUe('Test', ID, 'Line');
/**
 - 仅仅发送事件,请求打开地图画点，不关心是否收到数据
 - */
export const send = (ID: string) => sendToUe("Test", ID);
/**
 - 仅仅监听事件，不需要任何发送
 *
 - */
export const listen = (fn: Function) => listenUe("Line", fn);
```

### 关键函数讲解

- `SendToUe`

函数会返回一个 `Promise` 对象，并额外增加了 `cancel` 函数，争对返回的结果进行取消等待，正如`sendAndWaitResponse` 注释所描述，这里会等待第三个参数，也就是 `Line` 这个对应的事件接收到的时候，才会进行 `resolve`，如果没有第三个参数，为了保证统一，也返回了一个`Promise`对象。

- `listenUe`
	函数会返回一个用于主动 unlisten 的函数，用于该任务还没发起，但是组件即将卸载，也就是这个函数没用了，所以需要提前释放掉，传入参数为需要监听的命令类型和一个函数，用户执行完相关数据，需要手动 `destroy` 这个函数，类似与 `unlisten` ,一般在达到某个条件的时候，不需要监听了，而这个组件仍然还需要使用的时候，手动注销。这是为了避免函数反复注册，从出现**内存泄露**。

## 总结

本文简要介绍了像素流送、前端到 UE 的交互方式及其二次封装的方法。解决了分步调用**UE**的异步逻辑问题，实现了类 axios 的交互方式。
