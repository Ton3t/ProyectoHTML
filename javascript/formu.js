function iniciar() {

    document.getElementById('botonEnviar').addEventListener("click", nombre);

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
function nombre() {
    
    var texto = document.getElementById('txtArea').value;

    
    if (texto == "") {
        alert("El nombre no puede estar vacio");
        
    } else {
        x++;
    }
}

window.onload = function() {
    this.iniciar();
    this.rotarImagenes();
}