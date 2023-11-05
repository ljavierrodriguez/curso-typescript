class PersonaTS {
    nombre: string;
    apellido: string;
    rut: string

    constructor(nombre: string, apellido: string, rut: string){
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

const pts1 = new PersonaTS("John", "Doe", "123456")
console.log(pts1.correr())

class EstudianteTS extends PersonaTS {
    grado: string;
    facultdad: string

    constructor(nombre:string, apellido:string, rut:string, grado: string, facultad: string){
        super(nombre, apellido, rut)
        this.grado = grado;
        this.facultdad = facultad;
    }
}

const estTS1 = new EstudianteTS("Jane", "Doe", "123451", "1ro", "Ingenieria")
console.log(estTS1.correr())