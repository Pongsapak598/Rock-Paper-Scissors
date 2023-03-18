let num;
let comAnswer;

function comStart() {
    num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        comAnswer = 'rock';
    } else if (num === 2) {
        comAnswer = 'paper';
    } else if (num === 3) {
        comAnswer = 'scissors';
    } else console.log('comStart Error');
}

let userValue;

function getValue() {
    let container = document.getElementById("box").value;
    userValue = container.toLowerCase();
}

let result;

function process() {
    if (userValue === 'rock') {
        if (comAnswer === 'rock') {
            result ='Draw!';
        } else if (comAnswer === 'paper') {
            result ='You lose!';
        } else if (comAnswer === 'scissors') {
            result ='You win!';
        } else alert ('You must type Rock, Paper or Scissors!');

    } else if (userValue === 'paper') {
        if (comAnswer === 'rock') {
            result ='You win!';
        } else if (comAnswer === 'paper') {
            result ='Draw!';
        } else if (comAnswer === 'scissors') {
            result ='You lose!';
        } else alert ('You must type Rock, Paper or Scissors!');

    } else if (userValue === 'scissors') {
        if (comAnswer === 'rock') {
            result ='You lose!';
        } else if (comAnswer === 'paper') {
            result ='You win!';
        } else if (comAnswer === 'scissors') {
            result ='Draw!';
        } else alert ('You must type Rock, Paper or Scissors!');

    } else result ="Your answer doesn't seem right..."
}

function showResult() {
if (typeof result === 'string') {
    document.getElementById("show-answer").innerHTML = `Computer: ${comAnswer}<br />You: ${userValue}<br /><br />...${result}`;
  } else document.getElementById("show-answer").innerHTML = '';
}