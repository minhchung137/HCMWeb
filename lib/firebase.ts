import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBcAGzsu3117IYYwarsOug0u6BGx2KhdKA",
  authDomain: "questionask.firebaseapp.com",
  // databaseURL: "https://questionask-default-rtdb.firebaseio.com",
  projectId: "questionask",
  storageBucket: "questionask.firebasestorage.app",
  messagingSenderId: "1037489286507",
  appId: "1:1037489286507:web:fd74949428bf413c96f02e",
  measurementId: "G-S0WLEEWTFP"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)