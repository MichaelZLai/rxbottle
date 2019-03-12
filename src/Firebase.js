import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyD1SLVXwK3Rx1Ns9DGEIskLNTItB35fQOA",
  authDomain: "rxbottle-a17d8.firebaseapp.com",
  databaseURL: "https://rxbottle-a17d8.firebaseio.com",
  projectId: "rxbottle-a17d8",
  storageBucket: "rxbottle-a17d8.appspot.com",
  messagingSenderId: "662768706755"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth()

export default firebase
