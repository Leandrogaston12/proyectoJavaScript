function saludar() {
  alert("Bienvenidos a tienda pet shop");
}

saludar();

let productos = Number(
  prompt(
    "Ingrese que producto necesitas comprar \n1-agarre perro \n2-buzo perro \n3-chaleco gato \n4-chaleco perro \n5-remera Argentina \n6-bandana perro \n7-campera disney \n8-vestido calabaza perro"
  )
);

const productosShop = [
  {
    id: 1,
    picture: "./imagenes/agarrePerro.webp",
    nombre: "agarre perro",
    text: "Agarre para perro, estatura chica o mediana.",
    precio: 1200,
  },

  {
    id: 2,
    picture: "./imagenes/buzoPerro.webp",
    nombre: "buzo perro",
    text: "Buzo para perro, estatura chica o grande",
    precio: 1500,
  },

  {
    id: 3,
    picture: "./imagenes/chalecoGato.webp",
    nombre: "chaleco gato",
    text: "Este es un chaleco para gato, solo para estatura chica o mediana",
    precio: 1000,
  },

  {
    id: 4,
    picture: "./imagenes/chalecoPerro.webp",
    nombre: "chaleco perro",
    text: "chaleco para perro exclusivo, solo para estatura chica o mediana",
    precio: 1000,
  },

  {
    id: 5,
    picture: "./imagenes/remeraArgentinaPerro.webp",
    nombre: "remera argentina",
    text: "Remera Argentina exclusiva, solo para estatura grande",
    precio: 1600,
  },

  {
    id: 6,
    picture: "./imagenes/bandanaPerro.jpg",
    nombre: "bandana perro",
    text: "Bandana para perro exclusiva, para todas las estaturas",
    precio: 800,
  },

  {
    id: 7,
    picture: "./imagenes/camperaDisney.webp",
    nombre: "campera disney",
    text: "campera disney, solo para talles chicos",
    precio: 1200,
  },

  {
    id: 8,
    picture: "./imagenes/vestidoCalabazaPerro.webp",
    nombre: "vestido calabaza perro",
    text: "vestido calabaza para perros, solo para estatura grande",
    precio: 1700,
  },
];

function seleccionProductos(productosArray, prod) {
  let resultado = "";
  productosArray.forEach(function (elemento) {
    if (elemento.id == prod) {
      resultado = elemento;
    }
  });
  return resultado;
}

console.log(seleccionProductos(productosShop, productos));

alert(
  "nombre: " +
    seleccionProductos(productosShop, productos).nombre +
    ", Precio: " +
    seleccionProductos(productosShop, productos).precio
);

let cantidadProductos = Number(
  prompt(
    "Ingrese cuantos productos necesitas. le seleccion debe ser maximo de 20 productos. "
  )
);

function calcularDescuento(cantidad) {
  let descuento = 0;
  if (cantidad >= 15) {
    descuento = 20;
  } else if (cantidad >= 6 && cantidad < 15) {
    descuento = 10;
  }

  return descuento;
}

alert(
  "usted va a recibir el " +
    calcularDescuento(cantidadProductos) +
    "% de descuento"
);

function calcularTotal(productos, cantidad, productosShop) {
  let descuento = calcularDescuento(cantidad);
  let productoElegido = seleccionProductos(productosShop, productos);
  let totalParcial = productoElegido.precio * cantidad;
  let total = (totalParcial * (100 - descuento)) / 100;
  return total;
}

alert(
  "usted debe abonar $" +
    calcularTotal(productos, cantidadProductos, productosShop)
);

let shopContent = document.getElementById("shopContent");

productosShop.forEach((producto) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
  <img src="${producto.picture}" class="card-img-top img-widht">
  <div class="card-body bg-orange">
  <h5 class="card-title">${producto.nombre}</h5>
  <p class="card-text"> ${producto.text}</p>
  <h4>${producto.precio}</h4>
  `;
  shopContent.append(content);

  let comprar = document.createElement("button");
  comprar.className = "btn bg-rose";
  comprar.innerText = "agregar al carrito";

  content.append(comprar);

  comprar.addEventListener("click", () => {
    agregarAlCarrito(producto);
  });
});

function agregarAlCarrito(producto) {
    let carrito = localStorage.getItem("carrito");
    if(carrito==null){
        carrito= "[]"
    }
    carrito = JSON.parse(carrito)
    carrito.push(producto)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    console.log(carrito)
}
