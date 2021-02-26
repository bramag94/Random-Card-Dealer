/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //se adiciona a un style
  document.querySelector(".card").classList.add(generateRandomSuit());
  //adiciona contenido
  document.querySelector(".card").innerHTML = generateRandomNumber();
};

//funcion para obtener numero carta
let generateRandomNumber = () => {
  //DEFINIR UN ARREGLO CON LOS NUMEROS ["A","1","2",..]
  let numeros = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  //generar los valores de manera aleatoria
  let index = Math.floor(Math.random(numeros) * numeros.length);
  return index;
};
//funcion para obtener tipos carta
let generateRandomSuit = () => {
  let suit = ["diamond", "spade", "heart", "club"];
  //generar los valores de manera aleatoria
  let randomicon = Math.floor(Math.random(suit) * suit.length);
  return suit[randomicon];
};
