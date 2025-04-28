// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Danger file should not share in github
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArYj7WXdN5sWK1D0TmfGDB8tsLE2rCTvg",
  authDomain: "context-api-ad08f.firebaseapp.com",
  projectId: "context-api-ad08f",
  storageBucket: "context-api-ad08f.firebasestorage.app",
  messagingSenderId: "297685192506",
  appId: "1:297685192506:web:7eba133d71466763424a03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);