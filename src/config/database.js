import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAyYoeq9JMzpgGmzbJt3mCpuXu3rtGj4Ig',
  authDomain: 'imperial-records.firebaseapp.com',
  databaseURL: 'https://imperial-records.firebaseio.com',
  projectId: 'imperial-records',
  messagingSenderId: '580831682027'
}
firebase.initializeApp(config)
const database = firebase.database()

export const provider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()

export default database
