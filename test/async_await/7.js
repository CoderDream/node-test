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