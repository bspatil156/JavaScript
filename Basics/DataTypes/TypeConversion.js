let x
console.log(x, typeof(x))

x = 12 + " " + "Bhavesh Patil"
console.log(x, typeof(x))

x = 12 - "Bhavesh Patil"
console.log(x, typeof(x))
//Not a number

x = 12 * "Bhavesh Patil"
console.log(x, typeof(x))
//Not a number

x = 12 / "Bhavesh Patil"
console.log(x, typeof(x))
//Not a number

let a = String(12)
// console.log(a, typeof(String(a)))
console.log(a, typeof(a))

// If we convert a string to number the following is output
let name = Number("Bhavesh Patil")
console.log(name, typeof(name))
