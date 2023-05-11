import firebase from "firebase/app";
import "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcQma-5OdpT114WrrLSSlxrL7h-JCyX6A",
  authDomain: "financetracker-8da30.firebaseapp.com",
  projectId: "financetracker-8da30",
  storageBucket: "financetracker-8da30.appspot.com",
  messagingSenderId: "890373515551",
  appId: "1:890373515551:web:ba0fe0fbda18b0cbd3682a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
