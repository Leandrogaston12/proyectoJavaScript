let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));

let contenedorProductosCarrito = document.getElementById(
  "contenedorProductosCarrito"
);

carritoLocalStorage.forEach((producto) => {
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

  let contadorProductos = document.createElement("div");
  contadorProductos.className = "btn";
  contadorProductos.role = "group";
  contadorProductos.ariaLabel = "Basic example";
  contadorProductos.innerHTML = `
  <button id="botonRestar" class="btn btn-primary">-</button>
  <span id="botonMostrar" class="btn btn-primary">`+producto.cantidad+`</span>
  <button id="botonSumar" class="btn btn-primary">+</button>
  `;
  content.append(contadorProductos);

  let sacar = document.createElement("button");
  sacar.className = "btn bg-red botonEliminar";
  sacar.innerText = "x";
  
  content.append(sacar);
  sacar.addEventListener("click", ()=>{
    eliminarProducto(producto.id)
  })
  
    
  });
  
  // function(sacar) {
  //   const item = button.parentElement;
  //   const index = Array.from(item.parentNode.children).indexOf(item);
  //   cart.splice(index, 1);
  //   item.remove();
  // }
  

function eliminarProducto(id) {
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  let arrayNuevo = carrito.filter((producto)=>{
    return producto.id != id
  }
  )
  localStorage.setItem("carrito",JSON.stringify(arrayNuevo))
  location.reload();
}

function vaciarCarrito() {
  localStorage.setItem("carrito", "[]");
}








let count = 0;

document.getElementById("botonSumar").addEventListener("click", function () {
  count++;
  document.getElementById("botonMostrar").innerHTML = count;
});

document.getElementById("botonRestar").addEventListener("click", function () {
  if (count > 0) {
    count--;
    document.getElementById("botonMostrar").innerHTML = count;
  }
});