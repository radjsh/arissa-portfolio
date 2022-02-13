import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/performance";
import "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyBDa7a-5ykkS5B1Qxxu-L0cCPyoq8uCG64",
    authDomain: "arissa-portfolio.firebaseapp.com",
    databaseURL: "https://arissa-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "arissa-portfolio",
    storageBucket: "arissa-portfolio.appspot.com",
    messagingSenderId: "38118348426",
    appId: "1:38118348426:web:0b988eb2cb861b4d02ff73",
    measurementId: "G-D90PD7LB68"
};

firebase.initializeApp(firebaseConfig);
firebase
  .firestore()
  .enablePersistence({ synchronizeTabs: !0 })
  .catch(() => {
    console.warn("DB offline support not available");
  });

export default {
  firestore: firebase.firestore(),
  auth: firebase.auth(),
  firebase: firebase,
  notificationSupported: firebase.messaging.isSupported(),
  messaging: firebase.messaging.isSupported() ? firebase.messaging() : null,
};