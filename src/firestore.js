import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDv2m5ly6Puo7r1_DQCUpvFfCJSpkiqN84",
  authDomain: "mxsreminder-42916.firebaseapp.com",
  databaseURL: "https://mxsreminder-42916.firebaseio.com",
  projectId: "mxsreminder-42916",
  storageBucket: "mxsreminder-42916.appspot.com",
  messagingSenderId: "638567164683",
  appId: "1:638567164683:web:85eec653588a4bf5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export function write(collection, data) {
  db.collection(collection)
    .add(data)
    .then(docRef => console.log("Document written with ID: ", docRef.id))
    .catch(error => console.log("Error adding document: ", error));
}

export async function read(collection) {
  const dataArray = [];

  const collectionRef = db.collection(collection);
  const response = await collectionRef.get();

  response.forEach(doc => dataArray.push(doc.data()));

  return dataArray;
}
