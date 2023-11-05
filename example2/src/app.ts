console.log("Iniciando mi proyecto con Typescript")

type Card = {
    numero: number,
    pinta: string
}

const divApp = document.querySelector("#app");

const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const pintas: string[] = ["spades", "clubs", "diams", "hearts"];

const randomNumber = (arr: any[]): number => {
    return Math.floor(Math.random() * arr.length)
}

const generateCard = (datos: Card) => {
    const card = document.createElement('div');
    const cardText = document.createElement('div');
    cardText.innerHTML = changeValue(datos.numero);
    cardText.classList.add("numero", datos.pinta)
    card.classList.add('card')
    card.appendChild(cardText);
    return card;
} 

const changeValue = (value: number): string => {
    switch (value) {
        case 1: return "A";
        case 11: return "J";
        case 12: return "Q";
        case 13: return "K"
        default: return value.toString()
    }
}

let myCard: Card = {
    numero: 0,
    pinta: ""
};

myCard.numero = numeros[randomNumber(numeros)];
myCard.pinta = pintas[randomNumber(pintas)]

let newCard = generateCard(myCard);
console.log(newCard);
divApp?.appendChild(newCard);