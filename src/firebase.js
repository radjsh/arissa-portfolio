import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
require("firebase/firestore");

const app = firebase.initializeApp({
    apiKey: "AIzaSyBDa7a-5ykkS5B1Qxxu-L0cCPyoq8uCG64",
    authDomain: "arissa-portfolio.firebaseapp.com",
    databaseURL: "https://arissa-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "arissa-portfolio",
    storageBucket: "arissa-portfolio.appspot.com",
    messagingSenderId: "38118348426",
    appId: "1:38118348426:web:0b988eb2cb861b4d02ff73",
    measurementId: "G-D90PD7LB68"
})

export var db = firebase.firestore();
export var storage = firebase.storage();
export const auth = app.auth()