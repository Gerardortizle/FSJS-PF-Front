/*
    Este ejercicio debe correr en Node.

    Este ejercicio es un reto complicado.
    No te desesperes y pide ayuda si la necesitas.

    Crea un arreglo que tenga sólo números enteros.
    Debe ser un arreglo grande (al menos 10 elementos).

    Ordena el arreglo de menor a mayor.

    Conoce el álgoritmo de búsqueda binaria:
    https://youtu.be/m2-e2O7wvbk

    Implementa este algoritmo de forma recursiva.
*/

//tu código va aquí vvv

function busquedaBinaria(array, item){      //Se define la función de busqueda binaria
 
    function recursi(min, max) {    //Se define la función recursiva

        if (min > max) {         //Esto es lo que no funciona caso base o terminal
            return -1;
        }

        let medio = Math.floor((min + max) / 2);   // Se divide por la mitad para encontrar el punto medio   

        if (array[medio] === item) {     //
            return medio;
        }else if (array[medio] > item) {
            return recursi(min, medio - 1);  //Sabemos que el valor está en la mitad izquierda 
        }else{
        return recursi(medio + 1, max); 
        }
    }

    return recursi (0, array.lenght -1);

}

console.log(busquedaBinaria([1, 2, 3, 4, 6, 8, 9], 8));   

//tu código va aquí ^^^

//eof
