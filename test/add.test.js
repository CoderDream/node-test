// add.mongo_test.js
let add = require('../model/add.js');
let expect = require('chai').expect;

describe('加法函数的测试', function() {
    it('1 加 1 应该等于 2', function() {
        expect(add(1, 1)).to.equal(2);
    });
});
