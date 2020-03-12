/*
    Este ejercicio debe correr en Node.

    Repite el ejercicio 1, pero esta vez utiliza composición en vez de extends.
*/

//tu código va aquí vvv

class Equipo {
    constructor(numero_id, color){
        this.numero_id = numero_id;
        this.color = color;
    }
}

const e = new Equipo("1234", "Negro"); // Se crea un objeto que hereda a la clase Equipo

// se define la clase heredada de Equipos se utiliza extends
class Dispositivo {
    constructor(memoria){
        this.memoria = memoria;
    }    
}

const d = new Dispositivo("256MB");  // Se crea un objeto que hereda a la clase Dispositivo y contiene 

class Smartphone {
    constructor(marca, modelo, equipo, dispositivo){
        this.marca = marca;
        this.modelo = modelo;
        this.dispositivo = dispositivo;
        this.equipo = equipo;
    }
}



const s = new Smartphone("Samsung", "Galaxy", e, d); // Se crea un objeto que hereda 

console.log(s);
//tu código va aquí ^^^

//eof
