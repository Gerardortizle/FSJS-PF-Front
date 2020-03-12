/*
    Este ejercicio debe correr en Chrome.

    La variable calif representa la calificación de un alumno en una materia.
    Debe ser un número de 0 a 100.

    Realiza un programa que califique de la siguiente manera:
        de  0 a   9: vete a turismo
        de 10 a  59: tronaste
        de 60 a  69: panzaste
        de 70 a  89: ya eres libre
        de 90 a 100: nerd

    Si la calificación tiene decimales, contrólalos de alguna manera que te parezca adecuada.
*/

let calif = document.getElementById("term1");
let r = document.getElementById("divresultados");

function messageClick() {

    //usa calif.value para obtener el texto dentro del input
    //usa r.innerHTML para colocar el resultado en pantalla

    //tu código va aquí vvv

    let imprime;

    if (calif.value < 10){
        imprime = "vete a turismo"
    }else if (calif.value <= 59) {
        imprime = "tronaste"
    }else if (calif.value <= 69){
        imprime = "panzaste"
    }else if (calif.value <= 89){
        imprime = "ya eres libre"
    }else if (calif.value <=100){
        imprime = "nerd"
    }else {
        imprime = "no es una calificacion valida"
    }

    /*switch (calif.value){ 
        case "0":
            imprime = "vete a turismo";
            break;
        case "10":
            imprime = "tronaste";

    }*/

    r.innerHTML = imprime

    //tu código va aquí ^^^
}

//eof
