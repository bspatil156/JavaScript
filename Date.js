let currentDate = new Date()
console.log(currentDate)
console.log(typeof(currentDate))

console.log(currentDate.toString())
console.log(typeof(currentDate.toString()))

console.log(currentDate.toLocaleDateString())
console.log(typeof(currentDate.toLocaleDateString()))

console.log(currentDate.toLocaleString())
console.log(typeof(currentDate.toLocaleString()))

console.log(currentDate.toJSON())
console.log(typeof(currentDate.toJSON()))

console.log(currentDate.toDateString())
console.log(typeof(currentDate.toDateString()))

console.log(currentDate.getTime())
console.log(typeof(currentDate.getTime()))

console.log(currentDate.getFullYear())
console.log(typeof(currentDate.getFullYear()))

console.log(currentDate.getMonth())
console.log(typeof(currentDate.getMonth()))

console.log(currentDate.getDate())
console.log(typeof(currentDate.getDate()))

console.log(currentDate.getDay())
console.log(typeof(currentDate.getDay()))

console.log(currentDate.getHours())
console.log(typeof(currentDate.getHours()))

console.log(currentDate.getMinutes())
console.log(typeof(currentDate.getMinutes()))

console.log(currentDate.getSeconds())
console.log(typeof(currentDate.getSeconds()))

console.log(currentDate.getMilliseconds())
console.log(typeof(currentDate.getMilliseconds()))

let myDate = new Date(2024,5,15)
console.log(myDate.toDateString())

let myDate1 = new Date(15,5,2027)
console.log(myDate1.toDateString())

let myDate2 = new Date(2025,5,13,24,1439,59,1000)
console.log(myDate2.toDateString())

let myDate3 = new Date("06-15-2026")
console.log(myDate3.toDateString())

let myDate4 = new Date("15-06-2026")
console.log(myDate4.toDateString())

let myDate5 = new Date("2026-06-15")
console.log(myDate5.toDateString())

let timeStamp = Date.now()
console.log(timeStamp)
console.log(typeof(timeStamp))

let timeStamp1 = Date.UTC(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate())
console.log(timeStamp1) 

