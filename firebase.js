// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADebTAg1kA2AgqleGY6y4PPXzsFDLDRds",
  authDomain: "instagram-2-lexy.firebaseapp.com",
  projectId: "instagram-2-lexy",
  storageBucket: "instagram-2-lexy.appspot.com",
  messagingSenderId: "606957411550",
  appId: "1:606957411550:web:f677ebcdf0c126a43c364f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };