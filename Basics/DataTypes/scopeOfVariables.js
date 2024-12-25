// Fname within the braces cannot be accessed as the are limited to the block
{let Fname = "Bhavesh"}

let Fname = "Bhavesh"

if(true){
    let Mname = "Sanjay"
    var Lname = "Patil"
    const hobby = "Reading"
    console.log(Fname)
}

// 'let' and'const' keyword keep the scope of variable limited to the block
// console.log(Mname)
// console.log(hobby)

// 'var' keyword makes the variable global and can be accessed outside blocks
console.log(Lname)


function oneParent(){
    let car1  = "audi"
    let car2 = "Mustang"
    function twoParent(){
        let car3 = "Mercedes"
        const car4 = "Lamborghini"
        console.log(car2)
    }
    // though twoParent() is inside oneParent(), it cannot access 'car3' and 'car4'
    // It is due to scope of variable only in the twoParent() block
    // Contrarary to this twoParent can access the variables of oneParent()
    // console.log(car3)
    // console.log(car4)
    twoParent()
}

oneParent()

if(true){
    let book1 = "Board Room"
    let book2 = "Mein Kamph"
    if(true){
        let book3 = "Arond the world in 80 Days"
        console.log(book1)
    }
    // though inner if is inside outer if, it cannot access 'book3'
    // It is due to scope of variable only in the inner if block
    // Contrarary to this inner if can access the variables of outer if
    // console.log(book3)
}

// *************************Scope of function calling************************
// A function can be executed before it's declaration.
console.log(one())
function one(){
    return "Hi Bhavesh!!!"
}

// Cannot access the 'two_func' variable before it's initialization.
// console.log(two_func)
// console.log(two_func())
let two_func = function two(){
    return "Bye Bhavesh!!!"
}

console.log(two_func)
console.log(typeof((two_func)))
console.log(two_func())
console.log(typeof(two_func()))