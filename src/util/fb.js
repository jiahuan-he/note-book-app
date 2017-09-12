import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyAffjMU8ZM6x7LJaQueNJrR7oM1bw9LV2Y",
    authDomain: "note-book-auth.firebaseapp.com",
    databaseURL: "https://note-book-auth.firebaseio.com/",
    storageBucket: "gs://note-book-auth.appspot.com",
};

firebase.initializeApp(config);

export const signUp = (email, password, onError)=> {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(
        (error)=> onError(error)
    );
};

export const login = (email, password, onError) => {

    firebase.auth().signInWithEmailAndPassword(email, password).catch(
        (error)=> onError(error)
    );
};

export const onLoginStateChange = ( onChange )=> {

    firebase.auth().onAuthStateChanged(
        (user)=> onChange(user)
    );
};

export const logout = ( then, onError ) => {
    firebase.auth().signOut()
        .then(then)
        .catch( (error) => onError(error));
};

export const getCurrentUser = () => {
    return firebase.auth().currentUser;
};

export default firebase;



