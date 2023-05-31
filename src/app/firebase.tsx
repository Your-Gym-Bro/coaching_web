import exp from "constants";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZCCAc7TRAHGb49ral__4ysw4pRDaxPxQ",
  authDomain: "your-auth-domain",
  projectId: "labo001-77e8b",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "1:498577113087:android:111ca5a6a369f8bb97b1ca",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db };
