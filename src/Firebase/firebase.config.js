// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgf-40-eaWTQ3j7-9Rq86iBIvg5dRaYq0",
    authDomain: "car-doctor-be138.firebaseapp.com",
    projectId: "car-doctor-be138",
    storageBucket: "car-doctor-be138.appspot.com",
    messagingSenderId: "1090650132861",
    appId: "1:1090650132861:web:1797dd358d6dd577307c14"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth