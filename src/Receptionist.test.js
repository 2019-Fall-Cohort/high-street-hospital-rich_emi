const Receptionist = require("./Receptionist");

describe("Receptionist", () => {
    describe("answerPhoneCall method" , () => {
        test("answerPhoneCall method has object change onPhone property to true", () =>{

            const testReceptionist() = new Receptionist;

            testReceptionist.answerPhoneCall;


            expect(testReceptionist.onPhone).toEqual(true);

        })

    })

})