import firebase from 'firebase'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyBwjxk8XqAUkX4uJZdu-jttvXd9iHdUJGo",
    authDomain: "webapp-b36f8.firebaseapp.com",
    databaseURL: "https://webapp-b36f8.firebaseio.com",
    projectId: "webapp-b36f8",
    storageBucket: "webapp-b36f8.appspot.com",
    messagingSenderId: "807938349493",
    appId: "1:807938349493:web:713eda68d37a59faeb61fc",
    measurementId: "G-6B701MQ0VJ"
  });
  
let db = firebase.firestore()

export default {
  firebase, db
}