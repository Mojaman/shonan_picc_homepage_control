import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  onSnapshot,
  setDoc,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

// Firebase設定
const firebaseConfig = {
  apiKey: "AIzaSyD2-qs_MfQk1540EgVtl6F3bH0tEmRIU88",
  authDomain: "homepage-test-cc15b.firebaseapp.com",
  projectId: "homepage-test-cc15b",
  storageBucket: "homepage-test-cc15b.firebasestorage.app",
  messagingSenderId: "306865836134",
  appId: "1:306865836134:web:8e6262f6f9fab6477a9da7",
  measurementId: "G-Z4B1QECB3Y"
};

// 初期化
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const saveWelcome = document.getElementById("save_welcome");
const editWelcome = document.getElementById("edit_welcome");
const displayWelcome = document.getElementById("display_welcome");
const auth = getAuth();

const docRef = doc(db, "top", "welcome");

onSnapshot(docRef, (snapshot) => {
  const data = snapshot.data();
  if(data) {
    editWelcome.value = data.content;
    displayWelcome.textContent = data.content;
  }
});

saveWelcome.addEventListener("click", async () => {
  const content = editWelcome.value;
  await setDoc(docRef, {
    content: content
  });
});

const docRef2 = doc(db, "top", "activity");
const saveActivity = document.getElementById("save_activity");
const editActivity = document.getElementById("edit_activity");
const displayActivity = document.getElementById("display_activity");

onSnapshot(docRef2, (snapshot) => {
  const data = snapshot.data();
  if(data) {
    editActivity.value = data.content;
    displayActivity.textContent = data.content;
  }
});

saveActivity.addEventListener("click", async () => {
  const content = editActivity.value;
  await setDoc(docRef2, {
    content: content
  });
});

const docRef3 = doc(db, "top", "room");
const saveRoom = document.getElementById("save_room");
const editRoom = document.getElementById("edit_room");
const displayRoom = document.getElementById("display_room");

onSnapshot(docRef3, (snapshot) => {
  const data = snapshot.data();
  if(data) {
    editRoom.value = data.content;
    displayRoom.textContent = data.content;
  }
});

saveRoom.addEventListener("click", async () => {
  const content = editRoom.value;
  await setDoc(docRef3, {
    content: content
  });
});
