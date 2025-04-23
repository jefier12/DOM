let win = window;


let main = document.querySelector("main p")
let p = document.querySelector(".container")


// let api = document.querySelectorAll("#api")
// let formularios = document.forms;
// let imagenes = document.images;
// let card = document.styleSheets;

let lista = document.querySelectorAll("ul.list > li.item")

let card = document.querySelectorAll("div.cards > div.card")

let cards = document.querySelector("div.cards")

console.log(cards.parentElement);
console.log("padre", cards.parentElement.parentElement);
console.log("hermano", cards.previousElementSibling.previousElementSibling);

let body = document.querySelector("body");

console.log(body);

console.clear();

let elemento = document.querySelector("#elementos");

elemnto.textContent = "nuevo texto";

elemento.innerHTML = `<p> textos <p/> <p> textos <p/>`;

body.classList.add('bg-red');
// setTimeout(() => {
 
//   console.log(body.classList);
// }, 6000);






