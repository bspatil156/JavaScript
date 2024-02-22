let languages = ["Java","Python","JavaScript","Swift","Ruby","Rust"]
// Below is a call back function, hence no name to the function
languages.forEach(function (index){
    console.log(index)
    // console.log(languages[index]) languages["java"], languages["Python"] are undefined
})

console.log()

languages.forEach( (item) => {
    console.log(item)
})

languages.forEach((index,element,array) =>{
    console.log(`index : ${index}, element : ${element}, array : ${array}`)
})

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
    console.log(`Language : ${Language.langName}`)
    console.log(`Extension of language : ${Language.extension}`)
})