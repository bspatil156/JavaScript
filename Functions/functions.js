function Print(){
    console.log("Hey there, Myself Bhavesh Patil !!!")
}

// Gives the reference of the function, i.e. the address of the function
let address = Print
// Returns the type and name as [Function:(function_name)]
console.log(address)
console.log(address.Print)  //undefined

// Executes the function
Print()

function addTwoNumbers1(a,b){
    let c = a + b
    console.log(c)
}
addTwoNumbers1()    //NaN : because no parameters are provided.
console.log(addTwoNumbers1(4,5))    //5, undefined

// result1 is undefined as the function does not return anything
let result1 = addTwoNumbers1(3,2)
console.log("Result One : ",result1)    //undefined


// code below the return statement in a function is not reachable.
function addTwoNumbers2(a,b){
    console.log("Here's your result!!!")
    return a + b
    console.log("Are you satisfied!!!") //This line is not reachable
}

addTwoNumbers2()    //Here's your result!!!  
console.log(addTwoNumbers2(4,5))    //Here's your result!!!,9

let result = addTwoNumbers2(3,2)    //Here's your result!!!
console.log("Result : ",result)     //5

console.log(addTwoNumbers2(6,6))    //Here's your result!!!,12

// Returns result using string interpolation
// If parameter is not provided the value of parameter is undefined
function isLoggedIn1(u_name){
    return `${u_name}, you have logged in successfully!!!`
}
console.log(isLoggedIn1("Bhavesh")) //Bhavesh, you have logged in successfully!!!
console.log(isLoggedIn1())  //undefined, you have logged in successfully!!!

function isLoggedIn2(u_name){
    // Th condition (u_name==undefined) can also be written as (!u_name)
    if(u_name==undefined){
        // return `Please provide the username!!!`
        console.log("Please enter username")
        return //returns undefined 
    }
    else{
        return `${u_name}, you have logged in successfully!!!`
    }
}

console.log(isLoggedIn2("Dhiraj"))  //Dhiraj, you have logged in successfully!!!
console.log(isLoggedIn2())  //Please enter username

// Rest Operator in function : 
function addToCart1(prices1){
    return prices1
}

console.log(addToCart1(100))    //100

// Rest operator is used to take n 'number' of parameters.
function addToCart2(...prices2){
    console.log(typeof(prices2))
    return prices2
}

console.log(addToCart2(100,300,200,500,400))    //object, [ 100, 300, 200, 500, 400 ]
console.log(typeof(addToCart2(100,300,200,500,400)))    //object

function addToCart3(num1,num2,...prices3){
    console.log(num1)
    console.log(num2)
    return prices3
}
console.log(addToCart3(200,500,800,100,400))    //200, 500, [ 800, 100, 400 ]

// A rest parameter must be the last in parameter list 
// function addToCart4(...prices4,num3,num4){
//     console.log(num3)
//     console.log(num4)
//     return prices4
// }
// console.log(addToCart4(300,600,200,100,400,900,1000))

function account1(anyobject1){
    return `Your username is ${anyobject1.username} and amount is ${anyobject1.amount}`
}

console.log(account1({username:"Bhavesh", amount: 2000000000000}))
// Your username is Bhavesh and amount is 2000000000000

function account2(array){
    return array[2]
}
console.log(account2([1,2,3,4,5,6,7]))  //3

let arr = ["Bhavesh",2000000000000,"Reading","Sanjay","Patil"]
console.log(account2(arr))  //Reading
// Here Element at index 3 in 'arr' is provided as a parameter to 'account2'
console.log(account2(arr[3]))   //n