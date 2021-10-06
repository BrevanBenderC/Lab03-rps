//import { didUserWin } from "./calculations";

const btn = document.getElementById('play');
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const hidden = document.getElementById('hidden')

let wins = 0;
let losses = 0;

btn.addEventListener('click', ()=>{
  losses++;
  const userChoice = document.querySelector('input[type=radio]:checked');
   const comChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random()*4)]
  console.log(comChoice)
  if (userChoice === comChoice){
    return draw
}
if (userChoice === "paper") {
    if (comChoice === "rock") {
        return true;
    } else {
        if (comChoice === "scissors") {
            return false;
        }
    }
}
if (userChoice === "scissors") {
    if (comChoice === "rock") {
        return false;
     } else {
        if (comChoice === "paper") {
            return true;
        }
    }
}
if (userChoice === "rock") {
    if (comChoice === "scissors") {
        return true;
     } else {
        if (comChoice === "paper") {
            return false;
        }
    }
}




}



)