// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnxwwHq7qsZl3k-bS9JVmFNb-YkxlHTwM",
  authDomain: "netflix-gpt-1cc24.firebaseapp.com",
  projectId: "netflix-gpt-1cc24",
  storageBucket: "netflix-gpt-1cc24.firebasestorage.app",
  messagingSenderId: "683998569583",
  appId: "1:683998569583:web:e1e11b88aa5dbec9d2d99a",
  measurementId: "G-VJJJ78753C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();