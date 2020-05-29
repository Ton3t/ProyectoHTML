function iniciaJava() {

    document.getElementById('btnPrecio').addEventListener("click", crearTabla);
    document.body.addEventListener("keypress", cambiaFondo);

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

var cambia = true;

function crearTabla() {

    var tabla = document.createElement('table');
    tabla.setAttribute('id', 'otraTabla');
    tabla.setAttribute('summary', 'Descripción de la tabla y su contenido');

    // Crear <caption> y añadirlo a la <table>
    var caption = document.createElement('caption');
    var titulo = document.createTextNode('Tabla de precios');
    caption.appendChild(titulo);
    tabla.appendChild(caption);
    // Crear sección <thead>
    var thead = document.createElement('thead');
    tabla.appendChild(thead);
    // Añadir una fila a la sección <thead>
    thead.insertRow(0);
    // Añadir las tres columnas de la fila de <thead>
    var cabecera = document.createElement('th');
    cabecera.innerHTML = 'Nº Personas';
    thead.rows[0].appendChild(cabecera);
    cabecera = document.createElement('th');
    cabecera.setAttribute('scope', 'col');
    cabecera.innerHTML = '- 1 Noche -';
    tabla.rows[0].appendChild(cabecera);
    cabecera = document.createElement('th');
    cabecera.setAttribute('scope', 'col');
    cabecera.innerHTML = '- 2 Noches -';
    tabla.rows[0].appendChild(cabecera);
    cabecera = document.createElement('th');
    cabecera.setAttribute('scope', 'col');
    cabecera.innerHTML = '- 3 Noches -';
    tabla.rows[0].appendChild(cabecera);
    cabecera = document.createElement('th');
    cabecera.setAttribute('scope', 'col');
    cabecera.innerHTML = '- 4 Noches -';
    tabla.rows[0].appendChild(cabecera);


    // La sección <tfoot> se crearía de forma similar a <thead>
    // Crear sección <tbody>
    var tbody = document.createElement('tbody');
    tabla.appendChild(tbody);
    // Añadir una fila a la sección <tbody>
    tbody.insertRow(0);
    cabecera = document.createElement("th");
    cabecera.setAttribute('scope', 'row');
    cabecera.innerHTML = '4'
    tabla.tBodies[0].rows[0].appendChild(cabecera);
    tbody.rows[0].insertCell(1);
    tbody.rows[0].cells[1].innerHTML = '216€';
    // También se podría hacer:
    // tbody.rows[0].cells[0].appendChild(document.createTextNode('Celda 1 -1'));
    tbody.rows[0].insertCell(2);
    tbody.rows[0].cells[2].innerHTML = '432€';
    // El resto de filas del <tbody> se crearía de la misma forma
    tbody.rows[0].insertCell(3);
    tbody.rows[0].cells[3].innerHTML = '648€';
    tbody.rows[0].insertCell(4);
    tbody.rows[0].cells[4].innerHTML = '864€';

    tbody.insertRow(0);
    cabecera = document.createElement("th");
    cabecera.setAttribute('scope', 'row');
    cabecera.innerHTML = '3'
    tabla.tBodies[0].rows[0].appendChild(cabecera);
    tbody.rows[0].insertCell(1);
    tbody.rows[0].cells[1].innerHTML = '162€';
    // También se podría hacer:
    // tbody.rows[0].cells[0].appendChild(document.createTextNode('Celda 1 -1'));
    tbody.rows[0].insertCell(2);
    tbody.rows[0].cells[2].innerHTML = '324€';
    // El resto de filas del <tbody> se crearía de la misma forma
    tbody.rows[0].insertCell(3);
    tbody.rows[0].cells[3].innerHTML = '486€';
    tbody.rows[0].insertCell(4);
    tbody.rows[0].cells[4].innerHTML = '648€';

    tbody.insertRow(0);
    cabecera = document.createElement("th");
    cabecera.setAttribute('scope', 'row');
    cabecera.innerHTML = '2'
    tabla.tBodies[0].rows[0].appendChild(cabecera);
    tbody.rows[0].insertCell(1);
    tbody.rows[0].cells[1].innerHTML = '120€';
    // También se podría hacer:
    // tbody.rows[0].cells[0].appendChild(document.createTextNode('Celda 1 -1'));
    tbody.rows[0].insertCell(2);
    tbody.rows[0].cells[2].innerHTML = '240€';
    // El resto de filas del <tbody> se crearía de la misma forma
    tbody.rows[0].insertCell(3);
    tbody.rows[0].cells[3].innerHTML = '360€';
    tbody.rows[0].insertCell(4);
    tbody.rows[0].cells[4].innerHTML = '480€';

    tbody.insertRow(0);
    cabecera = document.createElement("th");
    cabecera.setAttribute('scope', 'row');
    cabecera.innerHTML = '1'
    tabla.tBodies[0].rows[0].appendChild(cabecera);
    tbody.rows[0].insertCell(1);
    tbody.rows[0].cells[1].innerHTML = '60€';
    // También se podría hacer:
    // tbody.rows[0].cells[0].appendChild(document.createTextNode('Celda 1 -1'));
    tbody.rows[0].insertCell(2);
    tbody.rows[0].cells[2].innerHTML = '120€';
    // El resto de filas del <tbody> se crearía de la misma forma
    tbody.rows[0].insertCell(3);
    tbody.rows[0].cells[3].innerHTML = '180€';
    tbody.rows[0].insertCell(4);
    tbody.rows[0].cells[4].innerHTML = '240€';

    // Añadir la tabla creada al final de la página

    var zona = document.getElementById("funciones");
    zona.appendChild(tabla);
    document.getElementById('btnPrecio').style.display = "none";
}

// Cambiar el fondo con una tecla //

function cambiaFondo(elEvento) {
    var evento = elEvento || window.event;
    var caracter = evento.charCode || evento.keyCode || evento.altKey || evento.ctrlKey;
    var zona = document.getElementById("principal");
    var letra = String.fromCharCode(caracter);

    //--------- Presionando i -------------//
    if (String.fromCharCode(caracter) == "i") {
        document.body.style.backgroundColor = "lightblue";
    }
    else if (letra == "b") {
        document.body.style.backgroundColor = "#333";
    }

}

window.onload = function () {

    // Cargamos una imagen aleatoria
    rotarImagenes();
    // Indicamos que cada 5 segundos cambie la imagen
    setInterval(rotarImagenes, 5000);


    this.iniciaJava();

}