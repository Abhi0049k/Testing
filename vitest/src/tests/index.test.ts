import { describe, expect, it, vi } from 'vitest';
import request from "supertest";
import { app } from "..";

// SECTION: Mocking the DB calls
// vi.mock("../db", () => ({
//     prismaClient: {
//         sum: {
//             create: vi.fn(),

//NOTE - Suppose there are other function db calls like findMany, so below is the way you can use to declare mocks
//             findMany: vi.fn(),
//             findUnique: vi.fn(),
//             update: vi.fn(),s
//             delete: vi.fn()
//         }
//     }
// }))

//NOTE - The below code will mock the entire db
vi.mock("../db")

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
