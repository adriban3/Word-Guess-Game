var choices = ['the_process', 'bryan_colangelo', 'phanatic', 'nick_foles', 'eagles', 'phillies', 'sixers', 'flyers'];
var choice = choices[Math.floor(Math.random()*choices.length)];
var wins = 0;
var losses = 0;
var numGuesses = 9;
var lettersGuessed = [];
var word = "_".repeat(choice.length);
document.getElementById("word").innerHTML = "Word: " + word;

document.onkeyup = function() {

    if (event.key >= 'a' && event.key <= 'z') {
        var guess = event.key;
        lettersGuessed.push(guess);
        document.getElementById("letGuess").innerHTML = "Letters Guessed: " + lettersGuessed;

        if (choice.includes(guess)) {

            for (i=0; i<choice.length; i++) {
                if (choice[i] === guess) {
                    word = word.substring(0, i) + guess + word.substring(i+1);
                    document.getElementById("word").innerHTML = "Word: " + word;
                }
            }

            if (word === choice) {
                wins++;
                document.getElementById("wins").innerHTML = "Wins: " + wins;
                numGuesses = 9;
                document.getElementById("remGuess").innerHTML = "Losses: " + numGuesses;
                choice = choices[Math.floor(Math.random(choices.length))];
                word = "_".repeat(choice.length);
                document.getElementById("word").innerHTML = "Word: " + word;
                lettersGuessed = [];
                document.getElementById("letGuess").innerHTML = "Letters Guessed: " + lettersGuessed;
                }
            }

        else if (!choice.includes(guess)) {

            numGuesses--;
            document.getElementById("remGuess").innerHTML = "Remaining Guesses: " + numGuesses;

            if (numGuesses === 0) {
                losses++;
                document.getElementById("losses").innerHTML = "Losses: " + losses;
                numGuesses = 9;
                document.getElementById("remGuess").innerHTML = "Losses: " + numGuesses;
                choice = choices[Math.floor(Math.random(choices.length))];
                word = "_".repeat(choice.length);
                document.getElementById("word").innerHTML = "Word: " + word;
                lettersGuessed = [];
                document.getElementById("letGuess").innerHTML = "Letters Guessed: " + lettersGuessed;
            }
        }
    }
}