let botonAbrirMenu = document.getElementById("abrirMenuHeader")
let menu = document.getElementById("contenedorMenuHeader")
let botonCerrar = document.getElementById("cerrarMenu")

botonAbrirMenu.addEventListener("click", () => {
    menu.style.display = "flex"
})

botonCerrar.addEventListener("click", () => {
    menu.style.display = "none"
})