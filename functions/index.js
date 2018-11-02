const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const express = require('express');
const app = express();
const firebase = requre('firebase');

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

authentication.createUserWithEmailAndPassword(email, password).catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
});


app.post("/hangman.html", (request, res) => {
    let req = request.body;
    if (req.instruction === "fetch") {

    } else {
        storeScore(req.userScore, req.userName);
    }
});

function storeScore(userScore, userName) {

}