// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBV_B8ZJ7N3_XV9chzgDXxZSogcdnqtPRY',
  authDomain: 'vue-firebase-course-a6a33.firebaseapp.com',
  projectId: 'vue-firebase-course-a6a33',
  storageBucket: 'vue-firebase-course-a6a33.appspot.com',
  messagingSenderId: '853644040588',
  appId: '1:853644040588:web:d132098938df5aed691ea9',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();

// calling and using the timestamp function
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export firestore
export { projectFirestore, timestamp };
