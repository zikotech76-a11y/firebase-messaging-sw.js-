// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBfHjM3zmUHEhr7ACra8GzKNx9z3jKfArI",
  authDomain: "chatoline-9078a.firebaseapp.com",
  projectId: "chatoline-9078a",
  storageBucket: "chatoline-9078a.firebasestorage.app",
  messagingSenderId: "494131536754",
  appId: "1:494131536754:web:need_to_add_from_console"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification.title || "رسالة جديدة";
  const options = {
    body: payload.notification.body || "",
    icon: "https://cdn-icons-png.flaticon.com/512/2462/2462719.png",
    badge: "https://cdn-icons-png.flaticon.com/512/2462/2462719.png"
  };
  self.registration.showNotification(title, options);
});
