describe('Test skip', function () {
    describe.skip('First skip suit', function () {
        // pending test below
        it('All would be skipped', function () {
            // body...
        });
    });
    describe('Second skip suit', function () {
        // pending test below
        it.skip('I would be skipped', function () {
            // body...
        });
        it('I would be runned', function () {
            // body...
        });
    });
});