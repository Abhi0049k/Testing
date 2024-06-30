import { describe, expect, it } from '@jest/globals';
import request from "supertest";
import { app } from "..";

describe("POST /sum", () => {
    it("should return the sum of two numbers", async () => {
        const res = await request(app).post("/sum").send({
            a: 1,
            b: 2
        })
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    })
    it("should return the sum of two negative numbers", async () => {
        const res = await request(app).post("/sum").send({
            a: -1,
            b: -2
        })
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(-3);
    })
    it("should return the error", async () => {
        const res = await request(app).post("/sum").send({
            a: [2, 3]
        })
        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe("Incorrect inputs");
    })
})

//SECTION - How to set Headers
// describe("GET /sum", () => {
//     it("should return the sum of two numbers", async () => {
//         const res = await request(app)
//             .get("/sum")
//             .set({
//                 a: "1",
//                 b: "2"
//             })
//             .send();
//         expect(res.statusCode).toBe(200);
//         expect(res.body.answer).toBe(3);
//     });
// })