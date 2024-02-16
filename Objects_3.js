let book = {
    book_name : "Around the world in 80 Days",
    author_name : "Jules Verne",
    genre : "Adventure Fiction",
    price : 80
}

// Object destructuring : 
let {author_name : a_name} = book
console.log(a_name)