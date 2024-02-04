const computerChoiceDisplay = document.querySelector('#computer-choice')
const yourChoiceDisplay = document.querySelector('#user-choice')
const resultDisplay = document.querySelector('#result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click' ,(e)=>{
userChoice=e.target.id 
yourChoiceDisplay.innerHTML = userChoice
generateComputerChoice()
getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3) + 1 // or you could use possibleChoices.length

    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'scissors'
    }
    if(randomNumber === 3){
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === userChoice){
        result= 'its a draw'
    }

    if(computerChoice === 'rock' && userChoice === 'paper' ){
        result= 'you won! 😃🎉'
    }

    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'you lost! ☹️'
    }

    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'you won! 😃🎉'
    }

    if(computerChoice === 'scissors' && userChoice ==='paper'){
        result = 'you lost! ☹️'
    }

    if(computerChoice === 'paper' && userChoice=== 'rock'){
        result = 'you lost! ☹️'
    }

    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'you won!😃🎉 '
    }
resultDisplay.innerHTML = result
}