const input = require("readline-sync");

//const Doctor = require("./src/Doctor");
const Hospital = require("./src/Hospital");
const Janitor = require("./src/Janitor");
//const Nurse = require("./src/Nurse");
const Patient = require("./src/Patient");
const Receptionist = require("./src/Receptionist");
// const Surgeon = require("./src/Surgeon");
const VampireJanitor = require("./src/VampireJanitor");

const HighStreetHospital = new Hospital();

HighStreetHospital.startHospital();

let gameRunning = true;

// ~~~MAIN GAME LOOP~~~
while (gameRunning === true){
    console.log("")
    console.log("")
    console.log("-------------------------------------------------------")
    console.log("~~~~~~~~~~~~ High Street Hospital Main Menu ~~~~~~~~~~~")
    console.log("-------------------------------------------------------")
    console.log("")
    console.log("Select from the following options: (type only the number)")
    console.log("")
    console.log("1 )) List All Employees")
    console.log("2 )) List Unassigned Patients")
    console.log("3 )) ")
    console.log("")
    console.log("")
    console.log("")
    console.log("")

    let mainMenuInput = input.questionInt("Enter what you'd like to do: ")

    switch (mainMenuInput) {
        case 1: HighStreetHospital.getAllEmployees();
            tick();
            break;
        case 2: HighStreetHospital.getPatients();
            console.log("Who would you like to assign to a Nurse?");
            menuSelectUnassignedPatient();

            tick();
            break;
        default: console.log(`${mainMenuInput} is not an option.`)
            break;
        console.log("")
        console.log("")
        console.log("")
        console.log("")
    }



}

function menuSelectUnassignedPatient(){
    let selectionCount = 0;

    HighStreetHospital.Patients.forEach((Patient) => {
        console.log(`${selectionCount + 1} )) ${Patient.name}`)
        selectionCount++;
    })
        console.log(`${selectionCount + 1} )) **Cancel`)

    let subMenuInput = input.questionInt() - 1;
    let selectedUnassignedPatient = HighStreetHospital.Patients[subMenuInput];

    
}
function menuSelectFromNurses(){
    let selectionCount = 0;
  
    HighStreetHospital.Nurses.forEach((Nurse) => {
        console.log(`${selectionCount + 1} )) ${Nurse.name}`)
        selectionCount++;
    })
        console.log(`${selectionCount + 1} )) **Cancel`)
}

function tick(tickAmount){
    const tickTime = tickAmount;
    HighStreetHospital.tick(tickTime);
    HighStreetHospital.Patients.forEach((Patient) => {
        Patient.tick(tickTime);
    })
    HighStreetHospital.Nurses.forEach((Nurse) => {
        Nurse.Patients.forEach((Patient) => {
            Patient.tick(tickTime);
        })
    })
}