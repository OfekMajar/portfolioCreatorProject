// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9PcSJb7BEQAvXr2wcKQOKzgDjmxZ4Ngw",
  authDomain: "portfoliocreator-eb0c2.firebaseapp.com",
  projectId: "portfoliocreator-eb0c2",
  storageBucket: "portfoliocreator-eb0c2.appspot.com",
  messagingSenderId: "223814309597",
  appId: "1:223814309597:web:c1aa5feb602cd613c7ad34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
