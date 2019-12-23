// third.js
var expect = require('chai').expect; 
 
describe('---Root layer', function() {
 
 
	before(function() {
	    // 在本区块的所有测试用例之前执行
	    console.log();
	    console.log("----First layer----before-------------")
	});
	after(function() {
	    // 在本区块的所有测试用例之后执行
	    console.log("----First layer----after-------------")
	    console.log();
	});
	beforeEach(function() {
	    // 在本区块的每个测试用例之前执行
	    console.log();
	    console.log("----First layer----beforeEach-------------")
	});
	afterEach(function() {
	    // 在本区块的每个测试用例之后执行
	    console.log("----First layer----afterEach-------------")
	    console.log();
	});
	describe('---Second layer Root', function() {
		before(function() {
		    // 在本区块的所有测试用例之前执行
		    console.log();
		    console.log("--------Second layer----afterEach-------------")
		});
		beforeEach(function() {
		    // 在本区块的每个测试用例之前执行
		    console.log();
		    console.log("--------Second layer----beforeEach-------------")
		});
		it('First case in second layer', function() {
			expect(2).to.be.equal(2);
		});
		it('Second case in second layer', function() {
			expect(2).to.be.equal(2);
		});
	});
	it('First case in First layer', function() {
		expect(2).to.be.equal(2);
	});
});