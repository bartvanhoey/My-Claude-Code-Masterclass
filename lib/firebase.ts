import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB21-pyIGZnKvXs1b2pcXuEhwTg31TrSHg",
  authDomain: "pocket-heist-app-bvh.firebaseapp.com",
  projectId: "pocket-heist-app-bvh",
  storageBucket: "pocket-heist-app-bvh.firebasestorage.app",
  messagingSenderId: "1051637329872",
  appId: "1:1051637329872:web:3208f9907f4599ca4113d5",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
