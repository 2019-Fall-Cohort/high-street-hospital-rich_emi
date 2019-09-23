const Doctor = require("./Doctor");

class Surgeon extends Doctor {
        constructor (position = `Surgeon`, name, iDNumber, salary = `$120,000`, specialty) {
            super (position, name, iDNumber, salary, specialty)
        }
}

module.exports = Surgeon