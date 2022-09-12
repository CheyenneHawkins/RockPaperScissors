let hide = true;
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
let rounds = 30;
let gamestatus = false;
const overlaytime = 1500;
let wincolor = 'rgb(111, 206, 85)';
let losecolor = 'rgb(206, 85, 85)';
let tiecolor = 'rgb(196, 206, 85)';
separator.textContent = 'SCORE'
start.textContent = `BATTLE START`
stage.style.display = "none";
announce.style.display = "none";
userfighter.textContent = "";
computerfighter.textContent = "";
// html.style['background-image'] = 'radial-gradient(rgb(36, 98, 47), rgba(56, 52, 70, 0.78)';
// battlestart.style['background-color'] = 'red';
// announce.style['background-color'] = '';



const padgrow = "150px";
const paddef = "30px";
function waste (){
    let bump=4;
    return bump
    console.log();
}

function initializeFight () {
    announce.style.display = "flex";
    fighters.style.display = "flex";
    start.textContent = `FIGHT!!!`
    btnr.style.display = 'block';
    btnp.style.display = 'block';
    btns.style.display = 'block';
    btnr.style.padding = paddef;
    btnp.style.padding = paddef;
    btns.style.padding = paddef;
    btnr.style['background-image'] = "url(https://imageio.forbes.com/specials-images/imageserve/5f5ebdfe1a1834b803586841/Dwayne--The-Rock--Johnson-Project-Rock-launch-with-Under-Armour-and-Spotify/960x0.jpg)";
    btnp.style['background-image'] = "url(https://www.skillastics.com/wp-content/uploads/2020/03/left-over-money-1024x576.jpg)";
    btns.style['background-image'] = "url(https://1.bp.blogspot.com/-ttMK5fIHUQw/VHhRyfIOnUI/AAAAAAAAAUk/26mKnsjf6M8/s1600/edward_scissorhands.png)";
    compr.style.display = 'block';
    compp.style.display = 'block';
    comps.style.display = 'block';
    compr.style.padding = paddef;
    compp.style.padding = paddef;
    comps.style.padding = paddef;
    compr.style['background-image'] = "url(https://i.pinimg.com/736x/57/9a/44/579a44e97b265bb15736abcd2f0d96c1.jpg)";
    compp.style['background-image'] = "url(https://www.mybanktracker.com/news/wp-content/uploads/2016/02/cash.jpg)";
    comps.style['background-image'] = "url(https://1.bp.blogspot.com/-CrsniLoWksI/VXj9tUcSHTI/AAAAAAAAOAA/ztuounMx8iY/s1600/Edward%2BScissorhands%2B1.jpg)";
    arenau.style['background-image'] = "";
    arenac.style['background-image'] = "";
    arenau.style['background-color'] = "#5e7a49";
    arenac.style['background-color'] = "#5e7a49";
    arenau.style['background-size'] = "700%";
    arenac.style['background-size'] = "700%";
    arenau.style.width = "50%";
    arenac.style.width = "50%";
    arenau.style['background-position'] = "700px";
    arenac.style['background-position'] = "-700px";
    arenau.textContent = "";
    arenac.textContent = "";
    arenau.style.color = 'rgba(255, 255, 255, 0.742)';
    arenac.style.color = 'rgba(255, 255, 255, 0.742)';
    userfighter.textContent = "";
    computerfighter.textContent = "";


    console.log("initializeFight");
    showOverlay();



}
function gifFight () {
    arenau.style.width = "50%";
    arenac.style.width = "50%";
    btnr.style.padding = '30px';
    btnp.style.padding = '30px';
    btns.style.padding = '30px';
    compr.style.padding = '30px';
    compp.style.padding = '30px';
    comps.style.padding = '30px';
    console.log("gifFight");
    // arenau.style['background-position'] = "700px";
    // arenac.style['background-position'] = "-700px";

}


//function flow: playGame --> playRound --> getComputerChoice --> battle --> score

