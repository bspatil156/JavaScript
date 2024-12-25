// 1) String to Number : 
let strscore1 = "12"
console.log(strscore1)   //12
console.log(typeof(strscore1))  //string

let Numberscore1 = Number(strscore1)
console.log(Numberscore1)   //12
console.log(typeof(Numberscore1))   //number

let strscore2 = "s12"  

let Numberscore2 = Number(strscore2)
console.log(Numberscore2) //NaN
console.log(typeof(Numberscore2)) //number

let strscore3 = " "

let Numberscore3 = Number(strscore3)
console.log(Numberscore3) //0
console.log(typeof(Numberscore3)) //number

// 2) Number to String
let numscore1 = NaN
let Stringscore1 = String(numscore1)
console.log(Stringscore1)   //NaN
console.log(typeof(Stringscore1))   //string

// 3) Undefined to String
let undscore = undefined
let Stringscore2 = String(undscore)
console.log(Stringscore2)   //undefined
console.log(typeof Stringscore2)    //string

// 4) Object to String
let nullobjscore = null
let Stringscore3 = String(nullobjscore)
console.log(Stringscore3)   //null
console.log(typeof Stringscore3)    //string

// 5) Boolean to String
let booleanscore = true
let Stringscore4 = String(booleanscore)
console.log(Stringscore4)   //true
console.log(typeof Stringscore4)    //string

// 6) null to Number
let nullscore1 = null
let Numberscore4 = Number(nullscore1)
console.log(Numberscore4)   //0
console.log(typeof Numberscore4)    //number

// 7)tring to BigInt 
let strscore4 = "12"
let bigintscore1 = BigInt(strscore4)
console.log(bigintscore1)   //12n
console.log(typeof bigintscore1)    //bigint

let strscore5 = "12abc"
// Above String 'strscore5' cannot be converted to 'BigInt'.
// let bigintscore2 = BigInt(strscore5)
// console.log(bigintscore2)
// console.log(typeof bigintscore2)
// Similarly 'Object', 'null' and 'undefined' also cannot be converted to 'BigInt'.

// 8) X to Object
// The datatype and it's value is stored in object while converting a dtatype to Object.
let strscore6 = "12util"
let objscore1 = Object(strscore6)
console.log(objscore1)   //[String: '12util']
console.log(typeof objscore1)    //object

// 9) String to Boolean
// returns 'false' for empty values. 
let strscore7 = ""
let Booleanscore1 = Boolean(strscore7)
console.log(Booleanscore1)  //false
console.log(typeof Booleanscore1)   //boolean

// returns 'true' for empty values. 
let strscore8 = "   "
let Booleanscore2 = Boolean(strscore8)
console.log(Booleanscore2)  //true
console.log(typeof Booleanscore2)   //boolean

// 9) Number to Boolean
// Non-zero values are converted to 'true'. 
let numscore2 = 12
let Booleanscore3 = Boolean(numscore2)
console.log(Booleanscore3)  //true
console.log(typeof Booleanscore3)   //boolean

// Zero is converted to 'false'. 
let numscore3 = 0
let Booleanscore4 = Boolean(numscore3)
console.log(Booleanscore4)  //false
console.log(typeof Booleanscore4)   //boolean

// 9) Object to Boolean
// Conversion of Object to Boolean returns 'true'.
let objscore2 = Object
let Booleanscore5 = Boolean(objscore2)
console.log(Booleanscore5)  //true
console.log(typeof Booleanscore5)   //boolean

// 10) null to Boolean
// Conversion of null to Boolean returns 'false'.
// Similarly, conversion of 'NaN' and 'undefined' returns 'false'
let nullscore2 = null
let Booleanscore6 = Boolean(nullscore2)
console.log(Booleanscore6)
console.log(typeof Booleanscore6)


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
// 2 converted to string.
console.log("1"+2)  //12

//3 converted to string
console.log(3+"4")  //34

//2 and 3 converted to string
console.log("1"+2+3)  //123

//  Addition of 1 and 2 converted to string
console.log(1+2+"3")    //33

// 1 and 3 converted to string
console.log(1+"2"+3)    //123

// 1, 3 and 4 are converted to string
console.log(1+"2"+3+4)

// 1, 3 and 4 are converted to string
console.log(1+"2"+3+4+"5")

// Addition of 1 and 2 and seperate 4 and 5 are convereted to sting
console.log(1+2+"3"+4+5+"6")

// In a sequence fo concatenation of Numbers, two numbers arriving at the beginning are
// added while once the String starts, the upcoming numbers are conctenated !!!

// PreIncrement and PostIncrement operators
// 1)Post Increment : The value of original variable is incremented
// New varable is assigned the value of original variable
let score = 4
let scoreplus = score++
console.log(score)
console.log(scoreplus)

// 2)Pre Increment : The value of original is incremented
// New variable is assigned the incremented value
let score1 = 5
let plusscore = ++score1
console.log(score1)
console.log(plusscore)

console.log(null>0) //false

console.log(null==0) //false   

console.log(null>=0) //true

console.log(null<0) //false

console.log(null<=0) //true

// Values are compared
console.log("2"==2) //true

// Values and datatypes both are compared
console.log("2"===2) //false

console.log("2"==="3") //false

console.log("2"==="2") //true

console.log("2"===String(2)) //true
