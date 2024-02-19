var bname = "xyz"

let obj = {
    bname : "Wings Of Fire",
    author : "Dr. A. P. J Abdul Kalam",
    description : function(){
        // Below line returns the error 'author is not defined'
        // console.log(`An autobiography of ${author}`)
        // 'bname' in the line below refers to the global variable bname
        // console.log(`${bname} is a book by ${this.author}`)
        // 'this' refers to the current context i.e. value of 'bname' in 'obj'
        console.log(`${this.bname} is a book by ${this.author}`)
        // We can simply print 'this' to get the current context
        console.log(this)
    }
}

// this refers to the urrent context
// as bname is limited to 'obj' the current context value of 'bname' is undefined
console.log(this.bname)

obj.description()

obj.bname = "Ignited Minds"
obj.description()

// Here the current context is empty
console.log(this)

// Current context does'nt work in function as like in Objects
function myfunc(){
    let username = "Bhavesh"
    console.log(this.username)
}

myfunc()

// Arrow Function : 
const arrfunc = () =>{
    let username = "Bhavesh"
    console.log(this.username)
    console.log(this)
}
arrfunc()

// Explicit return
// Need to mention 'return keyword explicitly
const add1 = (a,b) =>{
    return a + b
}
console.log(add1(4,2))

// Implicit return
// No need to mention return keyword
const add2 = (a,b) => a + b
console.log(add2(6,6))

const add3 = (a,b) => (a + b)
console.log(add3(3,6))

// Implicit return of an Object
const objreturn = () => ({name : "Bhavesh", age : 21, hobby : "Reading"})
console.log(objreturn())