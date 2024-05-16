// SEGUNDO, TERCER, CUARTO Y QUINTO DESAFÍO:

//Se define el array con los productos y otro con sus precios

const productos = ["Teclados", "Mouses", "Monitores", "Gabinetes", "Parlantes", "Impresoras", "Placas", "Memorias RAM", "Gráficas", "Procesadores", "Coolers"];
const precioProductos = [7460, 4970, 103900, 68650, 20900, 168400, 77800, 279900, 104180, 154500, 3000];

//Función para obtener el total multiplicando el precio unitario y la cantidad deseada
function sumarProdutos(precioUnitario, cantidadDeseada){
    let total = precioUnitario * cantidadDeseada;
    return total;
}

//Función para mostrar la lista de productos
function mostrarProductos(listaDeProductos,listaDePrecios){
    console.log("Lista de productos:");
    for(let i = 0; i < listaDeProductos.length; i++){
        console.log(i + ": " + listaDeProductos[i] + " - $" + listaDePrecios[i]);
    }
}

//Función para simular la venta de productos
function ventaProductos(listaProductos, precios){
    //Se imprime la lista de productos usando un bucle for
    mostrarProductos(listaProductos, precios);

    //Se le consulta al usuario que producto desea comprar, se detecta si es válido, y se guarda el mismo
    let numeroProducto = prompt("Ingrese el número del producto que desea comprar:");
    if(numeroProducto < 0 || numeroProducto > listaProductos.length - 1){
        alert("Error, se debe seleccionar un producto válido");
        return;
    }

    //Se define el nombre del producto, el precio unitario, la cantidad deseada, el total (a través de una función) y el descuento iniial.
    let nombreProducto = listaProductos[numeroProducto];
    let precioUnitario = precioProductos[numeroProducto];
    let cantidadDeseada = prompt(`Ingresar la cantidad desea de ${nombreProducto} que desee comprar:`);
    let costoTotal = sumarProdutos(precioUnitario, cantidadDeseada);
    let descuento = 0;

    //Se logea el total sin el descuento
    console.log(`Costo sin descuento de su compra: $${costoTotal}`);

    //Se verifica si la cantidad a comprar es mayor o igual a 5, asi aplicar el descuento apropiado
    if(cantidadDeseada >= 5){
       descuento = (costoTotal*10)/100;
    }

    //Se resta el descuento al total
    costoTotal -= descuento;

    //Se logea el descuento aplicado y el total con el descuento
    console.log(`Descuento: -$${descuento}`);
    console.log(`Costo total con descuento de su compra: $${costoTotal}`);
    console.log("---------------------------------------------")

    //Se elimina de ambos arrays el último producto
    listaProductos.pop(numeroProducto);
    precios.pop(numeroProducto);

    //Se vuelve a mostrar la lista de productos ya sin el último producto
    mostrarProductos(listaProductos, precios);
}

ventaProductos(productos, precioProductos);



//SEXTO DESAFIO



console.log("---------------------------------------------")

const producto = {nombre: "Camiseta", precio: 1500, cantidadDisponible: 15};

console.log("Producto: " + producto.nombre);
console.log("Precio: " + producto.precio);
console.log("Stock: " + producto.cantidadDisponible);
console.log("---------------------------------------------")

producto.nombre = "Zapatillas";

console.log("Producto: " + producto.nombre);
console.log("Precio: " + producto.precio);
console.log("Stock: " + producto.cantidadDisponible);
console.log("---------------------------------------------")

producto.categoria = "Calzado";

console.log("Producto: " +  producto.nombre);
console.log("Precio: " + producto.precio);
console.log("Stock: " + producto.cantidadDisponible);
console.log("Categoria: " + producto.categoria);
console.log("---------------------------------------------")

delete producto.cantidadDisponible;

console.log("Producto: " + producto.nombre);
console.log("Precio: " + producto.precio);
console.log("Categoria: " + producto.categoria);
console.log("---------------------------------------------")