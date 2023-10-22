console.log("Hola Mundo");

/*

Any
Number
Arrays
Tuplas
Enumerados (Enum)
Void
Null
Undefined
Object

*/

let nombre: string = "Luis";
let edad: number = 40;

let nombres: object[] = [{ name: 'Hugo', edad: 10 }, { name: 'Paco', edad: 12 }]

let activo: any = false;



interface Persona {
    nombre: string,
    edad: number
}

const usuario: Persona = {
    nombre: 'Hugo',
    edad: 13
}

const usuario2: Persona = {
    nombre: 'Paco',
    edad: 14
}

let users: null | Persona[] = null;

users = []

type Coordenadas = [number, number];

const punto: Coordenadas = [45, -10];


function sumar(a: number, b: number): number {
    return a + b
}

const result: number = sumar(10, 10);

const multiplicar = (a: number, b: number): number => a * b;


const addUser = (user: Persona): void => {
    users?.push(user)
}

addUser(usuario)
addUser(usuario2)