// console.log("hey");
// let a=6;
// console.log(a*a);
let x= document.getElementById("ele1");
let y= document.getElementById("ele2");

x.addEventListener("click", function(){
    x.style.color="yellow";
    x.style.background="red";
})
y.addEventListener("mouseenter", function(){
    y.style.color="yellow";
    y.style.background="red";
})
y.addEventListener("mouseleave", function(){
    y.style.color="yello";
    y.style.background="green";
})
// setTimeout(function(){
//     x.innerHTML="changed";
//     x.style.background="red";
// },2000);
// let button=document.getElementById("#addbtn");
// button.addEventListener("clicked",function(){
//     button.style.background="red";
// });
