// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDAswNSYFoDCnMRV-YcKP8GJ96QffuiS9w",
    authDomain: "one-love-68b78.firebaseapp.com",
    projectId: "one-love-68b78",
    storageBucket: "one-love-68b78.appspot.com",
    messagingSenderId: "82120462499",
    appId: "1:82120462499:web:cd9371c6ca122b4e5daf16",
    measurementId: "G-B0K9CQQ522",

  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;
