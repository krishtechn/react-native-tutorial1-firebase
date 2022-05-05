import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase,ref,set,update,onValue,get,child } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB99pbE_NslsHdkqjXI37jvhsv7c_70PiA",
  authDomain: "awesomeproject-31f45.firebaseapp.com",
  databaseURL: "https://awesomeproject-31f45-default-rtdb.firebaseio.com",
  projectId: "awesomeproject-31f45",
  storageBucket: "awesomeproject-31f45.appspot.com",
  messagingSenderId: "448829836953",
  appId: "1:448829836953:web:b17ebdc1986adf3aa7f208",
  measurementId: "G-E00PGFWEK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
export {auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,database,ref,set,update,onValue,get,child};