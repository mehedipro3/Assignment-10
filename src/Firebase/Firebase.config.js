// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfg9RIqkg0b8L_eh8BotOcg49P_4nbPg8",
  authDomain: "visa-navigator-c33a9.firebaseapp.com",
  projectId: "visa-navigator-c33a9",
  storageBucket: "visa-navigator-c33a9.firebasestorage.app",
  messagingSenderId: "125795467602",
  appId: "1:125795467602:web:1b0db8343130734ccf7a8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;