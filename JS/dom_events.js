let btn = document.querySelector("button");
console.dir(btn);
//onclick
// btn.onclick = function() { 
//     console.log("button clicked!");          //first option
// }

function sayHello() {
    alert("button clicked!");
}
btn.onclick = sayHello;