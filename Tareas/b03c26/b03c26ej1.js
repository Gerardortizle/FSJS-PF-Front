/*
    Este ejercicio debe correr en Node.

    Crea dos clases con class.
    La segunda debe heredar a la primera con extends.
    Crea un objeto a partir de la segunda clase.
    Comprueba que las propiedades y métodos de ambas son accesibles desde el objeto.
*/

//tu código va aquí vvv
// Se construye la superclase y se define el constructor de la clase padre
class Equipos {
    constructor(numero_id, color){
        this.numero_id = numero_id;
        this.color = color;
    }
}
// se define la clase heredada de Equipos se utiliza extends
class Computadora extends Equipos {
    constructor(numero_id, color, memoria){
        super(numero_id,color);
        this.memoria = memoria;
    }    
}
// este es el objeto creado a partir de la segunda clase
const compu = new Computadora("1234", "Negro", "256Mb");

//Se muestra que las propiedades y metodos son accesibles desde el objeto
console.log(compu);


//tu código va aquí ^^^

//eof
