
const Janitor = require("./Janitor");
const MAX_CLEANLINESS = 100;

class Hospital {

    constructor() {
    this.Janitors = [];
    this.allPatients = [];
    this.cleanliness = MAX_CLEANLINESS;
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
    tick(tickAmount=1){
        let janitorsSweeping = this.countJanitorsSweeping();
        for(let counter = 0; counter < tickAmount; counter++){
            this.cleanliness -= 2;
            this.cleanliness += (janitorsSweeping * 4);
        }

    }
}

module.exports = Hospital;