/*
    Este ejercicio debe correr en Node.

    Realiza una función que reciba un string y un boolean.
    Si el boolean es true, la función debe devolver cuántas vocales hay en el string.
    Si el boolean es false, debe devolver cuántas consonantes hay.

	Al declarar la función, guárdala en una variable.
*/

//tu código va aquí vvv
const tipoDeLetra = function letras(un_str, un_bool){

    let v = 0;
    un_str = un_str.toUpperCase();
    if(un_bool) {
        //contar vocales
        for (let i of un_str){
            if((i==="A")||(i==="E")||(i==="I")||(i==="O")||(i==="U"))
                 { v++;  
            }
        }
        return v;
    }else {
        //contar consonantes
        for (let i of un_str){
            if((i!=="A")&&(i!=="E")&&(i!=="I")&&(i!=="O")&&(i!=="U"))
                 { v++; 
            }
        }
    }
        return v;
}

let l = tipoDeLetra("CentralAcademy", false);
console.log ("Vocales contenidas en String: " + l);
//tu código va aquí ^^^

//eof
