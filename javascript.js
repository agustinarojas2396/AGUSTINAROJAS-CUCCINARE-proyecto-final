// Definimos clase Producto
class Producto{
    constructor(id, nombre, precio, imagen, tipo){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen; 
        this.tipo = tipo;
    }
}

// Definimos clase Carrito
class Carrito{
    constructor(id, producto, cantidad, total){
        this.id = id;
        this.producto = producto;
        this.cantidad = cantidad;
        this.total = total;
    }
}

class TipoProducto{
    constructor(id, nombre){
        this.id = id;
        this.nombre = nombre;
    }
}

// Cargamos array con tipo de productos
const tipoProductos = [
    new TipoProducto (0, "comidas"),
    new TipoProducto (1, "bebidas"),
    new TipoProducto (2, "postres"),
    new TipoProducto (3, "bebidasalcoholicas")
]


// Cargamos array con productos
const productos = 
[
    new Producto(0, "Milanesas con puré", 500, "./media/milaspapitas.jpeg", 0),
    new Producto(1, "Carne con papas al horno", 700, "./media/carneccpapas.jpeg", 0),
    new Producto(2, "Ñoquis con salsa boloñesa", 400, "./media/ñoquis con salsa.jpeg", 0),
    new Producto(3, "Sprite", 200, "./media/sprite.jpeg", 1),
    new Producto(4, "Coca", 200, "./media/coca cola.jpeg", 1),
    new Producto(5, "Aquarius", 200, "./media/aquarius.jpeg", 1),
    new Producto(6, "Ensalada de frutas", 250, "./media/frutas.jpeg", 2),
    new Producto(7, "Flan con crema", 350, "./media/flancccrema.jpeg", 2),
    new Producto(8, "Cheescake", 400, "./media/cheescake.jpeg", 2),
    new Producto(9, "Vino", 600, "./media/vino.jpg", 3),
    new Producto(10, "Fernet", 900, "./media/fernet.jpg", 3)
];

// Inicializamos array carrito vacio
var carrito = [];
var carritoId = 0;

// Recorremos array productos
productos.forEach(item => {
    // Generamos el html para cada producto
    if(item.tipo == 0 ) {
        document.getElementById("panelProductosComidas").innerHTML = document.getElementById("panelProductosComidas").innerHTML + "<div class='card' style='width: 18rem; ' id='card_producto" + item.id + "'><img src='" + item.imagen + "' class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>" + item.nombre + "</h5></div><ul class='list-group list-group-flush'><li class='list-group-item'>$ " + item.precio + "</li><li class='list-group-item'><p>Cantidad</p><input type='text' id='cantidadProducto_"+ item.id +"'></input></li></ul><div class='card-body'><a href='#panelCarrito'  class='card-link' onclick='agregarItem("+ item.id +")'>Agregar al carrito</a></div></div>";
    }
    if(item.tipo == 1) {
        document.getElementById("panelProductosBebidas").innerHTML = document.getElementById("panelProductosBebidas").innerHTML + "<div class='card' style='width: 18rem; ' id='card_producto" + item.id + "'><img src='" + item.imagen + "' class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>" + item.nombre + "</h5></div><ul class='list-group list-group-flush'><li class='list-group-item'>$ " + item.precio + "</li><li class='list-group-item'><p>Cantidad</p><input type='text' id='cantidadProducto_"+ item.id +"'></input></li></ul><div class='card-body'><a href='#panelCarrito'  class='card-link' onclick='agregarItem("+ item.id +")'>Agregar al carrito</a></div></div>";
    }
    if(item.tipo == 2) {
        document.getElementById("panelProductosPostres").innerHTML = document.getElementById("panelProductosPostres").innerHTML + "<div class='card' style='width: 18rem; ' id='card_producto" + item.id + "'><img src='" + item.imagen + "' class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>" + item.nombre + "</h5></div><ul class='list-group list-group-flush'><li class='list-group-item'>$ " + item.precio + "</li><li class='list-group-item'><p>Cantidad</p><input type='text' id='cantidadProducto_"+ item.id +"'></input></li></ul><div class='card-body'><a href='#panelCarrito'  class='card-link' onclick='agregarItem("+ item.id +")'>Agregar al carrito</a></div></div>";
    }
    if(item.tipo == 3) {
        document.getElementById("panelProductosBebidasAlcoholicas").innerHTML = document.getElementById("panelProductosBebidasAlcoholicas").innerHTML + "<div class='card' style='width: 18rem; ' id='card_producto" + item.id + "'><img src='" + item.imagen + "' class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>" + item.nombre + "</h5></div><ul class='list-group list-group-flush'><li class='list-group-item'>$ " + item.precio + "</li><li class='list-group-item'><p>Cantidad</p><input type='text' id='cantidadProducto_"+ item.id +"'></input></li><li class='list-group-item' style='display:none' id='liCantProducto_"+ item.id +"'>Cantidad:&nbsp;&nbsp;<p id='cantidadProducto_" + item.id +"'></p></li></ul><div class='card-body'><a href='#panelCarrito'  class='card-link' onclick='agregarItem("+ item.id +")'>Agregar al carrito</a></div></div>";
    }
});

// Funcion en donde agregamos el producto al carrito
function agregarItem(productoId){    
    // Buscamos por id de producto en el array de productos
    let producto = productos.find(f => f.id == productoId);    

    let cantidad = parseInt(document.getElementById("cantidadProducto_" + productoId).value);
    
    carrito.push(new Carrito(carritoId, producto, cantidad, cantidad * producto.precio));
    carritoId = carritoId + 1;    

    document.getElementById("itemsCarrito").innerHTML = document.getElementById("itemsCarrito").innerHTML + "<div style='display:inline-flex; color:white; align-items: baseline;' id='itemCarrito_"+ producto.id +"'><p>"+ producto.nombre +" x<p style='padding-right:10px'>"+ cantidad +"</p></p><button class='btn btn-default' title='Eliminar' onclick='eliminarItem("+ producto.id +")'>X</button></div>"; 
    document.getElementById("total").innerHTML = (parseInt(document.getElementById("total").innerHTML) + producto.precio * cantidad);
}

function eliminarItem(productoId){    
    document.getElementById("total").innerHTML = parseInt(document.getElementById("total").innerHTML) - (carrito.find(f => f.producto.id == productoId)).total;
    document.getElementById("itemCarrito_" + productoId).remove();
    let posicion = carrito.findIndex(f => f.producto.id == productoId);
    carrito.splice(posicion, 1);    
}

function vaciarCarrito(){
    carrito.splice(0, carrito.length);

    document.getElementById("itemsCarrito").innerHTML = "";
    document.getElementById("total").innerHTML = "0";
}

calculate.onclick = ()=>{
    let inputNumber = document.getElementById('input_number');
    let calculate = document.getElementById ('calculate');
    let result = document.getElementById ('result');

    let numero = +(inputNumber.value);
    const fechaActual = new Date ();    
    const año = fechaActual.getFullYear();    
    let edad = año - numero;

    (edad >=18) ? result.innerHTML = 'Puedes seleccionar bebidas alcohólicas' :  result.innerHTML = 'No puedes seleccionar bebidas alcoholicas';   
}

    function verPedido(){
    localStorage.setItem("itemsCarrito", JSON.stringify(carrito));
    window.open("./Carrito.html", "_blank");
    }