if (hide) { //hide start, button section
const start = document.querySelector("#start"); //banner start
start.addEventListener('click', playGame);


const rock = document.querySelector("#btnr");
rock.addEventListener('click',rockSelect);


function rockSelect () {
    playerword = "ROCK";
    btnp.style.display = 'none';
    btns.style.display = 'none';
    btnr.style.padding = padgrow;
    // btnr.style['background-image'] = "url(https://media.giphy.com/media/l0HUg6Ypas42ubkXu/giphy.gif)";
    arenau.style['background-image'] = "url(https://media.giphy.com/media/l0HUg6Ypas42ubkXu/giphy.gif)";
    arenau.style['background-size'] = "350%";
    arenau.style['background-position'] = "-200px";
    userfighter.textContent = "ROCK";
    playRound();
    // nextRound();

}

const paper = document.querySelector("#btnp");
paper.addEventListener('click',paperSelect);

function paperSelect () {
    playerword = "PAPER";
    btnr.style.display = 'none';
    btns.style.display = 'none';
    btnp.style.padding = padgrow;
    // btnp.style['background-image'] = "url(https://media.giphy.com/media/l41lZccR1oUigYeNa/giphy.gif)";
    arenau.style['background-image'] = "url(https://media.giphy.com/media/l41lZccR1oUigYeNa/giphy.gif)";
    arenau.style['background-size'] = "350%";
    arenau.style['background-position'] = "-200px";
    userfighter.textContent = "PAPER";
    playRound();
    // nextRound();
}

const scissors = document.querySelector("#btns");
scissors.addEventListener('click',scissorsSelect);


function scissorsSelect () {
    playerword = "SCISSORS";
    btnr.style.display = 'none';
    btnp.style.display = 'none';
    btns.style.padding = padgrow;
    // btns.style['background-image'] = "url(https://media.giphy.com/media/3og0IKMmOZE88Ankty/giphy.gif)";
    arenau.style['background-image'] = "url(https://media.giphy.com/media/9tT0s3SBnDm4o/giphy.gif";
    arenau.style['background-size'] = "350%";
    arenau.style['background-position'] = "-200px";
    userfighter.textContent = "SCISSORS";

    playRound();
    // nextRound();

}
} //button secion end

function showOverlay() {
    if (i==0){
        overlay.style.display = 'block';
        overlay.textContent = `ROUND ${i+1}`
        function hideOverlay(){
            overlay.style.display = 'none';
        }
        setTimeout(hideOverlay, overlaytime);
    } else if (i >0) {
        overlay.style.display = 'block';
        overlay.textContent = `ROUND ${i+1}`
        function hideOverlay(){
            overlay.style.display = 'none';
        }
        setTimeout(hideOverlay, overlaytime);
    }

}

function nextRound() {
    // setTimeout(initializeFight,3000);
    console.log("FIGHT INITIALIZE");

}

function playGame() {  
    i = 0; 
    console.clear();
    console.log("Let's play! -run playGame");
    stage.style.display = 'flex';    // while (i < rounds){
    // showOverlay();   
    initializeFight();
     
}

function showChoice() {
    switch (playerword) {                   //assigns player's number to item name
        case "ROCK":
            // user.textContent = 'ROCK!' 
            break;
        case "PAPER":
            // user.textContent = 'PAPER!' 
            break;
        case "SCISSORS":
            // user.textContent = 'SCISSORS!' 
            break;
    };


}

