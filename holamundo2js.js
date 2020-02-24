const arr = ["hola", "mundo", "que", "tal"];

function agregarUno(lista){
    for(let i=0; i<lista.length; i++){
        lista[i] +="1"; //Concatenar 1 a cada elemento
    }
    lista.push("1"); //Agregar elemento nuevo
}
console.log(arr);
agregarUno(arr);
console.log(arr)

