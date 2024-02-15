// Declaring a Symbol
let mysymbol = Symbol("key1")

// Object Literals : 
let myobj = {
    name : "Bhavesh",
    "full name" : "Bhavesh Sanjay Patil",
    age : 21,
    hobby : "Reading",
    [mysymbol] : "key2",
    "weight" : 65
}
console.log(myobj)
console.log(typeof(myobj))

// Accessed by '.'
console.log(myobj.age)
// Accessed by index (Array access type)
console.log(myobj["age"])

// String keys cannot be accessed by '.'
// console.log(myobj.full name)
// Index accessing can be done over String keys
console.log(myobj["full name"])

console.log(mysymbol)
console.log(typeof(mysymbol))
console.log(myobj.mysymbol)
// Symbol in object can be accessed only through indexing
console.log(myobj[mysymbol])

myobj[mysymbol] = "key3"
console.log(myobj[mysymbol])

myobj["full name"] = "B S Patil"
console.log(myobj["full name"])

console.log(myobj.weight)
console.log(myobj["weight"])

// freeze() method : 
// Prevents the modification of values in Object.
// Also prevents addition of new properties or keys and values in the object.
// Object that should be prevented from modification must be provided as parameter.
myobj.weight = 66
// Object.freeze(myobj)
myobj.weight = 67
console.log(myobj)

// Adding an element in object
myobj.thought = function(){
    console.log("Tit for Tat!!!")
}

// Returns function return back.
// Function is not executed, but the reference of the function is returned.
console.log(myobj.thought)
console.log(typeof(myobj.thought))
console.log(myobj.thought())
console.log(typeof(myobj.thought()))

// Adding another element in Object and accessing it through 'this' : 
myobj.greet = function(){
    console.log(`Welcome, ${this["full name"]}`)
}
console.log(myobj.greet)
console.log(myobj.greet())