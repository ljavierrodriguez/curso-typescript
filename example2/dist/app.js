"use strict";
console.log("Iniciando mi proyecto con Typescript");
const divApp = document.querySelector("#app");
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const pintas = ["spades", "clubs", "diams", "hearts"];
const randomNumber = (arr) => {
    return Math.floor(Math.random() * arr.length);
};
const generateCard = (datos) => {
    const card = document.createElement('div');
    const cardText = document.createElement('div');
    cardText.innerHTML = changeValue(datos.numero);
    cardText.classList.add("numero", datos.pinta);
    card.classList.add('card');
    card.appendChild(cardText);
    return card;
};
const changeValue = (value) => {
    switch (value) {
        case 1: return "A";
        case 11: return "J";
        case 12: return "Q";
        case 13: return "K";
        default: return value.toString();
    }
};
let myCard = {
    numero: 0,
    pinta: ""
};
myCard.numero = numeros[randomNumber(numeros)];
myCard.pinta = pintas[randomNumber(pintas)];
let newCard = generateCard(myCard);
console.log(newCard);
divApp === null || divApp === void 0 ? void 0 : divApp.appendChild(newCard);
