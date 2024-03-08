
// reduce() method : 
// Takes first parameter as a call back function and 
// second parameter as initial value from where the loop is to be started.
// If initial value is not provided, the loop starts from arr[0] and opertion starts from arr[1]
// Hence operations are not performed on arr[0]
// Returns the final value and not the array of values as like filter() and map().

// reduce() where initialValue is provided as a parameter
let arr1 = [1,2,3,4,5,6]
let initialValue1 = 10
let reduce1 = arr1.reduce((accumulator,currentValue) => {
    console.log(`The accumulator is ${accumulator} and currentValue is ${currentValue}`)
    return accumulator + currentValue 
},initialValue1)
console.log("The result of reduce() where initialValue is provided as a parameter is " ,reduce1)

// reduce() where initialValue is not provided as a parameter
let reduce2 = arr1.reduce( (accumulator,currentvalue) =>{
    console.log(`The accumulator is ${accumulator} and the currentvalue is ${currentvalue}`)
    return (currentvalue + accumulator) 
})
console.log("The result of reduce() where initialValue is not provided as a parameter is " ,reduce2)

// Factorial of elements in an array without providing initialValue.
// This reduces the number of iterations by one.
let arr2 = [6,5,4,3,2,1]
let reduce3 = arr2.reduce( (accumulator,currentvalue) =>{
    return (currentvalue * accumulator)
})
console.log(reduce3)

let arr3 = [
    {
        book : "Around the world in 80 days",
        author : "Julias Verne",
        price : 256
    },
    {
        book : "Gently falls the Bakula",
        author : "Dr. Sudha Murthy",
        price : 350
    },
    {
        book : "Boardroom",
        author : "Achyut Godbole & Atul Kahate",
        price : 180
    },
    {
        book : "Raja Shiv Chhatrapati",
        author : "Babasaheb Purandare",
        price : 1000
    },
    {
        book : "Scion of Ikshwaku",
        author : "Amish Tripathi",
        price : 428
    },
]

let reduce4 = arr3.reduce( (accumulator,currentvalue) =>{
    return (accumulator + currentvalue["price"])
},0)
console.log(reduce4)

// Accumulator takes arr[0] as initialValue if it is not provided.
// Here after the first iteration takes place, accumulator gets a numerical value.
// It can't find "price" for numerical value i.e. is undefined.
// Hence we get result a NaN.
let reduce5 = arr3.reduce( (accumulator,currentvalue) =>{
    return (accumulator["price"] + currentvalue["price"])
})
console.log(reduce5)
