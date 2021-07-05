import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyC5tVdlL0K0u7wQP3Tbe1bg4WcfkIsjoFk",
  authDomain: "uzstore.firebaseapp.com",
  databaseURL: "https://uzstore-default-rtdb.firebaseio.com",
  projectId: "uzstore",
  storageBucket: "uzstore.appspot.com",
  messagingSenderId: "519153610191",
  appId: "1:519153610191:web:b8195300ed3f596741f6ba",
  measurementId: "G-MNDT2KXZ7B"
};


firebase.initializeApp(firebaseConfig);


firebase.functions();


firebase.analytics();


export default firebase;