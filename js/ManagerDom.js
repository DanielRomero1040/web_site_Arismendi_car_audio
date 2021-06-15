let productosEnPantalla = [];
let estaFiltrado = ``;

class ManagerDom{
  crearCard(objeto){
    productosEnPantalla = [];    
    document.getElementById('productos').innerHTML = ``;
      objeto.forEach( element => {
          const div = document.createElement('div');
          div.classList.add('m-3')
          div.innerHTML = `
          <div class="products-card h-90">
              <div id="imagen${element.id}" class="carousel slide card-img-top" data-ride="carousel" data-interval="false">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src=${element.primeraImagen} class="d-block w-100 card-img-top" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src=${element.segundaImagen} class="d-block w-100 card-img-top" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src=${element.terceraImagen} class="d-block w-100 card-img-top" alt="...">
                  </div>
                </div>
                <a class="carousel-control-prev" href="#imagen${element.id}" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#imagen${element.id}" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
              <div class="card-body">
                <h4 class="card-title">
                  <p class="titulo">${element.nombre}</p>
                </h4>
                <h5> ${element.descripcion}</h5>
              </div>
              <div class="card-footer d-flex flex-column">
                <div clas="d-flex flex-row justify-content-center align-items-center">
                  <button class="consultaPrecio_boton ">Consultá el precio<span><img src="../imagenes/icons/whatsappColor.svg" alt="" width="20px"> </span></button>
                </div>                       
              </div>
          </div>
        `
        if (estaFiltrado != `si`){
          productosEnPantalla.push(element);
          localStorage.setItem('productosEnPantalla', JSON.stringify(productosEnPantalla));          
        }
        document.getElementById('productos').appendChild(div);
      });
  }

  crearCardDigitalizacion(objeto){
    productosEnPantalla = [];    
    document.getElementById('productos').innerHTML = ``;
      objeto.forEach( element => {
          const div = document.createElement('div');
          div.classList.add('m-3')
          div.innerHTML = `
            <div class="card h-90">
                <a href="#"><img class="card-img-top" src=${element.primeraImagen} alt=""></a>
                
                <div class="card-footer d-flex flex-column">
                  <h4 class="card-title">
                    <p class="titulo">${element.descripcion}</p>
                  </h4>
                                        
                </div>
            </div>
        `
        if (estaFiltrado != `si`){
          productosEnPantalla.push(element);
          localStorage.setItem('productosEnPantalla', JSON.stringify(productosEnPantalla));          
        }
        document.getElementById('productos').appendChild(div);
      });
  }


  filtrarCategoria(id, event, handler){
    document.getElementById(id).addEventListener(event, handler);
  }


  filtrarPor() {
    let cardsEnLocalStorage = JSON.parse(localStorage.getItem('productosEnPantalla'));
    let cardsEnPantalla = cardsEnLocalStorage;  
    let valorFiltroTamano = filtroPorTamano.value;
    let valorFiltroMultimedia = filtroPorMultimedia.value;
    let valorFiltroSoftware = filtroPorSoftware.value;
    let arrayFiltrado = [];
    estaFiltrado = `si`;
  
  
    if (valorFiltroTamano == 1) {
      arrayFiltrado = cardsEnPantalla.filter( el => el.tamaño == 10)
    } else if (valorFiltroTamano == 2) {
      arrayFiltrado = cardsEnPantalla.filter( el => el.tamaño == 20)
    } else if (valorFiltroTamano == 0) {
      arrayFiltrado = cardsEnPantalla;
    }        


    if (valorFiltroMultimedia == 1) {
      arrayFiltrado = arrayFiltrado.filter( el => el.multimedia == "si")
    } else if (valorFiltroMultimedia == 2) {
      arrayFiltrado = arrayFiltrado.filter( el => el.multimedia == "no")
    } else if (valorFiltroMultimedia == 0) {
      arrayFiltrado = arrayFiltrado;
    }


    if (valorFiltroSoftware == 1) {
      arrayFiltrado = arrayFiltrado.filter( el => el.tamaño == 10)
    } else if (valorFiltroSoftware == 2) {
      arrayFiltrado = arrayFiltrado.filter( el => el.tamaño == 20)
    } else if (valorFiltroSoftware == 0) {
      arrayFiltrado = arrayFiltrado;
    }

    animacionCarga();
    console.log('arrayfiltrado',arrayFiltrado)
    localStorage.setItem('arrayFiltrado',JSON.stringify(arrayFiltrado));
    managerDOM.crearCard(arrayFiltrado);
    
  }

  filtrarPorPrecioDesdeHasta() {
    let cardsEnLocalStorage = JSON.parse(localStorage.getItem('productosEnPantalla'));
    let cardsEnPantalla = cardsEnLocalStorage;  
    let valorInicial = document.getElementById('inicial').value;
    let valorFinal = document.getElementById('final').value;  
    let arrayPreFiltrado = [];
    let arrayFiltrado = [];
    estaFiltrado = `si`;

    if ((valorInicial) && (valorFinal)){
      arrayPreFiltrado = cardsEnPantalla.filter( el => el.price <= valorFinal);
      arrayFiltrado = arrayPreFiltrado.filter( el => el.price >= valorInicial);
    } 
    else if((valorInicial != null) && (valorFinal)){
      valorInicial = 0;
      arrayPreFiltrado = cardsEnPantalla.filter( el => el.price <= valorFinal);
      arrayFiltrado = arrayPreFiltrado.filter( el => el.price >= valorInicial);
    } 
    else if((valorInicial) && (valorFinal != null)){
      valorFinal = 0;
      arrayFiltrado = cardsEnPantalla.filter( el => el.price >= valorInicial);
    }
    else if((valorInicial != null) && (valorFinal != null)){
      arrayFiltrado = cardsEnPantalla;
    }
    managerDOM.crearCard(arrayFiltrado);       
    }
}