var expect = require("chai").expect;
var request = require("superagent");

describe('anscy demo', function () {
    it('get info', function (done) {
        request
            .get('http://localhost:8080/abc')
            .end(function (err, res) {
                expect(res).to.be.an('object');
                console.log(res.text);
                done();
            });
    })
});


// (base) PS D:\Java\GitHub\node-test> npm run mocha_done_test

// > node-test@1.0.0 mocha_done_test D:\Java\GitHub\node-test
// > mocha test/async_await/done_test.js



//   anscy demo
// {"status":true,"data":[{"name":"xiaoming","age":14,"id":1},{"name":"xiaohong","age":15,"id":2},{"name":"xiaoqiang","age":16,"id":3}]}
//     √ get info


//   1 passing (42ms)