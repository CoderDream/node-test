// 非describe部分
// 规则2：不被describe包裹的部分执行顺序的优先级最高

{
    console.log('block1');
}

describe('1', function () {
    console.log('describe 1');
    it('it1', function () {
        console.log('it1');
    });
});

{
    console.log('block2');
}

describe('2', function () {
    console.log('describe 2');
    it('it2', function () {
        console.log('it2');
    });
});

//执行顺序block1，describe1，block2，describe2，it1，it2
// (base) PS D:\Java\GitHub\node-test> npm run mocha_order4

// > node-test@1.0.0 mocha_order4 D:\Java\GitHub\node-test
// > mocha test/order/04_block_describe_it.js

// block1
// describe 1
// block2
// describe 2


//   1
// it1
//     √ it1

//   2
// it2
//     √ it2


//   2 passing (7ms)

// (base) PS D:\Java\GitHub\node-test>