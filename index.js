import chalk from 'chalk';
import readlinesync from 'readline-sync'

let score = 0;

const highScores = [{
  name: "Prajwal",
  score: 3
}, {
  name: "Mike",
  score: 2
}];

const username = readlinesync.question(`${chalk.blue('Hi')}, what's your name? `);
console.log('Hi ' +  `${chalk.red(username)}` + " , let's see how well you know me?");

function checkAnswer(question, answer) {
  const useranswer = readlinesync.question(question);

  if(useranswer == answer) {
    console.log('You are right!');
    score = score + 1;
  } else {
    console.log('You are wrong!');
    score = score - 1;
  }
}

const questions = [{question: `Where do ${chalk.underline.green('Prajwal')} lives? `, answer: "India"}, {question: `Do ${chalk.underline.bgBlue('Prajwal')} have any pets? `, answer: "No"}, {question: `What's ${chalk.underline.bold.red('Prajwal')}'s birthplace? `, answer: "Hyderabad"}, {question: `Is ${chalk.black('Prajwal')} a working professional?`, answer: "Yes"}, { question: "What's Prajwal's favourite sport?", answer: "BJJ"}];

for(let i = 0; i < questions.length; i++) {
  checkAnswer(questions[i].question, questions[i].answer);
}

console.log('Your final score is: ', score);

for(let i = 0; i < highScores.length; i++) {
  const highScore = highScores[i].score;
  const name = highScores[i].name;

  if(score > highScore) {
    console.log(`Yayy! ${chalk.green(username)} you have broken ${chalk.underline.green(name)}'s highscore`);
  }
}