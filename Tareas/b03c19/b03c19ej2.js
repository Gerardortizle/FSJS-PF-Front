/*
    Este ejercicio debe correr en Node.

    Repite el ejercicio 1.
    Pero esta vez, imprime sólo los números nones.
*/

//tu código va aquí vvv

for(let i=1 ; i<=20 ; i++) {

    // Para conocer si es par o none se calcula el módulo y se compara sin coerción
    let b =(i%2)=== 0

    // si b es falso despues de calcular el móludo es numero non 
    if (b === false) {
        console.log("Número = " +i); 
    }
       
}

//tu código va aquí ^^^

//eof
