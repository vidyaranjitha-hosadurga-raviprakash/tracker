importScripts("https://www.gstatic.com/firebasejs/8.2.10/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.2.10/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyDqLafqqkhdX32QbZ7q8NWTDnzFmPz2ons",
  authDomain: "track-us-dc036.firebaseapp.com",
  databaseURL:
    "https://track-us-dc036-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "track-us-dc036",
  storageBucket: "track-us-dc036.appspot.com",
  messagingSenderId: "156141524497",
  appId: "1:156141524497:web:7ba1e767643bfaf5aa43b0",
  measurementId: "G-QYPSPK30C2",
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log("setBackgroundMessageHandler = payload", payload);
  const notification = JSON.parse(payload);
  const notificationOption = {
    body: notification.body,
    icon: notification.icon,
  };
  return self.registration.showNotification(
    payload.notification.title,
    notificationOption
  );
});
