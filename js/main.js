/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "85vw";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }


// document.getElementById('filtros').addEventListener('click', ()=>{
//   document.getElementById('collapseFiltros').style.display= "block";
// })

$('#filtros').on('click', function () {
  $('#collapseFiltros').slideToggle("slow");
})


// Iniciar el SmoothScroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1500
});


// ---------------  Incorporacion al DOM ----------------------------

let filtroPorTamano = document.getElementById('tamano');
let filtroPorMultimedia = document.getElementById('multimedia');
let filtroPorSoftware = document.getElementById('software');
let prodcutosBaseDatos = [];

const managerDOM = new ManagerDom();

let URLPRODUCTOS = "../js/car-audio-productos.json";

document.addEventListener('DOMContentLoaded', function(){
  var nombre_archivo = filename();
  
  if(nombre_archivo === "carAudio.html"){
    URLPRODUCTOS = "../js/car-audio-productos.json";    
    fetchProductos(URLPRODUCTOS)

  }else if(nombre_archivo === "equipoDeDj.html"){
    URLPRODUCTOS = "../js/equipos-dj-productos.json";
    fetchProductos(URLPRODUCTOS)

  }else if(nombre_archivo === "digitalizacion.html"){
    URLPRODUCTOS = "../js/digitalizacion.json";
    fetchProductosDigitalizacion(URLPRODUCTOS)
  };

  
})

//------------------------ Funcionalidades ----------------------------------

function filename(){
  var rutaAbsoluta = self.location.href;
  var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
  var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
  return rutaRelativa;  
}

function fetchProductos(url){
  animacionCarga();
  fetch(url)
    .then(respuesta => {
      console.log(respuesta)
      return respuesta.json();
    })
    .then( productos => {
      productosBaseDatos = [...productos];
      localStorage.setItem('productosEnPantalla',JSON.stringify(productosBaseDatos));
      console.log('productos',productosBaseDatos);
      managerDOM.crearCard(productos);   
    })
    .catch(e => console.log(e));
}

function fetchProductosDigitalizacion(url){
  animacionCarga();
  fetch(url)
    .then(respuesta => {
      console.log(respuesta)
      return respuesta.json();
    })
    .then( productos => {
      console.log(productos)
      managerDOM.crearCardDigitalizacion(productos);    
    })
    .catch(e => console.log(e));
};

let animacionCarga = () => {
  document.getElementById('productos').innerHTML=``;
  const div = document.createElement('div');
          div.classList.add('contenedor-loader')
          div.innerHTML = `
          <div class="loader-2 center"><span></span></div> `
  document.getElementById('productos').appendChild(div);
};

//------------------------ Eventos ----------------------------------

managerDOM.filtrarCategoria('buscarFiltros','click',managerDOM.filtrarPor);
// managerDOM.filtrarCategoria('multimedia','change',managerDOM.filtrarPor);
// managerDOM.filtrarCategoria('software','change',managerDOM.filtrarPor);
managerDOM.filtrarCategoria('borrarFiltros','click',managerDOM.borrarFiltrado);

