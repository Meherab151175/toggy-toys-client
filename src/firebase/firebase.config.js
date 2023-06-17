// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlnPX1-WQqxnKR3H-QNUD6-m3peznwgtU",
  authDomain: "toy-cars-9e729.firebaseapp.com",
  projectId: "toy-cars-9e729",
  storageBucket: "toy-cars-9e729.appspot.com",
  messagingSenderId: "295904353805",
  appId: "1:295904353805:web:08c989f2056e65464eff44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;