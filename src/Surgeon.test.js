const Surgeon = require('./Surgeon');
const testSurgeon = new Surgeon();

describe('Surgeon', () => {
    describe('startOperating method', () => {
        test('startOperating method should change isOperating property to true', () => {
            
            testSurgeon.startOperating();

            expect(testSurgeon.isOperating).toBeTruthy;
        });
    });
    describe('stopOperating method', () => {
        test('stopOperating method should change isOperating property to false', () => {
            
            let isOperating = true;
            testSurgeon.stopOperating();
            
            expect(testSurgeon.isOperating).toBeFalsy;
        });
    });
});