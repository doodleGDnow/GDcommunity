import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "./firebase.js";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

document.getElementById("registerBtn").addEventListener("click", register);

async function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      username: username,
      email: email,
      createdAt: serverTimestamp()
    });

    console.log("Usuario creado 🔥");
  } catch (error) {
    console.log(error.message);
  }
}

const userCredential = await createUserWithEmailAndPassword(auth, email, password);
const user = userCredential.user;

console.log("AUTH OK:", user.uid);

await setDoc(doc(db, "users", user.uid), {
  username: username,
  email: email,
  createdAt: serverTimestamp()
});

console.log("FIRESTORE OK 🔥");
