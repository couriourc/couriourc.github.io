---
title: 一种基于OpenApi的接口自动化方案-设计过程 1
---

## 背景

前文设计过程中对其进行了描述，在此处进一步以`vite`插件的形式设计实现。本文将对其使用方法进行简要介绍。

## 使用方式

```typescript
// vite.config.ts
import * as path from "path";

const camelCase = (str) => {
    str = str?.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1, str.length)
}
export default defineConfig({
    plugins: [
        OpenApiServer({
			api: /^\/api\/v3/, // 需要拦截的url模式,
			url: path.resolve(__dirname, "openapi.json"),
			mockServer:[
			/^\/mock\/api\/v3/,
			()=>/^\/api\/v3/
			]  , // 是否需要主动 mock, 如果不需要这个，正式使用，就不拦截，第二个参数用于地址回写
            rewrite: {
				// 对FakeObj的内容进行复写拦截
				operationId(api) {
                    return camelCase(api.method) + api.path.replace('/api/v3/', '')
                        .replace(/-/g, "/")
                        .replace(":", "/By/")
                        .replace(" ", "/")
                        .replace(/\s/g, "")
                        .split("/")
                        .map(camelCase).join("");
				},
			},
			// 更多功能还在开发中

		})
	]

```

```json
// tsconfig.json
// 引入类型声明
{
...
  "include": [
    + "./vite-plugins/client.d.ts"
  ],
...
}

```

```typescript
// 引入模块
import {GetItems, setup} from '~openapi-server'
// setup 是用于设置拦截请求，可以将请求方式替换为 axios 之类自定义的工具，配置一次即可
// GetItems 是根据 请求方法+路径生成的，规则就是转为驼峰写法，
// 带参数的是通过 parameraters 生成的。
// 响应类型会暂时没有很好的办法解决类型提示
import axios from "axios";

const instance = axios.create({

});
setup((ref) => {
    // 使用原生 fetch
    ref.requestor = (...params: any[]) => fetch(...params);
    // 使用axios
    ref.requestor = (...params) => instance(...params);
})

GetItems()
	.then((res) => {
		console.log(res)
});
```

## Bug~
