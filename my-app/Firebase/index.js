import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkCcQxE6WBs8jST8axNxVFbMHyfBiK1NI",
  authDomain: "ariadna-ecommerce.firebaseapp.com",
  projectId: "ariadna-ecommerce",
  storageBucket: "ariadna-ecommerce.appspot.com",
  messagingSenderId: "1009893585032",
  appId: "1:1009893585032:web:8c0f6751bc04416c942f3d"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);
