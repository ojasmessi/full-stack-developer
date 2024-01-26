let btn = document.querySelector("button");
let p = document.querySelector("p");
let h3 = document.querySelector("h3");
let h1 = document.querySelector("h1");

btn.addEventListener("click", function(){
    console.log(this);
    console.log(this.innerText);
    console.dir(this);
    this.style.backgroundColor = "blue";
});

function changeColor(){
    this.style.backgroundColor = "blue";
    console.dir(this.innerText); 
};

btn.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);

