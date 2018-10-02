import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
firebase.initializeApp(config);


let db = firebase.firestore()
db.settings({ timestampsInSnapshots: true });


/*
localStorage.uid is used to store "uid"
localStorage.user is used have a cache version of the connected user
*/

export default {
  db,

  signInWithGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(provider)
      .then(result => {
        localStorage.setItem('uid', result.user.uid);
        return Promise.all([result, this.saveUserIfNew(result.user)])
        // localStorage.setItem('user', JSON.stringify(result.user)); // DESTROY THE INFO...
      })
      .then(([result, _]) => result)
  },

  signOut() {
    return firebase.auth().signOut()
      .then(() => {
        localStorage.removeItem('user');
      })
  },

  loadUser() {
    const userData = localStorage.getItem('user');
    if (!userData) return false;

    const user = JSON.parse(userData);
    return user;
  },

  loadUid() {
    return localStorage.getItem('uid')
  },

  onAuthStateChanged(cb) {
    firebase.auth().onAuthStateChanged(cb)
    // firebase.auth().onAuthStateChanged(user => {
    //   if (user)
    //     localStorage.setItem('uid', user.uid);
    //   cb(user)
    // })
  },

  addAlan() {
    return db.collection("users").add({
      first: "Alan",
      middle: "Mathison",
      last: "Turing",
      born: 1912
    })
  },

  saveUserIfNew(user) {
    return db.collection("users").doc(user.uid).get()
      .then(doc => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } else {
          return db.collection("users").doc(user.uid).set({
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            exercises: {},
            score: 0,
            nbOfExecutions: 0,
          })
        }
      })
      .catch(error => {
        console.log("Error getting or setting document:", error);
      });

  },

  getUser() {
    let uid = this.loadUid()
    if (!uid) return Promise.resolve();
    return db.collection("users").doc(uid).get()
      .then(doc => {
        if (doc.exists) {
          localStorage.setItem('user', JSON.stringify(doc.data()));
          return doc.data()
        }
      })
  },

  incrementNbOfExecutions() {
    let uid = this.loadUid()
    if (!uid) return Promise.resolve();

    var userDocRef = db.collection("users").doc(uid);

    db.runTransaction(transaction => {
      return transaction.get(userDocRef)
        .then(userDoc => {
          if (!userDoc.exists) {
            throw new Error("Document does not exist!");
          }

          var newNbOfExecutions = userDoc.data().nbOfExecutions + 1;
          transaction.update(userDocRef, { nbOfExecutions: newNbOfExecutions });
          return newNbOfExecutions;
        });
    })
      .then((newNbOfExecutions) => {
        console.log("newNbOfExecutions", newNbOfExecutions);
      })
      .catch((err) => {
        // This will be an "population is too big" error.
        console.error(err);
      });
  },


  incrementScore(points = 1) {
    let uid = this.loadUid()
    if (!uid) return Promise.resolve();

    var userDocRef = db.collection("users").doc(uid);

    db.runTransaction(transaction => {
      return transaction.get(userDocRef)
        .then(userDoc => {
          if (!userDoc.exists) {
            throw new Error("Document does not exist!");
          }

          var newScore = userDoc.data().score + points;
          transaction.update(userDocRef, { score: newScore });
          return newScore;
        });
    })
      .then((newScore) => {
        console.log("newScore", newScore);
      })
      .catch((err) => {
        // This will be an "population is too big" error.
        console.error(err);
      });
  },

  addSolvedExercise(slug) {
    let uid = this.loadUid()
    if (!uid) return Promise.resolve();

    let userDocRef = db.collection("users").doc(uid)

    userDocRef.get()
      .then(doc => {
        if (!doc.exists) return;

        let solvedExercises = doc.data().solvedExercises || []
        if (solvedExercises && solvedExercises.includes(slug)) return;

        let newSolvedExercises = [...solvedExercises, slug]
        let newScore = doc.data().score + 1;

        console.log('DEBUG newSolvedExercises', newSolvedExercises);
        console.log('DEBUG newScore', newScore);

        userDocRef.update({
          solvedExercises: newSolvedExercises,
          score: newScore
        })
      })
  },

  onUserSnapshot(cb) {
    let uid = this.loadUid()
    if (!uid) return function () { };

    return db.collection("users").doc(uid).onSnapshot(doc => {
      console.log('DEBUG doc', doc);
      let user = doc.data()
      if (user) cb(user)
    })
  }
}

