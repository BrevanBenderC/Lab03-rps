//import { didUserWin } from "./calculations";

import { didUserWin } from './calculations.js';

//set variables

const btn = document.getElementById('play');
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('loses');
const hidden = document.getElementById('hidden');
let ifWin = document.getElementById('ifWin');
let ifLose = document.getElementById('ifLose');
let ifdraw = document.getElementById('ifDraw');
let wins = 0;
let loses = 0;
const reset = document.getElementById('reset');

//button fun

btn.addEventListener('click', ()=>{
    const userChoice = document.querySelector('input[type=radio]:checked').value;
    const comChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
    document.getElementById('ifDraw').innerHTML = " "
    document.getElementById('ifLose').innerHTML = " "
    document.getElementById('ifWin').innerHTML = " "
  if (userChoice === comChoice){
    document.getElementById('ifDraw').innerHTML = "Great minds think alike. Go again!"
  }
  if(didUserWin(userChoice, comChoice)){
    wins++
    document.getElementById('ifWin').innerHTML = `You Win! You chose ${userChoice} and the com chose ${comChoice}.`
  } else {
    loses++
    document.getElementById('ifLose').innerHTML = `You Lose! You chose ${userChoice} and the com chose ${comChoice}.`
  }
/*if (userChoice === "paper") {
    if (comChoice === "rock") {
       document.getElementById('ifWin').innerHTML = "Your paper beat com's rock." 
      wins++;
       return true;
    } else {
        if (comChoice === "scissors") {
           document.getElementById('ifLose').innerHTML = "Your paper was beaten by com's scissors." 
           loses++;
           return false;
        }
    }
}
if (userChoice === "scissors") {
    if (comChoice === "rock") {
        document.getElementById('ifLose').innerHTML = "Your paper was beaten by com's scissors"
        loses++;
        return false;
     } else {
        if (comChoice === "paper") {
          document.getElementById('ifWin').innerHTML = "Your scissors beat com's paper."
          wins++;
          return true;
        }
    }
}
if (userChoice === "rock") {
    if (comChoice === "scissors") {
      document.getElementById('ifWin').innerHTML = "Your rock beat com's scissors." 
      wins++;
      return true;
     } else {
        if (comChoice === "paper") {
          document.getElementById('ifLose').innerHTML = "Your rock was beaten by com's paper." 
          loses++;
          return false;
        }
    }
}

winSpan = Number(wins);
lossSpan = Number(loses); */
winSpan.textContent = wins
lossSpan.textContent = loses

})
reset.addEventListener('click', ()=>{
  document.getElementById('ifWin').innerHTML = ' '
  document.getElementById('ifLose').innerHTML = ' '
  document.getElementById('ifDraw').innerHTML = ' '
})