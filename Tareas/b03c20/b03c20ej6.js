class Pajaro {
    constructor(){
        this.propDePajaro = "Soy pájaro";
    }
}

class Pollo extends Pajaro {
    constructor() {
        super();
        this.propDePollo = "Soy pollo";
    }
}const po = new Pollo();

po.__proto__.propDeProtoPollo = "Soy proto de Pollo";
po.__proto__.__proto__.propDeProtoPajaro = "Soy proto de Pajaro";
po.__proto__.__proto__.__proto__.propDeProtoObjeto = "Soy proto de Object";

function printProtoChain(obj, ind="") {
    ind2 = ind+"    ";
    if(obj==null) {
        console.log("\n"+ind+"null");
        return;
    }
    console.log("\n"+ind+obj.constructor.name+" : {\n");
    for(let p in obj) {
        console.log(`${ind2}"${p}" : "${obj[p]}",`);
    }
    printProtoChain(Object.getPrototypeOf(obj), ind2);
    console.log(ind+"}"); //cerrar bloque de objeto
}
printProtoChain(po);








