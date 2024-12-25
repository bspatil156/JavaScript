function calcArrayLength(array) {
    let count = 0
    array.forEach(element => {
        count++
    })
    console.log(`Length of the array is ${count}`)
}

calcArrayLength([12,10,13,56,75,93,63,58,35])