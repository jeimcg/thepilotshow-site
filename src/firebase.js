// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgZzzFSZ76B70i1GsaVbI9Ke3kvzxwsiM",
  authDomain: "pilotszn-dasboard.firebaseapp.com",
  projectId: "pilotszn-dasboard",
  storageBucket: "pilotszn-dasboard.firebasestorage.app",
  messagingSenderId: "1059239468346",
  appId: "1:1059239468346:web:0b31f0976c48cd5e89c403",
  measurementId: "G-PLXTSDT64H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }