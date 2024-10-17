function getComputerChoice() {
    let rng = Math.floor(Math.random()*3);
    if (rng === 0){
        pick = "Rock";
    }else if (rng === 1){
        pick = "Paper";
    }else{
        pick = "Scissors"
    }
    console.log("I picked",pick);
    return pick;
}
// console.log(getComputerChoice());

function getHumanChoice(){
    let choice = prompt("your move");
    choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    return choice;
}
// console.log(getHumanChoice());
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
    if (computerChoice === "Rock"){
        if(humanChoice === "Paper"){
            console.log("You Win! Paper beats Rock.");
            humanScore++;
        }else if(humanChoice === "Scissors"){
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        }else console.log("It's a draw.")
    }else if(computerChoice === "Paper"){
        if(humanChoice === "Rock"){
            console.log("You Lose! Paper beats Rock.");
            computerScore++;
        }else if (humanChoice === "Scissors"){
            console.log("You win! Scissors beat Paper.");
            humanScore++;
        }else console.log("It's a draw.")
    }else{//computerChoice === Scissors//
        if (humanChoice === "Rock"){
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        }else if (humanChoice === "Paper"){
            console.log("You lose! Scissors beat Paper.");
            computerScore++;
        }else console.log("It's a draw.")
    }
}
function playgame(){
    for (let i=0; i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }
    console.log("the final score is: Human-",humanScore," Computer-",computerScore);
    if (humanScore>computerScore){
        console.log("The winner is the Human");
    }else if (humanScore<computerScore){
        console.log("The winner is the Computer");
    }else console.log("It's a Draw")
    
}
playgame();