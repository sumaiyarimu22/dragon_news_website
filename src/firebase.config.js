// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuxLKLz1yNtkcfiSoF4kJD2b8V6M4iEV0",
  authDomain: "dragon-news-8cb46.firebaseapp.com",
  projectId: "dragon-news-8cb46",
  storageBucket: "dragon-news-8cb46.appspot.com",
  messagingSenderId: "15046889387",
  appId: "1:15046889387:web:77841da28479f718e74cee",
  measurementId: "G-K2M8S4X32D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
