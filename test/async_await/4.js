const fs = require('fs');

function* a(v) {
    yield console.log(v + 1);

    yield console.log(v + 2);
    console.log(v + 3);
}

const b = a(5);
b.next();
b.next();