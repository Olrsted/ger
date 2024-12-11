import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Paste your firebaseConfig from Firebase Console here
const firebaseConfig = {
  apiKey: "AIzaSyB8VgZ2Vd04lXmmGRcU-o9xuxzgmlRu03Y",
  authDomain: "summative-51670.firebaseapp.com",
  projectId: "summative-51670",
  storageBucket: "summative-51670.firebasestorage.app",
  messagingSenderId: "508980487368",
  appId: "1:508980487368:web:ec25ca32fbf24b9e7cf1fd"
};

const config = initializeApp(firebaseConfig)
const auth = getAuth(config);
const firestore = getFirestore(config);

export { auth, firestore };