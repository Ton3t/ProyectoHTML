
function iniciaJava() {

    document.getElementById("btnPrecios").addEventListener("load", cambiarFondo);
    
}

/**
 * Array con las imagenes y enlaces que se iran mostrando en la web
 */
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

/**
 * Funcion para cambiar la imagen del banner
 */
function rotarImagenes() {
    // cambiamos la imagen y la url
    contador++;
    document.getElementById("imagenes").src = imagenes[contador % imagenes.length][0];
    document.getElementById("banner").href = imagenes[contador % imagenes.length][1];
}

function cambiarFondo(evento) {

    var evento = elEvento || window.event;
    var caracter = evento.charCode || evento.keyCode || evento.altKey || evento.ctrlKey;
    
    //--------- Presionando i -------------//
    if (String.fromCharCode(caracter) == "i") {
        document.body.style.background = "none";
        document.body.style.background = "#fff";
    }
    /*
    //--------- Presionando b ------------//
    else if (String.fromCharCode(caracter) == "b") {
        document.getElementById("principal").style.fontWeight = "bold";
    }

    //---------- Presionando ENTER ----------//
    else if (evento.keyCode == 13) {
        var imagen = document.createElement("img");
        imagen.setAttribute("src", "img/enter.jpg");
        zona.appendChild(imagen);
    }

    //-------- Presionando CTRL + ENTER --------------//
    else if (evento.ctrlKey) {
        if (caracter.keyCode = 13) {
            location.href = "https://www.google.es";
        }
        
    }

    //---------- Presionando ALT + M -----------//
    else if (evento.ctrlKey) {
        if(caracter.keyCode = 103) {
            window.open("http://www.google.com/", "_blank", "fullscreen=yes,menubar=yes,location=yes,status=yes,resizable=yes,toolbar=yes");
        }
    }
    */
}


window.onload = function () {

    // Cargamos una imagen aleatoria
    rotarImagenes();
    // Indicamos que cada 5 segundos cambie la imagen
    setInterval(rotarImagenes, 5000);


    this.iniciaJava();

}

window.addEventListener("load",iniciaJava,false);