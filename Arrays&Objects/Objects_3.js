let book = {
    book_name : "Around the world in 80 Days",
    author_name : "Jules Verne",
    genre : "Adventure Fiction",
    price : 80
}

// Object destructuring : 
// Instead of accessing 'book.author_name' everytime, we use object de-structure.
// We can do object de-structure, by actual key name i.e. 'author_name' here.
let {author_name} = book
console.log(author_name)
// We can also provide our custom name using the syntax below.
let {author_name : a_name} = book
console.log(a_name)

// JSON : 
// JSON is represented as arrays and objects

// JSON using Object : 
// {
//     "name" : "Bhavesh",
//     "age" : 21,
//     "hobby" : "Reading"
// }

// JSON using arrays : 
// [
//     {(Object)},
//     {(Object)},
//     {(Object)}
// ]