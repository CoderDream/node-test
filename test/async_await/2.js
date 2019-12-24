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