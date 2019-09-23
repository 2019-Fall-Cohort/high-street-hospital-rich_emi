const Nurse = require('./Nurse');
const Patient = require('./Patient');

describe('Nurse class', () => {
    describe("drawBlood method", () => {
        test("drawBlood method depletes blood of selected patient. Also depletes health.", () => {
            
            const testNurse = new Nurse();
            const testPatient = new Patient();
            
            testNurse.drawBlood(testPatient);

            console.log(testPatient);
            
            expect(testPatient.bloodLevel).not.toEqual(testPatient.maxBloodLevel);
            expect(testPatient.healthLevel).not.toEqual(testPatient.maxHealthLevel);

            }) 
        test("drawBlood method won't draw blood if levels are too low", () => {

            const testNurse = new Nurse();
            const testPatient = new Patient();
            
            testNurse.drawBlood(testPatient);

            let bloodLevelBeforeFailure = testPatient.bloodLevel;

            testNurse.drawBlood(testPatient);

            console.log(testPatient);
            
            expect(testPatient.bloodLevel).toEqual(bloodLevelBeforeFailure);

        })      
    })
    describe('careForPatient method', () => {
        test('should increase healthLevel of selected patient to maxHealthLevel', () => {
            
            const testNurse = new Nurse();
            const testPatient = new Patient();

            testNurse.careForPatient(testPatient);

            console.log(testPatient);

            expect(testPatient.healthLevel).toEqual(testPatient.maxHealthLevel);
            
        });
    });
});