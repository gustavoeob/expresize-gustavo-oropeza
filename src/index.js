import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBAt-NMq3sTmi_71Oxe2_cSsu6KFww3wYI",
  authDomain: "expresize.firebaseapp.com",
  projectId: "expresize",
  storageBucket: "expresize.appspot.com",
  messagingSenderId: "379364894310",
  appId: "1:379364894310:web:213aad6e7f65dd1ca82fa7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
