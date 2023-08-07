var firebaseConfig = {
    apiKey: "AIzaSyDyCJZ3xOa_AtbG-nkEFpwIJRIICt8K5VQ",
    authDomain: "conversa-cf18d.firebaseapp.com",
    databaseURL: "https://conversa-cf18d-default-rtdb.firebaseio.com",
    projectId: "conversa-cf18d",
    storageBucket: "conversa-cf18d.appspot.com",
    messagingSenderId: "706699283752",
    appId: "1:706699283752:web:8dfa6f0540590b5af5941d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var email = localStorage.getItem("email")
var sala = localStorage.getItem("sala")