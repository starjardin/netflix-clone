import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { FirebaseContext } from './context/firebase';
import { GlobalStyles } from './global-styles';

const config = {
  databaseUrl: "",
  apiKey: "AIzaSyCy_vG5YzBC0Yii1uIcD6jjK7z2i2g8J1k",
  authDomain: "netflix-onja-tanteli.firebaseapp.com",
  projectId: "netflix-onja-tanteli",
  storageBucket: "netflix-onja-tanteli.appspot.com",
  messagingSenderId: "817700823508",
  appId: "1:817700823508:web:0ced800eba5896addaf641"
};

const firebase = window.firebase.initializeApp(config)

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>
  , document.getElementById('root')
);
