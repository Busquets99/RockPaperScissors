function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choice;
    // 0 = rock; 1 = paper; 2 = scissors;
}

function getPlayerChoice() {
    let choice = prompt("Rock Paper or Scissors?");
    return choice.toUpperCase();
}

function playRound(playerSelec, computerSelec){

    let playerValue = -1;

    switch(playerSelec) {
        case "ROCK":
            playerValue = 0;
            break;
        case "PAPER":
            playerValue = 1;
            break;
        case "SCISSORS":
            playerValue = 2;
            break;
        default:
    }

    console.log("Player:", playerSelec);
    switch(computerSelec) {
        case 0:
            console.log("Comp:Rock");
            break;
        case 1:
            console.log("Comp:Paper");
            break;
        case 2:
            console.log("Comp:Scissors");
            break;
        default:
            console.log("Broken")
    }
    
    switch(playerValue) {
        case computerSelec:
            console.log("Tie");
            break;
        case 0:
            if(computerSelec === 1)
                console.log("Lose");
            else
                console.log("Win");
            break;
        case 1:
            if(computerSelec === 0)
                console.log("Win");
            else
                console.log("Lose");
            break;
        case 2:
            if(computerSelec === 0)
                console.log("Lose");
            else
                console.log("Win");
                break;
    }



}

const player = getPlayerChoice();
const comp = getComputerChoice();


playRound(player, comp);