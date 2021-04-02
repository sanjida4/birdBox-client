import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}

const googleProvider = new firebase.auth.GoogleAuthProvider();

const setJwtToken = () => {
    firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
        sessionStorage.setItem('devshop-token', idToken);
        return true;
    }).catch(function (error) {
        console.log(error);
    });
}

export const handleGoogleSignIn = () => {
    return firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            const { displayName, photoURL, email } = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL
            }

            setJwtToken();

            return signedInUser;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
            return errorMessage;
        });
}

export const createUserWithCredentials = (user) => {
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
            const loggedInUser = firebase.auth().currentUser;
            updateProfile(loggedInUser, user);
            const getUserData = firebase.auth().currentUser;
            const newUser = {
                name: user.name,
                email: getUserData.email,
                isSignedIn: true
            };
            return newUser;
        })
        .catch((error) => {
            const errorMessage = error.message;
            return errorMessage;
        });
}

const updateProfile = (user, data) => {

    user.updateProfile({
        displayName: data.name,
    }).then(res => {
        return true;
    }).catch(function (error) {
        return false;
    });
}

export const userLogin = (user) => {
    return firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
            const loggedInUser = userCredential.user;
            const currentUser = {
                name: loggedInUser.displayName,
                email: user.email,
                isSignedIn: true
            }

            setJwtToken();

            return currentUser;
        })
        .catch((error) => {
            return 'error';
        });
}