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

// Copy operations on arrays in JavaScript make shallow copies of it
// Shallow copies :
//  Change in them results change in the actual variable.They share same reference point.
// Stored in Heap Memory
// Deep copies :
// Change in them is not visible in actual variable.They do not share same reference point.
// Stored in Stack memory


// Though it is const variable due to same reference in Heap memory changes are visible in both arrays.
const ar = [12,434,3546,67687,33454,45788] 
const ar1 = ar
ar1[0] = 0
console.log(ar1)
console.log(ar)