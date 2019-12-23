describe('Test timeout', function() {
	it('It should complete during 1000ms ', function(done) {
		this.timeout(1000);
		var callback = function() {
	  		console.log("------");
	  		done();
	  	}
	    setTimeout(callback, 500);	    
	});
});	