// 嵌套的describe
describe('05_parent', function () {
    it('05_1', function () {
        console.log('05_log it1');
        start();
    });
    describe('05_child1', function () {
        console.log('05_log child1');
    });
    it('05_2', function () {
        console.log('05_log it2');
    });
    describe('05_child2', function () {
        console.log('05_log child2');
    });
});

let i = 0;
function start() {
    setTimeout(function () {
        i++;
        if (i < 10) {
            start();
        }
    }, 5000)
    console.log("执行次数：" + i)
};

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