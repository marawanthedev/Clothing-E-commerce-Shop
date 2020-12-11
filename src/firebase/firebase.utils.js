import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyCPei-5tK_4cMoaBF6jl9ZZQ9FXTQbM20E",
  authDomain: "ecommerce-db-ffd7f.firebaseapp.com",
  projectId: "ecommerce-db-ffd7f",
  storageBucket: "ecommerce-db-ffd7f.appspot.com",
  messagingSenderId: "337043342687",
  appId: "1:337043342687:web:be6b2b4c15eb637772a2ea",
  measurementId: "G-MJVFTXWM6E",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google authentication

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
