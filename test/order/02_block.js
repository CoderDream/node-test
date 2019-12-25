// 非describe部分
// 规则2：不被describe包裹的部分执行顺序的优先级最高

{
    console.log('02_block1');
}

describe('02_1', function () {
    console.log('02_describe 1');
});

{
    console.log('02_block2');
}

describe('02_2', function () {
    console.log('02_describe 2');
});

//执行顺序block1，describe1，block2，describe2
// (base) PS D:\Java\GitHub\node-test> npm run mocha_order2

// > node-test@1.0.0 mocha_order2 D:\Java\GitHub\node-test
// > mocha test/order/02_block.js

// block1
// describe 1
// block2
// describe 2


//   0 passing (1ms)

// (base) PS D:\Java\GitHub\node-test>