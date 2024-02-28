let arr1 = [1,2,3,4,5,6,7,8,9,10]
let nums1 = arr1.map( (num) => num * 4)
console.log(nums1)

let arr2 = ["Rolls Royce","Mercedes","Audi","Mustang"]
let nums2 = arr2.map( (num) => `${num} is a good car`)
console.log(nums2)

let arr3 = [{name1 : "Bhavesh"},{name2 : "Dhiraj"},{ name3 : "Pratik"},{name4 : "Sahil"}]
let nums3 = arr3.map( (num) => `${num} contains the name of a boy!!!`)
console.log(nums3)

let arr4 = [0,1,0,1,1,1,0,0]
let nums4 = arr4.map( (num) => num && 1)
console.log(nums4)

