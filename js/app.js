//------------- PRIMER PROYECTO
//---- funciones,eventos,arreglos... etc

//---- crenaod variables 
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let carritocompras = []; //let porque esto siempre varia, e inicia como un arreglo vacio porque se va ir agregando infirmacion a medida que vamos agregando objetos al carrito


//--- creamos function donde registra todos los evetListeners
eventRegistro(); //llamando funcion arriba para evitar que queden en la ventana global 
function eventRegistro() {
    //cuando agregas un curso presionando agregar
    listaCursos.addEventListener('click', agregandoCurso)

};
// yo quiero que se ejecute esta funcion solamente cuando presione el boton 
//"agregando curso" para eso hacemos lo siguiente:
//le pasamos el evento a la funcion
//imprimimos en la consola e.target es decir = a donde le estamos dando click 
//seguido de classList . contain(para verificar si ese elemnto contiene la clase de agregar carrito) 
//para ver las clases de lo que le estamos dando click 
//entonces solamente podemos ejecutar esta fucncion cuando el elemento que estamos presionando contenga la clase de garegar carrito
//para eso creamos u if dentro de las funcion 
function agregandoCurso(e) {
    e.preventDefault(); // usamos prevenDefalt para que no haga la accion de slatar hacia arriba o hacer otra gestion que no queremos 
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCursos(cursoSeleccionado);
    }

};

//------------Leer los datos de curso

//funcion que lee elcontenido de  html al que le dimos click y extrae la informacion del curso 

function leerDatosCursos(curso) {

    console.log(curso);

    // creamos un objeto con el ocntenido actual 

    const infoCurso = {
        //agregamos toda la informacion que requermos sobre el curso, lo que se va mostrar en el html
        imagen: curso.querySelector('img').src, // para extraer la imagen usamos el src
        titulo: curso.querySelector('h4').textContent, //para extraer el texto que esta dentro del h4 usamos textcontent
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'), // cada curso tiene un id propio, para acceder usamos esta sintaxys
        cantidad: 1
    };
    console.log(infoCurso);

    //-------------como agregar nustros elementos al carrito de ecompras
    //colocar un arreglo es una buena forma de ir colocando datos que son similares
    //creamos un avariable que va ser el carrito de compras... recordar que todas las variables las podmeos colocar en un solo sitio
    //utilizamos el metodo spradeoperator  o .push para llenar el carrito
    //tomamos una copia del carrito porque cuando agreguemos mas articulos necesitamos una copia de lo que ya esta como referenci 
    //usamos los 3 puntos para hecer la copia y le vamos a ir agregando el objeto que se creo anteriormete en este caso infoCurs 
    carritocompras = [...carritocompras, infoCurso]
    console.log(carritocompras)
};

//muestra el carrito en el html