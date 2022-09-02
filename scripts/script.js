let cantidadProductos = parseInt(prompt("Ingrese numero de Productos: "));
console.log ("Ud. Ingresara " + cantidadProductos + " Productos")

let productos = [];
let cantidades = [];
let precios = [];
let totalizados = [];

for (var i = 1; i < cantidadProductos+1; i++){
    console.log(i);
    let producto = prompt("Ingrese Producto "+ i + ":");
    productos.push(producto);
    let cantidad = parseInt(prompt("Ingrese Cantidad "+ i + ":"));
    cantidades.push(cantidad);
    let precio = parseInt(prompt("Ingrese Precio "+ i + ":"));
    precios.push(precio);
    x = CantidadXPrecio(cantidad, precio)
    totalizados.push(x);
}



console.log("--");
console.log(productos);
console.log(cantidades);
console.log(precios);

console.log(totalizados);



function CantidadXPrecio(a,b){
    return a*b
}




