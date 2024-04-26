// ini adalah contoh api menggunakan module js
import request from "supertest";
import {expect} from "chai";
import { getBooking } from "../function/getBooking.spec.js";

const baseUrl = "https://restful-booker.herokuapp.com";
const paramFirstName = "sally";
const paramLastName = "brown";
const bookingId= "78";

//Describe the test suite
describe("Get All Booking", () => {
    it('Positive - success get all booking', async () =>{
        const response = await request(baseUrl) // base url
        .get("/booking") //endpoint

        //Assertion pake chai
        expect((await response).status).to.equal(200)
        console.log((await response).body)
    })

    it('Positive - success get all booking with param', async () =>{
        const response = await request(baseUrl) // base url
        .get('/booking'+"?firstname=${paramFirstName}&lastname=${paramLastName}") //endpoint with query param

        //Assertion pake chai
        expect((await response).status).to.equal(200)
        console.log((await response).body)
    })
    it('Positive - success get all booking with id', async () =>{
        const response = await request(baseUrl) // base url
        .get('/booking/${bookingId}') //endpoint with id path

        //Assertion pake chai // hasil dengan id 404, kemungkinan tidak ada datanya
        expect((await response).status).to.equal(200)
        console.log((await response).body)
    })
})

describe("Get Scenario by function", () => {
    it('Success get booking all', async () =>{
        const response = await getBooking.all();
    
        //Assertion pake chai
        expect((await response).status).to.equal(200)
        console.log((await response).body)
    })
})

