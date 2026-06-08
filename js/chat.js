import { db, auth } from "./firebase.js";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const messagesDiv = document.getElementById("messages");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

let currentUser = null;

// Detect user
onAuthStateChanged(auth, (user) => {
    currentUser = user;

    if (!user) {
        sendBtn.disabled = true;
        input.placeholder = "Login required to chat 🔒";
    } else {
        sendBtn.disabled = false;
        input.placeholder = "Write a message...";
    }
});

// Send message
sendBtn.onclick = async () => {
    if (!currentUser) return;

    const text = input.value.trim();
    if (!text) return;

    await addDoc(collection(db, "messages"), {
        text: text,
        user: currentUser.email,
        time: serverTimestamp()
    });

    input.value = "";
};

// Load messages real-time
const q = query(collection(db, "messages"), orderBy("time"));

onSnapshot(q, (snapshot) => {
    messagesDiv.innerHTML = "";

    snapshot.forEach((doc) => {
        const msg = doc.data();

        const div = document.createElement("div");
        div.className = "message";

        div.innerHTML = `
            <strong>${msg.user || "Unknown"}:</strong> ${msg.text}
        `;

        messagesDiv.appendChild(div);
    });
});
