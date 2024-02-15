import firebase from "firebase/compat/app";
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoJAVUhoS5aK0i3TbD4-HxrzkV-kNdOlM",
  authDomain: "hrlibrary-cace7.firebaseapp.com",
  projectId: "hrlibrary-cace7",
  storageBucket: "hrlibrary-cace7.appspot.com",
  messagingSenderId: "96435617487",
  appId: "1:96435617487:web:e3396f5f8599c984ca81ba"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();

export {projectAuth}