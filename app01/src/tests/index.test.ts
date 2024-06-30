import { describe, expect, it, test } from "@jest/globals";
import { multiply, sum } from "..";

describe('sum', () => {
    it('adds 1+2', () => {
        expect(sum(1, 2)).toBe(3);
    })
    it("adds 1+2 to equals to 3", () => {
        expect(sum(1, 2)).toBe(3);
    })
})

describe('multiply', () => {
    it('multiply 3 into 2', () => {
        expect(multiply(2, 3)).toBe(6);
    })
    it("multiply 1 into 2", () => {
        expect(multiply(1, 2)).toBe(2);
    })
})