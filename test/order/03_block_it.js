// 非describe部分
// 规则2：不被describe包裹的部分执行顺序的优先级最高

{
    console.log('03_block1');
}

describe('03_1', function () {
    it('03_it1', function () {
        console.log('03_describe 1');
    });
});

{
    console.log('03_block2');
}

describe('03_2', function () {
    it('03_it2', function () {
        console.log('03_describe 2');
    });
});

//执行顺序block1，block2，it1，it2
// (base) PS D:\Java\GitHub\node-test> npm run mocha_order3

// > node-test@1.0.0 mocha_order3 D:\Java\GitHub\node-test
// > mocha test/order/03_block_it.js

// block1
// block2


//   1
// describe 1
//     √ it1

//   2
// describe 2
//     √ it2


//   2 passing (7ms)
