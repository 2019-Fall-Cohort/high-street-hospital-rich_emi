const Surgeon = require('./Surgeon');
const Patient = require('./Patient');
const testSurgeon = new Surgeon();

describe('Surgeon', () => {
    describe("drawBlood method", () => {
        test("drawBlood method depletes blood of selected patient. Also depletes health.", () => {
            
            const testPatient = new Patient();
            
            testSurgeon.drawBlood(testPatient);

            console.log(testPatient);
            
            expect(testPatient.bloodLevel).not.toEqual(testPatient.maxBloodLevel);
            expect(testPatient.healthLevel).not.toEqual(testPatient.maxHealthLevel);

            }) 
        test("drawBlood method won't draw blood if levels are too low", () => {

            const testPatient = new Patient();
            
            testSurgeon.drawBlood(testPatient);

            let bloodLevelBeforeFailure = testPatient.bloodLevel;

            testSurgeon.drawBlood(testPatient);

            console.log(testPatient);
            
            expect(testPatient.bloodLevel).toEqual(bloodLevelBeforeFailure);

        });      
    });
    describe('startOperating method', () => {
        test('startOperating method should change isOperating property to true', () => {
            
            testSurgeon.startOperating();

            expect(testSurgeon.isOperating).toBeTruthy;
        });
    });
    describe('stopOperating method', () => {
        test('stopOperating method should change isOperating property to false', () => {
            
            let isOperating = true;
            testSurgeon.stopOperating();
            
            expect(testSurgeon.isOperating).toBeFalsy;
        });
    });
});