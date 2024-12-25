let Fname = "Bhavesh"
let Lname = "Patil"
console.log("My name is "+Fname+" "+Lname)

// String Interpolation
console.log(`This is string interpolation : My name is ${Fname} ${Lname}`)
let hobby = "Reading"
console.log(`My name is ${Fname} and hobby is ${hobby}`)

let String1 = new String('Apple')
console.log(String1)

let Mname = "Sanjay"
console.log(Fname.concat(' ',Mname,' ',Lname))

console.log(String1.__proto__)  //Returns empty object
console.log(hobby[1])   //Normal String declaration variable can also be accessed by indexing.
console.log(String1[1]) //Object creation of String variable allows indexed access to the element.

console.log(String1.length) //Provides length of the 'String1'

console.log(Mname.toUpperCase())    //Returns uppercase of the String.
console.log(Fname.toLowerCase())    //Returns lowercase of tye string.
console.log(Fname.concat(" Patil")) //Concats the string provided as a parameter.
console.log(Mname.charAt(0))    //Returns the character at the index provided as parameter.
console.log(Fname.indexOf('B')) //Returns the first appearance index of the element provided as a parameter.
console.log(Fname.substring(2,5)) //Returns the string starting from the index of first parameter and ending at the index of last parameter(exclusive).
console.log(Fname.slice(-5,-1)) //Similar to substring, but can take negative parameters.
// For eg : 'Bhavesh' here indexing stats as B:'-1', h:'-6', a:'-5', ... , s:'-2', h:'-1'.
console.log(Fname.slice(-7,3))

let Car = "  Mercedes  "
console.log(Car)
console.log(Car.trim()) //Removes all the extra spaces the string.
console.log(Car.replace('Mercedes','Rolls Royce'))  // Replaces the first parameter with the second in the given string.
console.log(Car) // Though replace is used the original variable value does'nt change due to allocation in 'Stack'.
console.log(Car.split('e')) // returns an array skipping the string provided as parameter.
