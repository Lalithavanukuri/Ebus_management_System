// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlK_eCG5IlMCdLa-Mc0zMgFWJbzxyZ2JY",
  authDomain: "gym-management-c1da7.firebaseapp.com",
  projectId: "gym-management-c1da7",
  storageBucket: "gym-management-c1da7.appspot.com",
  messagingSenderId: "484090765287",
  appId: "1:484090765287:web:27d4bda0b27d8fb248a742",
  measurementId: "G-XY384N1TZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);