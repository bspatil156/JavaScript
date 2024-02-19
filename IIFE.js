// Immediatly invoked function expressions
// Immidiately executed and prevents the pollution due to global scope

// The first paranthesis contains the function, 
// while the second parenthesis executes the function
// Though execution parenthesis are not mentioned, if IIFE further is written,
// the function is executed
(function Print1(){
    console.log(`DB Connection Successfull!!!`)
})


// A semi-colon must be included in IIFE syntax as mentioned above
// Else '(intermediate value)(...)' error occurs
(function Print2(){
    console.log(`Welcome to the project!!!`)
})()
