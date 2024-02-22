const arr = ["Bhavesh",12,{hobby : "Reading"},undefined,"Mustang"]
for(const num of arr){
    console.log(num)
}

let message1 = "Stay Hungry Stay Foolish"
for(let num1 of message1){
    console.log(`${num1} is the value`)
}

console.log()

let message2 = "Stay Hungry Stay Foolish"
for(let num2 of message2){
    if(num2 == " "){
        continue
    }
    console.log(`${num2} is the string literal`)
}

// maps : 
let map1 = new Map()
map1.set("Maharashtra","Mumbai")
map1.set("Karnataka","Bengaluru")
map1.set("Odisha","Bhubaneshwar")
map1.set("West Bengal","Calcutta")
// No duplicate entries allowed hence new key and value is not created for "Maharashtra","Mumbai"
map1.set("Maharashtra","Mumbai")

console.log(map1)

for(const pointer of map1){
    console.log(pointer)
}

for(const [pointer,elements] of map1){
    console.log(pointer, ":" ,elements)
}

let obj = {
    name : "Bhavesh",
    age : 21,
    hobby : "Reading"
}

// object is not iterable using for of loop
console.log(obj)
// for(let objIndex of obj){
//     console.log(objIndex)
// }

// for(let [objIndex,values] of obj){
//     console.log(objIndex, ":" ,values)
// }