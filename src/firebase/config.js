import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAeDp2VS-uGDJSQzNIbERnbwCa0mTAknxA",
    authDomain: "fir-1b05a.firebaseapp.com",
    projectId: "fir-1b05a",
    storageBucket: "fir-1b05a.appspot.com",
    messagingSenderId: "910625802584",
    appId: "1:910625802584:web:e375c57a111c884019bd2d",
    measurementId: "G-FTKPVEKLFY"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;