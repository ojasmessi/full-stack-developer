function sum(...args){
    for (let i = 0; i < args.length; i++) {
        console.log(`you gave us ${args}`);
        console.log("you gave us", args[i]);
        
    }
}


// DESTRUCTURING: keeps values of arrays in multiple variables

let heros = ["spiderman", "batman", "hulk","wonder woman"];
let [winner,runnerup] = heros;


// DESTRUCTURING in objects
const studentdbn = {
    name: "ojas",
    age :21 ,
    country:"india",
    username: "ojasmp",
    password: "ojas@123",

};

let {username, password} = student;