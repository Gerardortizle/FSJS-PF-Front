/*
    Este ejercicio debe correr en Chrome.

    Realiza todas las comparaciones posibles entre los 2 valores que recibes.
    Después coloca el resultado de cada comparación en el div "resultados"
*/

let term1 = document.getElementById("term1");
let term2 = document.getElementById("term2");

let resultados = "";
let divresultados = document.getElementById("divresultados");

function messageClick() {

    //usa term1.value y term2.value para obtener lo que escribes en los input.
    //el string resultados debe describir todas las comparaciones que realices.

    //tu código va aquí vvv 

    resultados = (term1.value === term2.value)+ " Es el resultado de la comparacion x === <br>";
    resultados += (term1.value > term2.value)+  " Es el resultado de la comparación mayor que <br>";
    resultados += (term1.value < term2.value)+  " Es el resultado de la comparación menor que <br>";
    resultados += (term1.value != term2.value)+ " Es el resultado de la comparación si es diferente <br>";
    resultados += (term1.value !== term2.value)+ " Es el resultado de la comparación diferente con coercion";

    //if (term1.value === term2.value) {
    //    resultados = "True";
    //    return true
    //}


    //tu código va aquí ^^^

    divresultados.innerHTML = resultados;
}

//eof
