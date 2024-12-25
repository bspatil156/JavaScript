let num1 = 12
let num2 = 36.44
let num3 = 36.89
let num4 = 10000000000
let num5 = 121.452465257734653372867454
let num6 = new Number(100)

// console.log(num6)
// console.log(Number.EPSILON) 
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.NEGATIVE_INFINITY)
// console.log(Number.NaN)
// console.log(Number.POSITIVE_INFINITY)

// //Binary Number Declaration
// let bin1 = 0b011010
// console.log(bin1)

// // Octal Number Declaration
// let oct1 = 0o35233
// console.log(oct1)
// // If a number starts with leading zero and all the digits after leading zero are less than '8'
// // Then the number is interpreted as octal rather than decimal
// let oct2 = 0644  // here 0644 is considered as an octal number
// console.log(oct2)

// // Hexadecimal Number Declaration
// let hex1 = 0xBAC
// console.log(hex1)

// // Exponentiation
// let exp1 = 1e3
// console.log(exp1)

// let exp2 = 5E3
// console.log(exp2)

// parseFloat method
// Takes a String parameter and returns only numerical values from it
// Denotes the Number provided in String in exponential form
// Converts the String into Number
console.log(Number.parseFloat("12.242535"))
console.log(typeof(Number.parseFloat("12.242535")))
console.log(Number.parseFloat("1200000000000000000000"))
console.log(Number.parseInt("1200000000"))
console.log((Number.parseFloat(12000000000000)))
console.log((Number.parseFloat(12000000000000))==parseFloat(12000000000000))
console.log((Number.parseFloat(12000000000000))===parseFloat(12000000000000))

// parseInt method
// First parameter of the method is a string
// The second parameter is the base of that number in string
// parseInt method converts the String parameter into decimal Number
console.log(Number.parseInt("1000",2))
console.log(typeof(Number.parseInt(1000,2)))

// isFinite method
console.log(Number.isFinite(num1))
console.log(Number.isFinite(1e308)) // Finite Number
console.log(Number.isFinite(1e309)) // Non-Finite Number

// isInteger method
console.log(Number.isInteger(num1))
console.log(Number.isInteger(NaN))
console.log(Number.isInteger(num2)) // num2 = 12.44 floating point value

// isNaN method
console.log(Number.isNaN(NaN))
console.log(Number.isNaN(num1)) // num1 is not a NaN
console.log(Number.isNaN("dsd"))

// isSafeInteger method
// Returns true if the parameter provided is within the range of MAX_SAFE_INTEGER and MIN_SAFE_INTEGER 
console.log(num1.isSafeInteger) // It is undefined
console.log(Number.isSafeInteger(num1)) // Is within the range of MAX_SAFE_INTEGER
console.log(Number.isSafeInteger(9007199254740991)) // Is MAX_SAFE_INTEGER
console.log(Number.isSafeInteger(-9007199254740991)) // Is MIN_SAFE_INTEGER
console.log(Number.isSafeInteger(9007199254740992)) // MAX_SAFE_INTEGER is 9007199254740991
console.log(Number.isSafeInteger(22/7))

// toExponential method
// Takes argument as an integer upto which digit after decimal the Number is converted in exponential form
// The result is of type String
console.log(Number.parseFloat(12.2532736576764652).toExponential(4))
console.log(typeof(Number.parseFloat(12.2532736576764652).toExponential(4)))
console.log(Number.MAX_SAFE_INTEGER.toExponential(3))
console.log(num4.toExponential(2))

// toFixed() method
// Takes parameter as an integer upto which a Number is to be considered after the decimal point 
console.log(Number.parseFloat(12.2532736576764652).toFixed(1))
console.log(num4.toFixed(2))
console.log(typeof(num4.toFixed(2)))
console.log(num5.toFixed(5))
console.log(num5.toFixed(5).concat("cfhd"))

// toLocaleString() method
// Converts the long integers especially money values in readable form
// The result is of String type
console.log(num4.toLocaleString())
console.log(num4.toLocaleString("en-IN")) // Indian Standard of representing Numbers
console.log(typeof(num4.toLocaleString()))


// toPrcision() method
// Gives the precision values of all the digits considering digits before the decimal point
// Rounds up the Number upto given value of digits
// toPrecision method returns a String value
console.log(Number.parseInt("111",2).toPrecision(5))
console.log(num2.toPrecision(2))
console.log(num3.toPrecision(2))
console.log(typeof(num2.toPrecision(2)))

//toString() method
// Temporarilly converts a Number variable to String so that String methods and properties can be used
console.log(num1.toString())
console.log(num1.toString().length)
console.log(num1.toString().concat(num2))
console.log(typeof(num1.toString()))
console.log(typeof(num1))

// valueOf() method
// Returns the primitive value of the number
console.log(Number.parseInt("111",2).valueOf())
console.log(num1.valueOf())
console.log(typeof(num1.valueOf()))





