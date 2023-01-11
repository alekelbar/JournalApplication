// Import the functions you need from the SDKs you need
import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyAeb28rH9jjT2Vb0KT9de_UGCFTta2buNU",
  authDomain: "fir-test-bede7.firebaseapp.com",
  projectId: "fir-test-bede7",
  storageBucket: "fir-test-bede7.appspot.com",
  messagingSenderId: "178579992038",
  appId: "1:178579992038:web:c73705c6df1b16c64dfa27",
};

// Initialize Firebase
export const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const fireBaseAuth: Auth = getAuth(firebaseApp);

// Initialize firebase Firestore
export const firebaseFirestore = getFirestore(firebaseApp);
