/* OOP (Object Oriented Programming) 

1. Clases y Objetos
2. Abstraccion
3. Encapsulamiento (public, protected, private)
4. Herencia
5. Polimorfismo

*/

class Persona {
    nombre = null;
    apellido = null;
    rut = null;

    constructor(nombre, apellido, rut){
        this.nombre = nombre
        this.apellido = apellido
        this.rut = rut
    }

    comer(){}
    caminar(){}
    correr(){
        return "Metodo correr de la clase Persona"
    }
}


let p1 = new Persona("Rodrigo", "Doe", "123456789")
let p2 = new Persona("Liliana", "Aqueveque", "1234567999")
console.log(p1)
console.log(p2)

console.log(p1.correr())
console.log(p2.nombre)


class Estudiante extends Persona {
    grado = null;
    facultad = null;

    constructor(nombre, apellido, rut, grado, facultad){
        super(nombre, apellido, rut)
        this.grado = grado
        this.facultad = facultad
    }

    correr(){
        return "Metodo correr de la clase Estudiante";
    }
}

let est1 = new Estudiante("John", "Doe", "1234567", "1ro", "Ingenieria")
console.log(est1.nombre)
console.log(est1.correr())


function correr(){
    return "Correr 1"
}

function correr(){
    return "Correr 2"
}

console.log(correr());