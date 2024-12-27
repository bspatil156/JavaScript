// Singleton Object Declaration : 
let singletonObj = new Object()

// Object Literal Declaration : 
let literalObj = {}
console.log(literalObj)

// Nested Objects and accessing them : 
literalObj.firstname = "Bhavesh"
literalObj["middle name"] = "Sanjay"
literalObj.surname = "Patil"
literalObj["Interest"] = {
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

console.log(literalObj)
console.log(literalObj.Interest["leisure activity"].Outdoor["adventure activity"])
console.log(literalObj.Interest["leisure activity"].Indoor.Creativity)

// Joining two Objects : 

// 1) assign() method : 
// Combines two or more Objects
// First paramenter provided is a destination or target where the objects are to be combined
// The remaining parameters are the objects that are to be combined 
let obj1 = {a : "A", b : "B", c : "C"}
let obj2 = {d : "D", e : "E", f : "F"}
let obj3 = {g : "G", h : "H", i : "I"}

let obj4 = {obj1,obj2}
console.log(obj4)

let target = {}
Object.assign(target,obj1,obj2,obj3)
console.log("This is joining of Objects by assign() method : ",target)

// 2)'...' spread operator : 
// Spread operator also join the objects
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

// keys() method : 
// Returns keys of the Object in Array
console.log(Object.keys(literalObj))
console.log(typeof(Object.keys(literalObj)))

// values() method : 
// Returns values of the Object in Array
console.log(Object.values(literalObj))
console.log(typeof(Object.values(literalObj)))

// entries() method : 
// Returns the entries of Object in array : 
console.log(Object.entries(literalObj))
console.log(typeof(Object.entries(literalObj)))

// hasOwnProperty() method : 
// Returns true if parameter provided is present as key in Object
console.log(literalObj.hasOwnProperty("Interest")) 
console.log(literalObj.hasOwnProperty("Hobby"))
console.log(literalObj.hasOwnProperty("surname"))

console.log(obj1.hasOwnProperty("a"))
console.log(obj1.hasOwnProperty("A"))

// console.log(literalObj.Interest?["leisure activity"].Outdoor)
console.log(literalObj.Interest?.Games)
// The '?' is used in case if it is not known whether 'Interest' exists or not.
// There may be cases of apihandling where such a situation may appear.