let user = {
    userName : name,
    userScore : score
};

function saveScore() {
    $.post("/index.html", {"instruction" : "fetch"}, (stuff) => {

    });
}

function fetchData() {
    $.get("/hangman.html", (response)  => {

    });
}

$(function () {
    fetchData();
});
