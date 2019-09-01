//INITIALIZATION
let guesses = 8
let wins = 0
let losses = 0
let badGuess = 0
// let wordPool = ["dog", "cat", "bird", "apple", "orange", "purple", "orange"]
let letterPool = ["a", "b", "c", "d", "e", "f"]
// console.log(gameWord[1])

//select random word
// var gameWord = wordPool[Math.floor(Math.random()*wordPool.length)];
// var gameLetter = letterPool[Math.floor(Math.random() * letterPool.length)];

// console.log(gameWord)
// console.log(gameLetter)
//========================


//FUNCTIONS
//========================

//retrieve game word

//break down game word by letter into array

//listen for letter being pressed

//if letter press matches letter in array, display letter
//else, decrement guesses by one

//if all letters in word have been presse d, increment wins, retrieve new game word

// MAIN PROCESS
// ================================

function Random() {
    return letterPool[Math.floor(Math.random() * letterPool.length)]
}
gameLetter = Random()
console.log(gameLetter)

document.onkeyup = function (event) {

    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var guess = event.key
        console.log(guess)

        if (guess === gameLetter) {
            alert(`You Win`)
            wins++
            badGuess = 0
            function Random() {
                return letterPool[Math.floor(Math.random() * letterPool.length)]
            }
            gameLetter = Random()
            console.log(`next letter : ${gameLetter}`)
        }
        else if (badGuess < 7) {
            badGuess++
        }
        else {
            losses++
            badGuess = 0
            alert('You Lose')
        }
    }
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