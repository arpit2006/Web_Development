let button = document.getElementById("butn")
button.addEventListener("click",() =>{
    // alert("Button was Clicked")

    //Content Will be changed
    document.querySelector(".box").innerHTML= 
    "Button was hitted hard"
})

button.addEventListener("dblclick",() =>{
    document.querySelector(".box").innerHTML = 
    "Hey I am Double Click";
})
button.addEventListener("contextmenu",()=>{
    //Works only on right click
    alert("Right Click is Enabled")
    document.querySelector(".box").style.backgroundColor = "green";
    document.querySelector(".box").innerHTML = "Right Click is Working..! "
})

button.addEventListener("keydown",(e)=>{
    console.log(e,e.key)
    //prints the key pressed with its code  if printed
})