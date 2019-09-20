const BLOOD_LEVEL = 20;
const HEALTH_LEVEL = 10;

class Patient {

    constructor(name) {

        this.name = name;
        this.bloodLevel = BLOOD_LEVEL;
        this.healthLevel = HEALTH_LEVEL;

    }


    tick() {

        this.bloodLevel = this.bloodLevel + 1;
            if (this.bloodLevel > BLOOD_LEVEL) {
                this.bloodLevel = BLOOD_LEVEL;
            }
            
        this.healthLevel = this.healthLevel + 1; 
            if (this.healthLevel > HEALTH_LEVEL) {
                this.healthLevel = HEALTH_LEVEL;
            }
    }
}

module.exports = Patient;