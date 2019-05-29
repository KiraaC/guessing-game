// This section will create variables to hold the number of wins, losses, and ties. Most will start at 0.

var wins = 0;
var losses = 0;
var ties = 0;
var counter = 0;
var maxTries = 3;   //the Max # of tries the user can guess

// This will create variables that hold references to the places in the HTML where we want to display things.
// const $score = document.getElementById('score');   not sure if const is needed with so many varibles
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var tiesText = document.getElementById("ties-text");
var maxTires = document.getElementById("max-text");


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
document.onkeyup = function (event) {
    console.log(event)
    console.log(event.key)
    console.log(event.key === randomLetter)
    if (event.key === randomLetter) {
        console.log("RIGHT!! You're awesome!")
    }
    else {
        console.log("Wrong!! Try again.")
        counter++
        console.log(counter)

        if (counter >= maxTries) {
            console.log("You lose....You have no more tries left.")
        }
        console.log(maxTries)
    }
}
// Check to see if letter is correct
// my letter string has been tested with console.log
var randomLetter = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
if (randomLetter.length < 26) {
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
}
console.log(randomLetter)



    // Program complete