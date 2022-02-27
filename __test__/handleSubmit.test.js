import { handleSubmit } from '../src/client/js/formHandler';

describe('Test, the function "handleSubmit()" should exist' , () => {

    test("Test handlesubmit() function", async () => {
        expect(handleSubmit(e)).toBeDefined();
    })
});



// describe('Test, the function "handleSubmit()" should be a function' , () => {
//     test('It should be a function', async () => {
//         expect(typeof handleSubmit).toBe("function");
//     });
// });

// // The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// // A test suite may contain one or more related tests    
// describe("Validate form input to make HTTP request and call to an API", () => {
//     // The test() function has two arguments - a string description, and an actual test as a callback function.  
//     test("Validate form input to make HTTP request and call to an API", () => {
//         // Define the input
//         const input = "https://www.valentinog.com/blog/jest/";
//         // Define the expected output
//         const output = true;
//         // Use the expect() function and jest-matcher to check if the function returns the expected result when called
//         expect(validURLAddress(input)).toBeTruthy();

//     })
// })