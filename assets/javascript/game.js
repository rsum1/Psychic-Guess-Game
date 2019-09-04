//INITIALIZATION
//=====================
let guessRemain = 8
let wins = 0
let losses = 0
let badGuess = 0
let letterPool = ["a", "b", "c", "d", "e", "f"]

var winsText = document.getElementById("wins")
var lossesText = document.getElementById("losses")
var guessRemainText = document.getElementById("guessRemain")
//FUNCTIONS
//========================


// STARTING WORD
// ================================

function Random() {
    return letterPool[Math.floor(Math.random() * letterPool.length)]
}
gameLetter = Random()

//\\//\\//\VIEW FIRT WORD
// console.log(gameLetter)

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
    // console.log(guess)
    console.log(`wins: ${wins}`)
    console.log(`losses: ${losses}`)
    console.log(`bad guesses: ${badGuess}`)
}



    //Test if letter is part of word
    // if (condition) {

    // } else {

    // }

    //Display incorrect letter
    // let badGuess = document.createElement('h1')
    // badGuess.textContent = event.key
    // document.getElementById("word").append(badGuess)


        // document.getElementById(`wins`).innerHTML(`${wins}`)