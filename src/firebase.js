import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAdr9sQpUYHNyMABwOoPSgtMRDOgwtDVkc",
  authDomain: "netflix-clone-by-p.firebaseapp.com",
  projectId: "netflix-clone-by-p",
  storageBucket: "netflix-clone-by-p.appspot.com",
  messagingSenderId: "253113065831",
  appId: "1:253113065831:web:7b61c61ae8b881147b4fc2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {auth}