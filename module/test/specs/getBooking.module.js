// ini adalah contoh api menggunakan module js
import request from "supertest";
import {expect} from "chai";

const baseUrl = "https://restful-booker.herokuapp.com";

//Describe the test suite
describe("Get All Booking", () => {
    it('Positive - success get all booking', async () =>{
        const response = await request(baseUrl) // base url
        .get("/booking") //endpoint

        //Assertion pake chai
        expect((await response).status).to.equal(200)
        console.log((await response).body)
    })
})