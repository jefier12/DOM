let padre = document.querySelector(".container");
let node = document.createElement("h2")
node.textContent = "titulo de segundo nivel"
let texto = document.createTextNode("plabra para el nodo de texto")
padre.appendChild(node);
padre.appendChild(texto);

let lista = document.querySelector("#list");


let html = document.createElement("li");
html.textContent = "HTML"
let css = document.createElement("li");
css.textContent = "CSS"
let js = document.createElement("li");
js.textContent = "JS"

html.classList.add("item");
css.classList.add("item");
js.classList.add("item");

lista.append(html, css, js);

let card = document.querySelector(".card");
let lista_card = card.querySelector("#list")
let titulo = document.createElement("h2");
titulo.textContent = "titulo de la card";

// card.append(titulo);
card.insertBefore(titulo, lista_card);


let beforebegin = document.createElement("li");
beforebegin.classList.add("item", "before");
beforebegin.textContent = "nuevo contenido ubicado antes de la lista ordenada";

let afterbegin = document.createElement("li");
afterbegin.classList.add("item");
afterbegin.textContent = "nuevo contenido ubicado al inicio de la lista ordenada";

let beforeend = document.createElement("li");
beforeend.classList.add("item", "before");
beforeend.textContent = "nuevo contenido ubicado al final de la lista ordenada";

let afterend = document.createElement("li");
afterend.classList.add("item");
afterend.textContent = "nuevo contenido ubicado al final de la lista ordenada";


lista_card.insertAdjacentElement("beforebegin", beforebegin);
lista_card.insertAdjacentElement("beforeend", beforeend);
lista_card.insertAdjacentElement("afterbegin", afterbegin);
lista_card.insertAdjacentElement("afterend", afterend);

let card_dias = document.querySelector("#dias")

const dias = [
  {
    id: 1,
    nombre: "lunes",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad atque laboriosam vitae minus dolores illum."
  },
  {
    id: 2,
    nombre: "martes",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad atque laboriosam vitae minus dolores illum."
  },
  {
    id: 3,
    nombre: "miercoles",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad atque laboriosam vitae minus dolores illum."
  },
  {
    id: 4,
    nombre: "jueves",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad atque laboriosam vitae minus dolores illum."
  },
  {
    id: 5,
    nombre: "viernes",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad atque laboriosam vitae minus dolores illum."
  },
  {
    id: 6,
    nombre: "sabado",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad atque laboriosam vitae minus dolores illum."
  },
  {
    id: 7,
    nombre: "domingo",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad atque laboriosam vitae minus dolores illum."
  }

];

console.log(dias);

dias.map(({ nombre, img, parrafo }) => {
  //crear elementos
  let card = document.createElement("div");
  let card_header = document.createElement("div");
  let card_titulo = document.createElement("h2");
  let card_body = document.createElement("div");
  let imagen = document.createElement("img");
  let p = document.createElement("p");
  //agregar estilos
  card.classList.add("card");
  card_header.classList.add("card__header");
  card_titulo.classList.add("card__title");
  card_body.classList.add("card__body");
  imagen.classList.add("card__img");
  p.classList.add("card__paragraph");
  //administrar los atributos
  imagen.setAttribute("src", img);
  imagen.setAttribute("alt", nombre);
  //unir los elementos
  card_titulo.textContent = nombre;
  p.textContent = parrafo;
  card_body.append(imagen, p);
  card_header.append(card_titulo);
  card.append(card_header);
  card.append(card_body)
  card_dias.append(card);
});
