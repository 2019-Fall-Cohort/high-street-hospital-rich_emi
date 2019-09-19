const Janitor = require("./Janitor");

describe("Janitor", () => {
    describe("startSweeping method" , () => {
        test("startSweeping method has object change isSweeping property to true", () => {

            const testJanitor = new Janitor();

            
            testJanitor.startSweeping();


            expect(testJanitor.isSweeping).toEqual(true);

        })
    describe("stopSweeping method" , () => {
        test("stopSweeping method has object change isSweeping property to false", () => {
         
            const testJanitor = new Janitor();

            testJanitor.startSweeping();
            testJanitor.stopSweeping();
            console.log(testJanitor);


            expect(testJanitor.isSweeping).toEqual(false);

        })
        
    })    

    })

})