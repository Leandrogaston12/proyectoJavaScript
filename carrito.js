let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));

let contenedorProductosCarrito = document.getElementById(
  "contenedorProductosCarrito"
);

let totalCompra = 0;


carritoLocalStorage.forEach((producto) => {

  totalCompra += producto.precio * producto.cantidad

  let content = document.createElement("div");
  content.className = "cardCarrito";
  content.innerHTML = `
    <img src="${producto.picture}">
    <div class="info">
    <h5>${producto.nombre}</h5>
    <p> ${producto.text}</p>
    <h5>$${producto.precio * producto.cantidad}</h5>
    `;
  contenedorProductosCarrito.append(content);

  let contadorProductos = document.createElement("div");
  contadorProductos.className = "btn";
  contadorProductos.role = "group";
  contadorProductos.ariaLabel = "Basic example";
  contadorProductos.innerHTML = `
  <span id="botonMostrar" class="btn btn-primary">`+ producto.cantidad + `</span>
  `;
  content.append(contadorProductos);

  let sacar = document.createElement("button");
  sacar.className = "btn bg-red botonEliminar";
  sacar.innerText = "x";

  content.append(sacar);
  sacar.addEventListener("click", () => {
    eliminarProducto(producto.id)
  })


});

let totalCompraProductos = document.createElement("div");
totalCompraProductos.className = "totalCompra";
totalCompraProductos.innerHTML = `
<span>TOTAL: $`+ totalCompra + `</span>
`;
contenedorProductosCarrito.append(totalCompraProductos);

let compraProductos = document.createElement("button");
compraProductos.className = "btn";
compraProductos.innerHTML = `
<button class="botonCompra">COMPRAR</button>
`;
contenedorProductosCarrito.append(compraProductos);


compraProductos.addEventListener("click", () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: '¿Realizar compra?',
    text: "Seguro que quieres realizar la compra",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Comprar',
    cancelButtonText: 'Cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Su compra fue realizada',
        'Su compra fue realizada con exito',
        'success'
      ).then(function() {
        vaciarCarrito()
        toHome()
      })
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'Su compra a sido cancelada',
        'error'
      )
    }
  })

});

function eliminarProducto(id) {
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  let arrayNuevo = carrito.filter((producto) => {
    return producto.id != id
  }
  )
  localStorage.setItem("carrito", JSON.stringify(arrayNuevo))
  location.reload();
}

function vaciarCarrito() {
  localStorage.setItem("carrito", "[]");
}
function toHome() {
  location.href = "index.html";
}


