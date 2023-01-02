import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiwM86iGAGFZh29cAClvtOO-0HiKxK3ZY",
  authDomain: "netflix-clone-bb50c.firebaseapp.com",
  projectId: "netflix-clone-bb50c",
  storageBucket: "netflix-clone-bb50c.appspot.com",
  messagingSenderId: "1043646031284",
  appId: "1:1043646031284:web:628efa1d6b5d3d187f3ee1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
