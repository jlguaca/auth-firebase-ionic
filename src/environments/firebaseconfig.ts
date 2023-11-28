// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyA2A3xHPW3xp3NfkZISlaJKcBcMN-Z2JJ0",
  authDomain: "autenticamoviles.firebaseapp.com",
  projectId: "autenticamoviles",
  storageBucket: "autenticamoviles.appspot.com",
  messagingSenderId: "796264121026",
  appId: "1:796264121026:web:3ff25138a8dd0200fcf15b",
  measurementId: "G-H5EJMD5SPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);