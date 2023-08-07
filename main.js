function crik(){
var email = document.getElementById("email").value;
localStorage.setItem("email",email);
window.location = "salas.html";
}