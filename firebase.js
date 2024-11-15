import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBWBj_vGqfKSsvYiQ3ah-XnMuvuVH1MQoc",
  authDomain: "matt-ste.firebaseapp.com",
  databaseURL: "https://matt-ste-default-rtdb.firebaseio.com",
  projectId: "matt-ste",
  storageBucket: "matt-ste.firebasestorage.app",
  messagingSenderId: "46109756162",
  appId: "1:46109756162:web:0a9feeccb53a9c3623d01b",
  measurementId: "G-MYTJTTYEQ7"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
