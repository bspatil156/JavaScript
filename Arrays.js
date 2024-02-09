let arr = [3,6,9,5,8,4]
console.log(arr)
console.log(typeof(arr))
console.log(arr[2])

let arr1 = ["Rolls Royce","Mercedes","Audi","Mustang"]
console.log(arr1[3])

let arr2 = new Array("India",1000,"Russia",800,"Germany",600,"France",400)
console.log(arr2[0])

// Copy operations on arrays in JavaScript make shallow copies of it
// Shallow copies :
//  Change in them results change in the actual variable.They share same reference point.
// Stored in Heap Memory
// Deep copies :
// Change in them is not visible in actual variable.They do not share same reference point.
// Stored in Stack memory


// Though it is const variable due to same reference in Heap memory changes are visible in both arrays.
const ar = [12,434,3546,67687,33454,45788] 
const ar1 = ar
ar1[0] = 0
console.log(ar1)
console.log(ar)