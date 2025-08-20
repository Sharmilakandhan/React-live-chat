// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtgIE5JR0VZi3HZ9UwGf5DetpObUIOeXc",
  authDomain: "chat-app-2f163.firebaseapp.com",
  projectId: "chat-app-2f163",
  storageBucket: "chat-app-2f163.firebasestorage.app",
  messagingSenderId: "1059597092850",
  appId: "1:1059597092850:web:0e4ca3764a0ba941508d6b",
  measurementId: "G-NQMD239TNW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();