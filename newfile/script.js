const result=document.getElementById("jk");
console.log(result);
result.innerHTML="Hello World";
const result1=document.getElementsByClassName("p1");
result1[1].innerHTML="jitendra";
result1[0].innerHTML="chauhan";
 
const result=document.getElementById("jk").getAttribute;
document.getElementById()



const heading=document.createElement("<h2>");
const bodytag=document.getElementsByTagName("body");
bodytag[0].append(heading);
heading.innerText="hello";
heading.style.backgroundColor="red";

//make seperate file for this mouse function//
 function OnClick(){
    console.log("clicked");
 }
 function OnMouseUp(){
    console.log("on mouse up");
 }
 function OnMouseDown(){
    console.log("on mouse down");
 }
 function OnMouseOver(){
    console.log("mouse over");
 }
 function OnMouseRemove(){
    console.log("mouse remove");
 }
 function OnMouseOut(){
    console.log("mouse out");
 }
//keyboard event//
 function onKey(){
    
 }
//form event//
  function myFunction(){
    alert("window loaded");
}