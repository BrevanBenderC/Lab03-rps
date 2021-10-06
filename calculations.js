export function didUserWin(userChoice, comChoice){
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

