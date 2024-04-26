import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function createBooking(){
            const payload = {
                "firstname" : "Jim",
                "lastname" : "Brown",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                },
                "additionalneeds" : "Breakfast"  
            }
            //send request
            const response = await request(baseUrl) // base url
            .get("/booking") //endpoint
            .send (payload)
            .set("Content-Type","application/json")
    
            return (await response)
}
