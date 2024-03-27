// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgLW-cuVLa0RXo1ZOs90gtHlEttf_y0KM",
    authDomain: "mj-webshop.firebaseapp.com",
    projectId: "mj-webshop",
    storageBucket: "mj-webshop.appspot.com",
    messagingSenderId: "569730582891",
    appId: "1:569730582891:web:5c6d142bd134cb5de3642e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()