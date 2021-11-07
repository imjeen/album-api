

## Example

-   create an album

POST，http://localhost:7000/api/album

```json
{
    "name": "aaa",
    "photos": [],
    "user": []
}
```

-   create a photo

POST, Content-Type:application/json, http://localhost:7000/photo

input:

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

output:

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

-   upload a file

POST, file: `<file>`, http://localhost:7000/api/upload

(Content-Type：multipart/form-data,)
