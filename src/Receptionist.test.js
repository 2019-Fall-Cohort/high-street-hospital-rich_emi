const Receptionist = require("./Receptionist");

describe("Receptionist", () => {
    describe("answerPhoneCall method" , () => {
        test("answerPhoneCall method has object change onPhone property to true", () => {

            const testReceptionist = new Receptionist();

            
            testReceptionist.answerPhoneCall();


            expect(testReceptionist.isOnPhone).toEqual(true);

        })
    describe("endPhoneCall method" , () => {
        test("endPhoneCall method has object change onPhone property to false", () => {
         
            const testReceptionist = new Receptionist();

            testReceptionist.answerPhoneCall();
            testReceptionist.endPhoneCall();
            console.log(testReceptionist);


            expect(testReceptionist.isOnPhone).toEqual(false);

        })
        
    })    

    })

})