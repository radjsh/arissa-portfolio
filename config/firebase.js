import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/performance";
import "firebase/messaging";
import { userSetter } from "core-js/fn/symbol";
import { onUnmounted } from "vue";

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

const db = firebase.firestore();
const canvasCollection = db.collection('canvases');

export default {
  db,
  auth: firebase.auth(),
  firebase: firebase,
  notificationSupported: firebase.messaging.isSupported(),
  messaging: firebase.messaging.isSupported() ? firebase.messaging() : null,
};

// export const setCanvas = canvas => {
//     return canvasCollection.add(canvas)
// }

// export const getCanvas = async id => {
//     const canvas = await canvasCollection.doc(id).get()
//     return canvas.exists ? canvas.data() : null
// }

// export const deleteCanvas = id => {
//     return canvasCollection.doc(id).delete()
// }

// export const useLoadCanvases = () => {
//     const canvases = ref([])
//     const close = canvasCollection.onSnapshot(snapshot => {
//         canvases.value = snapshot.docs.map( doc => ({ id : doc.id, ...doc.data() }))
//     })
//     onUnmounted(close)
//     return canvases
// }