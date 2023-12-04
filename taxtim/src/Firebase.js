// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5VbX-6gSfj23e5ggwhiAK-JuGfmc5Yco",
  authDomain: "tax-tim.firebaseapp.com",
  projectId: "tax-tim",
  storageBucket: "tax-tim.appspot.com",
  messagingSenderId: "934445413961",
  appId: "1:934445413961:web:3b6924db2071501fc87198",
  measurementId: "G-RF7X7BVJE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();


export {app, auth, sendPasswordResetEmail};
