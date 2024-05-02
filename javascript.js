console.log("Hello")

let humanScore = 0
let computerScore = 0

let temp1 = document.querySelector(".rock")
let temp2 = document.querySelector(".scissors")
let temp3 = document.querySelector(".paper")
let heading = document.querySelector('h2')
temp1.addEventListener("click",Handler)
temp2.addEventListener("click",Handler)
temp3.addEventListener("click",Handler)


function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice  = computerChoice.toLowerCase();

    switch(computerChoice){
        case "rock": if(humanChoice=="rock") {heading.textContent = ("Draw"); humanScore++; computerScore++;}
                     else if(humanChoice=="scissors"){
                        computerScore++;
                        heading.textContent = (`You lose! ${computerChoice} beats ${humanChoice}`);
                     }
                     else {
                        humanScore++;
                        heading.textContent = (`You win! ${humanChoice} beats ${computerChoice}`);
                     }
                     break;

        case "paper": if(humanChoice=="paper") {heading.textContent = ("Draw"); humanScore++; computerScore++;}
                     else if(humanChoice=="rock"){
                        computerScore++;
                        heading.textContent = (`You lose! ${computerChoice} beats ${humanChoice}`);
                     }
                     else {
                        humanScore++;
                        heading.textContent = (`You win! ${humanChoice} beats ${computerChoice}`);
                     }
                     break;

        case "scissors": if(humanChoice=="scissors") {heading.textContent = ("Draw"); humanScore++; computerScore++;}
                     else if(humanChoice=="paper"){
                        computerScore++;
                        heading.textContent = (`You lose! ${computerChoice} beats ${humanChoice}`);
                     }
                     else {
                        humanScore++;
                        heading.textContent = (`You win! ${humanChoice} beats ${computerChoice}`);
                     }
                     break;
    }

}

function getComputerChoice () {

    let choice = Math.floor(Math.random()*3);

    if(choice==0) return "rock";
    else if (choice==1) return "paper";
    else return "scissors";

}

function getHumanChoice() {
    return prompt("rock,paper or scissors");
}

// function playGame() {

// for(let i=0;i<5;i++){
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection,computerSelection)
// }

// if(humanScore>computerScore) return `Final Score ${humanScore}-${computerScore}. You won`;
// else if(computerScore>humanScore) return `Final Score ${humanScore}-${computerScore}. You lost`;
// else return `Final Score ${humanScore}-${computerScore}. Draw`;

// }

// console.log(playGame())


function Handler(button){
  // console.log(button.currentTarget.textContent)

   let humanSelection = button.currentTarget.textContent;
   let computerSelection = getComputerChoice();
   playRound(humanSelection,computerSelection)
   let score = document.querySelector(".score h2");
   score.textContent = `Score Human-${humanScore} vs Computer-${computerScore}`



}





