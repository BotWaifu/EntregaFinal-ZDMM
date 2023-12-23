import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig ={
    apiKey: "AIzaSyCD-n3lE59ixNzwqjbLnN77V7Tymz55X8M",
    authDomain: "react-darte.firebaseapp.com",
    projectId: "react-darte",
    storageBucket: "react-darte.appspot.com",
    messagingSenderId: "425310235564",
    appId: "1:425310235564:web:49fd6d0799120265822809",
    measurementId: "G-VVJGLDTBPE"
}
const app = initializeApp (firebaseConfig)
export const db = getFirestore (app)