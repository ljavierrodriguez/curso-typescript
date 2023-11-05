"use strict";
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
let nombre = "Luis";
let edad = 40;
let nombres = [{ name: 'Hugo', edad: 10 }, { name: 'Paco', edad: 12 }];
let activo = false;
const usuario = {
    nombre: 'Hugo',
    edad: 13
};
const usuario2 = {
    nombre: 'Paco',
    edad: 14
};
let users = null;
users = [];
const punto = [45, -10];
function sumar(a, b) {
    return a + b;
}
const result = sumar(10, 10);
const multiplicar = (a, b) => a * b;
const addUser = (user) => {
    users === null || users === void 0 ? void 0 : users.push(user);
};
addUser(usuario);
addUser(usuario2);
