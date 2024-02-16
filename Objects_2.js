// Singleton Object Declaration : 
// let myobj = new Object()

// Object Literal Declaration : 
let myobj = {}
console.log(myobj)

// Nested Objects and accessing them : 
myobj.firstname = "Bhavesh"
myobj["middle name"] = "Sanjay"
myobj.surname = "Patil"
myobj["Interest"] = {
    Games : "Badminton",
    Hobby : "Reading",
    "leisure activity" : {
        Indoor :{
            Creativity : "Cooking",
            Fun : "Watching Catrtoons",
            other : "listening music"
        },
        "Outdoor" : {
            "adventure activity" : "Swimming",
            other : "Long Drive"
        } 
    }
}

console.log(myobj)
console.log(myobj.Interest["leisure activity"].Outdoor["adventure activity"])
console.log(myobj.Interest["leisure activity"].Indoor.Creativity)

// Joining two Objects : 

// 1) assign() method : 
// Combines two or more Objects
// First paramenter provided is a destination or target where the objects are to be combined
// The remaining parameters are the objects that are to be combined 
let obj1 = {a : "A", b : "B", c : "C"}
let obj2 = {d : "D", e : "E", f : "F"}
let obj3 = {g : "G", h : "H", i : "I"}

let obj4 = {obj1,obj2}
console.log(obj3)

let target = {}
Object.assign(target,obj1,obj2,obj3)
console.log("This is joining of Objects by assign() method : ",target)

// 2)'...' spread operator : 
let obj5 = {...obj1,...obj2,...obj3}
console.log("This is joining of Objects by spread operator : ",obj5)

// Objects in Array : 
let arr = [
    {
        name : "Bhavesh",
        age : 21,
        hobby : "Reading"
    },
    {
        name : "Dhiraj",
        age : 21,
        hobby : "Motor Sports"
    }
]

console.log(arr[1].name)
console.log(arr[0].name)

console.log(Object.keys(myobj))
console.log(typeof(Object.keys(myobj)))
console.log(Object.values(myobj))
console.log(typeof(Object.values(myobj)))
console.log(Object.entries(myobj))
console.log(typeof(Object.entries(myobj)))

// hasOwnProperty() method : 
// Returns true if parameter provided is present as key in Object
console.log(myobj.hasOwnProperty("Interest")) 
console.log(myobj.hasOwnProperty("surname"))