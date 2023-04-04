import {minus} from "./minus";

describe("minus", function () {
    test("positive", () => {
        expect(minus(5, 5)).toBe(0);
    })
    test("navigate", () => {
        expect(minus(-5, 5)).toBe(-10)
    })
})