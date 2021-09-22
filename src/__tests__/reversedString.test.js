import { expect } from "@jest/globals";
import { reversedString } from "../reversedString.js";

describe("tests for reversed string", () => {
    it('reversed string works correctly', () =>{
        expect(reversedString('qwerty')).toBe('ytrewq');
        expect(reversedString('12345')).toBe('54321');
        expect(reversedString('Hello World')).toBe('dlroW olleH');
    })
});