const precioTicket = 200;

function resumen () {

var cantidad = document.getElementById ("cantidad").value;
var descuento = document.getElementById("sel1").value;
var precio = cantidad * (precioTicket - (precioTicket * descuento/100));
document.getElementById("total").value = "Total a pagar :$"+precio;

}