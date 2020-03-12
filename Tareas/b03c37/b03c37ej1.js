/*
    Este ejercicio debe correr en Node.

    Crea 3 objetos con las mismas 3 propiedades, pero con 2 métodos diferentes cada uno.
    Ejecuta los métodos de cada objeto en los demás objetos usando bind(), call() y apply().
*/

//tu código va aquí vvv

const obj = {
    "name" : "Luisa",
    "saludarODespedir" : function(str1, str2) {
        console.log(str1 +" "+ this.name +" "+ str2);
    }
};

obj.saludarODespedir("Hola q", "qué tal");
//imprime "Hola Luisa qué tal"

obj.saludarODespedir.call({"name" : "Susana"}, "Adiós", "cuídate");
//imprime "Adiós Susana cuídate"

//tu código va aquí ^^^

//eof
