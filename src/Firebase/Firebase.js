import * as firebase from 'firebase'
/*
import firebase from 'firebase'
import 'firebase/storage';
import 'firebase/database';
import 'firebase/auth';
*/
//import firebase from "@firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyDB38QEBNm9OJn8ZKRRfJ6DcCC1k_-cMvg",
    authDomain: "yesh-tikva.firebaseapp.com",
    databaseURL: "https://yesh-tikva.firebaseio.com",
    projectId: "yesh-tikva",
    storageBucket: "yesh-tikva.appspot.com",
    messagingSenderId: "144284186236",
    appId: "1:144284186236:web:260c0cdd1ed66aed333bf9",
    measurementId: "G-QX3EMS8ELV"
  };
const fire = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const auth = firebase.auth();
const database = firebase.database();

export {
    fire, auth, storage, database as default
}




