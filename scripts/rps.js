

    // get computer choice
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices.at(Math.floor(Math.random() * choices.length));
  return computerChoice;
}

// get player choice
function getPlayerChoice() {
  let playerInput = prompt("type your choice...");
  let result = playerInput.toLowerCase();
  return result;
}

// play one round and save the score
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "it's a tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return `You lose! paper beats rock`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You win! rock beats scissors`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return `You lose!scissors beats paper`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You win! paper beats rock`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return `You lose! rock beats scissors`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You win! scissors beats paper`;
  }
}



const buttons = document.querySelector("#buttons");
const DisplayResult = document.querySelector("#results");

const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3= document.createElement("button");

button1.textContent = "rock";

button2.textContent = "paper";

button3.textContent = "scissors";


buttons.append(button1);
buttons.append(button2);
buttons.append(button3);

const buttonsList = document.querySelectorAll("button");

//console.log(buttonsList);

let playerScore = 0;
let computerScore = 0;


const playerChoice = buttonsList.forEach(function(button){
  let status = false;
        button.addEventListener("click",()=>{
          if(playerScore < 5 && computerScore < 5){
            console.log(button.textContent);
            const Player = button.textContent;
            const computer = getComputerChoice();
            const result = playRound(Player,computer);
            const resultDiv = document.createElement("div");
            resultDiv.classList.add("roundresult");
            if(result.includes("win")){
              playerScore++;
            }
            else if(result.includes("lose")){
                computerScore++;
            }
            let resulttext = `Player :${playerScore} , Computer :${computerScore}`;
            resultDiv.textContent = `${result} | ${resulttext}`
            resultDiv.style.backgroundColor = "black";
            resultDiv.style.color = "white";        
            DisplayResult.appendChild(resultDiv);
            console.log(result);
            
        }
      else{
        const resulttexts = document.querySelector("#results");
        const results  = document.querySelectorAll(".roundresult");
        //removes content after each result
        //results.empty();
      
        results.forEach((result) =>{
            resulttexts.removeChild(result);
        });

        const FinalResult = document.createElement("div");
        FinalResult.classList.add("FinalResult");

        console.log(resulttexts); 
        if(playerScore > computerScore){
          FinalResult.textContent = "Player Wins!!!";
        }
        else if(computerScore > playerScore){
          FinalResult.textContent = "Computer Wins!!";
        }
        else{
          FinalResult.textContent = "It is a tie!!!";
        }

        resulttexts.appendChild(FinalResult);

        //Retry Button Implementaion

        const RetryButton = document.createElement("button");
        RetryButton.textContent = "Retry";
        RetryButton.classList.add("RetryButton");


        if(!status){
          buttons.append(RetryButton);
          status = true;
        }
        
        RetryButton.addEventListener("click",() =>{
          window.location.reload();
          });

      }});

     
});


//console.log(userchoice[0]);
