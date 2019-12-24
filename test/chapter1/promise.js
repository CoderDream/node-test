var should = require('should');
var DB = require('../../src/chapter1/DB');

// 描述 'DB' 的行为
describe('DB', function () {

    // 描述 'DB.save()' 方法的行为.
    describe('#save()', function () {

        //  保存成功后执行 Promise.then
        it('save without error.', function () {
            return DB.save('test');
        });
    })
});