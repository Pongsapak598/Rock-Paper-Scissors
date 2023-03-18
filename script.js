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

    } else {
        result ="Your answer doesn't seem right..."
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
let Button = document.getElementById('summitButton');

function whoWin() {
    if (playerPoint === 5) {
        document.getElementById("show-dead").innerHTML = "You're survived!";
        freezeGame();
    } else if (comPoint === 5) {
        document.getElementById("show-dead").innerHTML = "You're dead!";
        freezeGame();
    } else {
        document.getElementById("show-dead").innerHTML = "";
    }
}

function freezeGame() {
    Button.disabled = true;
}

function countPoint() {
    if (result === 'You win!') {
        playerPoint ++;
        document.getElementById("show-point").innerHTML = `Point<br />Player: ${playerPoint}<br />Com: ${comPoint}`;
        whoWin();
    } else if (result === 'You lose!') {
        comPoint ++;
        document.getElementById("show-point").innerHTML = `Point<br />Player: ${playerPoint}<br />Com: ${comPoint}`;
        whoWin();
    } else {
        document.getElementById("show-point").innerHTML = `Point<br />Player: ${playerPoint}<br />Com: ${comPoint}`;
        whoWin();
    }
}

function reset() {
    num = '';
    comAnswer = '';
    userValue = '';
    result = '';
    playerPoint = 0;
    comPoint = 0;
    document.getElementById('box').value = '';
    document.getElementById("show-answer").innerHTML = '';
    document.getElementById("show-point").innerHTML = '';
    document.getElementById("show-dead").innerHTML = "";
    Button.disabled = false;
}
