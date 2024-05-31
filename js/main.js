const container = document.getElementById("container_products");

products.forEach(product =>{
    console.log(product);
    const contenedor_item = document.createElement("article");
    contenedor_item.classList.add("container_item");
    contenedor_item.innerHTML = `
    <img class="img_product" src="${product.image}" alt="${product.name}">
    <div class="contenedor_precio">
        <p class="nombre_producto">${product.name}</p>
        <p class="precio_producto">$ ${product.price}</p>
    </div>
    `
    container.appendChild(contenedor_item);
})