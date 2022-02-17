import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
// import firebase from 'firebase/app'
// import { firebaseConfig } from './firebase-config.js'
// import 'firebase/firestore'

// firebase.initializeApp(firebaseConfig)
// export const db = firebase.firestore()

createApp(App).use(router).mount('#app')