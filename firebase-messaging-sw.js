// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "ضع_apiKey_هنا",
  authDomain: "ضع_authDomain_هنا",
  projectId: "ضع_projectId_هنا",
  storageBucket: "ضع_storageBucket_هنا",
  messagingSenderId: "ضع_messagingSenderId_هنا",
  appId: "ضع_appId_هنا"
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
