import firebase from "firebase";
import "firebase/firebase-firestore";


var firebaseConfig = {
  apiKey: "AIzaSyD-joJyH83LdTaLWPTV2C0XG8R3OG2IqwY",
  authDomain: "react-native-firebase-20cb9.firebaseapp.com",
  projectId: "react-native-firebase-20cb9",
  storageBucket: "react-native-firebase-20cb9.appspot.com",
  messagingSenderId: "946580173101",
  appId: "1:946580173101:web:99781ac0f5ec2032e9e3a4",
  measurementId: "G-XX0CRVNPQN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
 
};
