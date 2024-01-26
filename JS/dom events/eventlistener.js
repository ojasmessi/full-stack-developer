let btn1 = document.querySelectorAll("button");
for (btns of btn1) {
    // btns.addEventListener("click", sayHello); 
    // btns.addEventListener("click", sayName);
    btns.addEventListener("dblclick", function(){
        console.log("you double clicked!");
    });
};
function sayHello() {
    alert("Hello!");
}
function sayName() {
    console.log("OP!");
}