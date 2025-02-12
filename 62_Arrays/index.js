console.log("Array in JS..! ")
//Strings are immutable in JS
//Arrays are mutable in JS
// let arr = [1,2,4,5,6,7]

// console.log("Initial array before updation..: ")
// console.log(arr)

// // console.log(arr.length)
// //Updating the value at 0 index
// arr[0] = "Arpit"

// console.log('Arrays after updation..: ')
// console.log(arr)

// // console.log(arr[0])
// // console.log(arr[1])
// // console.log(arr[2])
// // console.log(arr[3])

// console.log(arr.toString())

// // join is use to insert a string between each element of array
// console.log(arr.join("-"))

// //return last element 
// console.log(arr.pop())

//push insert value at last
// console.log(arr.push(200))
// console.log(arr.push("Harry"))
// console.log(arr)

// Shift --> removes 0 th element value
// console.log(arr.shift())
// console.log(arr)

// UnShift --> add elements 0 th element value
// console.log(arr.unshift("Arpit"))
// console.log(arr)

//Concatination Array
// let ar1 = ["Arpit","XYX","XYZ"];
// let arr = [1,2,4,5,6,7];
// console.log(arr.concat(ar1));

// let arr = [1,2,4,5,6,7];
// // for (let i = 0;i < arr.length;i++){
// //     const element = arr[i];
// //     console.log(element);
    
// // }

// arr.forEach((value,index,arr)=> {
//     console.log(value,index,arr);
    
// })
// let obj  = {
//     a:1,
//     b:2,
//     c:3
// }
// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element);
        
        
//     }
// }
// let arr = [1,2,4,5,6,7]

// for (const element of arr) {
//     console.log(element);
// }

// let arr = [1,2,4,5,6,7];
// let arr1 = [];
// // for (let index = 0; index < arr.length; index++) {
// //     const element = arr[index];
// //     arr1.push(element**2)
    
// // }

 // console.log(arr1);

// // let newArr = arr.map((e) => {
// //     return e**2;
// // })
// // console.log(newArr);
// let arr = [1,2,4,5,6,7]
// const red = (a,b) => {
//     return a * b;
// }
// console.log(arr.reduce(red));
