let button = document.getElementById("btn")

button.addEventListener("click",()=>{
    alert("Button Clicked")
})
// button.addEventListener("mouseover",(e)=>{
//     e.stopPropagation()
//     alert("Mouse Over")
//     document.querySelector(".btn").style.background = "green"
// })
button.addEventListener("contextmenu",()=>{
    alert("Double Click is Enabled")
    document.querySelector(".child").innerHTML = "Double Click is Working"
    document.querySelector(".child").style.backgroundColor = "green"
})
button.addEventListener("focusin",()=> {
    document.querySelector(".child").innerHTML = "I am Clicked..! "
    document.querySelector(".child").style.backgroundColor = "purple"
})