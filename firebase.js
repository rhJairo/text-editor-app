import firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD5Ny5Vp-fT6DDINSnz8yZESk5ulA6WZgI",
  authDomain: "text-editor-app-3ac51.firebaseapp.com",
  projectId: "text-editor-app-3ac51",
  storageBucket: "text-editor-app-3ac51.appspot.com",
  messagingSenderId: "183040509002",
  appId: "1:183040509002:web:06843e3b0f2a74154592b3",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
const db = app.firestore()

export { db }
