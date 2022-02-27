import {validURLAddress} from '../src/client/js/validateURL'

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Validate input url from user", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the validURLAddress() function", () => {
        // Define the input
        const input = "https://www.valentinog.com/blog/jest/";
        // Define the expected output
        const output = true;
        // Use the expect() function and jest-matcher to check if the function returns the expected result when called
        expect(validURLAddress(input)).toBeTruthy();
    })

    test("Testing the validURLAddress() function", () => {
        // Define the input
        const input = "https://www.valentinog.com/blog/jest/";
        // Define the expected output
        const output = true;
        // Use the expect() function and jest-matcher to check if the function returns the expected result when called
        expect(validURLAddress(!input)).toBeFalsy();
    })
})
