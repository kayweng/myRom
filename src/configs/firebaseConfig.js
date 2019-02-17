import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
  apiKey: "AIzaSyA65Z4dyKuNXgPFjV4E8N5YrF5Gx354nn0",
  authDomain: "myrom-300d4.firebaseapp.com",
  databaseURL: "https://myrom-300d4.firebaseio.com",
  projectId: "myrom-300d4",
  storageBucket: "myrom-300d4.appspot.com",
  messagingSenderId: "105878000732"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const monsterCollection = db.collection('monster')

export {
    db,
    storage,
    auth,
    currentUser,
    monsterCollection
}