const Doctor = require("./Doctor");

class Surgeon extends Doctor {
        constructor (position = `Surgeon`, name, iDNumber, salary = `$120,000`, specialty) {
            super (position, name, iDNumber, salary, specialty)
            
            this.isOperating = false;
        }

        startOperating() {
            this.isOperating = true;
            console.log(`${this.name} has started operating.`)
        }

        stopOperating() {
            this.isOperating = false;
            console.log(`${this.name} is no longer operating.`)
        }
}

module.exports = Surgeon