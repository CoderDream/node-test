var should = require('should');
var Ajax = require('../../src/chapter1/Ajax');

// 描述 'Ajax' 的行为
describe('Ajax', function () {

    // 描述 'Ajax.load()' 方法的行为.
    describe('#load()', function () {

        // 加载成功后执行回调函数, 获取结果.
        it('should return the load result.', function (done) {
            Ajax.load('url', function (result) {
                result.should.equal('url');
                done();
            });
        });
    })
});