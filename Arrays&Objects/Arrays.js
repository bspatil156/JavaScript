let arr = [3,6,9,5,8,4]
console.log(arr)
console.log(typeof(arr))
console.log(arr[2])

let arr1 = ["Rolls Royce","Mercedes","Audi","Mustang"]
console.log(arr1[3])

let arr2 = new Array("India",1000,"Russia",800,"Germany",600,"France",400)
console.log(arr2[0])

let arr3 = new Array(12,true,"Hello",{name:"Bhavesh"},12n,0b111)
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
// last parameter index is excluded or not considered in copy
let myArr2 = arr2.slice(2,6)
console.log("B ", arr2)
console.log("This is slice : ",myArr2)

// splice
// elements of specified parameter are seperated
// both first and second parameter indexes is included or considered for seperation
// second parameter is the number of elements to be dropped
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

// Arrays take any data-type element in it.
// Hence, push method can take any data-type as parameter
// Example : 
// Push add elements in exsisting array only
// If an array is pushed the entire Array is an element.
let eng_newspaper = ["The Hindu","Times Of India","The Economic","Indian Express"]
let hindi_newspaper = ["Sakal","Lokmat","Punya-nagari","Prabhat"]
console.log(eng_newspaper.push(hindi_newspaper))
console.log(eng_newspaper)
// Elements of array inside an array can be assessed using the below syntax.
console.log(eng_newspaper[3][0])
console.log(eng_newspaper[4][2])

// Difference between 'push()' and 'concat()' : 
// If an array is pushed('push(arr)'), the entire array is the element.
// If an array is concatenated('concat(arr)') the individual elements of concatenated array become elements of new array.


// concat() method : 
// Creates a new array with individual elements
let eng_np = ["The Hindu","Times Of India","The Economic","Indian Express"]
let hindi_np = ["Sakal","Lokmat","Punya-nagari","Prabhat"]
let np = eng_np.concat(hindi_np)
console.log(np)
// console.log(eng_np)

// spread operator : 
// Alternatively used for concatenating arrays.
let n_paper = [...eng_np,...hindi_np]
console.log(n_paper)

// flat() method : 
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// Takes parameter as the depth upto which the elements of suv=b-arrays are to be concatenated.
let subjects = ["English","History","Geometry",["Hindi","Geography","Sanskrit"],"Algebra",["Science","Defence Studies","Marathi"]]
let mysubjects = subjects.flat()
console.log(mysubjects)
// console.log(subjects)


// isArray() method : 
// Returns a boolean value depending upon the parameter provided is array or not
console.log(Array.isArray("Bhavesh"))
console.log(Array.isArray(arr))

// from() method : 
// creates an array of itterable object
console.log(Array.from("Bhavesh"))
// Returns an empty array in case if array of key or value is to be formed is not provided.
console.log(Array.from({name : "Bhavesh",
                        age : 21,
                        hobby : "Reading"}))

// of() method : 
// creates an array of variables provided as parameter
score1 = 100
score2 = 200
score3 = 300
console.log(Array.of(score1,score2,score3))