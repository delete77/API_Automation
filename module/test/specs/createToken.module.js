// ini adalah contoh api menggunakan module js
import request from "supertest";
import {expect} from "chai";
import { createToken } from "../function/createToken.spec.js";

const baseUrl = "https://restful-booker.herokuapp.com";

//Describe the test suite
describe("Create Token", () => {
    let token;
    let bookingId;
    let payload;
    it("Positive - success create token", async () =>{
        const payload = {
            "username" : "admin",
            "password" : "password123" 
        }
        //send request
        const response = await request(baseUrl) // base url
        .post("/auth") //endpoint
        .send (payload)
        .set("Content-Type","application/json")

        //Assertion pake chai
        expect((await response).status).to.equal(200)
     //  console.log((await response).body)
       token = (await response).body.token
      console.log (await token)
    })

    it("Positive - success implement token", async () =>{
        //send request
        const response = await request(baseUrl) // base url
        .put("/booking/"+bookingId) //endpoint
        .send (payload)
        .set("Cookie",token)
     })  

     it("import token", async()=> {
        const token = await createToken()
        console.log(await token)
     })
})