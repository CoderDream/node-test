describe('01_work',function(){

    it('01_it2',function (){
        console.log('01_log it2');
    });
    
    it('01_it1',function () {
        console.log('01_log it1');
    });
});

//按1，2，3...顺序执行
//规则1：describe里地it的非异步部分按它们定义的顺序执行，它们所触发的回调的注册顺序也遵从it的注册顺序
// (base) PS D:\Java\GitHub\node-test> npm run mocha_order1

// > node-test@1.0.0 mocha_order1 D:\Java\GitHub\node-test
// > mocha test/order/01_simple.js



//   work
// log it2
//     √ it2
// log it1
//     √ it1


//   2 passing (8ms)

// (base) PS D:\Java\GitHub\node-test>