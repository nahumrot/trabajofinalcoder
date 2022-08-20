import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtqs2yxgD7IMk5t4USHlmqIRO5pqCj5bk",
  authDomain: "trabajofinal-coder.firebaseapp.com",
  projectId: "trabajofinal-coder",
  storageBucket: "trabajofinal-coder.appspot.com",
  messagingSenderId: "908829987243",
  appId: "1:908829987243:web:d8f5fc1fcf34c46bcec2ee",
  measurementId: "G-FS2F1V7YK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 /* <React.StrictMode>*/
    <App />
  /*</React.StrictMode>*/

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
