import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyABV6abVFVDd53szz04ACXwNsUn8gG8orU",
  authDomain: "crwn-db-5595b.firebaseapp.com",
  databaseURL: "https://crwn-db-5595b.firebaseio.com",
  projectId: "crwn-db-5595b",
  storageBucket: "crwn-db-5595b.appspot.com",
  messagingSenderId: "52810702081",
  appId: "1:52810702081:web:0dfcb1ebfb0f6ccac5cf00",
  measurementId: "G-DLJD7SVH1C"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
