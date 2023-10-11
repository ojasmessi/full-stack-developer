function Hello() {
    console.log("hello");
}
// Hello();             // logs "hello" to the console

function Print1to5() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
// Print1to5();            //for loop


function isAdult() {
    let age = 100;
    if (age >= 18) {
        console.log("he can drive");
    } else {
        console.log("he cannot drive")
    }
}

// isAdult();

function printPoem() {
    console.log("twinkle twinkle little star");
    console.log("how I wonder what you are");
}
// printPoem();


//function to roll a dice 1 to 6
function Rolldice() {
    let rand = Math.floor(Math.random * 6) + 1;
    console.log(rand);
}

// Rolldice();


function calAvg(a, b, c) {
    console.log("the average of three numbers are:", (a + b + c) / 3);
}
// calAvg(100, 15, 5);


function printTable(n) {
    for (let i = n; i <= n * 10; i += n) {
        console.log(i);

    }

}
// printTable(3);
// console.log("---------------------");
// printTable(2);
// console.log("---------------------");
// printTable(10);


//Return keyword
function sum(a, b) {
    return a + b;    // it returns the value in console
}


//Q1
function getSumOfNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;

    }
    return sum;
}
// getSumOfNumbers();

//Q
let greet = "hello";    // Global Scope

function changeGreet() {
    let greet = "namaste";     // Function Scope  
    console.log(greet);
    function innerGreet() {    // Lexical scope
        console.log(greet);    // this innerGreet will not execute cuz the function have not been called.
    }
}

console.log(greet);
changeGreet();