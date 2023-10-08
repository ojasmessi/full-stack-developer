// // console.log("1");
// // console.log("2");
// // console.log("3");
// // console.log("4");
// // console.log("5");

// // for(let i = 10; i<=5; i--){
// //     console.log(i);
// // }
// console.log("Odd numbers");
// for(let i=1; i<=15; i=i+2){
//     console.log(i);
// }


// console.log("Even numbers");
// for(let i=2; i<=14; i=i+2){
//     console.log(i);
// }

// console.log("Tables");
// let n = prompt("Enter the number for the table:");
// n = parseInt(n);
// for (let i = n; i <=n*10; i=i+n) {
//     console.log(i);
    
// }

//nested loop
for(let i=1; i<=3; i++ ){
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}


//while loops
let i = 1;
while (i<=5) {
    console.log(i)
}

//break
const favmovie = "don";

let guess = prompt("Guess the movie:");

while (guess != favmovie) {
    if (guess == "quit") {
        console.log("you quit")
        break;
    }
    guess = prompt("wrong guess.try again!");
    
}

if (guess == favmovie) {
    console.log("congo!")
}
