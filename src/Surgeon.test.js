const Surgeon = require('./Surgeon');

describe('Surgeon', () => {
    describe('startOperating method', () => {
        test('startOperating method should change isOperating property to true', () => {
            
            const testSurgeon = new Surgeon();

            testSurgeon.startOperating();

            expect(testSurgeon.isOperating).toBeTruthy;
        });
    });
});