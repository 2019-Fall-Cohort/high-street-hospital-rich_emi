const Employee = require("./Employee");
const Hospital = require('./Hospital');
const Patient = require("./Patient")

class Nurse extends Employee {
        constructor (position = `Nurse`, name, iDNumber, salary = `$50,000`) {
            super (position, name, iDNumber, salary)
            this.Patients = [];
        }
        
        careForPatient(selectedPatient) {
            selectedPatient.receiveCare(this.position);
        }

        drawBlood(selectedPatient){
            selectedPatient.bloodDrawn(this.position);
        }

        retrievePatients() {
            this.Patients.forEach((Patient) => {
                console.log(Patient.name)
            });
        }
}

module.exports = Nurse