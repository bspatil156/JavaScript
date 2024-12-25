// Immediatly invoked function expressions
// Immidiately executed and prevents the pollution due to global scope

// The first paranthesis contains the function, 
// while the second parenthesis executes the function
// Though execution parenthesis are not mentioned, if IIFE further is written,
// the function is executed
(function Print1(){
    // Named IIFE
    console.log(`DB Connection Successfull!!!`)
})();


// A semi-colon must be included in IIFE syntax as mentioned above.
// The semi-colon is to end the context of immediately invoked functions
// Else '(intermediate value)(...)' error occurs
(function Print2(){
    // Named IIFE
    console.log(`Welcome to the project!!!`)
})();

// IIFE of Arrow function
(() => {
    // un-named IIFE
    console.log(`IIFE Of Arrow Function`)
})();

((name1) => `Hello ${name1}`)(console.log(("Bhavesh")));

((name2) => console.log(`Hello ${name2}`))("Bhavesh");
