describe('Test only', function () {
    describe.only('First only suit', function () {
        // pending test below
        it('All would be runned', function () {
            // body...
        });
    });
    describe('Second only suit', function () {
        // pending test below
        it('I am first case', function () {
            // body...
        });
        it.only('I am second case', function () {
            // body...
        });
    });
});