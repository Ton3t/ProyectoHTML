function iniciar() {

  document.getElementById('botonEnviar').addEventListener("click", validarFormu);

}

var imagenes = new Array(
  ['img/castillo.jpg'],
  ['img/fondo.jpg'],
  ['img/habitacion.jpg'],
  ['img/foto1.jpg'],
  ['img/foto2.jpg'],
  ['img/foto3.jpg'],
  ['img/foto5.jpg'],
  ['img/foto6.jpg'],
  ['img/foto7.jpg'],
  ['img/foto8.jpg'],
  ['img/foto9.jpg'],
);

var contador = 0;

function rotarImagenes() {
  // cambiamos la imagen y la url
  contador++;
  document.getElementById("imagenes").src = imagenes[contador % imagenes.length][0];
  document.getElementById("banner").href = imagenes[contador % imagenes.length][1];
}


/* Comprobar nombre */
function validarFormu() {


  var formu = document.getElementById('miformulario');
  //var forChecked = document.getElementsByName('aceptar');
  

  var edad = document.getElementById('edad').value;
  var txtArea = document.getElementById('txtArea');
  var f1 = document.getElementById('f1');
  valor = document.getElementById("email").value;
  

  if (formu[0].value == "" || formu[0].value == null || txtArea.value.length <= 100) {
    alert("El comentario deber tener 100 caracteres.");
    document.getElementById("txtArea").style.backgroundColor = "rgb(255, 0, 0, 0.3)";
    document.getElementById("txtArea").focus();
  } else {
    document.getElementById("txtArea").style.backgroundColor = "rgb(0, 255, 0, 0.3)";
    if (formu[1].value == "" || formu[1].value == null) {
      document.getElementById("f1").style.backgroundColor = "rgb(255, 0, 0, 0.3)";
      document.getElementById("f1").focus();
    } else {
      document.getElementById("f1").style.backgroundColor = "rgb(0, 255, 0, 0.3)";
      if (formu[2].value == "" || formu[2].value == null) {
        document.getElementById("f2").style.backgroundColor = "rgb(255, 0, 0, 0.3)";
        document.getElementById("f2").focus();
      } else {
        document.getElementById("f2").style.backgroundColor = "rgb(0, 255, 0, 0.3)";
        if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor))) {
          document.getElementById("email").style.backgroundColor = "rgb(255, 0, 0, 0.3)";
          document.getElementById("email").focus();
        } else {
          document.getElementById("email").style.backgroundColor = "rgb(0, 255, 0, 0.3)";
          if (formu[4].value == "" || formu[4].value == null || isNaN(edad)) {
            document.getElementById("edad").style.backgroundColor = "rgb(255, 0, 0, 0.3)";
            document.getElementById("edad").focus();
          } else {
            document.getElementById("edad").style.backgroundColor = "rgb(0, 255, 0, 0.3)";
            if (formu[5].checked == false || formu[5].checked == null) {
              alert("Debes aceptar los términos.");
              document.getElementById("terminos").focus();
            } else {
              document.getElementById("terminos").style.color = "rgb(0, 255, 0, 0.3)";
              alert("Formulario rellenado");

              /* Vamos a crear una seccion con el comentario del cliente */
              // Crear nodo de tipo Text
              var op = document.getElementById("txtArea").value + (document.getElementById("txtArea").innerHTML = "<br/>") + document.getElementById('f1').value + "<br/>" + document.getElementById('email').value + "<br/>";

              var contenido = document.createTextNode(op);

              //section.appendChild(contenido);

              zona = document.getElementById('firmas');

              zona.appendChild(contenido);
              /* Limpiamos el formulario */

              txtArea.value = "";
              f1.value = "";
              f1.style.backgroundColor = "white";
              var f2 = document.getElementById('f2');
              f2.value = "";
              f2.style.backgroundColor = "white";
              var email2 = document.getElementById('email');
              email2.value = "";
              email2.style.backgroundColor = "white";
              var edad2 = document.getElementById('edad');
              edad2.value = "";
              edad2.style.backgroundColor = "white";
              document.getElementById("terminos").checked = 0;
              document.getElementById("txtArea").style.backgroundColor = "white";

            }
          }
        }
      }
    }
  }



}

window.onload = function () {
  this.iniciar();
  this.rotarImagenes();
}