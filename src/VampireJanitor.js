const Janitor = require("./Janitor")

class VampireJanitor extends Janitor {

    constructor(position = `Vampire Janitor`, name, id, salary = `$40,000`, isSweeping = false,){
        super(position, name, id, salary, isSweeping)
            this.canDrawBlood = true;

    }

    drawBlood(selectedPatient){
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