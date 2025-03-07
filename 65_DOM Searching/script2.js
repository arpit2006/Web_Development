console.log("DOM Searching");
//Gives all the elements with the class name box
console.log(document.getElementsByClassName("box"))

//Gives all the elements with the class name container
console.log(document.getElementsByClassName("container"))

//Gives all the elements with the class name box
console.log(document.querySelectorAll(".box"))

//Gives all the elements with the class name container
console.log(document.querySelectorAll(".container"))

//Gives all the elements with the tag name div
console.log(document.getElementsByTagName("div"))

//Gives all the elements with the tag name input
console.log(document.getElementsByName("box"))

//Methods


        let div = document.createElement("div");
        div.innerHTML = "Hey I am Inserted <b> By Arpit </b>"
        div.setAttribute("class","created");
        document.querySelector(".container").append(div)
        document.querySelector(".container").prepend(div)
        document.querySelector(".container").after(div)

        div.insertAdjacentHTML("beforebegin","Arpit Rajendra Shirbhate")
        div.insertAdjacentHTML("afterbegin","Arpit  Shirbhate")