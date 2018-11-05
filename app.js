// const functions = require('firebase-functions');
const express = require('express');
const app = express();

const firebase = require('firebase');


const http = require('http'),
    fs = require('fs');
const port = process.env.PORT || 3000;
//
// http.createServer(function(req, res) {
//     var url = './' + (req.url === '/' ? 'hangman.html' : req.url);
//     fs.readFile(url, function(err, html) {
//         if (err) {
//             var message404 = "There is no such page! <a href='/'>Back to home page</a>"
//             res.writeHead(404, {'Content-Type': 'text/html', 'Content-Length': message404.length})
//             res.write(message404)
//         } else {
//             res.writeHead(200, {'Content-Type': 'text/html', 'Content-Length': html.length})
//             res.write(html)
//         }
//         res.end()
//     })
// })


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });



const config = {
    apiKey: "AIzaSyDfn03oIIrJiBFyuQ7WY22YJem1USHo_kE",
    authDomain: "hangman-ca7fe.firebaseapp.com",
    databaseURL: "https://hangman-ca7fe.firebaseio.com",
    projectId: "hangman-ca7fe",
    storageBucket: "hangman-ca7fe.appspot.com",
    messagingSenderId: "717069141803"
};

firebase.initializeApp(config);
let authentication = firebase.auth();

//
// authentication.createUserWithEmailAndPassword(email, password).catch(function(error) {
//     let errorCode = error.code;
//     let errorMessage = error.message;
// });

function firebaseLogin(email, password) {

}

function getUserScore() {

}

app.post("/hangman.html", (request, res) => {
    let req = request.body;
    if (req.instruction === "fetch") {

    } else {
        storeScore(req.userScore, req.userName);
    }
});

app.get('/api/stuff', (req, res) => {
    res.send("Hello World ");
});

app.use("/public", express.static(__dirname + "/public"));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + "hangman.html");
});

app.post('/signup.html', (req, res) => {
   console.log(req);
   console.log(res);
});

app.get('/signup.html', (req, res) => {
   res.sendFile(__dirname + "/" + "signup.html");
});


app.listen(port, () => {
   console.log("Listening on port" + port);
});