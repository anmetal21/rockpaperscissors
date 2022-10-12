
function getComputerChoice() {

    let computerChoice=Math.floor(Math.random()*3)

if (computerChoice==0){
    return "ROCK";
}
else if (computerChoice==1) {
    return "PAPER";
}
else {
    return "SCISSORS";
}
}



function playRound(playerSelection, computerSelection) {

if (playerSelection==computerSelection) {
    return `Tie, you both picked ${playerSelection}...`
}
    else if (playerSelection=="ROCK" && computerSelection=="PAPER" ||
             playerSelection=="PAPER" && computerSelection=="SCISSORS" ||
             playerSelection=="SCISSORS" && computerSelection=="ROCK") {
    return `You lose! ${computerSelection} beats ${playerSelection}!`
}
    else if (playerSelection=="ROCK" && computerSelection=="SCISSORS"||
             playerSelection=="SCISSORS" && computerSelection=="PAPER" ||
             playerSelection=="PAPER" && computerSelection=="ROCK"){
    return `You Win! ${playerSelection} beats ${computerSelection}!`
}
    else {
    return "You didn't pick an available choice"
}
}

function caseInsensitive () {

    let playerInput=prompt("Choose your weapon");

    if (playerInput==playerInput.toUpperCase()) {
    return playerInput;
    }
    else {
        return playerInput.toUpperCase();
    }
}

function game() {

    alert("Let's play Rock, Paper, Scissors, Bo5 Rounds");

    let humanWins=0;
    let computerWins=0;

    for (let i=0; i<5; i++) {

        if (i<5) {
            console.log("Round " +(i+1));
            }
        
        let playerSelection=caseInsensitive();
        let computerSelection=getComputerChoice();
        let xRound=playRound (playerSelection, computerSelection);

        console.log(xRound);

        if (xRound==`You lose! ${computerSelection} beats ${playerSelection}!`){
            computerWins++
        }
        else if (xRound==`You Win! ${playerSelection} beats ${computerSelection}!`){
            humanWins++;
        }
        
        else {
            humanWins=humanWins+0;
            computerWins=computerWins+0;
        }   

}

    if (i=5 && computerWins>humanWins){
    console.log(`Human Wins=${humanWins}, Computer Wins=${computerWins}, Computer Wins`);
    }
    else if (i=5 && humanWins>computerWins) {
    console.log(`Human Wins=${humanWins}, Computer Wins=${computerWins}, Human Wins`);
    }
    else {
    console.log(`Human Wins=${humanWins}, Computer Wins=${computerWins}, Tie game`);
    }
   

}

    

game();