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
    if (computerScore === 5){
        if(alert("You lost! " +computerScore + " to " +playerScore)){}
        else window.location.reload();
    }
    if (playerScore === 5){
        if(alert("You won! " +playerScore + " to " +computerScore)){}
        else window.location.reload();
    }
}


rockButton.addEventListener("click", ()=> {
    let playerChoice = "Rock";
    setImage(playerImage,getImgSrc("rock"),"Rock Image");
    playRound(playerChoice);
});
paperButton.addEventListener("click", function (){
    let playerChoice = "Paper";
    
    playRound(playerChoice);
});
scissorsButton.addEventListener("click", function (){
    let playerChoice = "Scissors";
    setImage(playerImage,getImgSrc("scissors"),"Scissors Image");
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

// const rockImage = document.createElement("img");
//     rockImage.src = "./Images/rock.png";
//     rockImage.alt = "Rock image";
//     rockImage.style.width = "150px";
//     rockImage.style.height = "150px";
//     playerImage.appendChild(rockImage);