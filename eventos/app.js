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
  if (nombre.value == " ") {
    alert("ingrese el nombre")
    nombre.focus();
  }
  if (apellido.value == " ") {
    alert("ingrese el apellido")
    apellido.focus();
  }
  if (telefono.value == " ") {
    alert("ingrese el telefono")
    telefono.focus();
  }
  if (documento.value == " ") {
    alert("ingrese el documento")
    documento.focus();
  }
  if (usuario.value == " ") {
    alert("ingrese el usuario")
    usuario.focus();
  }
  if (contrasena.value == " ") {
    alert("ingrese la contraseña")
    contrasena.focus();
  }
  event.preventDefault();

};

const letras = (event) => {
  const RegExp = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]$/;
  if (!RegExp.test(event.key) && event.key !== 'Backspace') {
    event.preventDefault();
  }
};
const numeros = (event) => {
  const RegExp = /^[a-zA-Z]$/;
  if (RegExp.test(event.key)) {
    event.preventDefault();
  }
}
const letnum = (event) => {
  const RegExp = /^[a-zA-Z0-9]$/;
  if (!RegExp.test(event.key) && event.key != 'Backspace') {
    event.preventDefault();
  }
}
const vcontrasena  = (event) => {
  const RegExp = /^[a-zA-Z0-9@#$%]{8,10}$/;
  if (RegExp.test(event.key) && event.key != 'Backspace') {
    event.preventDefault();
  }
}


//eventos
formulario.addEventListener('submit', validar);
nombre.addEventListener('keydown',letras);
apellido.addEventListener('keydown',letras);
telefono.addEventListener('keydown',numeros);
documento.addEventListener('keydown',numeros);
usuario.addEventListener('keydown',letnum);
contrasena.addEventListener('keydown',vcontrasena); 

