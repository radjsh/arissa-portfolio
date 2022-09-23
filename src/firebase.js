import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
require("firebase/firestore");

const app = firebase.initializeApp({
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_DB_URL,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID,
    measurementId: process.env.VUE_APP_MEASUREMENT_ID
})

firebase.firestore().settings({ experimentalForceLongPolling: true, merge:true });

export var db = firebase.firestore();
export var storage = firebase.storage();
export const auth = app.auth()