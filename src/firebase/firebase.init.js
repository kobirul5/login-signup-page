// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// do not share in public
const firebaseConfig = {
  apiKey: "AIzaSyCOUzzj_jCLldP8aWJG5hq2KNfhEAW1o4M",
  authDomain: "email-password-auth-be5ed.firebaseapp.com",
  projectId: "email-password-auth-be5ed",
  storageBucket: "email-password-auth-be5ed.firebasestorage.app",
  messagingSenderId: "626148089530",
  appId: "1:626148089530:web:8eec625afd0e33ad0e6c83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);