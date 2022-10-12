// Import the functions you need from the SDKs you need
import { initializeApp } 
from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js'

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } 
from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js'

import { 
  getFirestore, collection, addDoc } 
from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTpHOn1-XeDv_48Bz68P11t7pzV3hqw2k",
  authDomain: "cloud-develop-f06c9.firebaseapp.com",
  projectId: "cloud-develop-f06c9",
  storageBucket: "cloud-develop-f06c9.appspot.com",
  messagingSenderId: "353288036042",
  appId: "1:353288036042:web:5b904a8a1a60a444bade33",
  measurementId: "G-Q8L2S01FR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Module authentication
const auth = getAuth();
/////////metodo de autenticacion del usuario
export const loginvalidation=(email,password)=>
  signInWithEmailAndPassword(auth, email, password)

/////////metodo de registro de usuario
export const registeruser=(email,password)=>
createUserWithEmailAndPassword(auth, email, password)

////////Firestore//////////////////
const db = getFirestore(app);