// Stack Memory stores Primitive Datatypes
// A copy of variables is generated and further changes are made in this variable
let name = "Bhavesh Sanjay Patil"
let name1 = name
name1 = "Kartiki Sanjay Patil" 
console.log(name)
console.log(name1)

// Heap memory stores Non-Primitive Datatypes
// Direct referencing to the actual value of variable
let userOne = {
    name : "Bhavesh Patil",
    email : "bsp@gmail.com"
}
let userTwo = userOne
console.log(userOne.email)
userTwo.email = "myemail@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)