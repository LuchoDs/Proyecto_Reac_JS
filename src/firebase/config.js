import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl3N9BaWnDAWvWOyGzrirdRPdMjY70PAI",
  authDomain: "sevina-copese.firebaseapp.com",
  projectId: "sevina-copese",
  storageBucket: "sevina-copese.firebasestorage.app",
  messagingSenderId: "771845092246",
  appId: "1:771845092246:web:7a7c4a6a06708f8b5d63b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };

// api key: "2424f952129bf139012bf71dc686f04b"

//https://i.ibb.co/60gptjfQ/Arroz-Eliges.jpg