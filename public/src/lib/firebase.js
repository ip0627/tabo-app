import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase設定情報
const firebaseConfig = {
  apiKey: "AIzaSyBOVejB8kD68SE42H7hWgbRY5g4UOdMfF8",
  authDomain: "tabo-app-1f13b.firebaseapp.com",
  projectId: "tabo-app-1f13b",
  storageBucket: "tabo-app-1f13b.firebasestorage.app",
  messagingSenderId: "664064051378",
  appId: "1:664064051378:web:87b0e74a1cb829272e21ab",
  measurementId: "G-6Z4MPVTDES"
};

// Firebase初期化
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
