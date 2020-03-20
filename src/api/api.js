import firebase from 'firebase';

let firebaseConfig
const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY
const password = process.env.REACT_APP_PASSWORD_API_KEY
eval('firebaseConfig=' + API_KEY);
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const dataBase = firebase.firestore();

export const sign = () => {
  firebase.auth().signInWithEmailAndPassword('myquestiononly@gmail.com', password)
    .then(() => {
      console.log('Sign in sucessfully');
    })
    .catch((error) => {
      console.log(error.message);
    })
}

export const signOut = () => {
  firebase.auth().signOut()
    .then(() => {
      console.log('Sign out sucessfully')
    }).catch((error) => {
      console.log(error);
    });
}

export async function getData() {
  let array = [];
  console.log('Get data from dataBase');
  const docListRef = dataBase.collection("my-new-question")
  await docListRef.get().then(docList => {
    docList.forEach(doc => {
      array.push(doc.data())
    });
  }).then(() => {
    console.log('Receive my-new-question data successfully')
  })
    .catch((error) => {
      console.log(error)
    });
  return array
}

export const creatData = (name, score, incorrectQuestion = null) => {
  dataBase.collection("my-new-question").doc("people")
    .set({
      [name]: {score: score, incorrectQuestion}
    }, {merge: true})
    .then((e) => {
      console.log('紀錄成功')
    }).catch(function (error) {
      console.log(error);
    });
}
