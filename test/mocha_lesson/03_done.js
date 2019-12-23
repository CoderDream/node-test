var request = require('request');
var expect = require('chai').expect;
 
it('Testing asynchronous code', function(done){
	request('http://www.baidu.com', function(err, res){
      expect(2).to.be.equal(2);
      console.log(done)
      done();//显式调用这个函数，通知 Mocha 测试结束。
    });
});