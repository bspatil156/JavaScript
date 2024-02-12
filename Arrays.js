
let arr = [3,6,9,5,8,4]
console.log(arr)
console.log(typeof(arr))
console.log(arr[2])

let arr1 = ["Rolls Royce","Mercedes","Audi","Mustang"]
console.log(arr1[3])

let arr2 = new Array("India",1000,"Russia",800,"Germany",600,"France",400)
console.log(arr2[0])

let arr3 = new Array(12,true,"Hello",{name:"Bhavesh"},12n)
console.log(arr3)
console.log(arr3[1])
console.log(typeof(arr3[1]))
console.log(arr3[3])
console.log(typeof(arr3[3]))
console.log(arr3[4])
console.log(typeof(arr3[4]))

// Array Methods() : 

// push() method :
// Adds the element provided as a paramter to the end of array.
arr1.push("Bugati")
arr1.push("Porche")
console.log(arr1)

// pop() method : 
// Removes the element from the  end of array.
arr1.pop()
console.log(arr1)

// unshift() method : 
// Adds the element provided as parameter to the start of array.
arr1.unshift("BMW")
console.log(arr1)
console.log(arr1.unshift("Lamborghini"))
console.log(arr1)

// shift() method : 
// Removes the element provided as parameter to the start of array.
arr1.shift()
console.log(arr1)
console.log(arr1.shift())
console.log(arr1)

// includes() method : 
// Returns 'true' if value provide as parameter exists in the array else returns 'false'.
console.log(arr1.includes("Cadlee"))
console.log(arr1.includes("Mustang"))

// indexOf() method : 
// Returns array index of the element provided as parameter in first occurrence.
// If element is not present in the array, returns '-1'.
// IF provided ,the second parameter acts as the index from where the search is to be started.
console.log(arr1.indexOf("Audi"))
console.log(arr1.indexOf("Ferrari"))
console.log(arr1.indexOf("Mustang",1))

// join() method : 
// assigns the variable, values of elements in array seperated with commas if no string provided as parameter.
// Provide parameter as a string to seperate the array elements.
// Returns result of String type.
let myArr = arr1.join()
console.log(arr1)
console.log(myArr)
console.log(typeof(myArr))

let myArr1 = arr2.join(" | ")
console.log(arr2)
console.log(myArr1)

console.log(arr3.join("  "))

// Original array : 
console.log("A ", arr2)

// slice() method : 
// copy of array elements of specified parameter is made
// first parameter index is included or considered in copy
// first parameter index is excluded or not considered in copy
let myArr2 = arr2.slice(2,6)
console.log("B ", arr2)
console.log("This is slice : ",myArr2)

// splice
// elements of specified parameter are seperated
// both first and second parameter indexes is included or considered for seperation
// the elements specified are dropped from the orginal array.
let myArr3 = arr2.splice(2,3)
console.log("C ", arr2)
console.log("This is splice : ",myArr3)

// // Copy operations on arrays in JavaScript make shallow copies of it
// // Shallow copies :
// //  Change in them results change in the actual variable.They share same reference point.
// // Stored in Heap Memory
// // Deep copies :
// // Change in them is not visible in actual variable.They do not share same reference point.
// // Stored in Stack memory