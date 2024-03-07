let arr = [1,2,3,4,5,6]
let initialValue1 = 0
let reduce1 = arr.reduce((accumulator,currentValue) => {
    return accumulator + currentValue 
},initialValue1)
console.log(reduce1)

let initialValue2 = 1
let reduce2 = arr.reduce( (accumulator,currentValue) =>{
    return (currentValue ** 2)
},initialValue2)
console.log(reduce2)

console.log(21/6)