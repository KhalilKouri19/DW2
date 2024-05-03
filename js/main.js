// PRIMER, SEGUNDO y TERCER DESAFÍO:

//Definir el nombre del producto, el precio unitario, la cantidad deseada, el total (a través de una función) y el descuento iniial.
let nombreProducto = "Teclados";
let precioUnitario = 1000;
let cantidadDeseada = prompt(`Ingresar la cantidad desea de ${nombreProducto} que desee comprar:`)
let costoTotal = sumarProdutos(precioUnitario, cantidadDeseada)
let descuento = 0;

//Logear el total sin el descuento
console.log(`Costo sin descuento de su compra: $${costoTotal}`)

//Verificar si la cantidad a comprar es mayor o igual a 5, asi aplicar el descuento apropiado
if(cantidadDeseada >= 5){
    descuento = (costoTotal*10)/100
}

//Restar el descuento al total
costoTotal -= descuento

//Logear el descuento aplicado y el total con el descuento
console.log(`Descuento: -$${descuento}`)
console.log(`Costo total con descuento de su compra: $${costoTotal}`)

//Función para obtener el total multiplicando el precio unitario y la cantidad deseada
function sumarProdutos(precioUnitario, cantidadDeseada){
    let total = precioUnitario * cantidadDeseada;
    return total;
}