function translate(){
  var title = document.getElementById("form-signin-heading");
  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");
  var remember = document.getElementsByTagName("span")[0];
  var button = document.getElementsByClassName("btn")[0];

  title.innerHTML = "Inicia sesión";
  email.placeholder = "Correo electrónico";
  password.placeholder = "Contraseña";
  remember.innerHTML = "Recordar datos";
  button.innerHTML = "Iniciar sesión";
}
translate();




   function escribirDatos(){
   var email = document.getElementById("inputEmail").value;
   var password = document.getElementById("inputPassword").value;
   var titulo = document.getElementById("titulo");
   var parrafo = document.getElementById("parrafo");
   titulo.innerHTML = "Datos de formulario";
   parrafo.innerHTML = "El correo electrónico ingresado es: "  + email + "<br> La clave ingresada es: " + password;

 }
 
