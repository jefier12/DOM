//importaciones
import { esValido } from "./modulo.js";
//variables
const formulario = document.querySelector("form");
const nombre = document.querySelector('[name="nombre"]');
const apellido = document.querySelector('[name="apellido"]');
const telefono = document.querySelector('[name="telefono"]');
const documento = document.querySelector('[name="documento]');
const usuario = document.querySelector('[name="usuario"]');
const contrasena = document.querySelector('[name="Contrasena"]');
const politicas = document.querySelector('[name="politicas"]');
const boton = document.querySelector('#btn_validar');

const invalid = () => { 
  
}


//funciones
const validar = (event) => {
  event.preventDefault();
  if (nombre.value == "") {
    nombre.nextElementSibling ? nombre.nextElementSibling.remove() : "";
    nombre.classList.add("error");
    const span = document.createElement('span');
    span.textContent = "este campo es obligatorio";
    nombre.insertAdjacentElement("afterend", span);
    nombre.focus();
  }
  if (apellido.value == "") {
    apellido.nextElementSibling ? apellido.nextElementSibling.remove() : "";
    apellido.classList.add("error")
    const span = document.createElement('span');
    span.textContent = "este campo es obligatorio";
    apellido.insertAdjacentElement("afterend", span);
    apellido.focus();
  }
  if (telefono.value == "") {
    telefono.nextElementSibling ? telefono.nextElementSibling.remove() : "";
    telefono.classList.add("error")
    const span = document.createElement('span');
    span.textContent = "este campo es obligatorio";
    telefono.insertAdjacentElement("afterend", span);
    telefono.focus();
  }
  if (documento.value == "") {
    documento.nextElementSibling ? documento.nextElementSibling.remove() : "";
    documento.classList.add("error")
    const span = document.createElement('span');
    span.textContent = "este campo es obligatorio";
    documento.insertAdjacentElement("afterend", span);
    documento.focus();
  }
  if (usuario.value == "") {
    usuario.nextElementSibling ? usuario.nextElementSibling.remove() : "";
    usuario.classList.add("error")
    const span = document.createElement('span');
    span.textContent = "este campo es obligatorio";
    usuario.insertAdjacentElement("afterend", span);
    usuario.focus();
  }
  if (contrasena.value == "") {
    contrasena.nextElementSibling ? contrasena.nextElementSibling.remove() : "";
    contrasena.classList.add("error")
    const span = document.createElement('span');
    span.textContent = "este campo es obligatorio";
    contrasena.insertAdjacentElement("afterend", span);
    contrasena.focus();
  }
}

const limpiar = (event) => {
  if (event.target.value !== "") {
    event.target.classList.remove("error");
    if (event.target.nextElementSibling) {
      event.target.nextElementSibling.remove();
    }
  }
}

const acepta = (e) => {
  if (!politicas.checked) {
    boton.setAttribute("disable", "");
  } else {
    boton.removeAttribute("disable");
  }
}


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
const vcontrasena = (event) => {
  const RegExp = /^[a-zA-Z0-9@#$%]{8,10}$/;
  if (RegExp.test(event.key) && event.key != 'Backspace') {
    event.preventDefault();
  }
}


//eventos

addEventListener("DOMContentLoaded", acepta)

politicas.addEventListener('change', (acepta));

formulario.addEventListener('submit', esValido);

nombre.addEventListener("blur", limpiar);
apellido.addEventListener("blur", limpiar);

nombre.addEventListener('keydown', letras);
apellido.addEventListener('keydown', letras);
telefono.addEventListener('keydown', numeros);
documento.addEventListener('keydown', numeros);
usuario.addEventListener('keydown', letnum);
contrasena.addEventListener('keydown', vcontrasena);

