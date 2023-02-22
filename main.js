fetch("./productos.json")
.then((res) => res.json())
.then((data) => {
  cargaProductos(data)
});
let shopContent = document.getElementById("shopContent");


async function cargaProductos(productosShop) {         
  productosShop.forEach((producto) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${producto.picture}" class="card-img-top img-widht">
    <div class="card-body bg-orange">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text"> ${producto.text}</p>
    <h4>$${producto.precio}</h4>
    `;
    shopContent.append(content);
    
    let comprar = document.createElement("button");
    comprar.className = "btn bg-rose";
    comprar.innerText = "agregar al carrito";
    
    content.append(comprar);
    
    comprar.addEventListener("click", () => {
      Toastify({
        text: "Se agrego al carrito",
        className: "color-black",
        style: {
          background: "linear-gradient(to right, green,#ffff51 )",
        }
      }).showToast();
      agregarAlCarrito(producto);
    });
  });
}

function seleccionProductos(productosArray, prod) {
  let resultado = "";
  productosArray.forEach(function (elemento) {
    if (elemento.id == prod) {
      resultado = elemento;
    }
  });
  return resultado;
}


function calcularDescuento(cantidad) {
  let descuento = 0;
  if (cantidad >= 15) {
    descuento = 20;
  } else if (cantidad >= 6 && cantidad < 15) {
    descuento = 10;
  }
  
  return descuento;
}


function calcularTotal(productos, cantidad, productosShop) {
  let descuento = calcularDescuento(cantidad);
  let productoElegido = seleccionProductos(productosShop, productos);
  let totalParcial = productoElegido.precio * cantidad;
  let total = (totalParcial * (100 - descuento)) / 100;
  return total;
}


function agregarAlCarrito(producto) {
  let carrito = localStorage.getItem("carrito");
  if(carrito==null){
    carrito= "[]"
  }
  producto.cantidad = 1;
  carrito = JSON.parse(carrito)
  let existePorducto = carrito.filter(p => p.id == producto.id);
  if (existePorducto.length != 0) {
    existePorducto[0].cantidad++;
  } else {
    carrito.push(producto);
  }
  localStorage.setItem("carrito", JSON.stringify(carrito))
  console.log(carrito)
}
// function saludar() {
//   alert("Bienvenidos a tienda pet shop");
// }

// saludar();

// let productos = Number(
//   prompt(
//     "Ingrese que producto necesitas comprar \n1-agarre perro \n2-buzo perro \n3-chaleco gato \n4-chaleco perro \n5-remera Argentina \n6-bandana perro \n7-campera disney \n8-vestido calabaza perro"
//   )
// );


// alert(
  //   "usted debe abonar $" +
  //     calcularTotal(productos, cantidadProductos, productosShop)
  // );
  
  // alert(
    //   "usted va a recibir el " +
    //     calcularDescuento(cantidadProductos) +
    //     "% de descuento"
    // );
    
    // console.log(seleccionProductos(productosShop, productos));
    
    // alert(
      //   "nombre: " +
      //     seleccionProductos(productosShop, productos).nombre +
      //     ", Precio: " +
      //     seleccionProductos(productosShop, productos).precio
      // );
      
      // let cantidadProductos = Number(
        //   prompt(
          //     "Ingrese cuantos productos necesitas. le seleccion debe ser maximo de 20 productos. "
          //   )
          // );
  