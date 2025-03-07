console.log("Arpit")
// let bhupendra = document.getElementsByClassName("box")
// console.log(bhupendra)
// bhupendra[2].style.backgroundColor = "red";
//Any div containing id red it will be selected
// document.getElementById("red").style.backgroundColor = "green"

//Query Selector
//where first class will match it will apply to that only
//Query selector is for only one element
// document.querySelector(".box").style.backgroundColor = "violet"

//It will return list or collection of HTML Element of all box class

console.log(document.querySelectorAll(".box") )
//If we want to give color to all element we cant give directly bcoz the selector all returs a list so for giving color we have to run a for loop or any

document.querySelectorAll(".box").forEach(e =>{
    console.log(e)
    e.style.backgroundColor = "blue"
})

//Gives all divs (all even container)
console.log(document.getElementsByTagName("div"))


