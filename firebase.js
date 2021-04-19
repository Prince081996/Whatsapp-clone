// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDPAaI4X06rqcTz6un0R0uyH6jXKOeVMP8",
    authDomain: "whatsapp2-fd32d.firebaseapp.com",
    projectId: "whatsapp2-fd32d",
    storageBucket: "whatsapp2-fd32d.appspot.com",
    messagingSenderId: "706827557788",
    appId: "1:706827557788:web:82b0553bed2d7032c28659",
    measurementId: "G-DB7L83FRMM"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()  

const db = app.firestore();
const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider}