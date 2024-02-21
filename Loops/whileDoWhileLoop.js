let i = 0
while(i<=15){
    console.log(`Even index is : ${i}`)
    i += 2
}
console.log()
console.log("Even series from 2-15!!!!")
console.log()
let index = 0
while(index<=15){
    if(index == 0){
        index += 2
        continue
    }
    console.log(`Even index is : ${index}`)
    index += 2
}

let arr = ["Mustang","Audi","Mercedes","Rolls Royce"]
let j = 0
while(j < arr.length){
    console.log(`The ${j+1}th element of array is : ${arr[j]}`)
    j++
}

// do while loop : 
let score1 = 1
do{
    console.log(`Your score1 is : ${score1}`)
    score1++
}while(score1<=10)

console.log()
console.log("Do while loop executes atleast one time!!!")
console.log()

let score2 = 12
do{
    console.log(`Your score2 is : ${score2}`)
    score2++
}while(score2<=10)

