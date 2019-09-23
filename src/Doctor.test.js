const Doctor = require('./Doctor');
const Patient = require('./Patient');
const testDoctor = new Doctor();
const testPatient = new Patient();

describe('Doctor class', () => {
    describe("drawBlood method", () => {
        test("drawBlood method depletes blood of selected patient. Also depletes health.", () => {
            
            testDoctor.drawBlood(testPatient);

            console.log(testPatient);
            
            expect(testPatient.bloodLevel).not.toEqual(testPatient.maxBloodLevel);
            expect(testPatient.healthLevel).not.toEqual(testPatient.maxHealthLevel);

            }) 
        test("drawBlood method won't draw blood if levels are too low", () => {
          
            testDoctor.drawBlood(testPatient);

            let bloodLevelBeforeFailure = testPatient.bloodLevel;

            testDoctor.drawBlood(testPatient);

            console.log(testPatient);
            
            expect(testPatient.bloodLevel).toEqual(bloodLevelBeforeFailure);

        })      
    })
});