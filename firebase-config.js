// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeqCUpNaSn4_ZtPfcSnbkegiPYWXBNiqg",
  authDomain: "twitter-40079.firebaseapp.com",
  projectId: "twitter-40079",
  storageBucket: "twitter-40079.appspot.com",
  messagingSenderId: "464763967860",
  appId: "1:464763967860:web:1eb41465ee78808c247421",
  measurementId: "G-RFD4XT6HT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);