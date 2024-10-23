function getComputerChoice() {
    let rng = Math.floor(Math.random()*3);
    if (rng === 0){
        pick = "Rock";
    }else if (rng === 1){
        pick = "Paper";
    }else{
        pick = "Scissors"
    }
    document.getElementById("computerPick").innerHTML="I picked " + pick;
    return pick;
}

// console.log(getComputerChoice());

// function getHumanChoice(){
//     let choice = prompt("your move");
//     choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
//     return choice;
// }
// console.log(getHumanChoice());
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice){
    let computerChoice = getComputerChoice();
    let result = document.getElementById("result");
    if (computerChoice === "Rock"){
        if(humanChoice === "Paper"){
            result.innerHTML = "You win!";
            humanScore++;
        }else if(humanChoice === "Scissors"){
            result.innerHTML = "You lose!";
            computerScore++;
        }else result.innerHTML = "Draw";
    }else if(computerChoice === "Paper"){
        if(humanChoice === "Rock"){
            result.innerHTML = "You lose!";
            computerScore++;
        }else if (humanChoice === "Scissors"){
            result.innerHTML = "You win!";
            humanScore++;
        }else result.innerHTML = "Draw";
    }else{//computerChoice === Scissors//
        if (humanChoice === "Rock"){
            result.innerHTML = "You win!";
            humanScore++;
        }else if (humanChoice === "Paper"){
            result.innerHTML = "You lose!";
            computerScore++;
        }else result.innerHTML = "Draw";
    };
    document.getElementById("computerScore").innerHTML = "Computer - " +computerScore;
    document.getElementById("humanScore").innerHTML = "Human - " +humanScore;
    if (computerScore === 5){
        if(alert("You lost! " +computerScore + " to " +humanScore)){}
        else window.location.reload();
    }
    if (humanScore === 5){
        if(alert("You won! " +humanScore + " to " +computerScore)){}
        else window.location.reload();
    }
}

// function playgame(){
//     console.log("the final score is: Human-",humanScore," Computer-",computerScore);
//     if (humanScore>computerScore){
//         console.log("The winner is the Human");
//     }else if (humanScore<computerScore){
//         console.log("The winner is the Computer");
//     }else console.log("It's a Draw")
// }

const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");

rockButton.addEventListener("click", ()=> {
    let humanChoice = "Rock";
    playRound(humanChoice);
});
paperButton.addEventListener("click", function (){
    let humanChoice = "Paper";
    playRound(humanChoice);
});
scissorsButton.addEventListener("click", function (){
    let humanChoice = "Scissors";
    playRound(humanChoice);
});

