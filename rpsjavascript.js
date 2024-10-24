const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");


function getComputerChoice() {
    let rng = Math.floor(Math.random()*3);
    if (rng === 0){
        pick = "Rock";
    }else if (rng === 1){
        pick = "Paper";
    }else{
        pick = "Scissors"
    }
    document.getElementById("computerPick").innerHTML="Computer picked " + pick;
    return pick;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice){
    document.getElementById("playerPick").innerHTML ="Player picked " +playerChoice;
    let computerChoice = getComputerChoice();
    setImage(computerImage,getImgSrc(computerChoice),computerChoice+" Image");
    setImage(playerImage,getImgSrc(playerChoice), playerChoice +"Image");
    let result = document.getElementById("result");
    if (computerChoice === "Rock"){
        if(playerChoice === "Paper"){
            result.innerHTML = "You win!";
            playerScore++;
        }else if(playerChoice === "Scissors"){
            result.innerHTML = "You lose!";
            computerScore++;
        }else result.innerHTML = "Draw";
    }else if(computerChoice === "Paper"){
        if(playerChoice === "Rock"){
            result.innerHTML = "You lose!";
            computerScore++;
        }else if (playerChoice === "Scissors"){
            result.innerHTML = "You win!";
            playerScore++;
        }else result.innerHTML = "Draw";
    }else{//computerChoice === Scissors//
        if (playerChoice === "Rock"){
            result.innerHTML = "You win!";
            playerScore++;
        }else if (playerChoice === "Paper"){
            result.innerHTML = "You lose!";
            computerScore++;
        }else result.innerHTML = "Draw";
    };
    document.getElementById("computerScore").innerHTML = "Computer - " +computerScore;
    document.getElementById("playerScore").innerHTML = "Player - " +playerScore;
    if (computerScore === 5) {
        showModal("You lost! " + computerScore + " to " + playerScore);
    }
    if (playerScore === 5) {
        showModal("You won! " + playerScore + " to " + computerScore);
    }
}


rockButton.addEventListener("click", ()=> {
    let playerChoice = "Rock";
    playRound(playerChoice);
});
paperButton.addEventListener("click", function (){
    let playerChoice = "Paper";
    
    playRound(playerChoice);
});
scissorsButton.addEventListener("click", function (){
    let playerChoice = "Scissors";
    playRound(playerChoice);
});


const playerImage = document.getElementById("playerImage");
const computerImage = document.getElementById("computerImage");

function setImage(imageContainer,choice,altText){
   let existingImage = imageContainer.querySelector('img');

   if (existingImage){
    existingImage.src = choice;
    existingImage.alt = altText;
   }else{
    const newImage = document.createElement("img");
    newImage.src = choice;
    newImage.alt = altText;
    newImage.style.width = "150px";
    newImage.style.height = "150px"
    
    imageContainer.appendChild(newImage);
   }
}

function getImgSrc(choice){
    return ("./Images/"+choice.toLowerCase()+".png")
}

const modal = document.getElementById("gameOverModal");
const closeModalButton = document.getElementsByClassName("close")[0];
const gameOverMessage = document.getElementById("gameOverMessage");
const restartButton =document.getElementById("restartButton");

function showModal(message){
    gameOverMessage.textContent = message;
    modal.style.display = "block";
}
function closeModal(){
    modal.style.display = "none";
}

let allButtons = document.querySelectorAll(".buttons");

closeModalButton.addEventListener("click", ()=>{
    closeModal();

    rockButton.replaceWith(rockButton.cloneNode(true));
    paperButton.replaceWith(paperButton.cloneNode(true));
    scissorsButton.replaceWith(scissorsButton.cloneNode(true));

    allButtons.forEach(function (button) {
        button.addEventListener("click", ()=>{
            showModal("Press the button to restart");
    });
});

});

restartButton.addEventListener("click", ()=>{
    window.location.reload();
})