const express = require('express')

const firebase = require("firebase");

var config = {
    apiKey: "AIzaSyAffjMU8ZM6x7LJaQueNJrR7oM1bw9LV2Y",
    authDomain: "note-book-auth.firebaseapp.com",
    databaseURL: "https://note-book-auth.firebaseio.com/",
    storageBucket: "gs://note-book-auth.appspot.com",
};

firebase.initializeApp(config);



const app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res, next) {
    res.send('get')
})

app.post('/', function(req, res, next) {
    res.send('post')
})



const testEmail1 = 'testemail@gmail.com'
const testEmail2 = 'testemail2@gmail.com'
const password = 'password'

firebase.auth().createUserWithEmailAndPassword(testEmail2, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
    // ...
});

firebase.auth().signInWithEmailAndPassword(testEmail2, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorCode)
    console.log(errorMessage)
    // ...
});


firebase.auth().signInWithEmailAndPassword(testEmail1, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorCode)
    console.log(errorMessage)
    // ...
});

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log('user logged in')

        if (user != null) {
            var email,  uid
            email = user.email;
            console.log(email )
            uid = user.uid;
            console.log(uid )
        }
    } else {
        console.log('no user');
    }
});




app.listen(process.env.PORT , process.env.IP, function () {
    console.log('Example app listening on port 3000!')
});