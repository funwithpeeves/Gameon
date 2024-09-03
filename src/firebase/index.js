// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBBsLIUGhWb030D2pZg_vdnqYtySuVNV4",
  authDomain: "gameon-d7cb1.firebaseapp.com",
  projectId: "gameon-d7cb1",
  storageBucket: "gameon-d7cb1.appspot.com",
  messagingSenderId: "813230124607",
  appId: "1:813230124607:web:5741ca45378fa0c499928a",
  measurementId: "G-N2696D6D2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);