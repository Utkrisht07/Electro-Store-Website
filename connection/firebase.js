const firebase = require("firebase");
var firebaseConfig = {
    apiKey: "AIzaSyBdSpVSr8uiwNdUhzu9qSbiQxFQYOmSFDE",
    authDomain: "electro-store-ca575.firebaseapp.com",
    projectId: "electro-store-ca575",
    storageBucket: "electro-store-ca575.appspot.com",
    messagingSenderId: "176232119889",
    appId: "1:176232119889:web:6be46adf0130b30fba4270",
    measurementId: "G-X7DSB0F1LL"
};

firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database();
const db = firebase.firestore();

module.exports = {db};