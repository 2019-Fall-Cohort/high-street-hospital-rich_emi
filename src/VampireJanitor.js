const Janitor = require("./Janitor")

class VampireJanitor extends Janitor {

    constructor(position = `Janitor`, name, id, salary = 40000, isSweeping = false){
        super(position, name, id, salary, isSweeping)

    }

    drawBlood(){
        
    }
    startSweeping(){
        super.startSweeping();
    }
    stopSweeping(){
        super.stopSweeping();
    }

}

module.exports = VampireJanitor;