var request = require('request');
var expect = require('chai').expect;

it('should complete this test', async () => {
    // it('should complete this test', function (done) {// 返回一个 Promise 时, 此处一定不要传入 done 参数。否则超时报错。
    await new Promise(function (resolve) {
        expect('').to.be.empty;
        resolve();
        // 返回一个 Promise 时，一定要显示调用 resolve 函数。否则超时报错。
    });
    expect({}).to.be.empty;
});

it('should complete this test', function () {
    // it('should complete this test', function (done) {// 返回一个 Promise 时, 此处一定不要传入 done 参数。否则超时报错。
    return new Promise(function (resolve) {
        expect('').to.be.empty;
        resolve();
        // 返回一个 Promise 时，一定要显示调用 resolve 函数。否则超时报错。
    }).then(function () {
        expect({}).to.be.empty;
    });
});