import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKW2FKOfs5vGCEmvzzxTgP1s48nyepKAA",
  authDomain: "prife-k2u.firebaseapp.com",
  projectId: "prife-k2u",
  storageBucket: "prife-k2u.firebasestorage.app",
  messagingSenderId: "408652044835",
  appId: "1:408652044835:web:98893766f8df0a7aa2af96",
  measurementId: "G-GEFWHXXD79"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };