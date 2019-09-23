const Employee = require("./Employee");

class Doctor extends Employee {
        constructor (position = `Doctor`, name, iDNumber, salary = `$90,000`, specialty = "Brain and Rocket") {
            super (position, name, iDNumber, salary)
            this.specialty = specialty;
        }
}

module.exports = Doctor