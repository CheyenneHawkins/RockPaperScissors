let entry;
let playernum = 0;
let computernum = 0;
let playerword;
let computerword;
let playerscore = 0;
let computerscore = 0;
let counter;
let i=0;
let win;
let lose;
let tie;
let outcome;
let rounds = 5;

const pushbutton = document.getElementById("playButton");


pushbutton.addEventListener("click", function (buttonclick){playgame()}) //game start


function playgame() {                       //assign round counter, call playround
    for (i = 0; i < rounds; i++) {              
        playround();
     }
}

function getinputbutton() {
    if (i == 0) {
        console.clear();
        playerword = (prompt("Best of " + rounds + " wins. \n \n Round " + (i +1) + " - Go!", " "));
        console.log("Round" + (i+1));
    } else {playerword = (prompt("Round " + (i +1) + " - Go!", " "));
    console.log("Round" + (i+1));
    }
}

function getinputbox() {
    if (i == 0) {
        console.clear();
        playerword = document.getElementById("playerinput").value;
        console.log("Round" + (i+1));
    } else {playerword = (prompt("Round " + (i +1) + " - Go!", " "));
    console.log("Round" + (i+1));
    }

}

function playround() {
    getinputbutton();
    if (playerword != null) {               //skips lower case translation if null
        playerword = playerword.toUpperCase();
    } else {                                //exits game
        playerword = 0;
        i = 5;
        return;
    }
    switch (playerword) {                   //assigns player's number to item name
        case "ROCK":
            playernum = 1;
            break;
        case "PAPER":
            playernum = 2;
            break;
        case "SCISSORS":
            playernum = 3;
            break;
        default:
            alert("THAT'S NOT HOW YOU PLAY")
            break;
    };

    function getComputerChoice(min, max) {  //generates random number 1, 2, or 3
        computernum = Math.floor(Math.random() * (max - min) ) + min;
        return computernum
    }

    switch (getComputerChoice(1,4)) {       //assigns computer number to item name
        case 1:
            computerword = "ROCK";
            break;
        case 2:
            computerword = "PAPER";
            break;
        case 3:
            computerword = "SCISSORS";
            break;
        case 4:
            computerword = "NO!";
            break;
        default:
            break;
    };

    function battle() {                     //battle logic
        win = "YOU WIN ROUND " + (i +1) + "!";
        lose = "YOU LOSE ROUND " + (i +1) + "!";
        tie = "ROUND " + (i +1) + " IS A TIE.";
        if ((playernum == 1) && (computernum == 3)) { 
            outcome = win;
            playerscore += 1;
        } else if ((playernum == 3) && (computernum == 1)){
            outcome = lose;
            computerscore += 1;
        } else if (playernum > computernum){
            outcome = win;
            playerscore += 1;
        } else if (playernum == computernum){
            outcome = tie;
            i -= 1;
            alert("Tie! Try again.")
        } else {
            outcome = lose;
            computerscore += 1;
        };

        
    }

    battle();

    function score(){
        if (outcome != tie){
        console.log("--" + playerword + " vs " + computerword);
        console.log(outcome);
        if (i < (rounds-1)) {
        console.log("Score: " + playerscore + " to " + computerscore);
        } else {
        console.log("Final Score: " + playerscore + " to " + computerscore);
        }
        }
    }
    score();
}
