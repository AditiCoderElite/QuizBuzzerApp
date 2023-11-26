import firebase from 'firebase';

const firebaseConfig = {
 //
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
