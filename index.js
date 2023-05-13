let contenedorRegistro = document.getElementById("registro")
let emailInput = document.getElementById("email")
let passInput = document.getElementById("pass")
let buttonRegistro = document.getElementById("sub")
let spanMensajeUno = document.getElementById("spanR")
let spanIrInicio = document.getElementById("spanIrInicio")

let usuarios = [];

buttonRegistro.addEventListener("click", agregarUsuario);

function agregarUsuario() {
    let usuario = {};
    usuario.email = emailInput.value;
    usuario.password = passInput.value;

    usuarios.push(usuario);
}

buttonRegistro.addEventListener("click", (e) => {
    if (!emailInput.value || !passInput.value) {
        e.preventDefault()
        spanMensajeUno.style.color = "rgb(165, 108, 3)"
        spanMensajeUno.innerHTML = "Todos los valores son requeridos";
        setTimeout(() => {
            spanMensajeUno.innerHTML = "";
        }, 5000);
    } else if (passInput.value.indexOf(" ") !== -1) {
        spanMensajeUno.style.color = "rgb(165, 108, 3)";
        spanMensajeUno.innerHTML = "la contraseña no puede tener espacios";
        setTimeout(() => {
            spanMensajeUno.innerHTML = "";
        }, 5000);
    } else {
        contenedorRegistro.classList.add("inactivo")
        divInicio.classList.remove("inactivo")
    }
})

//Iniciar sesion
const divInicio = document.getElementById("iniciar")
let correo = document.getElementById("correo")
let contraseña = document.getElementById("contra")
let volverRegistro = document.getElementById("volverRegistro")
let buttonInicio = document.getElementById("botonIniciar")
let spanMensajeDos = document.getElementById("spanI")

//variables main
let main = document.getElementById("main")

buttonInicio.addEventListener("click", () => {
    usuarios.forEach((user) => {
        console.log(correo.value)
        console.log(user.emailInput)
        if (!correo.value || !contraseña.value) {
            spanMensajeDos.style.color = "rgb(165, 108, 3)";
            spanMensajeDos.innerHTML = "Falta correo o contraseña";
            setTimeout(() => {
                spanMensajeDos.innerHTML = "";
            }, 5000);
        } else if (correo.value != user.email || contraseña.value != user.password) {
            spanMensajeDos.style.color = "rgb(165, 108, 3)";
            spanMensajeDos.innerHTML = "Correo o contraseña incorrectos";
            setTimeout(() => {
                spanMensajeDos.innerHTML = "";
            }, 5000);
        } else if (correo.value == user.email && contraseña.value == user.password) {
            document.title = "Pagina Principal";
            main.classList.remove("inactivo")
            divInicio.classList.add("inactivo")
        }
    })
});