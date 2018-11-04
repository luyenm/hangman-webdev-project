
// Instantiation of variables that are going to be used.
const letters_in_alphabet = 26;
let gameWord = '';
let lossPoints = 0;
let guessWord = [];
let score = 0;
let flag = false;
let playerScore = 0;
let btn = [];
let gameState = false;

// User guesses a letter, the letter is then checked and
// The subsequent button used is disabled.
// PARAM: input: the user letter input.
function guess(input) {
    let button = document.getElementById(input);

    button.style.pointerEvents = "none";
    for(let i = 0; i < gameWord.length; ++i) {
        if (input === gameWord.charAt(i).toString()) {
            flag = true;
            guessWord[i] = input + " ";
            $('#guess-word').text(guessWord.join(""));
            --score;
        }
    }
    if (flag) {
        flag = false;
        button.className = "btn btn-success";
        if (score === 0) {
            win();
        }
    } else {
        button.className = "btn btn-danger";
        if (lossPoints++ < 6) {
            document.getElementById('hangman').src = images[lossPoints];
        }
        else {
            document.getElementById('hangman').src = "public/images/hangman.png";
            lose();
        }
    }
}


// Generates a random word from a JSON file along with the definitions.
// Secondary functionality will count the letters in the word and generate
// the corresponding number of underscores.
function getRandomWord() {
    $.getJSON('public/model/hangman.json', function(data) {
        let index = parseInt(Math.random() * data.dictionary.length);
        gameWord = data.dictionary[index].word;
        console.log(gameWord);
        score = gameWord.length;
        for (let i = 0; i < gameWord.length; ++i) {
            guessWord = guessWord.concat("_ ");
        }
        $('#guess-word').text(guessWord.join(""));
        $('#hint').text(data.dictionary[index].definition)
    });
}


// Triggers a lose state, decrements the user score and disables the keyboard.
function lose() {
    playerScore--;
    toggleKeyboard(true);
    $('#user-score').text(playerScore);
    $('#reset-button').text("Try Again!");
    $('#victory-condition').text("Game Over");
}

// Triggers a win state, increments user score and enables the keyboard.
function win() {
    playerScore++;
    toggleKeyboard(true);
    $('#victory-condition').text("You Win!");
    $('#reset-button').text("Keep going");
    $('#user-score').text(playerScore);
}

// Toggles the state of the keyboard.
function toggleKeyboard(state) {
    gameState = state;
    for (let i = 0; i < letters.length; ++i) {
        btn[i].prop("disabled", gameState);
    }
}

// Resets the game, generates a new word.
function resetGame() {
    $('#reset-button').text("Reset");
    toggleKeyboard(false);
    guessWord = [];
    lossPoints = 0;
    score = 0;
    $('#victory-condition').text("");
    document.getElementById('hangman').src = images[0];
    getRandomWord();
    for (let i = 0; i < letters.length; ++i) {
        let button = document.getElementById(letters[i]);
        button.className = "btn btn-primary";
        button.style.pointerEvents = "auto";
    }
}