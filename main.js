

// let productos = Number(prompt("Ingrese que producto necesitas comprar 1-remera 2-buzo 3-camiseta"));

// let cantidadProductos = Number(prompt("Ingrese cuantos productos necesitas. le seleccion debe ser maximo de 20 productos. "))


// switch (productos) {
//     case 1: alert("Usted selecciono remera " + "con una cantidad de: " + cantidadProductos + " productos.")
//         break;
//     case 2: alert("Usted selecciono buzo " + "con una cantidad de: " + cantidadProductos + " productos.")
//         break;
//     case 3: alert("Usted selecciono camiseta " + "con una cantidad de: " + cantidadProductos + " productos.")
//         break;

//     default:
//         alert("No has seleccionado ningun producto.")
//         break;
// }

// function calcularDescuento(cantidadProductos) {

//     if (cantidadProductos >= 15) {

//         alert("usted va a recibir el 20% descuento")
//     } else if (cantidadProductos>=6 && cantidadProductos<15) {
//         alert("usted va a recibir el 10% de descuento")

//     } else {
//         alert("usted no recibe descuento.")

//     }
// }
// calcularDescuento(cantidadProductos);...


// function saludar() {
//     alert("Bienvenidos a tienda pet shop")
// }

// saludar();






// const listaProductos = [
//     {   productoId: 1,
//         nombre : 'remera',	
//         precio : 1200,
//         stock : 5
//     },

//     {
//         productoId: 2,
//         nombre : 'camiseta',	
//         precio : 1500,
//         stock : 5
//     },

//     {   
//         productoId: 3,
//         nombre : 'buzo',	
//         precio : 2000,
//         stock : 5
//     }
// ]


// const seleccion = Number(prompt("Ingrese que producto necesitas comprar 1-remera  2-camiseta  3-buzo"));




// function busquedaRopa(listaProductos,seleccionDelUsuario){

//     listaProductos.forEach((producto) => {
//         if(seleccionDelUsuario == producto.productoId) {
//             console.log("Usted selecciono "+producto.nombre + " y su precio es: $" + producto.precio );
//         }
//     })


// }
// busquedaRopa(listaProductos,seleccion)



const productos = [
    {
        id: 1,
        picture: "./imagenes/agarrePerro.webp",
        nombre: "agarre perro",
        text: "Agarre para perro, estatura chica o mediana.",
        precio: 1200
    },

    {
        id: 2,
        picture: "./imagenes/buzoPerro.webp",
        nombre: "buzo perro",
        text: "Buzo para perro, estatura chica o grande",
        precio: 1500
    },

    {
        id: 3,
        picture: "./imagenes/chalecoGato.webp",
        nombre: "chaleco gato",
        text: "Este es un chaleco para gato, solo para estatura chica o mediana",
        precio: 1000
    },


    {
        id: 4,
        picture: "./imagenes/chalecoPerro.webp",
        nombre: "chaleco perro",
        text: "chaleco para perro exclusivo, solo para estatura chica o mediana",
        precio: 1000
    },


    {
        id: 5,
        picture: "./imagenes/remeraArgentinaPerro.webp",
        nombre: "remera argentina",
        text: "Remera Argentina exclusiva, solo para estatura grande",
        precio: 1600
    },


    {
        id: 6,
        picture: "./imagenes/bandanaPerro.jpg",
        nombre: "bandana perro",
        text: "Bandana para perro exclusiva, para todas las estaturas",
        precio: 800
    },


    {
        id: 7,
        picture: "./imagenes/camperaDisney.webp",
        nombre: "campera disney",
        text: "campera disney, solo para talles chicos",
        precio: "$1200"
    },


    {
        id: 8,
        picture: "./imagenes/vestidoCalabazaPerro.webp",
        nombre: "vestido calabaza perro",
        text: "vestido calabaza para perros, solo para estatura grande",
        precio: "$1700"
    },
]


let shopContent = document.getElementById("shopContent")

let carrito = []

productos.forEach((products) => {

    let content = document.createElement("div")
    content.className = "card"
    content.innerHTML = `
  <img src="${products.picture}" class="card-img-top img-widht">
  <div class="card-body bg-orange">
  <h5 class="card-title">${products.nombre}</h5>
  <p class="card-text"> ${products.text}</p>
  <h4>${products.precio}</h4>
  `;

    shopContent.append(content)

    let comprar = document.createElement("button")
    comprar.className = "btn btn-primary"
    comprar.innerText = "comprar"

    content.append(comprar)

    comprar.addEventListener("click", () => {


        // prueba de esritorio
        // console.log("hola boton")

        carrito.push(
            {
                id: products.id,
                nombre: products.nombre,
                precio: products.precio
            }
        )
        console.log(carrito)
    })

})

let verCarrito = document.getElementById("carrito")

verCarrito.addEventListener("click", () => {
    // console.log("hola carrito")

    const modalHeader = document.createElement("div")
    modalHeader.innerHTML = `
    <h5>carrito</h5>
    `;

    verCarrito.append(modalHeader)

    carrito.forEach((products) => {
        let carritoContent = document.createElement("div")
        carritoContent.className
        carritoContent.innerHTML = `
        <h6> ${products.nombre} </h3>
        <p> ${products.precio} </p>

        `;

    verCarrito.append(carritoContent)


    })
})
