//INITIALIZATION
//=====================
let guessRemain = 8
let wins = 0
let losses = 0
let badGuess = 0
let letterPool = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var winsText = document.getElementById("wins")
var lossesText = document.getElementById("losses")
var guessRemainText = document.getElementById("guessRemain")

// STARTING WORD
// ================================

function Random() {
    return letterPool[Math.floor(Math.random() * letterPool.length)]
}
gameLetter = Random()

//\\//\\//\VIEW FIRST WORD
console.log(gameLetter)

document.onkeyup = function (event) {

    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var guess = event.key
        console.log(guess)

        if (guess === gameLetter) {
            alert(`You Win`)
            wins++
            guessRemain = 8
            function Random() {
                return letterPool[Math.floor(Math.random() * letterPool.length)]
            }
            gameLetter = Random()
            console.log(`next letter : ${gameLetter}`)
        }
        else if (guessRemain > 1) {
            guessRemain--
        }
        else {
            guessRemain = 0
            losses++
            guessRemain = 8
            alert('You Lose')
        }
    }

    winsText.textContent = "Wins: " + wins
    lossesText.textContent = "Losses: " + losses
    guessRemainText.textContent = "Guesses Left: " + guessRemain
}