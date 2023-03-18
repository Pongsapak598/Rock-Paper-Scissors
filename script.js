let num;
let comAnswer;

function comStart() {
    num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        comAnswer = 'Rock';
    } else if (num === 2) {
        comAnswer = 'Paper';
    } else if (num === 3) {
        comAnswer = 'Scissors';
    } else console.log('comStart Error');
}

let userValue;

function getValue(value) {
    userValue = value;
}

let result;

function process() {
    if (userValue === 'Rock') {
        if (comAnswer === 'Rock') {
            result ='Draw!';
        } else if (comAnswer === 'Paper') {
            result ='You lose!';
        } else if (comAnswer === 'Scissors') {
            result ='You win!';
        } else alert ('You must type Rock, Paper or Scissors!');

    } else if (userValue === 'Paper') {
        if (comAnswer === 'Rock') {
            result ='You win!';
        } else if (comAnswer === 'Paper') {
            result ='Draw!';
        } else if (comAnswer === 'Scissors') {
            result ='You lose!';
        } else alert ('You must type Rock, Paper or Scissors!');

    } else if (userValue === 'Scissors') {
        if (comAnswer === 'Rock') {
            result ='You lose!';
        } else if (comAnswer === 'Paper') {
            result ='You win!';
        } else if (comAnswer === 'Scissors') {
            result ='Draw!';
        } else alert ('You must type Rock, Paper or Scissors!');

    } else {
        comAnswer = '';
    }
}

function showResult() {
if (typeof result === 'string') {
    document.getElementById("show-answer").innerHTML = `Computer: ${comAnswer}<br />You: ${userValue}<br /><br />...${result}`;
  } else document.getElementById("show-answer").innerHTML = '';
}

let playerPoint = 0;
let comPoint = 0;
let buttons = document.querySelectorAll('#value-button');

function gameoverText() {
    if (playerPoint === 5) {
        document.getElementById("show-dead").innerHTML = "You've survived!";
        freezeGame();
    } else if (comPoint === 5) {
        document.getElementById("show-dead").innerHTML = "You're dead!";
        freezeGame();
    } else {
        document.getElementById("show-dead").innerHTML = "";
    }
}

function freezeGame() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function countPoint() {
    if (result === 'You win!') {
        playerPoint ++;
        document.getElementById("show-point").innerHTML = `Point<br />Player: ${playerPoint}<br />Com: ${comPoint}`;
        gameoverText();
    } else if (result === 'You lose!') {
        comPoint ++;
        document.getElementById("show-point").innerHTML = `Point<br />Player: ${playerPoint}<br />Com: ${comPoint}`;
        gameoverText();
    } else {
        document.getElementById("show-point").innerHTML = `Point<br />Player: ${playerPoint}<br />Com: ${comPoint}`;
        gameoverText();
    }
}

function reset() {
    num = '';
    comAnswer = '';
    userValue = '';
    result = '';
    playerPoint = 0;
    comPoint = 0;
    document.getElementById("show-answer").innerHTML = '';
    document.getElementById("show-point").innerHTML = '';
    document.getElementById("show-dead").innerHTML = "";
    buttons.forEach(button => {
        button.disabled = false;
    });
}
