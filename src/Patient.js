const BLOOD_LEVEL = 20;
const HEALTH_LEVEL = 10;

class Patient {

        constructor(name = 'Digby') {

        this.name = name;

        this.bloodLevel = BLOOD_LEVEL;
        this.healthLevel = HEALTH_LEVEL;

        this.maxBloodLevel = BLOOD_LEVEL;
        this.maxHealthLevel = HEALTH_LEVEL;

    }

    bloodDrawn(bloodDrawer) {
        if(this.bloodLevel > this.maxBloodLevel/2){ 
            let startingBloodLevel = this.bloodLevel;
            this.bloodLevel -= 10;
            console.log(`Patient ${this.name}'s blood level went from ${startingBloodLevel} to ${this.bloodLevel}.`) 
            if(bloodDrawer = "Vampire Janitor"){
                this.healthLevel -= 3;
                if (this.healthLevel < 0)  {
                    this.healthLevel = 0;
                }
                console.log(`Patient ${this.name} is feeling a little more sick.`);
            }    
            else {
                console.log(`Patient ${this.name} requires more time from previous sessions.`) }
            }      
        }
        

    receiveCare() {
        if(this.healthLevel = this.maxHealthLevel){
            console.log(`Patient ${this.name}'s health value is already at 10`)
        }
            this.healthLevel += 5;
                if(this.healthLevel > this.maxHealthLevel){
                    this.healthLevel = this.maxHealthLevel;
                }



    }    

    tick(tickAmount=1) {
        for(let counter = 0; counter < tickAmount; counter++){
            this.bloodLevel += 1;
            if (this.bloodLevel > this.maxBloodLevel) {
                    this.bloodLevel = this.maxBloodLevel;
                }
                
            if (this.healthLevel < this.maxHealthLevel / 2)  {  
                this.healthLevel -= .25; 
                if (this.healthLevel < 0)  {
                    this.healthLevel = 0;
                    }
                }    
            //counter++;
        }    
    }   
}

module.exports = Patient;