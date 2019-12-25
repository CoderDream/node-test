// 嵌套的describe
describe('parent', function () {
    it('1', function () {
        console.log('log it1');
    });
    describe('child1', function () {
        console.log('log child1');
    });
    it('2', function () {
        console.log('log it2');
    });
    describe('child2', function () {
        console.log('log child2');
    });
});
// 执行顺序为it1,it2,child1,child2
// 规则4：外层describe的所有it执行优先级高于嵌套的describe
// (base) PS D:\Java\GitHub\node-test> npm run mocha_order5

// > node-test@1.0.0 mocha_order5 D:\Java\GitHub\node-test
// > mocha test/order/05_nest.js

// log child1
// log child2


//   parent
// log it1
//     √ 1
// log it2
//     √ 2


//   2 passing (7ms)