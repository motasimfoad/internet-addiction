import firebase from 'firebase'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyBlKzUN1eGCNJnLdOFKpDaENlxYlx8A4hA",
    authDomain: "project-b8e76.firebaseapp.com",
    databaseURL: "https://project-b8e76.firebaseio.com",
    projectId: "project-b8e76",
    storageBucket: "project-b8e76.appspot.com",
    messagingSenderId: "820691775250",
    appId: "1:820691775250:web:ead3b102c9245700708dcb",
    measurementId: "G-RX7JL5C44R"
  });
  
let db = firebase.firestore()

export default {
  firebase, db
}