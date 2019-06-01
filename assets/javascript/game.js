// This section will create variables to hold the number of wins, losses, and ties. Most will start at 0.
var randomLetter
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var wins = 0;
var losses = 0;
var counter = 0;
var maxTries = 3;   //the Max # of tries the user can guess
var triesLeft = maxTries;

// This will create variables that hold references to the places in the HTML where we want to display things.
// const $score = document.getElementById('score');   not sure if const is needed with so many varibles
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var tiesText = document.getElementById("ties-text");
var maxText = document.getElementById("max-text");

function main() {
    document.onkeyup = function (event) {
        console.log(event)
        console.log(event.key)
        console.log(event.key === randomLetter)
        if (event.key === randomLetter) {
            console.log("RIGHT!! You're awesome!")
            wins++
            gameInit()
        }
        else {
            console.log("Wrong!! Try again.")
            counter++
            triesLeft--
            console.log(counter)
            console.log(maxTries)

            if (counter >= maxTries) {
                console.log("You lose....You have no more tries left.")
                losses++
                gameInit()

            }
        }
        render()
    }
}

function gameInit() {
    randomLetter = "";
    counter = 0;
    if (randomLetter.length < 26) {
        randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    triesLeft = maxTries
    console.log(randomLetter)
}

// defining a function, were assigning a value of the wins variable to the text proprty to the winsText object
function render(){
    winsText.textContent = wins
    lossesText.textContent = losses
    maxText.textContent = triesLeft
    // document.getElementById('divA').textContent 
}


// calling functions

gameInit()
render()
main()



// moved into loop to keep prompting guesses from user. 
// var attempts
// while (attempts != randomLetter) {
//     var attempts = prompt("Please pick a letter between A-Z" + UserNumber);
//     counter += 1;

//     // I want to only give 3 tires before counting a loss.
//     if (counter > maxTires) {
//         break
//         document.write("You lose....You have no more tries left.");
//     }

//     else if (attempts === randomLetter) {
//         document.write("Winner!");
//         document.write("The letter was" + randomLetter);
//         document.write("It took" + counter + "Attempts to get the correct letter");
//     }
// }

// Add the key functions here
// Check to see if letter is correct
// my letter string has been tested with console.log
// var randomLetter = "";
// var alphabet = "abcdefghijklmnopqrstuvwxyz";
// if (randomLetter.length < 26) {
//     randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
// }
// console.log(randomLetter)