let  contenedorDeProductos = document.getElementById('productos');  
let  acumuladorIndicadorCarrito = 0;
let  acumuladorItemsCarrito = ``;
let  acumuladorTotal = 0;
let  acumuladorCuotas = 0;
let  carritoEnLocalStorage = [];
let  carrito = [];
let  cargarPagina = document.body;
let  botonOrdenar = document.getElementById('boton-ordenar');
let  modalCarrito = document.getElementsByClassName('modal-carrito')[0];
let  contenedorModal = document.getElementById('modalCarrito');
let  botonCerrarCarrito = $('#cerrarCarrito');
let  selectPrecios = document.getElementById('precios');    
let  botonPagar = document.getElementById('boton-pagar');

// ---------------  Incorporacion al DOM ----------------------------


const managerDOM = new ManagerDom();

const URLCATEGORIAS = 'https://api.mercadolibre.com/sites/MLA/categories';
const URLPRODUCTOS = 'https://api.mercadolibre.com/sites/MLA/search?category=';

document.addEventListener('DOMContentLoaded', function(){
  fetch(URLCATEGORIAS)
    .then(respuesta => {
      return respuesta.json();
    })
    .then( categorias => {
      let urlProducto = URLPRODUCTOS + 'MLA5725'; 
      fetchProductos(urlProducto);
      managerDOM.crearCategorias(categorias)     
    })
    .catch(e => console.log(e));
})

managerDOM.filtrarCategoria('categorias', 'change', managerDOM.seleccionCategoria);
managerDOM.buscarPalabra('busqueda', 'change', managerDOM.traerBusqueda);
managerDOM.buscarPalabra('buscar', 'click', managerDOM.traerBusqueda);
managerDOM.crearBanner();

//--------------- Eventos ---------------------

cargarPagina.onload = iniciarCarrito;

botonOrdenar.onclick = ordenarCarrito;

document.getElementById('filtrar').addEventListener('click', managerDOM.filtrarPorPrecioDesdeHasta)

modalCarrito.addEventListener('click', (event)=>{
  event.stopPropagation()
});

contenedorModal.addEventListener('click', (e)=>{
  e.stopPropagation();
  $('#modalCarrito').removeClass('modal-active');
});

botonPagar.addEventListener('click', ()=>{
  finalizarCompra();
  vaciarCarrito();
});

//-------------------- Eventos - carrito modal ---------------

$('#changuito').on('click', function (){
  $('#modalCarrito').addClass('modal-active');
  actualizarCarrito();              
});
botonCerrarCarrito.on('click', function (e){
  e.stopPropagation()
  $('#modalCarrito').removeClass('modal-active');
});

// -------------------- Eventos - Filtro de productos por precios ---------------

selectPrecios.addEventListener('change', ()=>{
  managerDOM.filtrarPorPrecio()
})

document.getElementById("acumuladorCarrito").innerHTML = acumuladorIndicadorCarrito;
document.getElementById("carrito").innerHTML = acumuladorItemsCarrito;
document.getElementById("total").innerHTML = acumuladorTotal;