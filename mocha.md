
# [测试框架Mocha](https://blog.csdn.net/hustzw07/article/details/73468970)
原创hustzw07 发布于2017-06-19 16:56:43 

## Mocha 
Mocha 是一种前端测试框架，由于它非常适合做 TDD（测试驱动开发），深受欢迎。官网：https://mochajs.org/

所谓测试驱动开发（英语：Test-driven development，缩写为 TDD）是一种软件开发过程中的应用方法，由极限编程中倡导，以其倡导先写测试程序，然后编码实现其功能得名。

## Assertion
Mocha 本身自己已经提供了一套断言。不过由于习惯，我们都是使用 Jasmine 风格的断言，而 chai 这个断言库，正是 expect 风格的断言。另外Mocha 还支持 should.js, chai, expect.js 等断言库。

## Mock
类似Junit，我们测试时可能需要mock 一些对象数据。而 Mocha 支持 sinon.js, simple-mock, nock 等很好的为我们解决了这个问题。

## 安装
```
npm install mocha -g
```
为了使用方便，最好全局安装 mocha。

## 执行
安装完 mocha后，就可以在控制台执行我们的测试脚本，比如
```
mocha test/first.js
```
当然，mocha也支持通配符， 比如要运行某个文件夹下的所有测试用例。
```
mocha test/unit/*.js 
```

## describe 和 it
类似 Jasmine，Mocha的测试集和测试用例如下：
describe 表示一个测试集，在实际测试中，我们需要对一些测试用例进行分组，而describe 能很好的完成这个事情。另外describe 还能进行嵌套。  

it 用法与describe 一样，第一个参数是名字，第二个是 测试代码function。 一个 it 就是我们的一个测试用例。 
如果我们在一个js 文件里面，只写一个根 describe ，然后describe 和 it 大量嵌套后，就形成了一颗树。树的非叶子节点都是测试集合，叶子节点即 it ，就是测试用例。

```
var expect = require('chai').expect;

describe('my second test suit', function() {
	it('my second test case', function() {
		expect(2).to.be.equal(2);
	});
});
```	
注意，如果一个describe 里面没有 it （比如下面：）， Mocha将不会执行这个 describe。
```
describe('Nothing', function() {
 
});
```

