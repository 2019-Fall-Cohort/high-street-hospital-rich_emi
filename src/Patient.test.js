const Patient = require("./Patient")

describe("Patient Class", () => {
    describe("Tick method", () => {
        test("Tick method changes stats of patients. tickAmount works.", () => {

        const testPatient = new Patient();
        
        testPatient.bloodLevel = 10;
        
        //tickMethod(testPatient, 4);
    
        testPatient.tick(3);
        
        console.log(testPatient);

        expect(testPatient.bloodLevel).toEqual(13);
    
        })
    
    })

})

function tickMethod(selectedPatient, inputTickAmount) {
    selectedPatient.tick(inputTickAmount);
}