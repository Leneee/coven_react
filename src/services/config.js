import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJaJ05iG7KYJR-_uu3U9CT0Ls7J_Yfr2g",
  authDomain: "coven-maiorum.firebaseapp.com",
  projectId: "coven-maiorum",
  storageBucket: "coven-maiorum.appspot.com",
  messagingSenderId: "711669951890",
  appId: "1:711669951890:web:a1b686351efbc9ba5ee54b"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)