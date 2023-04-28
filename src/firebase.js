// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3xPXTRKJ94JyEFfldaI-JA8uaS-I_rlc",
  authDomain: "portfolio-235df.firebaseapp.com",
  projectId: "portfolio-235df",
  storageBucket: "portfolio-235df.appspot.com",
  messagingSenderId: "565831538935",
  appId: "1:565831538935:web:02d38d80951941e9c31bf2"
};

// Initialize Firebase

initializeApp(firebaseConfig);
export const db = getFirestore()