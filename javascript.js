console.log("Hello")

let humanScore = 0
let computerScore = 0

function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice  = computerChoice.toLowerCase();

    switch(computerChoice){
        case "rock": if(humanChoice=="rock") {console.log("Draw"); humanScore++; computerScore++;}
                     else if(humanChoice=="scissors"){
                        computerScore++;
                        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                     }
                     else {
                        humanScore++;
                        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                     }
                     break;

        case "paper": if(humanChoice=="paper") {console.log("Draw"); humanScore++; computerScore++;}
                     else if(humanChoice=="rock"){
                        computerScore++;
                        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                     }
                     else {
                        humanScore++;
                        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                     }
                     break;

        case "scissors": if(humanChoice=="scissors") {console.log("Draw"); humanScore++; computerScore++;}
                     else if(humanChoice=="paper"){
                        computerScore++;
                        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                     }
                     else {
                        humanScore++;
                        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
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

function playGame() {

for(let i=0;i<5;i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection)
}

if(humanScore>computerScore) return `Final Score ${humanScore}-${computerScore}. You won`;
else if(computerScore>humanScore) return `Final Score ${humanScore}-${computerScore}. You lost`;
else return `Final Score ${humanScore}-${computerScore}. Draw`;

}

console.log(playGame())



