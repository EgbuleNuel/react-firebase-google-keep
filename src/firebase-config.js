import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuycbxUAai-neH7cz7MbhdZnPSRka_Xyw",
  authDomain: "keep-clone-13e9c.firebaseapp.com",
  projectId: "keep-clone-13e9c",
  storageBucket: "keep-clone-13e9c.appspot.com",
  messagingSenderId: "785352684653",
  appId: "1:785352684653:web:ed921e7c69f86676ca3b64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
