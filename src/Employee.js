class Employee {
    constructor (position, name, id, salary) {
        if (this.constructor == Employee) {
            throw new Error ("Employee is an abstract class.")
        }
        this.position = position;
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
}
module.exports = Employee;