import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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

export const auth = firebase.auth();
export const db = firebase.firestore();
