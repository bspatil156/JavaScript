let num1 = 24
let num2 = 12

// '+' opertor for adding numerical values
add = num1+num2;
console.log("Addition", add);

// '-' opertor for subtraction of two numbers
sub = num1 - num2
console.log("Subtraction", sub)

// '*' operator for multiplication of two numbers
mul = num1 * num2
console.log("Multiplication", mul)

// '/' operator for division of two numbers
div = num1/num2
console.log("Division", div)

// '%' operator for obtaining remainder of division
mod = num1 % num2
console.log("Remainder", mod)

// '**' operator for Exponential of number
// There is also an inbuilt function for exponential opertor before ES6 version of JavaScript was intoduced
// 1) Exponential of a number by using inbuilt function of maths class
let expo1 = Math.pow(2,5)
console.log("Value of 2 (using Math class) raised to power 5 is", expo1)
// 1) Exponential of a number by using '**' operator
let expo2 = 2 ** 5
console.log("Value of 2 (using '**' operator) raised to power 5 is", expo2)

// '++x' : pre-increment opertor 
let num3 = 2
++num3
console.log("The incremented value is", num3)

// 'x++' : post-increment opertor
let num4 = 12
num4++
console.log("The incremented value is",num4)

//Difference between pre-increment and post-increment operator
//pre-incremented
let num5 = 2
let a = ++num5
console.log("Pre-Incremented value of variable is first incremented and then stored in variable" ,a)
//post-incremented
let num6 = 12
let b = num6++
console.log("Post-incremented value is not stored in variable but actual variable in incremented", b)
console.log("Actual value is incremented", num6)

// '--x' : pre-decrement opertor 
let num7 = 2
--num7
console.log("The decremented value is", num7)

// 'x--' : post-decrerment opertor
let num8 = 12
num8--
console.log("The decremented value is",num8)

//Differnece between pre-decrement and post-decrement operator
//pre-decrement
let num9 = 2
let c = --num9
console.log("Pre-decremented value of variable is first deremented and then stored in variable" ,c)
//post-decrement
let num10 = 12
let d = num10--
console.log("Post-decremented value is not stored in variable but actual variable in decremented", d)
console.log("Actual value is decremented", num10)

num11 = true //default value of teue is 1
num12 = true
console.log("True + True",num11+num12);

num13 = true //default value of teue is 1
num14 = false //default value of false is zero
console.log("True + False",num13+num14);

num15 = true //default value of teue is 1
num16 = true
console.log("True - True",num15-num16);

num17 = true //default value of teue is 1
num18 = false
console.log("True - False",num17-num18);

num19 = true //default value of teue is 1
num20 = true
console.log("False - True",num20-num19);

num21 = true //default value of true is 1
num22 = false
console.log("True * False",num21*num22);
console.log(typeof(num21));
console.log(typeof(num21*num22));

//True : 1
//False : 0

