const productos = [

{
id:1,
nombre:"Audífonos Bluetooth",
precio:89,
imagen:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"
},

{
id:2,
nombre:"Smartwatch Deportivo",
precio:149,
imagen:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
},

{
id:3,
nombre:"Power Bank 20000mAh",
precio:129,
imagen:"https://images.unsplash.com/photo-1609592806787-3d9d31d7a0a1?w=800"
},

{
id:4,
nombre:"Mouse Gamer RGB",
precio:99,
imagen:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800"
},

{
id:5,
nombre:"Teclado Mecánico",
precio:199,
imagen:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800"
},

{
id:6,
nombre:"Cargador USB-C",
precio:49,
imagen:"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800"
}

];

let carrito=[];

const grid=document.getElementById("productos-grid");

productos.forEach(producto=>{

grid.innerHTML += `
<div class="card">

<img src="${producto.imagen}">

<div class="card-content">

<h3>${producto.nombre}</h3>

<div class="price">
S/ ${producto.precio}
</div>

<button onclick="agregarCarrito(${producto.id})">
Agregar al carrito
</button>

</div>

</div>
`;

});

function agregarCarrito(id){

const producto=productos.find(p=>p.id===id);

carrito.push(producto);

actualizarCarrito();

}

function actualizarCarrito(){

document.getElementById("cart-count").innerText=
carrito.length;

const contenedor=
document.getElementById("cart-items");

contenedor.innerHTML="";

let total=0;

carrito.forEach(item=>{

total += item.precio;

contenedor.innerHTML += `
<div class="cart-item">

${item.nombre}

<br>

S/ ${item.precio}

</div>
`;

});

document.getElementById("cart-total").innerText=
total;

}

function toggleCart(){

document
.getElementById("cart-panel")
.classList
.toggle("active");

}

function enviarWhatsapp(){

if(carrito.length===0){

alert("Tu carrito está vacío");

return;

}

let mensaje=
"Hola, deseo realizar el siguiente pedido:%0A%0A";

let total=0;

carrito.forEach(item=>{

mensaje +=
`- ${item.nombre} | S/${item.precio}%0A`;

total += item.precio;

});

mensaje += `%0A💰 Total: S/${total}`;

window.open(
`https://wa.me/51949150700?text=${mensaje}`,
'_blank'
);

}
