// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr0lHmjPIsknk4vLt1wf8MS1J8w291QLI",
  authDomain: "business-app-e8804.firebaseapp.com",
  projectId: "business-app-e8804",
  storageBucket: "business-app-e8804.appspot.com",
  messagingSenderId: "997273069870",
  appId: "1:997273069870:web:11dc69cec7fd7983ac72bf",
  measurementId: "G-75RHX21DBE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);