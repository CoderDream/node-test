// 非describe部分
// 规则2：不被describe包裹的部分执行顺序的优先级最高

{
    console.log('04_block1');
}

describe('04_1', function () {
    console.log('04_describe 1');
    it('04_it1', function () {
        console.log('04_it1');
    });
});

{
    console.log('04_block2');
}

describe('04_2', function () {
    console.log('04_describe 2');
    it('04_it2', function () {
        console.log('04_it2');
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