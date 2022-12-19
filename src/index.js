// import { navbar } from "../components/navbar.js";
// console.log(navbar())
// document.getElementById("navbar").innerHTML=navbar()


document.querySelector(".icon").addEventListener("click",myFunction)
let changer=document.querySelector(":root")
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
const toggler=()=>{
    let catcher=document.getElementById("button")
    let body=document.getElementById("body")
if(catcher.className=="notchanged"){
  let background_color=getComputedStyle(changer)
  changer.style.setProperty("--color","black")
  changer.style.setProperty("--background-color","#ddd6f3")
catcher.className="changed"
}else{
    changer.style.setProperty("--color","white")
  changer.style.setProperty("--background-color","#614385")
  catcher.className="notchanged"
} 
if(body.className=="changing"){
  let background_color=getComputedStyle(body)
  changer.style.setProperty("--color1","white")
  changer.style.setProperty("--background-color1","#161627")
body.className="not changing"
catcher.innerText="turn to light mode"

}else {

  let background_color=getComputedStyle(body)
  changer.style.setProperty("--color1","black")
  changer.style.setProperty("--background-color1","fff0f5")
body.className="changing"

catcher.innerText="turn to dark mode"
}

}
document.querySelector("#button").addEventListener("click",toggler)