const VampireJanitor = require("./VampireJanitor");
const Patient = require("./Patient");

describe("Janitor", () => {
    describe("startSweeping method" , () => {
        test("startSweeping method has object change isSweeping property to true", () => {

            const testVJanitor = new VampireJanitor();

            
            testVJanitor.startSweeping();


            expect(testVJanitor.isSweeping).toEqual(true);

        })
    describe("stopSweeping method" , () => {
        test("stopSweeping method has object change isSweeping property to false", () => {
         
            const testVJanitor = new VampireJanitor();
            const testPatient = new Patient();

            testVJanitor.startSweeping();
            testVJanitor.stopSweeping();
            console.log(testVJanitor);


            expect(testVJanitor.isSweeping).toEqual(false);

        })
        
    })    

    })
    describe("drawBlood method", () => {
        test("drawBlood method depletes blood of selected patient.", () => {
            
            const testVJanitor = new VampireJanitor();



        }) 

        
    })
})