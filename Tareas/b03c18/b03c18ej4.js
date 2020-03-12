/*
    Este ejercicio debe correr en Node.

    Con un bloque switch-case, imprime "tu dato D es del tipo T" para cualquier tipo de dato.
    Tendrás que evaluar los posibles valores que arroja el operador typeof.
*/

const dato = "100";
const tipo = typeof(dato);
let edad = 17

let bebida = (edad > 18) ? "chela" : "Jugito"

//tu código va aquí vvv

console.log(bebida);
console.log(tipo);

switch (tipo){
    case "number":
        console.log("El dato es de tipo: " +tipo);
    break;
    case "string":
        console.log("El dato es de tipo: " +tipo);
    break;
    default:
        console.log("El dato no tiene ningun tipo");
    break;

}
//tu código va aquí ^^^

//eof
