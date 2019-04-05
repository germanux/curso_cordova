"use strict";
var numero = 3434;

if (numero == 3434) 
{    
    console.log("Numero " + numero);
}
listar("Hola, soy argumento");
//listar();
//listar(10, "kjkjk");

function listar(param) {
    
    console.log("Has invocado con " + arguments[0]);
    console.log("Has invocado con " + param);
    for (var i = 0; i < process.argv.length; i++) {
        console.log("Parámetros: " + i + " - " + process.argv[i])
    }
}

if (numero == "3434")
    console.log("Son iguales");
else
    console.log("NO Son iguales");

if (numero === "3434")
    console.log("Son identicos");
else
    console.log('NO Son identicos');

var otraFuncion = function () {
    return "Valor de otro lado";
}
console.log(otraFuncion.toString());
/*
var terceraFuncion = new Function("function() { return '3er valor'; }");

console.log(terceraFuncion.toString());*/

