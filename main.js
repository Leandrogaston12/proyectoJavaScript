function saludar() {
    alert("Bienvenidos a tienda pet shop")
}

saludar();


let productos = Number(prompt("Ingrese que producto necesitas comprar 1-remera 2-buzo 3-camiseta"));

let cantidadProductos = Number(prompt("Ingrese cuantos productos necesitas. le seleccion debe ser maximo de 20 productos. "))


switch (productos) {
    case 1: alert("Usted selecciono remera " + "con una cantidad de: " + cantidadProductos + " productos.")
        break;
    case 2: alert("Usted selecciono buzo " + "con una cantidad de: " + cantidadProductos + " productos.")
        break;
    case 3: alert("Usted selecciono camiseta " + "con una cantidad de: " + cantidadProductos + " productos.")
        break;

    default:
        alert("No has seleccionado ningun producto.")
        break;
}

function calcularDescuento(cantidadProductos) {

    if (cantidadProductos >= 15) {

        alert("usted va a recibir el 20% descuento")
    } else if (cantidadProductos>=6 && cantidadProductos<15) {
        alert("usted va a recibir el 10% de descuento")

    } else {
        alert("usted no recibe descuento.")

    }
}
calcularDescuento(cantidadProductos);



