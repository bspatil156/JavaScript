let languages = ["Java","Python","JavaScript","Swift","Ruby","Rust"]
// Below is a call back function, no name to the function
languages.forEach(function (index){
    console.log(index)
    // console.log(languages[index]) languages["java"], languages["Python"] are undefined
    console.log(languages[0], languages[1], languages[2])
    console.log(`${index[0]} : ${index}`)
})

console.log()

// forEach using arrow function
languages.forEach( (item) => console.log(item))

languages.forEach((element,index,array) =>{
    console.log(`index : ${index}, element : ${element}, array : ${array}`)
})

console.log()

// forEach() does'nt return anything
let forEachReturn = languages.forEach((lang) =>{
    for(i = 1;i<=5;i++){
        return(`${i} : ${lang}`)
    }
})
console.log(forEachReturn)

let langArr = [
    {
        langName : "Java",
        extension : ".java"
    },
    {
        langName : "JavaScript",
        extension : ".js"
    },
    {
        langName : "Python",
        extension : ".py"
    }
]

langArr.forEach((Language) =>{
    console.log(Language)
    console.log(`Language : ${Language.langName}`)
    console.log(`Extension of language : ${Language.extension}`)
})

// Operations using forEach Loop : 
// forEach() doesn't return anything, hence return type is undefined
let arr5 = [0,2,4,6,8,10]
let operation = arr5.forEach((number) => number * 2)
console.log(operation)