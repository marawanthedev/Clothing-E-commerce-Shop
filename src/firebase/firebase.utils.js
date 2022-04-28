import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { batch } from "react-redux";

var config = {
  apiKey: "AIzaSyCPei-5tK_4cMoaBF6jl9ZZQ9FXTQbM20E",
  authDomain: "ecommerce-db-ffd7f.firebaseapp.com",
  projectId: "ecommerce-db-ffd7f",
  storageBucket: "ecommerce-db-ffd7f.appspot.com",
  messagingSenderId: "337043342687",
  appId: "1:337043342687:web:be6b2b4c15eb637772a2ea",
  measurementId: "G-MJVFTXWM6E",
};

export const createUserProfileDocument = async (userAuth, additionData) => {
  if (!userAuth) return;
  else {
    // **

    // note1
    // *very importatnte*
    // note2
    // **getting userref
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // **and then its snapshot
    const snapShot = await userRef.get();

    // **checking for data existence
    if (!snapShot.exists) {
      //note 3
      const { displayName, email } = userAuth;

      const createdAt = new Date();

      //   **posting the data to firebase
      try {
        //   **we gotta use try and catch just in case this async set fails
        await userRef.set({
          displayName,
          email,
          createdAt,
          // additional data spreading
          ...additionData,
        });
      } catch (error) {
        console.log("Error creating user", error.message);
      }
      //   userRef.set()
    }
    // **end of else

    // **returning it so i can access it in appjs and get user data and add it to my state info
    return userRef;
  }
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google authentication

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const addCollectionAndDocuments = (
  collectionKey,
  collectionDocuments
) => {
};

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// notes
// note1
// two types of objects
// to be returned
// either query reference or query snapshot
// query is asking firestore for  doc or collection
// fire store will return the doc / collection object

// this returns object with details about the objects props
// so we either get back a docuemt ref object
// or collection ref object
// the main keydifference between both is that document ref object has a diff methods
// such as .set,.get,.update.delete
// which corresponds to post get put and delete
// on the other hand collection objects mtheods are
// .add ({value:prop})

// note2
// both get methods from collection ref or document ref is going to return a snapshotObject from the reference object using the .get
// document ref return document snapshot object
// collection ref return querysnapshot object
// **
// thats the user reference

// note 3
// if it doesnr exist we are going to post it
// this si gonna so fucking useful
// and ill tell you why
// when a user is here to signup a new account into our system
// instead of loopping through all users and checking if it already exists or not
// i can simply just refrence it and get a snapshot object and check if exist ==true or not
// this is a huge performance boost holy moly coly istanbuly
// create a data
// this userRef is pointing at a certain path in our Db
// and we can manipulate it by either getting the data in this path , adding data to this path
// updating this paths data or deleteing the paths data
//  and here is where we can understand how fucking powerful is object destructruing
// instead of going through the massive api data and trying to get the right path to the required data
// i could just simple destruct it
// holy fucking moly istanbul i wish i did understand this before
// it could have saved hours and hours of stupidity
// now life is easier as a js developer
// destructing info from user auth object
