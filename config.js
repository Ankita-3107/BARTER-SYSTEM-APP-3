import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCgbJ8f6ONah9EklsZ1Ne-ZG3xKkGzSar8",
  authDomain: "barter-app-a7838.firebaseapp.com",
  databaseURL: "https://barter-app-a7838.firebaseio.com",
  projectId: "barter-app-a7838",
  storageBucket: "barter-app-a7838.appspot.com",
  messagingSenderId: "785765138495",
  appId: "1:785765138495:web:073bc2ef28dce648bdf88a"
};
 //Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();