// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2k2quUPcc1LLvNMhSL3TWPyUBxDzVHvQ",
  authDomain: "fds-gallery.firebaseapp.com",
  projectId: "fds-gallery",
  storageBucket: "fds-gallery.firebasestorage.app",
  messagingSenderId: "917461529100",
  appId: "1:917461529100:web:41bee790c101be167fb429",
  measurementId: "G-NY27830HQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);