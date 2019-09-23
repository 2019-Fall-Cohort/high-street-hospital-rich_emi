const Employee = require("./Employee");

class Janitor extends Employee {

        constructor(position = `Janitor`, name, iDNumber, salary = `$40,000`){
            super(position, name, iDNumber, salary)

            this.isSweeping = false;
        }

        startSweeping() {
                
                this.isSweeping = true;
                console.log(`${this.name} has started sweeping.`)
        } 
        
        stopSweeping() {

                this.isSweeping = false;
                console.log(`${this.name} has stopped sweeping.`)
               
        }
        

}

module.exports = Janitor;