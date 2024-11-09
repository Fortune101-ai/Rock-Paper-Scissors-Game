const messages = {
    rockPaper: 'You lose!, Paper beats Rock',
    rockScissor: 'You win!, Rock beats Scissor',
    draw:'Draw!',
    scissorPaper: 'You win!, Scissor beats Paper',
    scissorRock:'You lose!, Rock beats Scissor',
    paperRock: 'You win!, Paper beats Rock',
    paperScissor:'You lose!, Scissor beats Paper',

}

let computerScore = 0
let humanScore = 0

const getComputerChoice = () => {
    const choices = {
        0: "rock",
        1: "paper",
        2: "scissor"
    }

    const randomChoice = Math.floor(Math.random() * 3)

    return choices[randomChoice]
}

const getPlayerChoice = () => {

    const choice = prompt('Rock, Paper or Scissor ?')

    return choice.toLowerCase()
}

const playRound = (humansChoice, computerChoice) =>{
    const humanChoice = humansChoice.toLowerCase()

    if (humanChoice === 'rock' && computerChoice==='scissor'){
        humanScore += 1
        return messages.rockScissor
    }
    else if (humanChoice === 'rock' && computerChoice==='paper'){
        computerScore += 1
        return messages.rockPaper
    }
    else if ((humanChoice === 'rock' && computerChoice === 'rock') || (humanChoice === 'paper' && computerChoice === 'paper') || (humanChoice === 'scissor' && computerChoice === 'scissor')){
        return messages.draw
    }
    else if (humanChoice === 'paper' && computerChoice==='scissor'){
        computerScore += 1
        return messages.paperScissor
    }
    else if (humanChoice === 'paper' && computerChoice==='rock'){
        humanScore += 1
        return messages.paperRock
    }
    else if (humanChoice === 'scissor' && computerChoice==='rock'){
        computerScore += 1
        return messages.scissorRock
    }
    else if (humanChoice === 'scissor' && computerChoice==='paper'){
        humanScore += 1
        return messages.scissorPaper
    }

}

const playGame = () =>{

    for(let i=0;i<5;i++){
        const playerChoice = getPlayerChoice()
        const computerChoice = getComputerChoice()
        const result = playRound(playerChoice,computerChoice)
        console.log(`Player Choice: ${playerChoice} AI Choice: ${computerChoice}\nResult: ${result}\nScore: You: ${humanScore}, Computer: ${computerScore}`)
    }
}

const resetScore = () => {
    humanScore = 0;
    computerScore = 0;
}
