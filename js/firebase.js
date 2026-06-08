import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { 
  getAuth, 
  GoogleAuthProvider 
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAM93Sb-qBDOQ7pWi0OTuebjLBU8k2Hjkk",
  authDomain: "gdcommunity-825cb.firebaseapp.com",
  projectId: "gdcommunity-825cb",
  storageBucket: "gdcommunity-825cb.appspot.com",
  messagingSenderId: "322265405254",
  appId: "1:322265405254:web:cc1ec8a844d788bea1b747"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
