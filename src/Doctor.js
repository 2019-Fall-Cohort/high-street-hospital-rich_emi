const Employee = require("./Employee");
const Hospital = require('./Hospital');
const Patient = require("./Patient")

class Doctor extends Employee {
        constructor (position = `Doctor`, name, iDNumber, salary = `$90,000`, specialty = "Brain and Rocket") {
            super (position, name, iDNumber, salary)
            this.specialty = specialty;
        }
        
        careForPatient(selectedPatient) {
            selectedPatient.receiveCare(this.position);
        }

        drawBlood(selectedPatient){
            selectedPatient.bloodDrawn(this.position);
        }

}

module.exports = Doctor