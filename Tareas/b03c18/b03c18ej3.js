/*
    Este ejercicio debe correr en Chrome.

    Realiza el mismo reto del ejercicio 2, pero esta vez usando sólo expresiones ternarias anidadas.
*/

let calif = document.getElementById("term1");
let r = document.getElementById("divresultados");

function messageClick() {

    //usa calif.value para obtener el texto dentro del input
    //usa r.innerHTML para colocar el resultado en pantalla

    //tu código va aquí vvv

    let imprime;

    // solo utilicé un if para la contruccion de la comparación
    if (calif.value <= 100){
        // Utilicé solo expresiones ternarias el valor obtenido lo recibo en imprime
        imprime = (calif.value >= 0 && calif.value <= 9) ? "Vete a turismo"
        : (calif.value >= 10 && calif.value <= 59) ? "Tronaste"
        : (calif.value >= 60 && calif.value <= 69) ? "Panzaste"
        : (calif.value >= 70 && calif.value <= 89) ? "Eres libre"
        : (calif.value >= 90 && calif.value <= 100) ? "Nerd"
        : "";
    }else{
        imprime = "no es una calificacion valida"
    }

    r.innerHTML = imprime


    //tu código va aquí ^^^
}



//eof
