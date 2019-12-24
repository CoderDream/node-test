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