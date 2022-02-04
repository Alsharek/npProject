import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSVd6DTqWGwecELMwviRFeY_C0LcdKU2U",
  authDomain: "wasted-89509.firebaseapp.com",
  projectId: "wasted-89509",
  storageBucket: "wasted-89509.appspot.com",
  messagingSenderId: "513825535169",
  appId: "1:513825535169:web:0dc94c8de64a4f8da69040",
  measurementId: "G-FJW84Z8S0Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore();

export default database