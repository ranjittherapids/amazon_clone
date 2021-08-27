import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCAACmZjPJSMHTZHCilNOBmPHWF1enqK6E",
    authDomain: "e-challenge-bb10f.firebaseapp.com",
    projectId: "e-challenge-bb10f",
    storageBucket: "e-challenge-bb10f.appspot.com",
    messagingSenderId: "883515997485",
    appId: "1:883515997485:web:dd95f9fb18dc2c1af627a4",
    measurementId: "G-BW7JL1WQVK"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
   export const db=firebaseApp.firestore();
   export const auth=firebaseApp.auth();
 