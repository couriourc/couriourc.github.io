---
title: 一种基于OpenApi的接口自动化方案-设计过程
---
## 背景

> 软件开发，因为系统复杂性提升，模块拆分也很普遍，很难形成一个团队做端到端交付，没有任何外部依赖。典型场景是模块 A 由一个团队 1 开发，模块 B 由团队 2 开发。这时，团队 A 的功能开发完成后必须要和团队 B 开发的相应功能联调。目的是走一个端到端的流程，确认功能正确。

![](media/m_a14d056f17c4736c2e9bd686b62293cc_r.png)

在前端还原界面的时候，往往要面临两种极端情况，一是数据稀缺，靠谱一点的经典情况，大概率就是：

```json
{
	"result": [],
	"code": 0,
	"message": "success"
}
```

二是过于丰富，但是 UI 同事所提供的 UI 界面又总是看上去刚刚好 🤓，而作为一名**倔强前端**，在开发的时候让我凭空臆测来写界面，十之八九出现下列情况：

- 滚动条溢出，且丑陋 😪
- 文本溢出，且丑陋 😪

而我又刚好是集菜于一身的菜鸡选手，在和后端对接接口的时候，会碰上：

- 永远的 Error，漫长的等待，最后工期延误 😪
- 传参方式臆测，经典的文件上传方式不一致 😪
- 错误边界的误判，无意义的数据设计。

随着后端同事的技术升级，开始采用 FastAPI，规范了 openApi 的文档方式，但问题也随之而来，定义 Mock 数据并配置 mock server 真的太浪费时间了！于是便有了本次尝试。

## 目标

![目标结果](media/目标结果.png)
作为一个 `mock server`,应该做到：

- 自然的输出结果 ✨
- 字段长度合理范围内随机 ✨
- 合理的字段类型 ✨
- 接口校验完备 ✨
- 状态判定（暂未解决）

## 过程

### 解析 openApi 的格式

[ OpenAPI 规范（OAS）](https://swagger.io/specification/)为 RESTful API 定义了一个与语言无关的标准接口，允许人和计算机发现和理解服务的功能，而无需通过访问源代码、文档或开发者工具。OpenAPI 定义大致如下：

```json
{
	"swagger": "2.0",
	"info": {},
	"host": "petstore.swagger.io",
	"basePath": "/v2",
	"tags": [],
	"schemes": [],
	"paths": {
		"/user/logout": {
			"get": {
				"tags": ["user"],
				"summary": "Logs out current logged in user session",
				"description": "",
				"operationId": "logoutUser",
				"produces": ["application/xml", "application/json"],
				"parameters": [],
				"responses": {
					"default": {
						"description": "successful operation"
					}
				}
			}
		}
	},
	"securityDefinitions": {},
	"definitions": {},
	"externalDocs": {}
}
```

转为类型定义，这部分可以从网上找到:

```typescript
export interface ISchema {
  title?: string;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: boolean;
  minimum?: number;
  exclusiveMinimum?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  enum?: any[];
  type?: "array" | "boolean" | "integer" | "number" | "object" | "string";
  not?: ISchema | IReference;
  allOf?: Array<ISchema | IReference>;
  oneOf?: Array<ISchema | IReference>;
  anyOf?: Array<ISchema | IReference>;
  items?: ISchema | IReference;
  properties?: {
    [k: string]: ISchema | IReference;
  };
  propertyNames?: ISchema | IReference;
  additionalProperties?: ISchema | IReference | boolean;
  description?: string;
  format?: string;
  default?: any;
  nullable?: boolean;
  discriminator?: IDiscriminator;
  readOnly?: boolean;
  writeOnly?: boolean;
  example?: any;
  externalDocs?: IExternalDocumentation;
  deprecated?: boolean;
  xml?: IXML;

  [k: string]: any;
}
```

从规范的描述不难看出：

- 与语言无关
- 有现有工具生成
- 更加值得关注的类型信息 `paths`
	- 字段的类型（输入）
	- 字段的名字
	- 响应的类型（作为判断的输出规则）
	- 响应的字段（输出）

为了方便，重新定义输出的结构体：

```typescript
export interface IOpenAPI {
  openapi: string;
  info: IInfo;
  externalDocs?: IExternalDocumentation;
  servers?: IServer[];
  security?: ISecurityRequirement[];
  tags?: ITag[];
  paths: IPaths;
  components?: IComponents;

  [k: string]: any;
}


export interface FakeGenOutput {
    operationId: string;
    path: string;
    method: string;
    summary?: string;
    mocks?: any;
    raw: any;
	required: [];
}

```

### 设计响应服务器

在设计时候考虑一下功能

1. 应该具备的功能：

- 路径匹配
- 参数匹配
- 状态转移

1. 部署方法考虑

- 侵入性考虑`vite-plugin-server` 动手脚，`FastApi` 上动手脚，
- 非侵入性，**自部署一个服务**，每次变动只需要从后端获取 `openApi Json` 的文件就行。

在查找资料过程中，现有的 [Swagger Faker](https://github.com/reeli/swagger-faker)，但是存在接口类型过于死板，返回的数据是是静态的，不会因为请求次数发生变化，此外不能调整返回参数的长度。另外一个是使用来作为服务返回。[APIJSON](https://github.com/Tencent/APIJSON)，不过这个还要涉及到建表这样那样的，复杂。

## 改造思路

本着**借鉴**的原则，从**Swagger Faker** 中拉取了解析的代码，然后对其进行扩展：

- 参数解析校验，原本的工具不具备参数校验。
- 返回参数格式调整。

## 总结

描述了一种基于 OpenApi JSON 生成 Mock 的一种思路，并对其实现，将尝试用于后续开发中，简化开发流程，提升开发效率。进一步实现使其在工作中更加易用，还需要进一步设计。
