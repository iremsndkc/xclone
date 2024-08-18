// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyNgp-ZVUB4TTkcTYTi2pM_17e68IKv8U",
  authDomain: "twitterclone-2bc56.firebaseapp.com",
  projectId: "twitterclone-2bc56",
  storageBucket: "twitterclone-2bc56.appspot.com",
  messagingSenderId: "721518943437",
  appId: "1:721518943437:web:4d1b238bb5fa77ae1ddd84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth referansını al.
export const auth = getAuth(app);

// google sağlayıcısını kur.
export const provider = new GoogleAuthProvider();

//veritabanının referansını al.
export const db = getFirestore(app);