## 参数
### reporter
运行完测试用例，我们最关心的当然是测试结果，不过由于测试量可能很大，因此我们需要一定直观性的 reporter：
```
mocha --reporter tap
```
对应的控制台输出：
![](https://github.com/CoderDream/node-test/blob/master/images/mocha_01.png)


该命令，可以在控制台输出一个简明扼要，有层次的 reporter。

### mochawesome
TDD 开发中，为了方便沟通，我们可能需要一份给其他人看的 reporter。这个人可能不是开发人员。这时控制台的 reporter 就不是很合适了。
mocha 有个插件 mochawesome， 很好的解决了这个问题。
```
mocha --reporter mochawesome
```
执行命令后， 该插件会生成 一个 mochawesome-report 文件夹，里面含义很直观的一份测试结果。如下：

![](https://github.com/CoderDream/node-test/blob/master/images/mocha_02.png)

### watch
TDD 要求我们不停地重复 “测试-编码-重构-测试”，显而易见需要很多次运行测试用例，因此最好的做法就是当我们改了代码，mocha 自动帮我们运行测试用例，如下
```
mocha --watch
```
这样一旦我们改了js file，mocha会自动帮我们执行所有测试用例。需要退出可以使用 Ctrl + C 快捷键。


### bail 中断
在CI 时或者开发中，或者有些人更倾向与失败后中断，然后排查。可以使用以下命令：
```
mocha --bail
```
失败就停止执行后续的测试用例。


### recursive
比如我们也可以指定要测试的文件夹
```
mocha mytest_folder --recursive
```
### opts file
可能你也发现了，每次我们需要运行测试时，会使用很长的一段命令参数。mocha 官网给了个解决办法。
在test 目录下创建一个 mocha.opts 文件，然后把各个参数放进去。然后当我们在控制台中输入 mocha 时，它会自动扫描并使用这些参数。然后就可得到想要的结果。
下面是一个例子：
```
--reporter mochawesome
test --recursive
--growl
--watch
```

### 钩子函数
每个单元测试框架都提供了两对钩子函数，before 和 after， beforeEach 和 afterEach。
用来做什么、怎么使用 都很简单，这里就不说了。下面用一个例子说下他们的影响范围：
```
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
```  

在控制台中可以看到如下输出：
![](https://github.com/CoderDream/node-test/blob/master/images/mocha_03.png)

选中的两个case 属于内层的，不过这两个case运行前，依旧运行了外层的 beforeEach。


## 测试同步代码
Javascript是单线程的，最显著的特点就是有很多异步执行。同步代码的测试比较简单，直接判断函数的返回值是否符合预期就行了。像上面的例子，都是同步测试代码。

## 异步代码测试
JS中是有大量异步的函数，对于这些函数就需要测试框架支持回调、promise、resolve等方式。这无疑加大了测试难度。而mocha可以良好的支持javascript异步的单元测试。
### done
下面一个例子中，请求一下百度页面。输出 done， 然后显示调用 done。
```
var request = require('request');
var expect = require('chai').expect;
 
it('Testing asynchronous code', function(done){
	request('http://www.baidu.com', function(err, res){
      expect(2).to.be.equal(2);
      console.log(done)
      done();//显式调用这个函数，通知 Mocha 测试结束。
    });
});
```
注意：
如果没有显示调用 done()。 会等到超时报错，像下面这样。

![](https://github.com/CoderDream/node-test/blob/master/images/mocha_04.png)

```
Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.
```
这里说下，Mocha默认让每个测试用例最多执行2000毫秒，如果到了 2000 毫秒依旧没有得到结果，就报错。

### Promises
Mocha 本身支持 Promises。不过我查了下API，发现还是只给出了失败的example。
https://mochajs.org/#asynchronous-code
```
var request = require('request');
var expect = require('chai').expect;
 
it('should complete this test', function () {
// it('should complete this test', function (done) {// 返回一个 Promise 时, 此处一定不要传入 done 参数。否则超时报错。
	return new Promise(function (resolve) {
		expect('').to.be.empty;
	    resolve();
	    // 返回一个 Promise 时，一定要显示调用 resolve 函数。否则超时报错。
	}).then(function(){
	  	expect({}).to.be.empty;
	});
});
```
在上面的例子中，如果显示写出了 参数 done，然后 return Promises 时，会报错（即便没有显示调用它）。
另外，return Promises 时 ，要显示调用 resolve 方法，其作用也是通知 mocha 测试完成。
这里官网也给出了解释，

**In Mocha v3.0.0 and newer, returning a Promise and calling done() will result in an exception, as this is generally a mistake:**

因此安全起见，最好在一个测试集或者用例中只采用一种方式。

### setTimeout
那么问题来了，如果我们测试所需时间大于 2000ms 怎么办？ 另外，如果有性能要求，需要限时用例耗时 小于 2000ms 才算通过怎么办？

1. 延时
该例子中有两个测试用例，正例和反例。
```
describe('Test timeout', function() {
	it('It exceed 2000ms time , and will fail', function(done) {// 异步测试，要用 done
		var callback = function() {
	  		console.log("------");
	  		done();
	  	}
	    setTimeout(callback, 3000);// 延迟 3000ms 执行，让其超时。该测试用例会失败。
	    
	});
	it('It exceed 2000ms time , but will pass', function(done) {
		this.timeout(5000);
		var callback = function() {
	  		console.log("------");
	  		done();
	  	}
	    setTimeout(callback, 3000);// 延迟 3000ms 执行，但是设置timeout 为 5000ms，因此该用例会成功。
	    
	});
 
});
```
2. 限时
实际测试中，可能对性能有要求，比如需要在 1000ms 内完成，否则判定测试失败。下面是个例子。  

```
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
```
从下面的输出结果看，第一个测试用例失败了。而第三个用例，因为限时，时间值被标记为了红色。  

![](https://github.com/CoderDream/node-test/blob/master/images/mocha_05.png)


3. slow
测试中，我们更多的会关注失败的测试用例和耗时较长的用例。那么问题来了，怎么算耗时过长呢？不同的地方可能有不同的要求。Mocha提供了 slow 函数来解决这个事情。当一个用例耗时超过一定值后，Mocha 会在reportor中明显地标记出来。
```
describe('For compare with Test slow', function() {
	this.slow(100);
	// 标记耗时过长 
	it('It would warning', function(done) {
		var callback = function() {
	  		console.log("------");
	  		done();
	  	}
	    setTimeout(callback, 50);
	});
});
```
下面是输出结果：  

![](https://github.com/CoderDream/node-test/blob/master/images/mocha_06.png)

有意思的是，本人实际测试时，发现当耗时接近 slow() 函数设定的值的一半时，时间值开始被标记为黄色了。有兴趣的同学可以自己多试几个。

## TODO
在 TDD 中，我们会先写测试用例，然后再写功能代码。有时候会一下把一组测试用例写上，之后再把功能代码补上，或者具体测试逻辑还没想好，需要跟业务人员进一步确认。这是我们可以用 TODO 的用例代替。其实这样的用例没什么特殊的地方，只是没有给 it 函数传入第二个参数而已，即没有测试函数体。如下：
```
describe('Test pending suit', function() {
  describe('First pending case', function() {
    // pending test below
    it('Still not implement');
  });
});
```

在执行时，Mocha 会把这种用例作为 pending 的用例处理，就像 Java 中的 // TODO  

![](https://github.com/CoderDream/node-test/blob/master/images/mocha_07.png)

## skip
用过 Junit 的都知道，当我们运行一个测试集时，如果需要跳过某个用例时，只需要 加上 @ignore 标签即可。Mocha 也提供了类似的功能。  

在用例集函数或者用例函数后边加.skip() 即可。
```
describe('Test skip', function() {
  describe.skip('First skip suit', function() {
    // pending test below
    it('All would be skipped', function () {
    	// body...
    });
  });
  describe('Second skip suit', function() {
    // pending test below
    it.skip('I would be skipped', function () {
    	// body...
    });
    it('I would be runned', function () {
    	// body...
    });
  });
});
```
跳过的用例会被标记为pending的用例，在报告中也会作为pending用例体现出来。  

![](https://github.com/CoderDream/node-test/blob/master/images/mocha_08.png)


## only
前面已经说到，Mocha 默认会执行 test 文件夹下的所有测试用用例。而实际使用时，我们更多的是写一个模块的测试用例，然后完成该模块的功能代码。完全没有必要执行其他模块的测试用例。此时我们又不想改动已经存在的测试用例，怎么呢？ Mocha 提供了 only 函数保证 TDD 的顺利实现。  

使用时，在用例集或者用例的后边添加.only() 就可以了。
```
describe('Test only', function() {
  describe.only('First only suit', function() {
    // pending test below
    it('All would be runned', function () {
    	// body...
    });
  });
  describe('Second only suit', function() {
    // pending test below
    it('I am first case', function () {
    	// body...
    });
    it.only('I am second case', function () {
    	// body...
    });
  });
});
```
从下面的结果中，可以发现 only 的使用把 test 文件夹下其他的测试用例全给忽略了，只执行了 only 标记的一个测试集和一个测试用例。  

![](https://github.com/CoderDream/node-test/blob/master/images/mocha_09.png)


参考文档：
1. [使用mocha进行单元测试](https://www.jianshu.com/p/47575895bc54)
2. [mocha的时序问题](https://segmentfault.com/a/1190000002448251)