// let nombre = "leandro";

// alert ("bienvenido" + " " + nombre);

// console.log(nombre);


// function saludar() {
//     alert("Bienvenidos a tienda pet shop")
// }

// saludar();

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
// calcularDescuento(cantidadProductos);


function saludar() {
    alert("Bienvenidos a tienda pet shop")
}

saludar();






const listaProductos = [
    {   productoId: 1,
        nombre : 'remera',	
        precio : 1200,
        stock : 5
    },

    {
        productoId: 2,
        nombre : 'camiseta',	
        precio : 1500,
        stock : 5
    },
    
    {   
        productoId: 3,
        nombre : 'buzo',	
        precio : 2000,
        stock : 5
    }
]


const seleccion = Number(prompt("Ingrese que producto necesitas comprar 1-remera  2-camiseta  3-buzo"));


// const busquedaRopa = listaProductos.filter((el) => el.nombre.includes("remera")) 

function busquedaRopa(listaProductos,seleccionDelUsuario){

    listaProductos.forEach((producto) => {
        if(seleccionDelUsuario == producto.productoId) {
            console.log("Usted selecciono "+producto.nombre + " y su precio es: $" + producto.precio );
        }
    })

    
}
busquedaRopa(listaProductos,seleccion)


