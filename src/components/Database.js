import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkCNxXevozbKRVGkyCtB2k-gFXab9HLY0",
  authDomain: "movie-booking-app-26e3b.firebaseapp.com",
  projectId: "movie-booking-app-26e3b",
  storageBucket: "movie-booking-app-26e3b.appspot.com",
  messagingSenderId: "492569993653",
  appId: "1:492569993653:web:a489203079c264789479fc",
  measurementId: "G-R570G6YC9G"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth,db} ;
