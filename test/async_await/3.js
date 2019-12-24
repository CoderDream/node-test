const fs = require('fs');
const promisfy = require('util').promisify;
const readFile = promisfy(fs.readFile);

readFile('./test/async_await/1.txt').then((data) => {
    console.log(data.toString());
}).catch(err => {
    console.log(err);
});