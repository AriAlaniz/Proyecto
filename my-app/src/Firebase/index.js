import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkCcQxE6WBs8jST8axNxVFbMHyfBiK1NI",
  authDomain: "ariadna-ecommerce.firebaseapp.com",
  projectId: "ariadna-ecommerce",
  storageBucket: "ariadna-ecommerce.appspot.com",
  messagingSenderId: "1009893585032",
  appId: "1:1009893585032:web:8c0f6751bc04416c942f3d"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
