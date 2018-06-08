import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBz5B1khDRrzz5TRS0jEB6rF8e8U3yyJ_0',
  authDomain: 'larsentalks.firebaseapp.com',
  databaseURL: 'https://larsentalks.firebaseio.com',
  projectId: 'larsentalks',
  storageBucket: 'larsentalks.appspot.com',
  messagingSenderId: '964389312791',
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
const db = firebase.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)

export default db
