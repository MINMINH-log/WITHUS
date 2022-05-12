// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsZib_BYw6hBl324NHImf6wuT41KmWrUg",
  authDomain: "withus-1357b.firebaseapp.com",
  projectId: "withus-1357b",
  storageBucket: "withus-1357b.appspot.com",
  messagingSenderId: "520421686528",
  appId: "1:520421686528:web:311b4a4d8b8f12994647e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
export const dbService = getFirestore(app);
export const storageService = getStorage(app);
