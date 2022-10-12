
function getComputerChoice() {

    let computerChoice=Math.floor(Math.random()*3)

if (computerChoice==0){
    return "rock";
}
else if (computerChoice==1) {
    return "paper";
}
else {
    return "scissors";
}
}



function playRound (playerSelection, computerSelection) {
   
    

if (playerSelection==computerSelection) {
    return "Tie"
}
    else if (playerSelection=="rock" && computerSelection=="paper"){
    return "You lose! Paper beats Rock!"
}
    else if (playerSelection=="paper" && computerSelection=="scissors"){
    return "You lose! Scissors beats Paper!"
}
    else if (playerSelection=="scissors" && computerSelection=="rock"){
    return "You lose! Rock beats Scissors!"
}
    else if (playerSelection=="rock" && computerSelection=="scissors"){
    return "You Win! Rock beats Scissors"
}
    else if (playerSelection=="scissors" && computerSelection=="paper"){
    return "You Win! Scissors beats Paper!"
}
    else if (playerSelection=="paper" && computerSelection=="rock") {
    return "You Win! Paper beats Rock!"
}
    else {
    return "You didn't pick an available choice"
}
}


function caseInsensitive () {
    if (playerInput==playerInput.toLowerCase()) {
    return playerInput;
    }
    else {
        return playerInput.toLowerCase();
    }
}


function game() {
    for (let i=0, i<5, i++) {
        
    }
}

let playerInput=prompt("Choose your weapon");
let playerSelection=caseInsensitive();
let computerSelection=getComputerChoice();
console.log(playRound(playerSelection, computerSelection));