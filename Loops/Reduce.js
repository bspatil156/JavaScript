let arr = [1,2,3,4,5,6]
let initialValue = 0
let reduce = arr.reduce((accumulator,currentValue) => {
    return accumulator + currentValue 
},initialValue)
console.log(reduce)