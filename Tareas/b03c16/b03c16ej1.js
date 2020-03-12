/*
    Este ejercicio debe correr en Node.

    Trata de adivinar qué valor booleano tendrán las siguientes comparaciones.
    Ejecuta este ejercicio para saber en cuales tuviste razón.
    ¿Puedes explicar por qué obtenemos esos resultados?
*/

//Regresa True porque 10 es menor o igual que 10.5
console.log( "10<=10.5: ----------------- "     + (10<=10.5)                );

//Regresa True porque esta haciendo una comparación con coerción e iguala el valor de 10 y "10"
console.log( "10==\"10\": ----------------- "   + (10=="10")                );

//Regresa False porque esta haciendo una comparación sin coerción number y string no son iguales
console.log( "10===\"10\": ---------------- "   + (10==="10")               );

//Regresa False porque está comparando con coerción un string y un number
console.log( "10==\"diez\": --------------- "   + (10=="diez")              );

//Regresa False porque está comparando con coerción un string y un number
console.log( "10==\"ten\": ---------------- "   + (10=="ten")               );

//Regresa True porque hace una comparación con coerción y los 2 numeros son iguales
console.log( "10==10.0: ----------------- "     + (10==10.0)                );

//Regresa False porque está haciendo una comparación sin coerción y los dos datos con diferentes
console.log( "10===10.0: ---------------- "     + (10===10.0)               );

//Regresa True porque esta haciendo una comparación con coerción y ambos son del mismo tipo
console.log( "\"\"==0: -------------------- "   + (""==0)                   );

//Regresa False porque hace una comparación con coerción pero no son iguales ambos datos
console.log( "\"a\"==1: ------------------- "   + ("a"==1)                  );

//Regresa False porque realiza una comparación con coerción y lo hace x orden alfabético
console.log( "\"holograma\"<\"holamundo\": -- " + ("holograma"<"holamundo") );

//Regresa True porque está haciendo una comparación haciendo coercion a number 1 = true 0 = false
console.log( "true>false: --------------- "     + (true>false)              );

//Regresa false porque true hace una coerción y los convierte a number como el anterior
console.log( "true>\"false\": ------------- "   + (true>"false")            );

//Regresa True porque true hace una coerción y los convierte a number como el anterior
console.log( "null==undefined: ---------- "     + (null==undefined)         );

//Regresa True porque true hace una coerción y los convierte a number como el anterior
console.log( "null==NaN: ---------------- "     + (null==NaN)               );

//Regresa True porque true hace una coerción y los convierte a number como el anterior
console.log( "undefined==NaN: ----------- "     + (undefined==NaN)          );

//Regresa True porque true hace una coerción y los convierte a number como el anterior
console.log( "-Infinity<Infinity: ------- "     + (-Infinity<Infinity)      );

//Regresa True porque true hace una coerción y los convierte a number como el anterior
console.log( "Boolean(undefined): ------- "     + (Boolean(undefined))      );

//Regresa True porque true hace una coerción y los convierte a number como el anterior
console.log( "Boolean(\"\"): -------------- "   + (Boolean(""))             );

//Regresa True porque true hace una coerción y los convierte a number como el anterior
console.log( "Boolean(1): --------------- "     + (Boolean(1))              );

//Regresa True porque true hace una coerción y los convierte a number como el anterior
console.log( "Boolean(-Infinity): ------- "     + (Boolean(-Infinity))      );

//Regresa True porque true hace una coerción y los convierte a number como el anterior
console.log( "Boolean(0.0): ------------- "     + (Boolean(0.0))            );

//Regresa True porque true hace una coerción y los convierte a number como el anterior
console.log( "Boolean(0.000000001): ----- "     + (Boolean(0.000000001))    );

//Regresa True porque true hace una coerción y los convierte a number como el anterior
console.log( "Boolean(-0.000000001): ---- "     + (Boolean(-0.000000001))   );

//Regresa True porque true hace una coerción y los convierte a number como el anterior
console.log( "Boolean(\"null\"): ---------- "   + (Boolean("null"))         );

//Regresa True porque true hace una coerción y los convierte a number como el anterior
console.log( "Boolean(\" \"): ------------- "   + (Boolean(" "))            );

//Regresa True porque true hace una coerción y los convierte a number como el anterior
console.log( "Boolean(''): -------------- "     + (Boolean(''))             );


//eof
