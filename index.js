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
while (gameRunning = true){

console.log("~~~~High Street Hospital Main Menu.~~~~")
console.log("------------------------------------------------------")
console.log("Select from the following options: (type only the number)")
console.log("1 )) List All Employees")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")

let mainMenuInput = input.question("Enter what you'd like to do: ")

switch (mainMenuInput) {
    case "1": HighStreetHospital.getAllEmployees();
    
}


}