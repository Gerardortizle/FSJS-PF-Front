/*
    
    Realiza el mismo ejercicio, pero sólo agregando elementos usando el DOM con JS.
    Necesitarás crear un archivo HTML que tenga sólo los tags doctype y <html>.
*/

//tu código va aquí vvv

const suculentas = [
    {
        "Nombre" : "Nombre",
        "Caracteristica" : "Características",
        "Usos" : "Sol o Sombra",
        "Tamaño" : "Tamaño promedio",
        "Cuidados" : "Cuidados recomendados",
        "Precio" : "Precio",
        "Imagen" : "Imagen"
    },{
        "Nombre" : "Suculenta Mini",
        "Caracteristica" : "Pequeñas plantas con multiples hojas",
        "Usos" : "Planta de Sol y Sombra",
        "Tamaño" : "Pequeña",
        "Cuidados" : "Se riega cada semana",
        "Precio" : "$35.00 c/u",
        "Imagen" : "image1.jpg"
    },{
        "Nombre" : "Suculenta Piedra",
        "Caracteristica" : "Sin hojas parece una piedra",
        "Usos" : "Planta de Sol",
        "Tamaño" : "Pequeña",
        "Cuidados" : "Se riega cada semana",
        "Precio" : "$45.00 c/u",
        "Imagen" : "image2.jpg"
    },{
        "Nombre" : "Suculenta Piedra",
        "Caracteristica" : "Sin hojas parece una piedra",
        "Usos" : "Planta de Sol",
        "Tamaño" : "Pequeña",
        "Cuidados" : "Se riega cada semana",
        "Precio" : "$45.00",
        "Imagen" : "image3.jpg"
    },{
        "Nombre" : "Suculenta Piedra",
        "Caracteristica" : "Sin hojas parece una piedra",
        "Usos" : "Planta de Sol",
        "Tamaño" : "Pequeña",
        "Cuidados" : "Se riega cada semana",
        "Precio" : "$45.00",
        "Imagen" : "image1.jpg"
    },{
        "Nombre" : "Suculenta Piedra",
        "Caracteristica" : "Sin hojas parece una piedra",
        "Usos" : "Planta de Sol",
        "Tamaño" : "Pequeña",
        "Cuidados" : "Se riega cada semana",
        "Precio" : "$45.00",
        "Imagen" : "image2.jpg"
    }
];
//Aqui se crea un arreglo que contiene 6 elementos el encabezado y cada uno de los renglones

const mitabla = document.createElement("table"); //Crea el elemento Table en el HTML
mitabla.width = "100%";
mitabla.style.setProperty("border", "2px solid black"); //Cambia el estilo del borde de toda la tabla

const tableRows = []; //Define un arreglo para los renglones que contendrá la tabla
let row, col, content; //Define renglon, columna , texto e imagen como variables

for(let i=0; i<suculentas.length; i++){

    row = document.createElement("tr");
    row.style.setProperty("border", "1px solid black");
    tableRows.push(row);

    for(let prop in suculentas[i]) {
        if(i===0){
            col = document.createElement("th");
        }else{
            col = document.createElement("td");
        }

        col.style.setProperty("border", "1px solid black");
        


        if(prop==="Imagen" && i>0) {
            content = document.createElement("img");
            content.setAttribute("align", "center");
            content.setAttribute("width", "198");
            content.setAttribute("height", "120")

            content.src = suculentas[i][prop];
        }else {
            content = document.createTextNode(suculentas[i][prop]);
        }

        col.appendChild(content);

        tableRows[i].appendChild(col);
    }
    mitabla.appendChild(tableRows[i]);
}

const el_body = document.getElementById("lodeljs");
el_body.appendChild(mitabla);



//eof
