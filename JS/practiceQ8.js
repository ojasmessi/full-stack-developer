// //Guessing Game

// const max = prompt("enter max number");

// const random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("guess random number");

// while (true) {
//     if (guess == "quit") {
//         console.log("you quit");
//         break;
//     }

//     if (guess == random) {
//         console.log("you guessed it right! the number is", random);
//         break;
//     } else if (guess < random) {
//         guess = prompt("the number was too small");
//     } else {
//         guess = prompt("the number was too large");
//     }
//     // else {
//     //     guess = prompt("your guess is wrong. please try again!")
//     // }
// }