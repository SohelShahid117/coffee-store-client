// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import default from './../../postcss.config';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx3BXYWpPdR2wOMfFUXvTz4jL6Hk_keTQ",
  authDomain: "coffe-store-90fde.firebaseapp.com",
  projectId: "coffe-store-90fde",
  storageBucket: "coffe-store-90fde.appspot.com",
  messagingSenderId: "789994976497",
  appId: "1:789994976497:web:49753a539f024f8e45a550"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth