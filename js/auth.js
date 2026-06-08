import { auth, provider } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// REGISTER
export function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// LOGIN
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// GOOGLE LOGIN
export function loginWithGoogle() {
  return signInWithPopup(auth, provider);
}

// LOGOUT
export function logout() {
  return signOut(auth);
}
