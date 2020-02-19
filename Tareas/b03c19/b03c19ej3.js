/*
    Este ejercicio debe correr en Chrome.

    Colocar un número del 1 al 10 en la variable num.
    Imprimir la tabla de multiplicar (del 0 al 10) de ese número.
*/

let num = document.getElementById("term1");
let res = document.getElementById("divresultados");

function messageClick() {

    //asigna a res.innerHTML el texto que contiene la tabla de multiplicar ya resuelta

    let n = num.value;

    //tu código va aquí vvv
        
    let Multiplicar = "";
    let i = 0;
    let Mult = "";
    const validate = Math.round(parseInt(n));

    
    if(validate <= 10){
        for(i = 1; i <= 10; i++){let b = (n*i);
            Mult +=(n+" * "+i+" = " +b +"<br>");}
        }else {
    Mult = "El numero a multiplicar ingresada es mayor a 10";
   }    
   
    res.innerHTML = Mult
        
    //tu código va aquí ^^^
}

//eof
