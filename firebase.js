import firebase from "firebase/app";
import "firebase/firestore";

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
  });
}

export const firestore = firebase.firestore();
export const todosCollection = firestore.collection("todos");
