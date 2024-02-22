let obj = {
    name : "Bhavesh",
    age : 21,
    hobby : "Reading"
}

// Prints all the keys
for(let key in obj){
    console.log(key)
}

// Prints elements
for(key in obj){
    console.log(`${obj[key]}`)
}

// Prints keys and elements
for(key in obj){
    console.log(`The corresponding value of key "${key}" is "${obj[key]}"`)
}

// for In loop on arrays
// for In loop on array can print keys of array as compared to for Of loop which prints only values
let arr = [12,56,34,72,88,46,28]
// prints keys or indexes
for(let index in arr){
    console.log(index)
}

// prints elements of array
for(let index in arr){
    console.log(arr[index])
}

// prints indexes and elements of array
for(let index in arr){
    console.log(`The element at index ${index} is ${arr[index]}`)
}

// for In Loop on maps
// Maps are not iterable by for In Loop
let map1 = new Map()
map1.set("Gujarat","Gandhinagar")
map1.set("Jharkhand","Ranchi")
map1.set("Tamil Nadu","Chennai")
map1.set("Uttar Pradesh","Lukhnow")

// Maps are not iterable by for In Loop
for(let key in map1){
    console.log(key)
}

// Maps are not iterable by for In Loop
for(let key in map1){
    console.log(`The element at key ${key} is ${map1[key]}`)
}

// Maps are not iterable by for In Loop
for(let [key,element] in map1){
    console.log(`The element at key ${key} is ${element}`)
}