// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYRKAQDAGSL2KRZzZv7U7UwIAvdTp8AA8",
  authDomain: "toy-tree.firebaseapp.com",
  projectId: "toy-tree",
  storageBucket: "toy-tree.appspot.com",
  messagingSenderId: "1013213474129",
  appId: "1:1013213474129:web:e34f1db56f2fe8feff7770"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;