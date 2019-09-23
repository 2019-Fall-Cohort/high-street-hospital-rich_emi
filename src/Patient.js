const BLOOD_LEVEL = 20;
const HEALTH_LEVEL = 10;

class Patient {

        constructor(name) {

        this.name = name;

        this.bloodLevel = BLOOD_LEVEL;
        this.healthLevel = HEALTH_LEVEL;

        this.maxBloodLevel = BLOOD_LEVEL;
        this.maxHealthLevel = HEALTH_LEVEL;

    }

    bloodDrawn() {
        if(this.bloodLevel > this.maxBloodLevel/2){ 
            let startingBlood = this.bloodLevel;
            this.bloodLevel -= 10;
            console.log(`Patient ${this.name}'s blood level went from ${startingBlood} to ${this.bloodLevel}.`) }
             else {
                console.log(`Patient ${this.name} requires more time from previous sessions.`) }
                  
        }

    tick(tickAmount=1) {
        for(let counter = 0; counter < tickAmount; counter++){
            this.bloodLevel += 1;
            if (this.bloodLevel > this.maxBloodLevel) {
                    this.bloodLevel = this.maxBloodLevel;
                }
                
            if (this.healthLevel < this.maxHealthLevel / 2)  {  
                this.healthLevel -= .25; 
                if (this.healthLevel > this.maxHealthLevel)  {
                    this.healthLevel = this.maxHealthLevel;
                    }
                }    
            //counter++;
        }    
    }   
}

module.exports = Patient;