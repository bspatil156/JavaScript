var bname = "xyz"

let obj = {
    bname : "Wings Of Fire",
    author : "Dr. A. P. J Abdul Kalam",
    description : function(){
        // Below line returns the error 'author is not defined'
        // console.log(`An autobiography of ${author}`)
        console.log(`An autobiography of ${obj.author}`)
        // 'bname' in the line below refers to the global variable 'bname'
        // console.log(`${bname} is a book by ${this.author}`)
        // 'this' refers to the current context i.e. value of 'bname' in 'obj'
        console.log(`${this.bname} is a book by ${this.author}`)
        // We can simply print 'this' to get the current context
        console.log(this)
    }
}
obj.description()
// this refers to the current context
// as current context i.e. 'this' for node environment is '{}' empty object,
// the 'bname' is undefined. 
console.log(this.bname)
// console.log(this.obj.bname) 

obj.description()

obj.bname = "Ignited Minds"
obj.description()

// Here the current context is empty an empty 'object'
console.log(this)

// Current context does'nt work in function as like in Objects
let fun = function myfunc(name, mname, name){
    let username = "Bhavesh"
    // console.log(username)
    console.log(name)
    console.log(mname)
    console.log(name)
    console.log(this.username)  //undefined
    console.log(arguments);
    
}

fun(1,12,3)
console.log(fun.arguments)

// Arrow Function : 
const arrfunc = () =>{
    let username = "Bhavesh"
    console.log(this.username)  //undefined
    console.log(this)
}
arrfunc()

// Explicit return
// Need to mention 'return' keyword explicitly
const add1 = (a,b) =>{
    return a + b
}
console.log("This is explicit return by arrow function : ",add1(4,2))

// Implicit return
// No need to mention return keyword
const add2 = (a,b) => a + b
console.log("This is implicit return by arrow function : ",add2(6,6))

// const add3 = (a,b) => (a + b)
// console.log(add3(3,6))

// Implicit return of an Object
const objreturn = () => ({name : "Bhavesh", age : 21, hobby : "Reading"})
console.log("Implicit return of object : ",objreturn())

// Difference between normal and arrow functions.
/* 1)Arguments : 
    (Normal Functions)
        It has a 'arguments' property that returns a object of parameters.
    (Arrow Functions) 
        It has 'args' property which is used along with '...' rest operator to get an
        object of parameters. */

/* 2)Duplicate Parameters : 
    (Normal Functions)
        Duplicate paramenters are allowed.
    (Arrow Functions) 
        Duplicate parameters are not allowed */

/* 3)Hoisted : 
    (Normal Functions)
        Normal functions are hoisted, they are on top of their scope.
        It means that they can be called before declaring.
    (Arrow Functions) 
        Arrow functions are  not hoisted, they cannot be called before declaring. */

/* 4)'this' keyword : 
    (Normal Functions)
        'this' refers to the object that calls the method. 
    (Arrow Functions) 
        'this' keyword is an empty object in arrow function */

/* 5)'new' keyword : 
    (Normal Functions)
        A normal function can be used as a constructor with 'new' keyword. 
    (Arrow Functions) 
        An arrow function cannot be constructor */

