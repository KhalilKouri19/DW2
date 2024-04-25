// PRIMER y SEGUNDO DESAFÍO:

let nombreProducto = "Teclados";
let precioUnitario = 1000;
let cantidadDeseada = prompt(`Ingresar la cantidad desea de ${nombreProducto} que desee comprar:`)
let costoTotal = precioUnitario*cantidadDeseada
let descuento = 0;

console.log(`Costo sin descuento de su compra: $${costoTotal}`)

if(cantidadDeseada >= 5){
    descuento = (costoTotal*10)/100
}

costoTotal -= descuento

console.log(`Descuento: -$${descuento}`)
console.log(`Costo total con descuento de su compra: $${costoTotal}`)