var obj_1 = new Object();
obj_1.nombre = "Su nombre";
obj_1.cantidad = 22;
console.log(obj_1.nombre);

obj_1["otroCampo"] = "Valor otro campo";
console.log(obj_1.otroCampo);
console.log(obj_1["cantidad"]);

var obj_2 = {
    "nombre": "Su otro nombre 2",
    cantidad: 22,
    'otroCampo': "Valor otro campo 2",
    metodo: function() {
        return this.nombre + " - " + this.cantidad;
    }
}
console.log(obj_2.metodo());
console.log(obj_2["cantidad"]);
var otroArray = [obj_1, obj_2, 33, "texto"];
console.log(otroArray[3]);

// Función callback:
function funCallBack() {
    console.log("Pues ha terminado");
}
// Función externa
function accederADatos(parametros, funcionAviso) {
    for (var i = 1; i < 100000; i++) {
        // Busqueda datos, acc serv extr..
    }
    console.log(parametros);
    funcionAviso();
}
accederADatos("Parametros del proceso", funCallBack);


accederADatos("Parametros del proceso", function() {
    console.log("Otra funcionalidad");
});
accederADatos("Parametros del proceso", () => {
    console.log("Otra funcionalidad LAMBDA");
});