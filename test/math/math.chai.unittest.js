let expect = require('chai').expect;
let addNum = require('../../model/math');


describe('测试index.js', function () {


    beforeEach(function () {
        console.log('beforeEach Array\n');
    });

    before(function () {
        console.log('before Array\n');
    });

    before(function () {
        console.log('before Array second time\n');
    });

    after(function () {
        console.log('after Array\n');
    });

    describe('测试addNum函数', function () {
        it('两数相加结果为两个数字的和', function () {
            console.log('success \n');
            expect(addNum(1, 2)).to.equal(3);
        });
    });
});
