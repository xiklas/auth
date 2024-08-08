// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7qtdoEN6DU-wlMVPa4qJXf_CNktoYMEU",
  authDomain: "auth-325e0.firebaseapp.com",
  projectId: "auth-325e0",
  storageBucket: "auth-325e0.appspot.com",
  messagingSenderId: "862380930370",
  appId: "1:862380930370:web:0ef9739b50217c01a484db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);