const Employee = require("./Employee");

class Nurse extends Employee {
        constructor (position = `Nurse`, name, iDNumber, salary = `$50,000`) {
            super (position, name, iDNumber, salary)
        }
        
        careForPatient(selectedPatient) {
            selectedPatient.receiveCare(this.position);
        }

        drawBlood(selectedPatient){
            selectedPatient.bloodDrawn(this.position);
        }
}

module.exports = Nurse