describe('For compare with Test slow', function () {
    this.slow(100);
    // 标记耗时过长 
    it('It would warning', function (done) {
        var callback = function () {
            console.log("------");
            done();
        }
        setTimeout(callback, 50);
    });
});