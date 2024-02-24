// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b8115.firebaseapp.com",
  projectId: "mern-estate-b8115",
  storageBucket: "mern-estate-b8115.appspot.com",
  messagingSenderId: "390229487274",
  appId: "1:390229487274:web:61e7451fbcd7d9fd26ead3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
