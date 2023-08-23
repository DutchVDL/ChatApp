/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFoO_T31MP5wksbV6_SDvBjGye0qdSXxk",
  authDomain: "chatapplication-e8d79.firebaseapp.com",
  projectId: "chatapplication-e8d79",
  storageBucket: "chatapplication-e8d79.appspot.com",
  messagingSenderId: "174947034760",
  appId: "1:174947034760:web:1ce28c192a66a0571b613d",
  measurementId: "G-21GRDQS3N4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
