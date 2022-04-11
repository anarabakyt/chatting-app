import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDv3XnINJ7uq9hZznKkNMk95RCXETf1VLs",
  authDomain: "chat-c43bf.firebaseapp.com",
  databaseURL: "https://chat-c43bf-default-rtdb.firebaseio.com",
  projectId: "chat-c43bf",
  storageBucket: "chat-c43bf.appspot.com",
  messagingSenderId: "376785160526",
  appId: "1:376785160526:web:aa5c70b4aa0d7f6a6bf61f",
  measurementId: "G-WJHZQQ40N3"
  };

  const app=initializeApp(firebaseConfig)

  export const auth=getAuth(app)
  export const db=getDatabase(app)