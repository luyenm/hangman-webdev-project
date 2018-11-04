
let score = 0;
let button = document.createElement("BUTTON");
let button2 = document.createElement("button");

button.innerHTML = "Primary";
button.style.position = "absolute";
button.className = "btn btn-primary";
button2.innerHTML = "Danger";
button2.style.position = "absolute";
button2.className = "btn btn-danger";
button.onclick = win;
button2.onclick = lose;
button.style.left = Math.abs(Math.random() * window.innerWidth - button.offsetWidth) + 'px';
button.style.top = Math.abs(Math.random() * window.innerHeight - button.offsetHeight) + 'px';
button2.style.left = Math.abs(Math.random() * window.innerWidth - button2.offsetWidth) + 'px';
button2.style.top = Math.abs(Math.random() * window.innerHeight - button2.offsetHeight) + 'px';

// Initializes window elements.
function init() {
    document.body.appendChild(button);
    document.body.appendChild(button2);
}

// Increments score when "Primary" button is clicked.
function win() {
    score++;
    let scoretext = document.getElementById('score');
    scoretext.innerHTML = score;
}

// Decrements score when "Danger" button is clicked.
function lose() {
    score--;
    let scoretext = document.getElementById('score');
    scoretext.innerHTML = score;
}

// Sets the styling for the button for a given interval (1000ms is default).
setInterval(function() {

    button.style.left = Math.abs(Math.random() * window.innerWidth - button.offsetWidth) + 'px';
    button.style.top = Math.abs(Math.random() * window.innerHeight - button.offsetHeight) + 'px';
    button2.style.left = Math.abs(Math.random() * window.innerWidth - button2.offsetWidth) + 'px';
    button2.style.top = Math.abs(Math.random() * window.innerHeight - button2.offsetHeight) + 'px';
}, 1000);
