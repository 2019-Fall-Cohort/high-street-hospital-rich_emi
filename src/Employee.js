class Employee {
    constructor (position, name = 'Jessica', iDNumber = '666', salary) {
        if (this.constructor === Employee) {
            throw new Error ("Employee is an abstract class. Please provide a subclass instead.")
        }
        this.position = position;
        this.name = name;
        this.iDNumber = iDNumber;
        this.salary = salary;
    }
}
module.exports = Employee;