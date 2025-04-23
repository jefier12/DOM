//variables
const formulario = document.querySelector("form")
const nombre = document.querySelector('[name="nombre"]')
const apellido = document.querySelector('[name="apellido"]')
const telefono = document.querySelector('[name="telefono"]')
const documento = document.querySelector('[name="documento]')
const usuario = document.querySelector('[name="usuario"]')
const contrasena = document.querySelector('[name="contrasena"]')
//funciones
const validar = (event) => {
  event.preventDefault();
  if (nombre.value == " ") {
    alert("ingrese el nombre")
    nombre.focus();
  }
  if (apellido.value == " ") {
    alert("ingrese el apellido")
    nombre.focus();
  }
  if (telefono.value == " ") {
    alert("ingrese el nombre")
    nombre.focus();
  }
  if (nombre.value == " ") {
    alert("ingrese el nombre")
    nombre.focus();
  }
  if (nombre.value == " ") {
    alert("ingrese el nombre")
    nombre.focus();
  }
  if (nombre.value == " ") {
    alert("ingrese el nombre")
    nombre.focus();
  }
  if (nombre.value == " ") {
    alert("ingrese el nombre")
    nombre.focus();
  }
}
//eventos
formulario.addEventListener('submit', validar);

