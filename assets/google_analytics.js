// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEB1Q0d8DEBj-BeowdY8sgRBZFjIAv1U0",
  authDomain: "invora-509123.firebaseapp.com",
  projectId: "invora-509123",
  storageBucket: "invora-509123.firebasestorage.app",
  messagingSenderId: "712350741320",
  appId: "1:712350741320:web:55fc4d9d7f62f1139d397d",
  measurementId: "G-QSSCWNXWN3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
