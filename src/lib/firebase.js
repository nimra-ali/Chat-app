

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey:"AIzaSyDNusXXzPtoCrdnNfhMHDNVlS9L0my_3bo", 
  authDomain: "react-chat-3e71e.firebaseapp.com",
  projectId: "react-chat-3e71e",
  storageBucket: "react-chat-3e71e.firebasestorage.app",
  messagingSenderId: "532265558433",
  appId: "1:532265558433:web:d77716c2234172aa2c2be0",
  measurementId: "G-N3WFMJXCDN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore()
// export const getStorage = getStorage() 