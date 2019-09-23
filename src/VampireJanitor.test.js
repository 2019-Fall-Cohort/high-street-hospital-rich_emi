const VampireJanitor = require("./VampireJanitor");
const Patient = require("./Patient");

describe("Vampire Janitor Class", () => {
    describe("startSweeping method" , () => {
        test("startSweeping method has object change isSweeping property to true", () => {

            const testVJanitor = new VampireJanitor();

            
            testVJanitor.startSweeping();


            expect(testVJanitor.isSweeping).toEqual(true);

        })
    })        
    describe("stopSweeping method" , () => {
        test("stopSweeping method has object change isSweeping property to false", () => {
         
            const testVJanitor = new VampireJanitor();
            
            testVJanitor.startSweeping();
            testVJanitor.stopSweeping();
            console.log(testVJanitor);
            
            
            expect(testVJanitor.isSweeping).toEqual(false);
            
        })        
    })    
    describe("drawBlood method", () => {
        test("drawBlood method depletes blood of selected patient. Also depletes health.", () => {
            
            const testVJanitor = new VampireJanitor();
            const testPatient = new Patient();
            
            testVJanitor.drawBlood(testPatient);

            console.log(testPatient);
            
            expect(testPatient.bloodLevel).not.toEqual(testPatient.maxBloodLevel);
            expect(testPatient.healthLevel).not.toEqual(testPatient.maxHealthLevel);

            }) 
        test("drawBlood method won't draw blood if levels are too low", () => {

            const testVJanitor = new VampireJanitor();
            const testPatient = new Patient();
            
            testVJanitor.drawBlood(testPatient);

            let bloodLevelBeforeFailure = testPatient.bloodLevel;

            testVJanitor.drawBlood(testPatient);

            console.log(testPatient);
            
            expect(testPatient.bloodLevel).toEqual(bloodLevelBeforeFailure);

        })      
    })
})    
