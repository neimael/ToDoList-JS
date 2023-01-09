var firebaseConfig = {
    apiKey: "AIzaSyBHDduTNkQymL2UynfZB3A88fbRyhTXqjg",
    authDomain: "todolist-js-bd3b0.firebaseapp.com",
    projectId: "todolist-js-bd3b0",
    storageBucket: "todolist-js-bd3b0.appspot.com",
    messagingSenderId: "247098292353",
    appId: "1:247098292353:web:2f9663303cd1d5a8eaf580",
    measurementId: "G-S6F05KTHWX"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics;

var db = firebase.firestore();