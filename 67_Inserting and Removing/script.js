// document.querySelector(".box")
// <div class=​"box">​Hey I am a box​</div>​

//Inner HTML give Text inside the div 
// document.querySelector(".box").innerHTML
// 'Hey I am a box'

document.querySelector(".box").innerHTML
'Hey I am a box'
document.querySelector(".box").outerHTML
'<div class="box">Hey I am a box</div>'
document.querySelector(".container").outerHTML
'<div class="container">\n        <div class="box">Hey I am a box</div>\n    </div>'
document.querySelector(".container").tagName
'DIV'
//Tag name is applicable to an element only

document.querySelector(".container").nodeName
//Applicable for any node eg Comment text

document.querySelector(".container").textContent
//Gives text inside the parent container

document.querySelector(".box").innerHTML = "Hey I am MEn"
//It will change context of all box class

document.querySelector(".box").attributes
//Shows all attributes of an element

document.querySelector(".box").removeattributes("attributes to be removed")

document.designMode = "on"
//Allows you to edit websites

//Insertion Methos
