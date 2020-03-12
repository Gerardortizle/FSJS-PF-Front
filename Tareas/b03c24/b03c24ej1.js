/*
	Utilizando sólo objetos literales:
    Haz un objeto que contenga las partes de tu nombre completo (nombres y apellidos)
    Haz un objeto que contenga las partes de tu domicilio (calle, número, cp, colonia...)
    Haz un objeto que contenga los detalles de tu carrera (escuela, ciudad, carrera, fecha de egreso...)
    Haz un objeto que contenga los 3 objetos anteriores.
    Imprime el objeto.
*/

//tu código va aquí vvv
class DatosNombre {
    constructor(nombre1,nombre2,apellidop,apellidom){
        this.nombre1 = nombre1;
        this.nombre2 = nombre2;
        this.apellidop = apellidop;
        this.apellidom = apellidom;
    }
}
const quieneres = new DatosNombre("Jose", "Gerardo","Ortiz","Leñero")
console.log(quieneres)

class DatosAddress{
    constructor(calle, numero, cp, colonia){
        this.calle = calle;
        this.numero = numero;
        this.cp = cp;
        this.colonia = colonia;
    }
}
const dondevives = new DatosAddress("Del Bosque", "1398", "45066", "Fortin")
console.log(dondevives) 

class DatosSchool{
    constructor(escuela, ciudad, carrera, fechaegreso){
        this.escuela = escuela;
        this.ciudad = ciudad;
        this.carrera = carrera;
        this.fechaegreso = fechaegreso;
    }
}
const dondeestudiaste = new DatosAddress("Univa", "Zapopan", "Ing. Computacional", "2002");
console.log(dondeestudiaste) 

const muchosobjetos = {
    DatosNombre,DatosAddress,DatosSchool
}

console.log(muchosobjetos)
//tu código va aquí ^^^

//eof
