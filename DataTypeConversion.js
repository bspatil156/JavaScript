// let score = NaN
// console.log(score)
// console.log(typeof(score))

// let stringscore = Boolean(score)
// console.log(stringscore)
// console.log(typeof(stringscore))


//When null is converted to Number the value of Number variable becomes '0'
//When null is converted to Object the value of Object variable becomes '{}'
//When undefined is converted to Object the value of Object variable becomes '{}'
//When any data-type is converted to an Object then the value of that variable is the value of original variable along with it's data-type
//A String can be converted to BigInt if and nly if it contains some numeric value and/or spacing in it.
//Unlike Number BigInt does not convert an alphanumeral string and assign it a value 'NaN'
//Undefined cannot be converted to BigInt
//Object cannot be converted to BigInt, hence 'null' cannot be converted to BigInt
//Cannot convert function Object() { [native code] } to a BigInt
//When boolean 'true' is converted to Number and printed, the value of Number variable is '1'
//When boolean 'false' is converted to Number and printed, the value of Number variable is '0'


//Tricky Conversion Of Strings, Numbers and Booleans
// console.log("1"+2)

// console.log(3+"4")

// console.log("1"+2+3)

// console.log(1+2+"3")

// console.log(1+"2"+3)

// console.log(1+"2"+3+4)

// console.log(1+"2"+3+4+"5")

// console.log(1+2+"3"+4+5+"6")

// In a sequence fo concatenation of Numbers, two numbers arriving at the beginning are
// added while once the String starts, the upcoming numbers are conctenated !!!

// PreIncrement and PostIncrement operators
// let score = 4
// let plusscore = score++
// console.log(score)
// console.log(plusscore)

// let score1 = 5
// let plusscore1 = ++score1
// console.log(score1)
// console.log(plusscore1)

// console.log(null>0)

// console.log(null==0)

// console.log(null>=0)

// console.log(null<0)

// console.log(null<=0)

 console.log("2"==2)

 console.log("2"===2)

 console.log("2"==="3")

 console.log("2"==="2")

 console.log("2"===String(2))
