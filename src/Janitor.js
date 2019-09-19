const Employee = require("./Employee");

class Janitor extends Employee {

        constructor(position = `Janitor`, name, id, salary = 40000){
            super(position, name, id, salary)

            this.isSweeping = false;
        }

        startSweeping() {
                
                this.isSweeping = true;
        } 
        
        stopSweeping() {

                this.isSweeping = false;
        }
        

}

module.exports = Janitor;