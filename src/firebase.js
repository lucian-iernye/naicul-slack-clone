// npm install -g firebase-tools
// npm i firebase

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC5n2PNTVqDE_o__FeNqKcoqGjoXCiHOF8",
  authDomain: "naicul-slack-clone.firebaseapp.com",
  databaseURL: "https://naicul-slack-clone.firebaseio.com",
  projectId: "naicul-slack-clone",
  storageBucket: "naicul-slack-clone.appspot.com",
  messagingSenderId: "901849445282",
  appId: "1:901849445282:web:09e46af96c1eeae98438fb",
  measurementId: "G-EX6PRBXEPE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
