// // console.dir(document.querySelector("#description"));

// // console.dir(document.querySelector("h1"));

// // console.dir(document.querySelectorAll("p"));


// // //practice Qs
// // //<p> with red text
// let para1 = document.createElement('p');     // creates element para
// para1.innerText = ("Hey im red!");           // adds content as innerText
// document.querySelector("body").append(para1)  //stores value in a variable   // appends para1 in the HTML 
// // para1.style.color = "red";                   // adds color red to the text
// para1.classList.add("red");                      // adding the new class

// //<h3> with blue text
// let heading3 = document.createElement('h3');
// heading3.innerText = 'Im Blue h3!';
//  document.querySelector("body").append(heading3); 
// heading3.classList.add("blue");

// //create div,p,h1 inside it with background color and border black
// let div = document.createElement("div");
// let p = document.createElement("p");
// let heading1 = document.createElement("h1");

// heading1.innerText = ("im in div");
// p.innerText = ("ME TOO");

// div.append(heading1);
// div.append(p);

// div.classList.add("div");
// document.querySelector("body").append(div);


//Q1
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText  = "Click me!"
document.querySelector("body").append(button);
document.querySelector("body").append(input);

//Q2
button.setAttribute("id","btn");
input.setAttribute("placeholder","username");

//Q3
let btn = document.querySelector("#btn");
btn.classList.add("btn");

//Q4
let h1 = document.createElement("h1");
h1.innerHTML = "<u> DOM Practice </u>";           // underlines the text using innerHTML
document.querySelector("body").prepend(h1);     // adds to FIRST line
// document.querySelector("body").append(h1);   // adds to LAST line

// h1.style.color = "purple";
h1.classList.add("h1");

//Q5
let para2 = document.createElement("p");
para2.innerHTML = "Apna College <b> Delta </b> Practice";

document.querySelector("body").append(para2);