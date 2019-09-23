const Employee = require('./Employee');

describe('Employee', () => {
    test('Employee should be abstract', () => {
        expect(() => {
            new Employee();
        }).toThrow('Employee is an abstract class. Please provide a subclass instead.');
    });
});