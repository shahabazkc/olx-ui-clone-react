import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6vOEujZrx2kBfrlqKilRu27zDJT1dgN4",
    authDomain: "olx-project-c4ad6.firebaseapp.com",
    projectId: "olx-project-c4ad6",
    storageBucket: "olx-project-c4ad6.appspot.com",
    messagingSenderId: "911046691654",
    appId: "1:911046691654:web:6b582d5d3cd25e34fcf347",
    measurementId: "G-247H8G1VRT"
};
export default firebase.initializeApp(firebaseConfig)