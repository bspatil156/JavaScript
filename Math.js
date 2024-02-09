console.log(Math.E) // Value of 'e'
console.log(Math.LN2) // Value of natural log two
console.log(Math.LN10) // Value of natural log ten
console.log(Math.LOG2E) // Value of log(e) / log(2)
console.log(Math.LOG10E) // Value of log(e) / log(10)
console.log(Math.PI) //Value of Pi
console.log(Math.SQRT1_2) // Value of 1 / SQRT(2)
console.log(Math.SQRT2) // Value of square root of two

let num1 = 12
let num2 = 1/(Math.SQRT2)
let num3 = 1/2
let num4 = 64
let num5 = 2.2
let num6 = 2.9
let angle = (Math.PI)/6
let num7 = 2.435467856224378
let num8 = 2.983545235623569
let num9 = -12

// abs() method
// Gives the absolute value of Number
console.log(num1.abs) // Undefined
console.log(Math.abs(num1))
console.log(Math.abs(0))
console.log(Math.abs(Number.POSITIVE_INFINITY))
console.log(Math.abs(Number.NEGATIVE_INFINITY))
console.log(Number.NEGATIVE_INFINITY)
console.log(Math.abs(NaN))

// acos() method
// Gives cos inverse of the number or expression in Radian
console.log(Math.acos(num2))

// acosh() method
// Gives hyperbolic cos inverse of the number or expression in Radian
console.log(Math.acosh(num1))

// asin() method
// Gives sin inverse of a number or expression in Radian
console.log(Math.asin(num3))

// asinh() method
// Gives hyperbolic sin inverse of a number or expression in Radian
console.log(Math.asinh(num2))

// atan() method
// Gives tan inverse of a Number or Expression in Radians
console.log(Math.atan(Number.POSITIVE_INFINITY))

// atan2() method
// Takes parameter as cartessian coordinates 'x' and 'y' 
// And gives the tan inverse value of this point
// Means angle the line of point specified by parameters makes the with X-axis
console.log(Math.atan2(2,3))

// atanh() method
// Gives hyperbolic tan inverse of a Number or Expression in Radians
console.log(Math.atanh(num2))

// cbrt() method
// Gives cube root of the number specified as parameter
console.log(Math.cbrt(num4))
 
// ceil() method
// Returns the upper value of the decimal number even if value after decimal is less than 0.5
console.log(Math.ceil(num5))
console.log(Math.ceil(num6))

// clz32() method
// Returns the number of leading zeros in the 32 bit binary representation of a number
console.log(Math.clz32(num1))
console.log(Math.clz32(7))

// cos() method
// Gives the cosine of an angle in Radian provided as a parameter to the method
console.log(Math.cos(angle))

// cosh() method
// Gives the hyperbolic cosine of an angle in Radian provided as a parameter to the method
console.log(Math.cosh(angle))

// exp() method
// Gives the value of 'e' raised to the power of the parameter provided to the method
console.log(Math.exp(6))

// expml() method
// Gives the value of ('e' raised to the power - 1) 
// Power is provided by the parameter to the function
console.log(Math.expm1(6))

// floor() method
// Returns the lower value of the decimal number even if value after decimal is greater than 0.5
console.log(Math.floor(num5))
console.log(Math.floor(num6))

// fround() method
// rounds up the floating values upto certain extent of a number
console.log(Math.fround(num7))
console.log(Math.fround(num6))

// hypot() method
// Gives the hypotenuse of a triangle when the other two sides of triangle are provided as parameter
console.log(Math.hypot(3,4))
console.log(Math.hypot(5,12))

// imul() method
// Returns 32 bit multiplication of two numbers provided as parameter
console.log(Math.imul(2,5))
console.log(Math.imul(12.5,14.6)) // Skips the values after decimal point

// log() method
// returns the natural logarithm i.e. base 'e' of the number provided as parameter 
console.log(Math.log(2))

// log1p() method
// returns the natural logarithm of (1 + number)
// Number is provided as parameter
console.log(Math.log1p(2))

// log2() method
// returns the logarithm of a number to the base 2
console.log(Math.log2(4))

// log10() method
// returns the logarithm of a number to base 10
console.log(Math.log10(2))

// max() method
// Gives the maximum value among the set of values provided as parameters
console.log(Math.max(2,12,42,26,38))
console.log(Math.max(-1,-3,0))

// min() method
// Gives the minimum value among the set of values provided as parameters
console.log(Math.min(2,12,42,26,38))
console.log(Math.min(-1,-3,0,-12))

// pow() method
// Takes number and it's power as parameter
// returns the value of the exponential result of the number
// Here '2' is Number and '3' is power 
console.log(Math.pow(2,3))
console.log(Math.pow(num4,0.5))

// random() method
// returns a random number between '0' and '1'
console.log(Math.random())

// round() method
// Rounds-up the Number provided a a parameter 
console.log(Math.round(num7))
console.log(Math.round(num8))
console.log(Math.round(12.455674585949))
console.log(Math.round(12.555674585949))

// sign() method
// Returns whether a number is positive, negative or zero
// '1' for positive
// '-1' for negative
// '0' for zero
console.log(Math.sign(num1))
console.log(Math.sign(null))
console.log(Math.sign(num9))
console.log(Math.sign(0))
console.log(Math.sign(Number.POSITIVE_INFINITY))
console.log(Math.sign(Number.NEGATIVE_INFINITY))

// sin() method
// returns sign of an angle in Radian provided a a parameter
console.log(Math.sin((Math.PI)/2))
console.log(Math.sin(angle))

// sinh() method
// returns the hyperbolic sin of an angle in Radian provided as parameter
console.log(Math.sinh(angle))
console.log(Math.sinh((Math.PI)/2))

// sqrt() method
// Returns a square root of a Number provided as a parameter
console.log(Math.sqrt(num4))
console.log(Math.sqrt(1.44))
console.log(Math.sqrt(4))

// tan() method
// Returns tan of an angle in Radian provided as a parmeter
console.log(Math.tan(angle))
console.log(Math.tan((Math.PI)/2))

// tanh() method
console.log(Math.tanh(angle))
console.log(Math.tanh((Math.PI)/2))

// trunc() method
// Returns only the integer part of the numeric expression provided as a parameter
console.log(Math.trunc(num8))
console.log(Math.trunc(Number.EPSILON))
console.log(Math.trunc(Number.POSITIVE_INFINITY))
console.log(Math.trunc(Math.PI))