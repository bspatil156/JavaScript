// if statement
if(true){
    console.log("this block of code executes only when condition is true!!!")
}

// Implicit scope in if
let score = 156
if(score>100) console.log("This is implicit scope")

// multilined implicit scope in if
if(score>1200) console.log("Line one"),
console.log("Line two"),
console.log("Line three");

// if and else
if(score>120){
    console.log("if is executed!!!")
}
else{
    console.log("else is not executed!!!")
}

if(score!=="156"){ // '!==' operator check if both either datatype and value are different 
    console.log("121")
}
else{
    console.log("312")
}

// Nested if else
if(score>50){
    console.log("Half century completed!!!")
}
else if(score>100){
    console.log("Century completed!!!")
}
else if(score>150){
    console.log("One and half century completed!!!")
}
else{
    console.log("Score status not known!!!")
}

// '&&' operator
// checks whether all the statement are true or not
// if true entire expression bencomes true else becomes false
let LoginStatus = true
let authenticated = true
if(LoginStatus && authenticated){
    console.log("You can now buy the products from our website!!!")
}

// || operator
// Entire expression becomes true if any one value is true
if(LoginStatus || authenticated){
    console.log("Either logged in or authenticated")
}

// The switch case : 
// 'break' ensures that further cheecking of cases does'nt happen if a case is executed
// Removing 'break' enables further execution except default, though case has been already executed
let month = 4
switch(month){
    case 1:
        console.log("January")
        break
    case 2:
        console.log("February")
        break
    case 3:
        console.log("March")
        break
    case 4:
        console.log("April")
        break
    case 5:
        console.log("May")
        break
    case 6:
        console.log("June")
        break
    case 7:
        console.log("July")
        break
    case 8:
        console.log("August")
        break
    case 9:
        console.log("September")
        break
    case 10:
        console.log("October")
        break
    case 11:
        console.log("November")
        break
    case 12:
        console.log("December")
        break
    default:
        console.log("There are only 12 months in an year!!!")
}