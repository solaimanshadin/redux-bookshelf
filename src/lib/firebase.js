import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeqFE1BwexeU8bisIm7aMt8szgMmAXSwQ",
  authDomain: "bookshelf-9e271.firebaseapp.com",
  projectId: "bookshelf-9e271",
  storageBucket: "bookshelf-9e271.appspot.com",
  messagingSenderId: "188481056655",
  appId: "1:188481056655:web:488b42a4bc59aaace825fa"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
