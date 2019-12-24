## async 与 await


## 回调函数
```javascript
const fs = require('fs');

// 基于回调
// 点击菜单，【调试】-【以非调试模式运行】，相当于 node.exe test\async_await\1.js 
fs.readFile('./test/async_await/1.txt', (err, data) => {
    if(err) {
        console.log(err);    
    }
    console.log(data.toString());
});

// 终端方式：转到项目的async_await文件夹下执行 node 1.js
// fs.readFile('./1.txt', (err, data) => {
//     if(err) {
//         console.log(err);    
//     } else {
//         console.log(data.toString());
//     }
// });
```


## Promise 方式
```javascript
const fs = require('fs');

function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                //console.log(err);   
                reject(err);
                return;
            }
            //console.log(data.toString());
            resolve(data.toString());
        });
    });
}

readFile('./test/async_await/1.txt').then((data) => {
    console.log(data.toString());
}).catch(err => {
    console.log(err);
});
```


## promisfy 方式
```javascript
const fs = require('fs');
const promisfy = require('util').promisify;
const readFile = promisfy(fs.readFile);

readFile('./test/async_await/1.txt').then((data) => {
    console.log(data.toString());
}).catch(err => {
    console.log(err);
});
```


## [生成器函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function*) (generator function)，它返回一个  Generator  对象
```javascript
const fs = require('fs');

function* a(v) {
    yield console.log(v + 1);

    yield console.log(v + 2);
    console.log(v + 3);
}

const b = a(5);
b.next();
b.next();
```

- 控制台输出
```javascript
6
7
```


## async 与 await - 定义函数
```javascript
const fs = require('fs');

const promisfy = require('util').promisify;
const readFile = promisfy(fs.readFile);

async function rf() {
    const data = await readFile('./test/async_await/1.txt');
    console.log(data.toString());
}

rf();
```


## async 与 await - 匿名函数
```javascript
const fs = require('fs');

const promisfy = require('util').promisify;
const readFile = promisfy(fs.readFile);

(async () => {
    try {
        const data = await readFile('./test/async_await/1.txt');
        console.log(data.toString());
    } catch(err) {
        console.log(err);
    }
})();
```


## express 实例
- server.js
```javascript
const express = require('express');
const app = express();

app.listen(8080, '127.0.0.1');

app.use(express.static('./public'));

app.get('/abc', (req, res) => {
    res.json({
            status: true,
            data: [
                {
                    name: 'xiaoming',
                    age: 14,
                    id: 1
                },
                {
                    name: 'xiaohong',
                    age: 15,
                    id: 2
                },
                {
                    name: 'xiaoqiang',
                    age: 16,
                    id: 3
                }
            ]
        }
    )
})
```


- index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script src="https://unpkg.com/axios/dist/axios.min.js""></script>
    <script>
        (async () => {
            const data = await axios.get('/abc');
            console.log(data);
        })();
    </script>
</body>
</html>
```

执行结果：                                                                                
![](https://github.com/CoderDream/node-test/blob/master/images/async_01.png)
