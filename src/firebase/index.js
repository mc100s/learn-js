// import * as auth from './auth'
// import * as firebase from './firebase'

// export {
//   auth,
//   firebase
// }


import firebase from 'firebase'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  messagingSenderId: "76124801937"
};
firebase.initializeApp(config);
