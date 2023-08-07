
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
var email = localStorage.getItem("email");
document.getElementById("user").innerHTML = "E-MAIL : "+email;
function send(){
  var mensagen =document.getElementById("msg").value;
  //acessando banco de dados do firebase para criar uma pasta com o nome da mensagen
  firebase.database().ref("/").child(mensagen).update({purpose:"__/-\__"});
  localStorage.setItem("sala",mensagen);
  window.location = "salas2.html";
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "salas2.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}