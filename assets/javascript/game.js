var game = {
    choices: ['The Process', 'Bryan Colangelo', 'Phanatic', 'Nick Foles'],
    wins: 0,
    losses: 0,
    numGuesses: 9,
    lettersGuessed: [],
    word: [],

    compGuess: window.onload = function() {
        return this.choices[Math.floor(Math.random(this.choices.length))];
    },

    play: document.onkeyup = function() {

        var guess = event.key;
        console.log(guess);

        this.word = "_".repeat(this.compGuess.length)
        document.getElementById("word").innerHTML = "Word: " + this.word;

        this.lettersGuessed.push(this.guess);
        document.getElementById("letGuess").innerHTML = "Letters Guessed: " + this.lettersGuessed;

        if (this.compGuess.includes(this.guess)) {
            var letterInd = this.compGuess.indexOf(this.guess);
            word[letterInd] = this.guess; 

            if (this.word === this.compGuess) {
                this.wins++;
                this.numGuesses = 9;
                this.compGuess = choices[Math.floor(Math.random(choices.length))];
                this.word = [];
            }
        else {

            this.numGuesses--;
            document.getElementById("remGuess").innerHTML = "Remaining Guesses: " + this.numGuesses;

            if (this.numGuess == 0) {
                this.losses++;
                this.numGuesses = 9;
                this.compGuess = this.choices[Math.floor(Math.random(this.choices.length))];
                this.word = [];
                }
            }
        }
    }
}