/*const s = {
    "border" : "1px solid blue",
    "color" : "green"
}

function createDivNode (st_obj){
    const divnode = document.createElement("div"); //crear el div
    for(let p in st_obj){
        div.divnode.style.setProperty(p, st_obj[p]);
    }
    const textnode = document.createTextNode(""); //Crear un texto
    divnode.appendChild(textnode);
    return function setContent(text){
        textnode.data = text;
        return divnode;
    }

    const custom_div_creator = creasteDivNode(s);
    const un_div = custom_div_creator("hola mundo");
    const otro_div = custom_div_creator("gatito ");
}*/
/*function nombreDeUnFamoso(nombre) {

    var presentar = "Les presento a";

    return function fraseCompleta(apellido) {
        console.log(presentar+" "+nombre+" "+apellido);
    }
}

const unFamoso = nombreDeUnFamoso("Tony");
const otroFamoso = nombreDeUnFamoso("Michael");

unFamoso("Stark");    // Les presento a Tony Stark
unFamoso("Montana");  // Les presento a Tony Montana
otroFamoso("Jordan"); // Les presento a Michael Jordan*/

/*function numeroMagico() {
    let miNumero = 999;                     //variable capturada
    return {
        getNum: function() {
            return miNumero;                //retorna miNumero actualizado
        },
        setNum: function(nuevoNumero) {
            miNumero = nuevoNumero;         //cambia miNumero
        }
    }
}

let num = numeroMagico(); // Obtener el objeto con el getter y el setter
console.log(num.getNum());             // 999
console.log(num.setNum(567));          // Cambia miNumero en el scope de numeroMagicO
console.log(num.getNum());*/

/*let valoresDePrueba = [                    //Queremos obtener los valores 1, 2 y 3.
    {"esperado":1, "obtenido":0},
    {"esperado":2, "obtenido":0},
    {"esperado":3, "obtenido":0}
];

function pruebaConLoop(miLista) {  //Recibe una lista de objetos como la de arriba.

    let i;
    let valorInicial = 1;

    for( i=0; i<miLista.length; i++) {
        miLista[i]["obtenido"] = function() {         //Queremos retornar 1, 2 y 3.
            return valorInicial+i;
        }(i);
    }
    return miLista; //en este punto, i vale 3.
}
let listaCambiada = pruebaConLoop(valoresDePrueba);

//En este punto, ¡capturamos una i que vale 3!

//Necesitamos invocar la función para obtener el valor
let valor1 = listaCambiada[0]["obtenido"];
let valor2 = listaCambiada[1]["obtenido"];
let valor3 = listaCambiada[2]["obtenido"];

console.log(valor1); // 4
console.log(valor2); // 4
console.log(valor3); // 4*/


/*console.log(this);
this.name = "Pancho";
console.log(this.name);
const name = "Gera";
console.log(name);

const obj = {
    "name" : "Luisa",
    "funcEjemplo" : function() {
        console.log(this.name);
    }
};

obj.funcEjemplo(); //imprime "Luisa"

const otroNombre = obj.funcEjemplo.bind(this);

otroNombre(); //imprime "Susana*/

/*const obj = {
    "name" : "Antonio",
    "printProfesion" : function(profesion){
        console.log(this.name + " es un " + profesion);
    } 
}
obj.printProfesion("JS Developer");

const obj2 = {"name" : "Juana"};

const copiaF = obj.printProfesion.bind(obj2 , "Secretaria");
copiaF(); */

/*function adornarUnTexto(adorno, texto) {
    console.log(adorno + texto + adorno);
}

adornarUnTexto("...", "Centraal"); //...Centraal...

const adornosFijos = adornarUnTexto.bind(null, "***");

adornosFijos("Academy"); //***Academy***/

const obj = {
    "name" : "Luisa",
    "saludarODespedir" : function(str1, str2) {
        console.log(str1 +" "+ this.name +" "+ str2);
    }
};

obj.saludarODespedir("Hola", "qué tal");
//imprime "Hola Luisa qué tal"

obj.saludarODespedir.call({"name" : "Susana"}, "Adiós", "cuídate");
//imprime "Adiós Susana cuídate"



