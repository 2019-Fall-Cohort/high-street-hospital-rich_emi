const Employee = require("./Employee");

class Receptionist extends Employee {

        constructor(position = `Receptionist`, name, iDNumber, salary = `$45,000`){
            super(position, name, iDNumber, salary)

            this.isOnPhone = false;
        }

        answerPhoneCall() {
                
                this.isOnPhone = true;
        } 
        
        endPhoneCall() {

                this.isOnPhone = false;
        }
        

}

module.exports = Receptionist;