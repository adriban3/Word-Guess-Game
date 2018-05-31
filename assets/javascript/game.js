var game = {
    words: ['The Process', 'Bryan Colangelo', 'Phanatic', 'Nick Foles'],
    wins: 0,
    losses: 0,
    numGuesses: 9,
    lettersGuessed: [],
    compGuess = words[Math.floor(Math.random(words.length))],
    word: [],

    play: document.onkeyup = function() {

        var guess = event.key;
        console.log(guess);

        numGuesses--;
        lettersGuessed.push(guess);

        if (compGuess.includes(guess)) {
            
        }

        else {

        }

    }

}

game.play();