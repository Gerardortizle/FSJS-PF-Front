/*
    Este ejercicio debe correr en Chrome.

    Para este ejercicio debes volver a otro ejercicio que ya has realizado:
    Bloque 02 - Clase 05 - Ejercicio 05.

    Realiza el mismo ejercicio, pero sólo agregando elementos usando el DOM con JS.
    Necesitarás crear un archivo HTML que tenga sólo los tags doctype y <html>.
*/

//tu código va aquí vvv

const avengers = [
    {
        "nombre" : "Super heroe",
        "identidad" : "Identidad",
        "superpoder" : "Poder",
        "primerapeli" : "Pelicula"

    },{
        "nombre" : "1.-Iron Man",
        "identidad" : "Tony Stark",
        "superpoder" : "Super Traje",
        "primerapeli" : "Iron Man 1"

    },{
        "nombre" : "2.-Capitan America",
        "identidad" : "Steve Rogers",
        "superpoder" : "Escudo",
        "primerapeli" : "Capitan America 1"
    },{
        "nombre" : "3.-Hulk",
        "identidad" : "Bruce Banner",
        "superpoder" : "Super fuerza",
        "primerapeli" : "Hulk"
    },{
        "nombre" : "4.-Thor",
        "identidad" : "Thor",
        "superpoder" : "Super Mazo",
        "primerapeli" : "Thor 1"
    },{        
        "nombre" : "5.-Black Widow",
        "identidad" : "Natasha Romanoff",
        "superpoder" : "Combate",
        "primerapeli" : "Iron Man 2"}
];
//Aqui se crea un arreglo que contiene 6 elementos el encabezado y cada uno de los renglones

const mitabla = document.createElement("table"); //Crea el elemento Table en el HTML
mitabla.style.setProperty("border", "3px solid black"); //Cambia el estilo del borde de toda la tabla

const tableRows = []; //Define un arreglo para los renglones que contendrá la tabla
let row, col, txt; //Define renglon, columna y texto como variables



for(let i=0; i<avengers.length; i++){

    row = document.createElement("tr");
    row.style.setProperty("border", "3px solid black");
    tableRows.push(row);
    

    for(let prop in avengers[i]){
        if(i===0){
            col = document.createElement("th");
        }else{
            col = document.createElement("td");
        }

        col.style.setProperty("border", "3px solid black");

        txt = document.createTextNode(avengers[i][prop]);
        col.appendChild(txt);
        tableRows[i].appendChild(col);
    }
        mitabla.appendChild(tableRows[i]);
}
    
 
const el_body = document.getElementById("lodeljs");
el_body.appendChild(mitabla);



//tu código va aquí ^^^

//eof
