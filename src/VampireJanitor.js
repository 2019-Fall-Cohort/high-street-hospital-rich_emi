const Janitor = require("./Janitor")

class VampireJanitor extends Janitor {

    constructor(position = `Vampire Janitor`, name, iDNumber, salary, isSweeping = false,){
        super(position, name, iDNumber, salary, isSweeping)
            this.canDrawBlood = true;

    }

    drawBlood(selectedPatient, ){
        selectedPatient.bloodDrawn(this.position);
    }
    startSweeping(){
        super.startSweeping();
    }
    stopSweeping(){
        super.stopSweeping();
    }

}

module.exports = VampireJanitor;