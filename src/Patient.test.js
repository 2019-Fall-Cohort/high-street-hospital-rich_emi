const Patient = require("./Patient")

describe("Patient Class", () => {
    describe("Tick method", () => {
        test("Tick method changes stats of patients. (tickAmount) controls tick loop successfully.", () => {

            const testPatient = new Patient();
            
            testPatient.bloodLevel = 10;
            
            tickMethod(testPatient, 3);
        
            console.log(testPatient);

            expect(testPatient.bloodLevel).toEqual(13);
    
        })

        test("healthLevel starts dropping per tick when below half maximum health level", () => {
        
            const testPatient = new Patient();
            
            testPatient.healthLevel = 4;
            
            tickMethod(testPatient, 5);
        
            console.log(testPatient);

            expect(testPatient.bloodLevel).not.toEqual(4);
        })            

        test("bloodLevel can't be above max value (20) & healthLevel can't go below 0", () => {
            const testPatient = new Patient();
            
            testPatient.bloodLevel = 18;
            testPatient.healthLevel = 1;

            
            tickMethod(testPatient, 5);
        
            console.log(testPatient);

            expect(testPatient.bloodLevel).toEqual(testPatient.maxBloodLevel);
            expect(testPatient.healthLevel).toEqual(0);
            })
    
    })
    describe("receiveCare method", () => {
        test("receiveCare increases health level. Doesn't go above max value.", () => {
            const testPatient = new Patient();

            testPatient.healthLevel = 7

            testPatient.receiveCare();

            console.log(testPatient);

            expect(testPatient.healthLevel).toEqual(testPatient.maxHealthLevel);
        
        })
    })
})

function tickMethod(selectedPatient, inputTickAmount) {
    selectedPatient.tick(inputTickAmount);
}