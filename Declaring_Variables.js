// // Declaration of constants in JavaScript
// const accountId = 10
// // Constants cannot be reassigned values.They remain same over the entire program
// // accountId = 10
// console.log(accountId);

// // Declaring variables in JavaScript
// // Can be done using
// /* i> 'let' keyword
//    ii> 'var' keyword
//    iii> Direct Declaration */

// // i> 'let' keyword
// // 'let' keyword is generally preffered as it has scope limited to the block  
// {
// let name = "Bhavesh Patil"
// console.log(name);
// name = "Dhiraj Fusekar" // Value can be changed
// console.log(name);
// }
// // console.log(name)
// // Above line gives an error that "'name' is not defined" because scope of name is inside blocks.

// // ii> 'var' keyword
// // 'var' keyword is not preffered as the scope of variable becomes unbounded i.e. out of the block
// {
// var age = 20
// console.log(age)
// age = 21 //Value can be changed
// console.log(age)
// }
// console.log(age)
// //Above statement prints the value of age as scope of var exists outside the block

// // iii> Direct Declaration
// {
// hobby = "Reading"
// console.log(hobby);
// hobby = "Playing Badminton"
// console.log(hobby); //Value can be changed
// }
// console.log(hobby); //Scope exists out of block

// let name = null
// console.log(name);

// Non-Primitive datatypes : 
// i>Array

let myArray = ["Audi","Mustang","Rolls Royce"]
console.log(myArray)
console.log(typeof(myArray))

// ii>Object
let myObject = {
   name:"Bhavesh",
   age:20,
   hobby:"Reading"
}
console.log(myObject)
console.log(typeof(myObject))

let myFunction = function(){
   console.log("Jai Shree Ram")
}
console.log(myFunction)
console.log(typeof(myFunction))
myFunction()

function Printer(){
   console.log("Jai Jai Shree Ram")
   return "Jai SiyaRam"
}
console.log(typeof Printer())

function def(a,b) {
   let sum = a + b
   return sum
}
console.log(def(12,4))
