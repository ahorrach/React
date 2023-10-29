// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZZrLXC1BgPweDPqmZEZJRH8DIbSWou7Y",
  authDomain: "react-cursos-d3d3b.firebaseapp.com",
  projectId: "react-cursos-d3d3b",
  storageBucket: "react-cursos-d3d3b.appspot.com",
  messagingSenderId: "364271203661",
  appId: "1:364271203661:web:21891794f935efbbbbf304",
  measurementId: "G-REY4F4JFMS"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );