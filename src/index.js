import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { FirebaseContext } from './context/firebase';
import { GlobalStyles } from './global-styles';
import dotenv from 'dotenv'

dotenv.config()
//import { seedDatabase } from './seed'

const config = {
  databaseUrl: "",
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BACKET,
  messagingSenderId: process.env.FB_MESSAGE_SENDER_ID,
  appId: process.env.FB_APP_ID
};

const firebase = window.firebase.initializeApp(config)
//seedDatabase(firebase)

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>
  , document.getElementById('root')
);
