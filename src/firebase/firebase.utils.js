import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAbxFa2yzp9-uWcKoEM15YMjY3tGxzUO7Q",
  authDomain: "udemy-ecommerce-fb041.firebaseapp.com",
  databaseURL: "https://udemy-ecommerce-fb041.firebaseio.com",
  projectId: "udemy-ecommerce-fb041",
  storageBucket: "udemy-ecommerce-fb041.appspot.com",
  messagingSenderId: "552323406669",
  appId: "1:552323406669:web:751e23ac357b8f31f63504",
  measurementId: "G-5D56XLMMM3"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`); 
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;