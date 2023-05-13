let carritoImg = document.getElementById("carrito")
let contenedorCarrito = document.getElementById("contenedorCarrito")

carritoImg.addEventListener("click", () => {
    contenedorCarrito.classList.toggle("activoCarrito")
});

let productos = [{
        nombre: 'Cien años',
        imagen: 'cien-años.jpg',
        precio: 120.000
    },
    {
        nombre: 'El recetario',
        imagen: 'recetario-magico.jpg',
        precio: 260.000
    },
    {
        nombre: 'Mariposas',
        imagen: 'libro-mariposa.jpg',
        precio: 80.000
    },
    {
        nombre: 'Bovary',
        imagen: 'bovary.jpg',
        precio: 210.000
    },
    {
        nombre: 'El Congo',
        imagen: 'el-congo.jpg',
        precio: 150.000
    },
    {
        nombre: 'La Adulteria',
        imagen: 'la-adulteria.jpg',
        precio: 290.000
    },
];

console.log(productos);

let carrito = [];

//Funcion que permite agregar cosas al carrito
function agregarAlCarrito(index) {
    carrito.push(productos[index]);
}

//Funcion que permite ver lo que agregamos al carrito
function mostrarCarrito() {
    let listaCarrito = document.getElementById("lista-carrito");
    let totalCarrito = document.getElementById("valorFinal");
    let total = 0;
    listaCarrito.innerHTML = '';

    for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        let itemCarrito = document.createElement('li');
        itemCarrito.innerHTML = `${producto.nombre}`;
        let imgProducto = document.createElement('img');
        imgProducto.src = producto.imagen;
        imgProducto.alt = producto.nombre;
        itemCarrito.appendChild(imgProducto);

        listaCarrito.appendChild(itemCarrito);
        itemCarrito.classList.add("items-carrito");

        //boton para borrar cosas
        let btnEliminar = document.createElement('button');
        btnEliminar.innerHTML = 'X';
        btnEliminar.classList.add('btn-eliminar');
        btnEliminar.onclick = function() {
            eliminarDelCarrito(i);
        };
        itemCarrito.appendChild(btnEliminar);

        listaCarrito.appendChild(itemCarrito);
        itemCarrito.classList.add("items-carrito");
        total += producto.precio;
    }
    //Valor final
    totalCarrito.textContent = `Total: COP${total}${'000'}`;
}

//Funcion que permite eliminar objetos
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    mostrarCarrito();
}

//LLamado de la funcion pasada
mostrarCarrito();

// Obtener todos los botones de la página, o sea todos con una sola clase
let botones = document.querySelectorAll('.boton-producto');

// Codigo que permite Asignar el evento onclick a cada botón
botones.forEach(function(boton, index) {
    boton.onclick = function() {
        agregarAlCarrito(index);
        mostrarCarrito();
    }
});