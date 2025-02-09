console.log("Hey this is Variable in JS ");

//let is a block scope variable
// while VAR is a function scope variable
let a = 10; // let sassign a global value
a = 20;
// it is allowed to reassign the value of a variable
let b = 20;
let c = "Arpit";
// let 55a = "Aaditya"; Not Allowed

{
    let a = 99;
    console.log(a)
    // it will print bot a but the block a first 
}


// This is Not allowed in JS
// const d = 20;
// d = d + 1

// instead of let use let

console.log(a + b)
console.log(typeof a , typeof b,typeof c)



let x = "Harry Bhai";
let y = 22;
let e = 3.55;
const z = true;
let q = undefined;
let r = null;
// from predefines type of null is set to be object which cannot be changed so type of null is object

console.log(x,y,e,z,q,r)
console.log(typeof x,typeof y ,typeof e ,typeof z ,typeof q ,typeof r)

// object is combination of key and value pair

let o = {
    name : "Arpit",
    age : 20,
    "job role" : "Student",
    "is_handsome" : true

    // Here we can use any type of value in object

    // here job role is in double quotes because it has space and js will not identify the space so we have to put it in double quotes 
}
console.log(o)
o.salary  = " 100Croes";
// inserting the key and value pair  values
console.log(o)