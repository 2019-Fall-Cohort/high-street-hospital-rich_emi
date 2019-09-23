//const Doctor = require("./src/Doctor");

const Janitor = require("./Janitor");
//const Nurse = require("./Nurse");
const Patient = require("./Patient");
const Receptionist = require("./Receptionist");
// const Surgeon = require("./Surgeon");
const VampireJanitor = require("./VampireJanitor");

const MAX_CLEANLINESS = 100;

class Hospital {

    constructor() {
        this.Doctors = [];
        this.Janitors = [];
        this.Nurses = [];
        this.Receptionists = [];
        this.Surgeons = [];

        this.Patients = [];

        this.cleanliness = MAX_CLEANLINESS;
    }

    startHospital() {

        // Preset Doctor(s)
        // const Doctor1 = new Doctor();
        //     Doctor1.name = "Joshua";
        //     Doctor1.id = "D001";
        // this.Doctors.push(Doctor1);    

        // Preset Janitor(s)
        const Janitor1 = new Janitor();
            Janitor1.name = "Hibbins";
            Janitor1.id = "J001";
        const Janitor2 = new VampireJanitor();
            Janitor2.name = "Pyro";
            Janitor2.id = "J002";
        this.Janitors.push(Janitor1,Janitor2);

        // Preset Receptionist(s)
        const Receptionist1 = new Receptionist();
            Receptionist1.name = "Candii";
            Receptionist1.id = "R001";
        this.Receptionists.push(Receptionist1);

        // Preset Patients
        const Patient1 = new Patient("Blinky");
        const Patient2 = new Patient("Pinky");
        const Patient3 = new Patient("Inky");
        const Patient4 = new Patient("Sue");
        const Patient5 = new Patient("Clyde");

        this.Patients.push(Patient1,Patient2,Patient3,Patient4,Patient5);



    }


    countJanitorsSweeping() {
        let janitorsSweeping = 0;
        this.Janitors.forEach((Janitor) => {
            if(Janitor.isSweeping = true){
                janitorsSweeping += 1;
            }       
        }) 
        return janitorsSweeping;   
    }
    getAllEmployees() {
        console.log("Here is a list of all employees at High Street Hospital:")
        this.Doctors.forEach((Doctor) => {
            console.log(`ID: ${Doctor.id} || ${Doctor.position} ${Doctor.name} || salary: ${Doctor.salary}`)
        })
        this.Janitors.forEach((Janitor) => {
            console.log(`ID: ${Janitor.id} || ${Janitor.position} ${Janitor.name} || salary: ${Janitor.salary} || sweeping: ${Janitor.isSweeping}`)
        })
        this.Receptionists.forEach((Receptionist) => {
            console.log(`ID: ${Receptionist.id} || ${Receptionist.position} ${Receptionist.name} || salary: ${Receptionist.salary} || on Phone: ${Receptionist.isOnPhone}`)
        })
        this.Nurses.forEach((Nurse) => {
            console.log(`ID: ${Nurse.id} || ${Nurse.position} ${Nurse.name} || salary: ${Nurse.salary} || patients: ${Nurse.getPatients()}`)
        })
        this.Surgeons.forEach((Surgeon) => {
            console.log(`ID: ${Surgeon.id} || ${Surgeon.position} ${Surgeon.name} || salary: ${Surgeon.salary} || sweeping: ${Surgeon.isInSurgery}`)
        })


    }
    getPatients() {
        this.Patients.forEach((Patient) => {
            console.log(`${Patient.name} || Health Level: ${Patient.healthLevel} || Blood Level: ${Patient.bloodLevel}`)
        })
    }
    tick(tickAmount=1){
        let janitorsSweeping = this.countJanitorsSweeping();
        for(let counter = 0; counter < tickAmount; counter++){
            this.cleanliness -= 2;
            this.cleanliness += (janitorsSweeping * 4);
        }

    }
}

module.exports = Hospital;