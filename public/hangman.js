// Instantiation for image sources.
let images = [
    "public/images/base.png",
    "public/images/noose.png",
    "public/images/head.png",
    "public/images/body.png",
    "public/images/rightleg.png",
    "public/images/leftleg.png",
    "public/images/rightarm.png",
    "public/images/hangman.png"
];

// Instantiations for the letter that are going to be compared.
let letters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Initializes the game when the window finishes loading.
$(function() {
    getRandomWord();
    populateKeyboard();
});

// Populates the keyboards with the letters of the alphabet.
function populateKeyboard() {
    for (let i = 0; i < letters_in_alphabet; ++i) {
        btn[i] = $('<button>');
        btn[i].text(letters[i]);
        btn[i].addClass('btn').addClass('btn-primary');
        btn[i].attr("id", letters[i]);
        btn[i].click(function(e) {
            guess($(e.target).attr('id'));
        });
        $('#keyboard').append(btn[i]);
    }
}

