import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDYBOMYt2wRtUMUbwZCCKEdVw0FH8uFqe4",
    authDomain: "chill-tv-77f5e.firebaseapp.com",
    projectId: "chill-tv-77f5e",
    storageBucket: "chill-tv-77f5e.appspot.com",
    messagingSenderId: "42592492654",
    appId: "1:42592492654:web:7ef9b17dec1cadc6a55a7f",
    measurementId: "G-GD53N0SZJL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;
