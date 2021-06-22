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
                    <img src=${element.primeraImagen} class="d-block card-img-top" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src=${element.segundaImagen} class="d-block card-img-top" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src=${element.terceraImagen} class="d-block card-img-top" alt="...">
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
                  <a class="consultaPrecio_boton " href="https://api.whatsapp.com/send?phone=5491124566055&text=Hola!%20estoy%20interesado%20en%20saber%20el%20precio%20de%20${element.nombre}" target="_blank">Consultá el precio<span><img src="../imagenes/icons/whatsappColor.svg" alt="" width="20px"> </span></a>
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
                <div id="imagen${element.id}" class="carousel slide card-img-top" data-ride="carousel" data-interval="false">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src=${element.primeraImagen} class="d-block card-img-top" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src=${element.segundaImagen} class="d-block card-img-top" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src=${element.terceraImagen} class="d-block card-img-top" alt="...">
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

  borrarFiltrado(){
    let cardsEnLocalStorage = JSON.parse(localStorage.getItem('productosEnPantalla'));
    let cardsEnPantalla = cardsEnLocalStorage;

    var nombre_archivo = filename();
  
    if(nombre_archivo === "carAudio.html"){
      filtroPorSalida.value = 0;
      filtroPorDin.value = 0;
      filtroPorAdroidApple.value = 0;
      filtroPorPioneer.value = 0;
      filtroPorMixtrax.value = 0;
      filtroPorCd.value = 0;

    }else if(nombre_archivo === "equipoDeDj.html"){
      filtroPorTipo.value = 0;
      filtroPorCanales.value = 0;
      filtroPorSoftware.value = 0;
    }
    animacionCarga();
    setTimeout(() => {managerDOM.crearCard(cardsEnPantalla)}, 500 );
  }


  filtrarPor() {


    var nombre_archivo = filename();
  
    if(nombre_archivo === "carAudio.html"){
      let cardsEnLocalStorage = JSON.parse(localStorage.getItem('productosEnPantalla'));
      let cardsEnPantalla = cardsEnLocalStorage;  
      let valorFiltroSalida = filtroPorSalida.value;
      let valorFiltroDin = filtroPorDin.value;
      let valorFiltroAdroidApple = filtroPorAdroidApple.value;
      let valorFiltroPioneer = filtroPorPioneer.value;
      let valorFiltroMixtrax = filtroPorMixtrax.value;
      let valorFiltroCd = filtroPorCd.value;
      let arrayFiltrado = [];
      estaFiltrado = `si`;
    
    
      if (valorFiltroSalida == 1) {
        arrayFiltrado = cardsEnPantalla.filter( el => el.salidaRca == "1")
      } else if (valorFiltroSalida == 2) {
        arrayFiltrado = cardsEnPantalla.filter( el => el.salidaRca == "2")
      }else if (valorFiltroSalida == 3) {
        arrayFiltrado = cardsEnPantalla.filter( el => el.salidaRca == "3")
      }else if (valorFiltroSalida == 0) {
        arrayFiltrado = cardsEnPantalla;
      }        
  
  
      if (valorFiltroDin == 1) {
        arrayFiltrado = arrayFiltrado.filter( el => el.din == "1 DIN")
      } else if (valorFiltroDin == 2) {
        arrayFiltrado = arrayFiltrado.filter( el => el.din == "2 DIN")
      }  else if (valorFiltroDin == 0) {
        arrayFiltrado = arrayFiltrado;
      }
  
  
      if (valorFiltroAdroidApple == 1) {
        arrayFiltrado = arrayFiltrado.filter( el => el.androidApple == "si")
      } else if (valorFiltroAdroidApple == 2) {
        arrayFiltrado = arrayFiltrado.filter( el => el.androidApple == "no")
      }  else if (valorFiltroAdroidApple == 0) {
        arrayFiltrado = arrayFiltrado;
      }


      if (valorFiltroPioneer == 1) {
        arrayFiltrado = arrayFiltrado.filter( el => el.pioneerSmartSync == "si")
      } else if (valorFiltroPioneer == 2) {
        arrayFiltrado = arrayFiltrado.filter( el => el.pioneerSmartSync == "no")
      } else if (valorFiltroPioneer == 0) {
        arrayFiltrado = arrayFiltrado;
      }


      if (valorFiltroMixtrax == 1) {
        arrayFiltrado = arrayFiltrado.filter( el => el.mixtrax == "si")
      } else if (valorFiltroMixtrax == 2) {
        arrayFiltrado = arrayFiltrado.filter( el => el.mixtrax == "no")
      } else if (valorFiltroMixtrax == 0) {
        arrayFiltrado = arrayFiltrado;
      }


      if (valorFiltroCd == 1) {
        arrayFiltrado = arrayFiltrado.filter( el => el.cd == "si")
      } else if (valorFiltroCd == 2) {
        arrayFiltrado = arrayFiltrado.filter( el => el.cd == "no")
      } else if (valorFiltroCd == 0) {
        arrayFiltrado = arrayFiltrado;
      }
  
      animacionCarga();
      localStorage.setItem('arrayFiltrado',JSON.stringify(arrayFiltrado));
      setTimeout(() => {managerDOM.crearCard(arrayFiltrado)}, 500 );
  
    }else if(nombre_archivo === "equipoDeDj.html"){
      

      let cardsEnLocalStorage = JSON.parse(localStorage.getItem('productosEnPantalla'));
      let cardsEnPantalla = cardsEnLocalStorage;  
      let valorFiltroTipo = filtroPorTipo.value;
      let valorFiltroCanales = filtroPorCanales.value;
      let valorFiltroSoftware = filtroPorSoftware.value;
      let arrayFiltrado = [];
      estaFiltrado = `si`;
    
    
      if (valorFiltroTipo == 1) {
        arrayFiltrado = cardsEnPantalla.filter( el => el.tipo == "AURICULARES")
      } else if (valorFiltroTipo == 2) {
        arrayFiltrado = cardsEnPantalla.filter( el => el.tipo == "CONTROLADOR DJ")
      }else if (valorFiltroTipo == 3) {
        arrayFiltrado = cardsEnPantalla.filter( el => el.tipo == "MIXER")
      }else if (valorFiltroTipo == 4) {
        arrayFiltrado = cardsEnPantalla.filter( el => el.tipo == "REPRODUCTOR DJ")
      }else if (valorFiltroTipo == 5) {
        arrayFiltrado = cardsEnPantalla.filter( el => el.tipo == "XDJ Todo en Uno")
      } else if (valorFiltroTipo == 0) {
        arrayFiltrado = cardsEnPantalla;
      }        
  
  
      if (valorFiltroCanales == 1) {
        arrayFiltrado = arrayFiltrado.filter( el => el.canales == "2")
      } else if (valorFiltroCanales == 2) {
        arrayFiltrado = arrayFiltrado.filter( el => el.canales == "4")
      } else if (valorFiltroCanales == 3) {
        arrayFiltrado = arrayFiltrado.filter( el => el.canales == "6")
      } else if (valorFiltroCanales == 0) {
        arrayFiltrado = arrayFiltrado;
      }
  
  
      if (valorFiltroSoftware == 1) {
        arrayFiltrado = arrayFiltrado.filter( el =>  el.software.indexOf('Rekordbox') > -1)
      } else if (valorFiltroSoftware == 2) {
        arrayFiltrado = arrayFiltrado.filter( el => el.software.indexOf('Rekordbox, Serato DJ Pro') > -1)
      } else if (valorFiltroSoftware == 3) {
        arrayFiltrado = arrayFiltrado.filter( el => el.software == "Rekordbox, Serato DJ Pro, TRAKTOR PRO 3")
      } else if (valorFiltroSoftware == 4) {
        arrayFiltrado = arrayFiltrado.filter( el => el.software.indexOf('Serato DJ') > -1)
      } else if (valorFiltroSoftware == 5) {
        arrayFiltrado = arrayFiltrado.filter( el =>  el.software.indexOf('Serato DJ Pro') > -1)
      } else if (valorFiltroSoftware == 0) {
        arrayFiltrado = arrayFiltrado;
      }
  
      animacionCarga();
      console.log(arrayFiltrado)
      localStorage.setItem('arrayFiltrado',JSON.stringify(arrayFiltrado));
      setTimeout(() => {managerDOM.crearCard(arrayFiltrado)}, 500 );
      
      
    }

    }




 
}