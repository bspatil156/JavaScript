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