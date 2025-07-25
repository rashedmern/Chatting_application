
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCmZMtCOnuFjR8UWDOws1_vtBk7IRmw3Io",
  authDomain: "oni56-cef1d.firebaseapp.com",
  projectId: "oni56-cef1d",
  storageBucket: "oni56-cef1d.firebasestorage.app",
  messagingSenderId: "28463210192",
  appId: "1:28463210192:web:736eb8c51800251b8e48d5",
  measurementId: "G-19T5XGNKV5"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);