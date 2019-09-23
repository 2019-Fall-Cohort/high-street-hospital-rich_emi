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
    console.log("2 )) Assign Patient to a Nurse")
    console.log("3 )) Set Janitor to start or stop sweeping")
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
            console.log("-------------------------------------------------------")
            console.log("Who would you like to assign to a Nurse?");
            console.log("-------------------------------------------------------")
            menuSelectUnassignedPatient();
            tick();
            break;
        case 3: HighStreetHospital.getJanitors();
            console.log("-------------------------------------------------------")
            console.log("Who would you like to start/stop sweeping?")
            console.log("-------------------------------------------------------")
            let selectJanitor = menuSelectFromJanitors();
            console.log(selectJanitor);
                if (HighStreetHospital.Janitors[selectJanitor].isSweeping === true){
                    HighStreetHospital.Janitors[selectJanitor].stopSweeping();
                }   else {
                    HighStreetHospital.Janitors[selectJanitor].startSweeping();
                }
            console.log(HighStreetHospital.Janitors);    

            tick();
            break;

        default: console.log(`${mainMenuInput} is not an option.`)
            break;
    }    
        console.log("")
        console.log("")
        console.log("")
        console.log("")
    



}

function menuSelectUnassignedPatient(){
    let selectionCount = 0;

    HighStreetHospital.Patients.forEach((Patient) => {
        console.log(`${selectionCount + 1} )) ${Patient.name}`)
        selectionCount++;
    })

    let subMenuInput = input.questionInt() - 1;
    let selectedUnassignedPatient = HighStreetHospital.Patients[subMenuInput];

    let selectedNurse = menuSelectFromNurses();

    if(selectedNurse > 0){
        selectedNurse.push(selectedUnassignedPatient);
    } else {
        console.log("Sorry, that's not an option.")
    }
}
function menuSelectFromJanitors(){
    let selectionCount = 0;
    console.log("Janitor Options:")
    HighStreetHospital.Janitors.forEach((Janitor) => {
        console.log(`${selectionCount + 1} )) ${Janitor.name}`)
        selectionCount++;
    })

    let inputSelectedJanitor = input.questionInt("");
    if (inputSelectedJanitor > selectionCount) {
        console.log("Sorry, that's not an option.")
    }   else {
            let selectedJanitor = inputSelectedJanitor - 1;

            return selectedJanitor;
        }
}    
function menuSelectFromNurses(){
    let selectionCount = 0;
    console.log("Nurse Options:")
    HighStreetHospital.Nurses.forEach((Nurse) => {
        console.log(`${selectionCount + 1} )) ${Nurse.name}`)
        selectionCount++;
    })

    let inputSelectedNurse = input.questionInt("");
    if(inputSelectedNurse > selectionCount){
                
        }else {
            let selectedNurse = HighStreetHospital.Nurses[inputSelectedNurse - 1];

            return selectedNurse;
        }
            return 0;
        
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