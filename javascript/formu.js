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

var x = 0;

/* Comprobar nombre */
function validarFormu() {


  var formu = document.getElementById('miformulario');
  //var forChecked = document.getElementsByName('aceptar');

  var email = document.getElementById('email').value;
  var edad = document.getElementById('edad').value;
  var txtArea = document.getElementById('txtArea');
  var f1 = document.getElementById('f1');

  if (formu[0].value == "" || formu[0].value == null) {
    document.getElementById("txtArea").style.backgroundColor = "red";
  } else {
    document.getElementById("txtArea").style.backgroundColor = "white";
    if (formu[1].value == "" || formu[1].value == null) {
      document.getElementById("f1").style.backgroundColor = "red";
    } else {
      document.getElementById("f1").style.backgroundColor = "white";
      if (formu[2].value == "" || formu[2].value == null) {
        document.getElementById("f2").style.backgroundColor = "red";
      } else {
        document.getElementById("f2").style.backgroundColor = "white";
        if (formu[3].value == "" || formu[3].value == null) {
          document.getElementById("email").style.backgroundColor = "red";
        } else {
          document.getElementById("email").style.backgroundColor = "white";
          if (formu[4].value == "" || formu[4].value == null || isNaN(edad)) {
            document.getElementById("edad").style.backgroundColor = "red";
          } else {
            document.getElementById("edad").style.backgroundColor = "white";
            if (formu[5].checked == false || formu[5].checked == null) {
              document.getElementById("terminos").style.color = "red";
            } else {
              document.getElementById("terminos").style.color = "white";
              alert("Formulario rellenado");

              /* Vamos a crear una seccion con el comentario del cliente */

              

              // Crear nodo de tipo Element
              var section = document.createElement("section");
              

              // Crear nodo de tipo Text
              var op = document.getElementById("txtArea").value;
              var contenido = document.createTextNode(op);

              section.appendChild(contenido);

              zona = document.getElementById('firmas');

              zona.insertAdjacentHTML('afterbegin', document.getElementById('txtArea').value);

             //document.body.appendChild(section);



              /* Limpiamos el formulario */

              txtArea.value = "";
              f1.value = "";
              var f2 = document.getElementById('f2');
              f2.value = "";
              var email2 = document.getElementById('email');
              email2.value = "";
              var edad2 = document.getElementById('edad');
              edad2.value = "";
              document.getElementById("terminos").checked = 0;



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