// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, serverTimestamp } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBV_B8ZJ7N3_XV9chzgDXxZSogcdnqtPRY',
  authDomain: 'vue-firebase-course-a6a33.firebaseapp.com',
  projectId: 'vue-firebase-course-a6a33',
  storageBucket: 'vue-firebase-course-a6a33.appspot.com',
  messagingSenderId: '853644040588',
  appId: '1:853644040588:web:d132098938df5aed691ea9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = getFirestore(app);
const timestamp = serverTimestamp();

// export firestore
export { projectFirestore, timestamp };
