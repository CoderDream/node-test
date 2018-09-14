let addNum = require('../../model/math');

describe('测试index.js', function () {
    describe('测试addNum函数', function () {
        it('两数相加结果为两个数字的和', function () {
            if (addNum(1, 2) !== 3) {
                throw new Error("两数相加结果不为两个数字的和");
            }
        });
    });
});


describe('测试index.js', function () {
    describe('测试addNum函数', function () {
        it('两数相加结果为两个数字的和', function () {
            expect(addNum(1, 2)).to.be.equal(3);
        });
    });
});
