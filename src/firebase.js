import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyCbJq8tk3ypCyvrBQjD5ET3f7Zfh2DAA3w",
  authDomain: "tiktok-clone-77ecd.firebaseapp.com",
  databaseURL: "https://tiktok-clone-77ecd.firebaseio.com",
  projectId: "tiktok-clone-77ecd",
  storageBucket: "tiktok-clone-77ecd.appspot.com",
  messagingSenderId: "23781465515",
  appId: "1:23781465515:web:4fc5c4a44cb5c70a4fc6ee",
  measurementId: "G-2HNYFSMNLH",
};
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db= firebaseApp.firestore()
export default db