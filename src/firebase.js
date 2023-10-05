// import firebase from 'firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCisgZW3jRNkW6sUvwmjQPzwY8LIMcZEmg',
  authDomain: 'fir-3b106.firebaseapp.com',
  projectId: 'fir-3b106',
  storageBucket: 'fir-3b106.appspot.com',
  messagingSenderId: '337035598003',
  appId: '1:337035598003:web:4ac69af0b848fb8a87b8c6',
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// export { db, auth };

export { db, auth, provider };
