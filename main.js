// // 🔹 1. import は必ず一番上
// import { initializeApp } from
//   "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

// import {
//   getFirestore,
//   collection,
//   addDoc,
//   getDocs
// } from
//   "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// // 🔹 2. firebaseConfig
// const firebaseConfig = {
//   apiKey: "AIzaSyCJ8I6EclhXq-qa9ypJbYnEVprqkGUQ1rg",
//   authDomain: "api-test-e6972.firebaseapp.com",
//   projectId: "api-test-e6972",
//   storageBucket: "api-test-e6972.appspot.com",
//   messagingSenderId: "169059356277",
//   appId: "1:169059356277:web:b98c5060eb1cee1a22323c",
//   measurementId: "G-3KS0SSQ5K4"
// };

// // 🔹 3. Firebase 初期化
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // 🔹 4. 保存ボタン
// document.getElementById("save").addEventListener("click", async () => {
//   console.log("ボタン押下");

//   try {
//     await addDoc(collection(db, "messages"), {
//       text: "こんにちは",
//       time: Date.now()
//     });
//     console.log("保存成功");
//   } catch (e) {
//     console.error("保存失敗", e);
//   }


// // 🔹 5. 取得して表示
// const list = document.getElementById("list");

// const snapshot = await getDocs(collection(db, "messages"));
// snapshot.forEach(doc => {
//   const li = document.createElement("li");
//   li.textContent = doc.data().text;
//   list.appendChild(li);
// });

//   });
