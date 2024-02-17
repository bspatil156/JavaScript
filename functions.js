function Print(){
    console.log("Hey there, Myself Bhavesh!!!")
}

// Gives the reference of the function, i.e. the address of the function
let address = Print
// Returns the type and name as [Function:(function_name)]
console.log(address)

// Executes the function
Print()

function addTwoNumbers1(a,b){
    let c = a + b
    console.log(c)
}
addTwoNumbers1()
console.log(addTwoNumbers1(4,5))

// result1 is undefined as the function does not return anything
let result1 = addTwoNumbers1(3,2)
console.log("Result One : ",result1)



function addTwoNumbers2(a,b){
    console.log("Here's your result!!!")
    return a + b
    console.log("Are you!!!")
}

addTwoNumbers2()
console.log(addTwoNumbers2(4,5))

let result = addTwoNumbers2(3,2)
console.log("Result : ",result)

console.log(addTwoNumbers2(6,6))

// Returns result using string interpolation
// If parameter is not provided the value of parameter is undefined
function isLoggedIn1(u_name){
    return `${u_name}, you have logged in successfully!!!`
}
console.log(isLoggedIn1("Bhavesh"))
console.log(isLoggedIn1())

function isLoggedIn2(u_name){
    if(u_name==undefined){
        // return `Please provide the username!!!`
        console.log("Please enter username")
        return //returns undefined 
    }
    else{
        return `${u_name}, you have logged in successfully!!!`
    }
}

console.log(isLoggedIn2("Dhiraj"))
console.log(isLoggedIn2())