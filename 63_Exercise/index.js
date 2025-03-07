
let a = 6;
let factorial = 1;
for(i = 1; i<=a;i++){
    factorial = factorial * i;
}
console.log("Factorial is..: " + factorial)

let num = [1,2,3,4,5,6,7,8,9,10];
const fact = (a,b) => {
    return a*b;
}
console.log("Factorial is..: " + num.reduce(fact))