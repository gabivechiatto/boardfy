import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBwrN9XnncPkpmAGqlWj0012Pe9JqPhkpI",
  authDomain: "boardfy-cfa31.firebaseapp.com",
  projectId: "boardfy-cfa31",
  storageBucket: "boardfy-cfa31.appspot.com",
  messagingSenderId: "358705245267",
  appId: "1:358705245267:web:3503556d05c11fc758aaa6",
  measurementId: "G-6Y576GCNPL"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
