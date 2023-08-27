// import chalk from 'chalk';
var readlineSync = require("readline-sync");
// var chalk = require("chalk");

var userName = readlineSync.question("May i know ur name?");
console.log("********************");
console.log(
  "Hello! " + userName + ". How Well do you know me?... (Answer in Title Case)"
);

console.log("********************");
console.log("-------------------");

var score = 0;

function play(question, answer) {
  var userAns = readlineSync.question(question);

  if (answer === userAns) {
    score += 1;
  }
}
function ans(question, answer) {
  console.log(question);
  console.log(answer);
}

// play("is this working", "yes");

var questions1 = [
  {
    question: "What is my full name?",
    answer: "Akshit Yadav Aesham",
  },
  {
    question: "Am i a vegetarian?",
    answer: "Yes",
  },
  {
    question: "Do i have siblings?",
    answer: "Yes",
  },
  {
    question: "What is the brand of Mobile Phone?",
    answer: "Real Me",
  },
  {
    question: "Which sport i like the most?",
    answer: "Swimming",
  },
];

// console.log(questions2);

// for (var i=0; i<10; i++) {
//   if (i<5) {
//     play(questions1[i].question, questions1[i].answer);
//     console.log("-------------------");
//   }
//   else {
//     if (i===5) {
//       console.log("$$$$$$$$$$$$$$$$$$$");
//     console.log("$$$$$$$$$$$$$$$$$$$");
//     console.log("Gear up! It's Level 2!!");
// console.log("$$$$$$$$$$$$$$$$$$$");
//     console.log("$$$$$$$$$$$$$$$$$$$");
//     }
//     if (score>highScore) {
//       console.log("Yay!! You beat the highscore!");
//       highScore = score;
//     }
//     play(questions2[i-5].question, questions2[i-5].answer);
//     console.log("-------------------");
//   }
// }

for (var i = 0; i < 5; i++) {
  if (i < 5) {
    play(questions1[i].question, questions1[i].answer);
    console.log("-------------------");
  }
}

console.log("Thank You!");
console.log("Current Score: " + score);
