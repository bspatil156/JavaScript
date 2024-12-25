"use strict";
// The above line treats all the code as newerversion of JS that consists of Class, arrow function etc.

// 1)Numeric Type :
//     a) Number
//     b) BigInt

let num = 8
console.log(num)
console.log(typeof num)

// String Type
let name = "Bhavesh Patil"
console.log(name)
console.log(typeof name)

// Boolean
let value = 2<12
console.log(value)
console.log(typeof value)

// Undefined type
let something
console.log(something)
console.log(typeof something)

// Null Type
let anything = null
console.group(anything)
console.log(typeof anything)

// Symbol Type
// Used for uniqueness
let id = Symbol('123')
let unique = Symbol('123')
console.log(id)
console.log(unique)
console.log(id==unique)
console.log(id===unique)

// Array type
let arr = ["Bhavesh",12,true,"Patil"]
console.log(arr)
console.log(arr[1])
console.log(typeof arr)

// Object Type : 
// Collection of property
let obj = {
    name:"Bhavesh Patil",
    age:21,
    interests:{
        games:["Cricket","Badminton","Kabaddi"],
        subjects:["History","Science","Maths"]
    },
    hobby:"Reading"
}
console.log(obj)
console.log(typeof obj)

function print(){
    console.log("Hello World!!!")
}
print()

