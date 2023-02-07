let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"))

let contenedorProductosCarrito = document.getElementById("contenedorProductosCarrito")

carritoLocalStorage.forEach(producto => {
    let content = document.createElement("div");
    content.className = "cardCarrito";
    content.innerHTML = `
    <img src="${producto.picture}">
    <div class="info">
    <h5>${producto.nombre}</h5>
    <p> ${producto.text}</p>
    <h5>$${producto.precio}</h5>
    `;
    contenedorProductosCarrito.append(content);


    let contadorProductos = document.createElement("div")
    contadorProductos.className = "btn";
    contadorProductos.role = "group";
    contadorProductos.ariaLabel = "Basic example";
    contadorProductos.innerHTML =`
  <button id="botonRestar" class="btn btn-primary">-</button>
  <button id="botonMostrar" class="btn btn-primary">0</button>
  <button id="botonSumar" class="btn btn-primary">+</button>
  `;
    content.append(contadorProductos);


    let sacar = document.createElement("button");
    sacar.id = "botonEliminar";
  sacar.className = "btn bg-red";
  sacar.innerText = "x";

  content.append(sacar);

  sacar.addEventListener("click", () => {
    eliminarProducto(producto);
  });
});


function eliminarProducto() {
  JSON.parse(localStorage.getItem("carrito"))
}

function vaciarCarrito(){
    localStorage.setItem("carrito", "[]")
}