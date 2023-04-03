import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
  apiKey: "AIzaSyASFVMLgaHq3EtZyR1QnLZE8GvWQe0UWew",
  authDomain: "imperial-2d623.firebaseapp.com",
  projectId: "imperial-2d623",
  storageBucket: "imperial-2d623.appspot.com",
  messagingSenderId: "677516707380",
  appId: "1:677516707380:web:27963b955b5b6e38b96c61"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
export const auth = firebase.auth()
export const db = firebase.firestore()
export const updateDoc = firebase.firestore()
export const st = firebase.storage()
