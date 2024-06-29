// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-dakshil.firebaseapp.com",
  projectId: "taskmanager-dakshil",
  storageBucket: "taskmanager-dakshil.appspot.com",
  messagingSenderId: "94401979971",
  appId: "1:94401979971:web:28eac89ed1ee146eee56f6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
