let random = Math.random();
let a = prompt("Enter Number 1..: ")
let b = prompt("Enter Number 2..: ")
let c = prompt("Enter Operation..: ")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}



if( random > 0.1){
    alert(`The Result ${eval(`${a} ${c} ${b}`)}`)

}

else{
    c = obj[c];
    alert(`The Result ${eval(`${a} ${c} ${b}`)}`)

}