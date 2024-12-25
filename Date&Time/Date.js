let currentDate = new Date()    // Returns the current date along with timestamp.
console.log(currentDate)
console.log(typeof(currentDate))    //Date is an object in JavaScript

console.log(currentDate.toString()) // Returns Date in string(Day, Month and timezhone in string)
console.log(typeof(currentDate.toString())) //string

console.log(currentDate.toLocaleDateString())   //Returns ordinary date(dd//mm//yyyy)
console.log(typeof(currentDate.toLocaleDateString()))   //string

// An object can be provided as aprameter.The object contains properties such as 'weekday','timezhone'.
// These properties have their corresponding values for customizing format of day, month, timezhone etc.
console.log(currentDate.toLocaleString())   //Returns ordinary date(dd//mm//yyyy) with timestamp
console.log(typeof(currentDate.toLocaleString()))   //string

console.log(currentDate.toJSON())   //Returns original 'console.log()' of date in string
console.log(typeof(currentDate.toJSON()))   //string

console.log(currentDate.toDateString()) //Returns Date in string(Day, Month) without timestamp
console.log(typeof(currentDate.toDateString())) //string

console.log(currentDate.getTime())  //Returns time
console.log(typeof(currentDate.getTime()))  //number

console.log(currentDate.getFullYear())  //Returns year
console.log(typeof(currentDate.getFullYear()))  //number

console.log(currentDate.getMonth()) //Returns month
console.log(typeof(currentDate.getMonth())) //number

console.log(currentDate.getDate())  //Returns date
console.log(typeof(currentDate.getDate()))  //number

console.log(currentDate.getDay())   //Returns the day of week
console.log(typeof(currentDate.getDay()))   //number

console.log(currentDate.getHours()) //Returns hour of the day
console.log(typeof(currentDate.getHours())) //number

console.log(currentDate.getMinutes())   //Returns minutes of the hour of the day
console.log(typeof(currentDate.getMinutes()))   //number

console.log(currentDate.getSeconds())   //Returns seconds of the minute of the hour of the day
console.log(typeof(currentDate.getSeconds()))   //number

console.log(currentDate.getMilliseconds())  //Returns milliseconds of the second of the minute of the hour of the day
console.log(typeof(currentDate.getMilliseconds()))  //number

// Different declaration of the dates : 
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

let timeStamp = Date.now()  //Returns number of milliseconds since Midnight January 1, 1970(UTC)
console.log(timeStamp)
console.log(typeof(timeStamp))  //number

// Below line returns the number of milliseconds from UTC up to the date and time provided as parameter
let timeStamp1 = Date.UTC(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate())
console.log(timeStamp1) 
console.log(typeof timeStamp1) //number


