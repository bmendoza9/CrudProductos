import firebase from 'firebase/app';
import 'firebase/firestore';
// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAVAE2C88cClJbi_W0LAyB4-KL9rG1ftBs",
    authDomain: "crudproductos-c676d.firebaseapp.com",
    databaseURL: "https://crudproductos-c676d.firebaseio.com",
    projectId: "crudproductos-c676d",
    storageBucket: "crudproductos-c676d.appspot.com",
    messagingSenderId: "539887206297",
    appId: "1:539887206297:web:fefc2c7db262be570f1d08",
    measurementId: "G-LMNYW871X1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;
