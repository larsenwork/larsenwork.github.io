import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  storageBucket: '',
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
const db = firebase.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)

export default db
