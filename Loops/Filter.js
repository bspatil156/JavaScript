let arr = ["Java","JavaScript","Python","Ruby","Swift","Rust"]

// forEach does'nt return any value
// Instead it iterates every element
let values = arr.forEach( (element) =>{
    console.log(element)
    return element
})

console.log(values)

// filter() method : 
// filter returns the array of elements in the array based on the condition
// filter checks the condition and return the array of elements that proove the condition as true
// Operations cannot be performed on filter
let fillter1 = arr.filter((element) =>{
    return element
})
console.log(fillter1)

let fillter2 = arr.filter( (element) => element == "JavaScript")
console.log(fillter2)

let obj = [
    {
        bname : "Wings Of Fire",
        author : "Dr.A. P. J. Abdul Kalam",
        genre : "Biography"
    },
    {
        bname : "Around the world in 80 Days",
        author : "Julius Verne",
        genre : "Fiction"
    },
    {
        bname : "The Secret",
        author : "Laura E Bryne",
        genre : "Philosophy"
    },
    {
        bname : "Gently Falls the Bakula",
        author : "Dr.Sudha Murthy",
        genre : "Fiction"
    },
    {
        bname : "The Alchemist",
        author : "Paulo Coelho",
        genre : "Novel"
    },
    {
        bname : "The art of War",
        author : "Sun Tsu",
        genre : "Philosophy"
    },
    {
        bname : "Boardroom",
        author : "Achyut Godbole and Atul Kahate",
        genre : "Informative"
    },
    {
        bname : "Ignited Minds",
        author : "Dr.A. P. J. Abdul Kalam",
        genre : "Motivational"
    },
    {
        bname : "Twenty Thousand Stiches",
        author : "Dr.Sudha Murthy",
        genre : "Fiction"
    }
]

let philosophy = obj.filter( (element) => element.genre == "Philosophy")
console.log(philosophy)

let mrssm = obj.filter( (element) => element.author == "Dr.Sudha Murthy")
console.log(mrssm)


// filter does'nt return any array operation performed on it 
// Instead it returns the original array
let myarr = [1,2,3,4,5,6,7,8,9,10]
let number = myarr.filter( (num) => num * 2)
console.log(number)

let num = myarr.filter( (num) => {
    if(num>3){
        return (num * 4)
    }
    else{
        return (num * 2)
    }
})
console.log(num)

let num2 = myarr.filter( (num) => {
    if(num>5){
        return num
    }
    else{
        return undefined
    }
})
console.log(num2)