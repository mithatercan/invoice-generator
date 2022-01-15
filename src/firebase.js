import firebase from "firebase";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAtU2vkwt8gJqquPNGHR5NOeMn17FMsQPU",
  authDomain: "invoice-app-23e7f.firebaseapp.com",
  projectId: "invoice-app-23e7f",
  storageBucket: "invoice-app-23e7f.appspot.com",
  messagingSenderId: "3922214431",
  appId: "1:3922214431:web:a2960cb146ee9edaec1f2a",
  measurementId: "G-KS9KBJYMHP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase;
