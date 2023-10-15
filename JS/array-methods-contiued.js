let array1 = [1,2,3,4,5];

// FOR EACH
function print(el) {
    console.log(el);
}

array1.forEach(print);

//OR
array1.forEach(function print(el) {
    console.log(el);
})





//MAP
let double = array1.map((el) => {
    return el * el
});






// FILTER
let nums = [2,4,1,6,8,9,13,15,62,89,100];

let even = nums.filter((el) => { 
return el % 2 == 0;   //even -> true, odd -> false
});

[1,2,3,4].every ((el) =>
el % 2 == 0);
//false
[2,4].every ((el) =>
el % 2 == 0);
//true







// MAX inarray
let num1 = [2,3,4,5,6,7,1];
let result = num1.reduce((max, el) => {
if (el > max) {
    return el;
} else {
    return max;
}
})






//DESTRUCTURING

let names = ["ojas", "anju","ram", "sita"];
// let winner = names[0];
// let runnerup = names[1];
// let [winner, runnerup] = names;
let [winnerofLudo, runnerupofLudo, ...others] = names;
console.log("catch me if you can! LOL");



const Student = {
    name: "ojas",
    age: 23,
    username: "oja214paeg@gmail.com",
    password: "abcd"
}

let {username,password} = Student;
let {username: user,password: secret} = Student;