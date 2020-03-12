/*
    Este ejercicio debe correr en Node.

    Crea cualquier objeto.
    Agrégale algunas propiedades (con cualquier contenido).
    Imprime el descriptor de cada una de sus propiedades.
*/

//tu código va aquí vvv

const persona = {
    nombre: "José",
    apellido: "Perez",
    num     :    1234,
};

console.log(Object.getOwnPropertyDescriptors(persona));

//tu código va aquí ^^^

//eof
