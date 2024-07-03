import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAQHR3jfKHjcogQKnrGthuf6lyKx_m4ClY",
    authDomain: "clznotes-ea60d.firebaseapp.com",
    projectId: "clznotes-ea60d",
    storageBucket: "clznotes-ea60d.appspot.com",
    messagingSenderId: "1079614908526",
    appId: "1:1079614908526:web:4e50dbd3d89e628a3f5e7f",
    measurementId: "G-Z7K0TEF6FB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, app, storage};
