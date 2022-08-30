import firebase from "firebase/app";
import "firebase/database";
import "firebase/firebase-auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCmVw8pACVFHWh90nETEZI65exHcEArnE8",
    authDomain: "app-teste-aula9.firebaseapp.com",
    projectId: "app-teste-aula9",
    storageBucket: "app-teste-aula9.appspot.com",
    messagingSenderId: "261472088037",
    appId: "1:261472088037:web:6e4cfd3784c1a5611a890c",
    measurementId: "G-VZ0FKNH446"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebaseConfig;