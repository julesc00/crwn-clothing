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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
