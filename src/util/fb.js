import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyAffjMU8ZM6x7LJaQueNJrR7oM1bw9LV2Y",
    authDomain: "note-book-auth.firebaseapp.com",
    databaseURL: "https://note-book-auth.firebaseio.com/",
    storageBucket: "gs://note-book-auth.appspot.com",
};

firebase.initializeApp(config);

export const signUp = (email, password, name, onError)=> {
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(
        (error)=> {
            console.log("catch called");
            onError(error)
        }
    );
    onLoginStateChange( (user) => {
       if (user){
           user.updateProfile({
               displayName: name,
           }).then(()=> {

           }).catch(()=> {

           });
       }
    });
};

export const login = (email, password, onError) => {

    firebase.auth().signInWithEmailAndPassword(email, password).catch(
        (error)=> onError(error)
    );
};

export const onLoginStateChange = ( onChange )=> {

    return firebase.auth().onAuthStateChanged(
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



