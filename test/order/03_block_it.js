// 非describe部分
// 规则2：不被describe包裹的部分执行顺序的优先级最高

{
    console.log('block1');
}

describe('1', function () {
    it('it1', function () {
        console.log('describe 1');
    });
});

{
    console.log('block2');
}

describe('2', function () {
    it('it2', function () {
        console.log('describe 2');
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
