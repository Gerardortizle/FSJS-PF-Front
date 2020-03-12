function printName() {
       console.log(this);
       console.log(this.nombre);
}

const mi_obj = {
    nombre : "Luis",
    printNombre : function() {
        console.log(this)
        console.log(this.nombre);
    }
};
mi_obj.printNombre();