import firebase from "firebase/app"

import "firebase/firestore"

const config = {
  apiKey: "AIzaSyAQqH5m-G-myEXHcakJ6X9P-wTGRsTDlRA",
  authDomain: "ebibright-db.firebaseapp.com",
  databaseURL: "https://ebibright-db.firebaseio.com",
  projectId: "ebibright-db",
  storageBucket: "ebibright-db.appspot.com",
  messagingSenderId: "416939697303",
  appId: "1:416939697303:web:b871936d137c04962bf5d2",
}

firebase.initializeApp(config)

const firestore = firebase.firestore()

export const addData = async data => {
  const docRef = firestore.doc(`footerForm/${data.phone}`)
  const docSnapshot = await docRef.get()

  if (!docSnapshot.exists) {
    try {
      await docRef.set({
        ...data,
      })
    } catch (err) {
      throw new Error(`error, ${err.message}`)
    }
  }

  return
}

export const addContactData = async data => {
  const docRef = firestore.doc(`contactForm/${data.email}`)
  const docSnapshot = await docRef.get()

  if (!docSnapshot.exists) {
    try {
      await docRef.set({
        ...data,
      })
    } catch (err) {
      throw new Error(`error, ${err.message}`)
    }
  }

  return
}
