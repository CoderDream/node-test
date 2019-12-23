describe('Test timeout', function () {
    it('It exceed 2000ms time , and will fail', function (done) {// 异步测试，要用 done
        var callback = function () {
            console.log("------");
            done();
        }
        //setTimeout(callback, 3000);// 延迟 3000ms 执行，让其超时。该测试用例会失败。
        setTimeout(callback, 1000);// 延迟 1000ms 执行，不会超时。该测试用例会成功。
    });

    it('It exceed 2000ms time , but will pass', function (done) {
        this.timeout(5000);
        var callback = function () {
            console.log("------");
            done();
        }
        setTimeout(callback, 3000);// 延迟 3000ms 执行，但是设置timeout 为 5000ms，因此该用例会成功。
    });
});