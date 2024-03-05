// Map() is used to perform operations on an array.
// It returns the array after performing operations on it.
// Map takes a call back function as it's parameter.
let arr1 = [1,2,3,4,5,6,7,8,9,10]
let nums1 = arr1.map( (num) => num * 4)
console.log(nums1)

let arr2 = ["Rolls Royce","Mercedes","Audi","Mustang"]
let nums2 = arr2.map( (num) => `${num} is a good car`)
console.log(nums2)

let arr3 = [{name : "Bhavesh"},{name : "Dhiraj"},{ name : "Pratik"},{name : "Sahil"}]
arr3.map( (num) =>{
    console.log(`${num.name} is name of a boy!!!`)
})

let arr4 = [0,1,0,1,1,1,0,0]
let nums4 = arr4.map( (num) => num && 1)
console.log(nums4)

// chaining of Map(), Filter() and Reduce() 
// Chaining makes possible the use of various methods on the previously processed array 
let chain1 = arr1.filter( (num) => num>5).map( (num) => num * 10)
console.log(chain1)

arr1
    .map( (num) => num * 2)
        .filter( (num) => num>6)
            .forEach( (modified) => {
                    console.log(`${modified * 4}`)
            })
