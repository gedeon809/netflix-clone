import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBoidMkL65UphhRWpFBvew8kZo9kwuypPk",
    authDomain: "netflix-clone-9e044.firebaseapp.com",
    projectId: "netflix-clone-9e044",
    storageBucket: "netflix-clone-9e044.appspot.com",
    messagingSenderId: "307339588865",
    appId: "1:307339588865:web:9e5b922dd72aee30bbd700"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth }
  export default db;