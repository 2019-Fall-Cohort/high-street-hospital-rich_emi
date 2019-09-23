const Doctor = require("./Doctor");
const Janitor = require("./Janitor");
const Nurse = require("./Nurse");
const Patient = require("./Patient");
const Receptionist = require("./Receptionist");
const Surgeon = require("./Surgeon");
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
        const Doctor1 = new Doctor();
            Doctor1.name = "Joshua";
            Doctor1.iDNumber = "D001";
        const Doctor2 = new Doctor();
            Doctor2.name = "Janelle";
            Doctor2.iDNumber = "D002";
        const Doctor3 = new Doctor();
            Doctor3.name = "Tapley";
            Doctor3.iDNumber = "D003";
        this.Doctors.push(Doctor1, Doctor2, Doctor3);    

        // Preset Janitor(s)
        const Janitor1 = new Janitor();
            Janitor1.name = "Hibbins";
            Janitor1.iDNumber = "J001";
        const Janitor2 = new VampireJanitor();
            Janitor2.name = "Pyro";
            Janitor2.iDNumber = "J002";
        this.Janitors.push(Janitor1, Janitor2);

        // Preset Nurse(s)
        const Nurse1 = new Nurse();
            Nurse1.name = "Emmanuel";
            Nurse1.iDNumber = "N001";
        const Nurse2 = new Nurse();
            Nurse2.name = "Brad";
            Nurse2.iDNumber = "N002";
        this.Nurses.push(Nurse1, Nurse2);

        // Preset Receptionist(s)
        const Receptionist1 = new Receptionist();
            Receptionist1.name = "Candii";
            Receptionist1.iDNumber = "R001";
        this.Receptionists.push(Receptionist1);

        //Preset Surgeon(s)
        const Surgeon1 = new Surgeon();
            Surgeon1.name = "Marceau";
            Surgeon1.iDNumber = "S001";
        const Surgeon2 = new Surgeon();
            Surgeon2.name = "Henson";
            Surgeon2.iDNumber = "S002";
        this.Surgeons.push(Surgeon1, Surgeon2)

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
            if(Janitor.isSweeping === true){
                janitorsSweeping += 1;
            }       
        }) 
        return janitorsSweeping;   
    }
    getAllEmployees() {
        console.log("-------------------------------------------------------")
        console.log("-------------------------------------------------------")

        console.log("")
        console.log("Here is a list of all employees at High Street Hospital:")
        console.log("")
        console.log("")
        console.log("-----------------------------------------------------------------")
        this.Doctors.forEach((Doctor) => {
            console.log(`iDNumber: ${Doctor.iDNumber} || ${Doctor.position} ${Doctor.name} || salary: ${Doctor.salary}`)
        })
        this.Janitors.forEach((Janitor) => {
            console.log(`iDNumber: ${Janitor.iDNumber} || ${Janitor.position} ${Janitor.name} || salary: ${Janitor.salary} || sweeping: ${Janitor.isSweeping}`)
        })
        this.Receptionists.forEach((Receptionist) => {
            console.log(`iDNumber: ${Receptionist.iDNumber} || ${Receptionist.position} ${Receptionist.name} || salary: ${Receptionist.salary} || on Phone: ${Receptionist.isOnPhone}`)
        })
        this.Nurses.forEach((Nurse) => {
            console.log(`iDNumber: ${Nurse.iDNumber} || ${Nurse.position} ${Nurse.name} || salary: ${Nurse.salary}`)
        })
        this.Surgeons.forEach((Surgeon) => {
            console.log(`iDNumber: ${Surgeon.iDNumber} || ${Surgeon.position} ${Surgeon.name} || salary: ${Surgeon.salary} || sweeping: ${Surgeon.isOperating}`)
        })
        console.log("-----------------------------------------------------------------")
    }
  
    getJanitors() {
        this.Janitors.forEach((Janitor) => {
            console.log(`${Janitor.name} currently sweeping: ${Janitor.isSweeping}`)
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
            this.cleanliness -= 3;
            this.cleanliness += (janitorsSweeping * 4);
            if(this.cleanliness > 100){
                this.cleanliness = 100;
            }
        }

    }
}

module.exports = Hospital;