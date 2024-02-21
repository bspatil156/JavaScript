// Syntax : 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for(let i = 1; i <= 10;i++){
    console.log(i)
}

// Printing tables
for(let i = 1; i <= 10; i++){
    console.log(`Table of ${i} : `)
    for(let j = 1;j <= 10;j++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
    console.log()
}

// Printing series upto 15 : 
for(let i = 1;i<=15;i++){
    if(i == 5){
        console.log("Five has been detected")
    }
    console.log(i)
}

// break in for loop : 
for(let i = 1;i<=15;i++){
    if(i == 5){
        console.log("Five has been detected")
        break
    }
    console.log(i)
}

// continue in for loop : 
for(let i = 1;i<=15;i++){
    if(i == 5){
        console.log("Five has been detected")
        continue
    }
    console.log(i)
}

// Multiple of 5 : 
for(let i = 1;i<=15;i++){
    if(i % 5 == 0){
        console.log("This is a multiple of five")
        continue
    }
    console.log(i)
}
