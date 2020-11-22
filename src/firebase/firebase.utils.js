import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCGo7_5lL4syFNI6hFwhlnKfL5BD-JYAqI",
    authDomain: "shop-db-6d8f7.firebaseapp.com",
    databaseURL: "https://shop-db-6d8f7.firebaseio.com",
    projectId: "shop-db-6d8f7",
    storageBucket: "shop-db-6d8f7.appspot.com",
    messagingSenderId: "1082911737921",
    appId: "1:1082911737921:web:bc64892f226a36be81dec0",
    measurementId: "G-1TK5EPZ299"
  };

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
