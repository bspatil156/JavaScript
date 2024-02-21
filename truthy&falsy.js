let arr = []
if(arr){
    console.log("Empty array is a truthy value")
}
else{
    console.log("This will never be displayed!!!")
}

// truthy values : 
// Any filled string is a truthy value
// "0", "false", " ", [], {}, function(){}

let obj = {}
if(Object.keys(obj).length === 0){
    console.log("Object is empty")
}

// falsy values : 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN 
if(NaN){
    console.log("NaN is a falsy value")
}
else{
    console.log("'If' did'nt execute because NaN is a falsy value!!!")
}

