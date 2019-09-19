const Employee = require("./Employee");

class Receptionist extends Employee {

        constructor(position = `Receptionist`, name, id, salary = 50000){
            super(position, name, id, salary)

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