import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyBHp0ZDiWs4nwCRa_PORhaehxKHmbJ1hzs",
  authDomain: "auth-production-c3028.firebaseapp.com",
  projectId: "auth-production-c3028",
  storageBucket: "auth-production-c3028.appspot.com",
  messagingSenderId: "1033400294391",
  appId: "1:1033400294391:web:58b523b744fc5883ff6cf2"
})
export const auth = app.auth()
export default app