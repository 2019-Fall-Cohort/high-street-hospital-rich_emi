const Hospital = require("./Hospital")
const Janitor = require("./Janitor")
const VampireJanitor = require("./VampireJanitor")

describe("Hospital Class", () => {
    describe("countJanitorsSweeping method", () =>{
        test("Succesfully counting Janitors sweeping", () =>{

            const testHospital = new Hospital();
            const testJanitor = new Janitor();
            const testVampireJanitor = new VampireJanitor();

            testJanitor.startSweeping();
            testVampireJanitor.startSweeping();

            testHospital.Janitors.push(testJanitor);
            testHospital.Janitors.push(testVampireJanitor);

            let janitorsSweepingCount = testHospital.countJanitorsSweeping();

            console.log(testHospital);

            expect(janitorsSweepingCount).toEqual(2);

        })
    })
    describe("tickMethod", () => {
        test("Tick method applies and counts for Janitors Sweeping", () => {

            const testHospital = new Hospital();
            const testJanitor = new Janitor();
            const testVampireJanitor = new VampireJanitor();

            testJanitor.startSweeping();
            testVampireJanitor.startSweeping();

            testHospital.cleanliness = 50;
            let startingCleanliness = 50;
            testHospital.Janitors.push(testJanitor);
            testHospital.Janitors.push(testVampireJanitor);

            testHospital.tick(2);

            console.log(testHospital);

            expect(testHospital.cleanliness).toEqual(startingCleanliness + 12);

        })
    })
})    