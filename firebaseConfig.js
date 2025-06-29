import { initializeApp } from "firebase/app";

import {getReactNativePersistence, initializeAuth} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from 'firebase/firestore'


// 1. create new project on firebase console
// 2. enable email and password auth provider in authentication
// 3. create a web app and copy the firebseConfigs below 

const firebaseConfig = {
  apiKey: "AIzaSyC_eXBVz9mSTSJBkRNzco5yH_mLnJ6wICY",
  authDomain: "teste-f9859.firebaseapp.com",
  projectId: "teste-f9859",
  storageBucket: "teste-f9859.firebasestorage.app",
  messagingSenderId: "510341554746",
  appId: "1:510341554746:web:a745ee6fa0fb30d3f0cb03",
  measurementId: "G-VQG2S9R8FX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const usersRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');
