// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhMcnL664VkgHBeo_qsNbrYCGLwBoNips",
  authDomain: "fir-auth-3ede7.firebaseapp.com",
  projectId: "fir-auth-3ede7",
  storageBucket: "fir-auth-3ede7.appspot.com",
  messagingSenderId: "1020715556905",
  appId: "1:1020715556905:web:a1262c847c44dc97953c38",
  measurementId: "G-WK6T7EQR50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig