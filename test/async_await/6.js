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