let playernum;
let computernum;
let playerword;
let computerword;
let outcome;
let playerscore;
let computerscore;
let counter;


playerword = (prompt("Go!", " "));

switch (playerword) { //assigns player's number to item name
    case "rock":
        playernum = 1;
        break;
    case "paper":
        playernum = 2;
        break;
    case "scissors":
        playernum = 3;
        break;
    default:
        alert("THAT'S NOT HOW YOU PLAY")
        break;
};

function getComputerChoice(min, max) { //generates random number 1, 2, or 3
    computernum = Math.floor(Math.random() * (max - min) ) + min;
    return computernum
}

switch (getComputerChoice(1,4)) { //assigns computer number to item name
    case 1:
        computerword = "rock";
        break;
    case 2:
        computerword = "paper";
        break;
    case 3:
        computerword = "scissors";
        break;
    case 4:
        computerword = "No!";
        break;
    default:
        break;
};

if ((playernum == 1) && (computernum == 3)) {
    outcome = "You win!"
} else if ((playernum == 3) && (computernum == 1)){
    outcome = "You lose."
} else if (playernum > computernum){
    outcome = "You win!"
} else if (playernum == computernum){
    outcome = "Tie"
} else {
    outcome = "You lose."
};

console.log(playernum)
console.log("You: " + playerword)
console.log(computernum)
console.log("Computer: " + computerword)

console.log(outcome)
    