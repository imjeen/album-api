# 项目介绍

本项目通过 node+express+typescript+mysql+typeorm 构建 restful 风格 api。项目比较简单，非常适合入门学习 typeorm。

# 为什么选择 typeorm

-   1、[文档](https://typeorm.io/#/)丰富且有中文版
-   2、强大的链式函数式的查询方法，使得代码简洁易懂
-   3、通过实体自动生成数据库表
-   4、实体关系配置简单、灵活、易懂

# 接口文档

| 方法        | 请求方式 | Content-type        | 功能                 |
| ----------- | -------- | ------------------- | -------------------- |
| /upload     | post     | multipart/form-data | 上传文件             |
| /photo      | post     | application/json    | 创建图片信息         |
| /photo      | get      | text/plain          | 获取图片信息列表     |
| /photo      | put      | application/json    | 修改图片信息         |
| /photo?id=1 | delete   | text/plain          | 通过 id 删除图片信息 |
| /album      | post     | application/json    | 创建相册             |
| /album      | get      | text/plain          | 获取相册信息列表     |
| /album      | put      | application/json    | 修改相册信息         |
| /album?id=1 | delete   | text/plain          | 通过 id 删除相册     |

-   创建图片

POST, Content-Type:application/json, http://localhost:7000/photo

数据示例：

```json
{
    "name": "test",
    "description": "图片",
    "filename": "test.jpg",
    "views": "1",
    "isPublished": "true",
    "albums": [
        {
            "id": 59,
            "name": "wodeceshi"
        },
        {
            "id": 58,
            "name": "66677788899"
        }
    ],
    "author": {
        "name": "作者"
    },
    "photoMetadata": {
        "comment": "bucuo",
        "compressed": true,
        "orientation": "66666",
        "height": 200,
        "width": 200
    }
}
```

返回结果：

```json
{
    "code": 1,
    "data": {
        "albums": [
            {
                "name": "我的相册",
                "id": 59
            },
            {
                "name": "别人的相册",
                "id": 58
            }
        ],
        "metadata": {
            "orientation": "66666",
            "width": 200,
            "comment": "bucuo",
            "compressed": true,
            "id": 7,
            "height": 200
        },
        "filename": "test.jpg",
        "isPublished": "true",
        "author": {
            "name": "作者",
            "id": 11
        },
        "name": "test",
        "description": "123",
        "id": 41,
        "views": "1"
    },
    "message": "success"
}
```

-   上传文件

url：http://localhost:7000/upload
请求方式：post
Content-Type：multipart/form-data
自行选择上传文件
