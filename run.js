let counter=0;
let humanWins=0;
let computerWins=0;
let tieCount=0;

const round=document.getElementById("round");
round.innerHTML=`Round: ${counter}`;
const result=document.getElementById("result");
const rock=document.querySelector(".rock");
const paper=document.querySelector(".paper");
const scissors=document.querySelector(".scissors");


rock.addEventListener('click', ()=> {
    let playerSelection="ROCK";
    game(playerSelection);
    gameEnd();
})

paper.addEventListener('click', ()=> {
    let playerSelection="PAPER";
    game(playerSelection);
    gameEnd();
})

scissors.addEventListener('click', ()=> {
    let playerSelection="SCISSORS";
    game(playerSelection);
    gameEnd();
})

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
    else {
    return `You Win! ${playerSelection} beats ${computerSelection}!`
    }
}

function gameEnd() {

    if (humanWins==5) {
        result.innerHTML=`Game over, you win!`;
        result.style.textAlign='center';
        const restartButton=document.createElement('div');
        restartButton.innerHTML=`<button onclick="restart()">Click here to play again </button>`;
        result.appendChild(restartButton);
        restartButton.style.marginTop="10px";
        rock.setAttribute("disabled", 1);
        paper.setAttribute("disabled", 1);
        scissors.setAttribute("disabled", 1);
    }
    else if (computerWins==5) {
        result.innerHTML=`Game over, you lose!`;
        result.style.textAlign='center';
        const restartButton=document.createElement('div');
        restartButton.innerHTML=`<button onclick="restart()">Click here to play again </button>`;
        result.appendChild(restartButton);
        restartButton.style.marginTop="10px";
        rock.setAttribute("disabled", 1);
        paper.setAttribute("disabled", 1);
        scissors.setAttribute("disabled", 1);
    }
    else return;
}

function restart() {
  
  humanWins = 0;
  computerWins= 0;
  tieCount=0;
  counter=0;

  document.getElementById("humanWins").innerHTML =`You won: ${humanWins} times`;
  document.getElementById("computerWins").innerHTML = `Computer won: ${computerWins} times`;
  document.getElementById("tieCount").innerHTML= `Tie rounds: ${tieCount}`;
  round.innerHTML=`Round: ${counter}`;
  result.innerHTML = `Battle results posted here!`;

  rock.removeAttribute("disabled");
  paper.removeAttribute("disabled");
  scissors.removeAttribute("disabled");
}

function game(playerSelection) {
    let computerSelection=getComputerChoice();
    let xRound=playRound(playerSelection, computerSelection);
    result.innerHTML=`${xRound}`;
    counter++;
    round.innerHTML=`Round: ${counter}`;
    
    if (xRound==`You lose! ${computerSelection} beats ${playerSelection}!`){
        computerWins++
    }
    else if (xRound==`You Win! ${playerSelection} beats ${computerSelection}!`){
        humanWins++;
    }
    
    else {
        tieCount++
    }   
    document.getElementById("humanWins").innerHTML=`You won: ${humanWins} times`;
    document.getElementById("computerWins").innerHTML=`Computer won: ${computerWins} times`;
    document.getElementById("tieCount").innerHTML= `Tie rounds: ${tieCount}`;
}