function playRound() {
    console.log("playRound");
    showChoice();
    if (i < rounds){                    //assigns player's number to item name
        switch (playerword) {                   //assigns player's number to item name
            case "ROCK":
                playernum = 1;
                computernum = 1;
                break;
            case "PAPER":
                playernum = 2;
                computernum = 2;
                break;
            case "SCISSORS":
                playernum = 3;
                computernum = 3;
                break;
            default:
                // alert("THAT'S NOT HOW YOU PLAY")
                break;
            
        };

        function getComputerChoice(min, max) {  //generates random number 1, 2, or 3
            do {
                computernum = Math.floor(Math.random() * (max - min) ) + min;
            } 
            while (playernum == computernum);
            return computernum;
        }

        switch (getComputerChoice(1,4)) { 
                  //assigns computer number to item name
            case 1:
                computerword = "ROCK";
                compp.style.display = 'none';
                comps.style.display = 'none';
                compr.style.padding = padgrow;
                // compr.style['background-image'] = "url(https://media.giphy.com/media/l0HU5bbgdW6qzJsmQ/giphy.gif)";
                arenac.style['background-image'] = "url(https://media.giphy.com/media/l0HU5bbgdW6qzJsmQ/giphy.gif)";
                arenac.style['background-size'] = "350%";
                arenac.style['background-position'] = "-200px";
                computerfighter.textContent = "ROCK";

                
                break;
            case 2:
                computerword = "PAPER";
                compr.style.display = 'none';
                comps.style.display = 'none';
                compp.style.padding = padgrow;
                // compp.style['background-image'] = "url(https://media.giphy.com/media/3o751XDbTvZw958ZYk/giphy.gif)";
                arenac.style['background-image'] = "url(https://media.giphy.com/media/3o751XDbTvZw958ZYk/giphy.gif)";
                arenac.style['background-size'] = "350%";
                arenac.style['background-position'] = "-200px";
                computerfighter.textContent = "PAPER";

                break;
            case 3:
                computerword = "SCISSORS";
                compr.style.display = 'none';
                compp.style.display = 'none';
                comps.style.padding = padgrow;
                // comps.style['background-image'] = "url(https://media.giphy.com/media/3og0IKMmOZE88Ankty/giphy.gif)";
                arenac.style['background-image'] = "url(https://media.giphy.com/media/3og0IKMmOZE88Ankty/giphy.gif)";
                arenac.style['background-size'] = "350%";
                arenac.style['background-position'] = "-200px";
                computerfighter.textContent = "SCISSORS";

                break;
            case 4:
                computerword = "NO!";
                break;
            default:
                break;
        };
        setTimeout(gifFight,1000);
        function battle() {                     //battle logic, increments i
            win = "YOU WIN ROUND " + (i +1) + "!";
            lose = "YOU LOSE ROUND " + (i +1) + "!";
            tie = "ROUND " + (i +1) + " IS A TIE.";
            console.log("battle");

            if ((playernum == 1) && (computernum == 3)) { 
                outcome = win;
                userfighter.style.color = wincolor;
                computerfighter.style.color = losecolor;
                // arenau.style.width = "100%";
                // arenac.style.width = "0%";
                playerscore += 1;
            } else if ((playernum == 3) && (computernum == 1)){
                outcome = lose;
                userfighter.style.color = losecolor;
                computerfighter.style.color = wincolor;
                // arenac.style.width = "100%";
                // arenau.style.width = "0%";
                computerscore += 1;
            } else if (playernum > computernum){
                outcome = win;
                userfighter.style.color = wincolor;
                computerfighter.style.color = losecolor;
                // arenau.style.width = "100%";
                // arenac.style.width = "0%";
                playerscore += 1;
            } else if (playernum == computernum){
                outcome = tie;
                i -= 1;
                // reff.textContent = "TIE";
                userfighter.style.color = tiecolor;
                computerfighter.style.color = tiecolor;

                // alert("Tie! Try again.")
            } else {
                outcome = lose;
                userfighter.style.color = losecolor;
                computerfighter.style.color = wincolor;
                // arenac.style.width = "100%";
                // arenau.style.width = "0%";
                computerscore += 1;
            };
        console.log("set color");
        function showScore(){
                console.log("showScore");
                if (outcome != tie){
                // console.log("--" + playerword + " vs " + computerword);
                // console.log(outcome);
                if (i < (rounds)) {
                    user.textContent = playerscore;
                    computer.textContent = computerscore;

                // console.log("Score: " + playerscore + " to " + computerscore);
                } else {
                // console.log("Final Score: " + playerscore + " to " + computerscore);
                }
                }

            }
            showScore();
            i += 1;
            console.log("increment i");

        }  
    setTimeout(battle,1);      
 
    } else {   //if rounds are done
        alert("GAME OVER");
    }
    

    setTimeout(initializeFight,5000);
    }





