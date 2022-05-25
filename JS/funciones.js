function sumar(a, b) {
    console.log(a + b);
}
// 5
sumar(2, 3);
// NaN (undefined + undefined)
sumar();
// 3
sumar(1, 2);
// 3 Ignora el resto de parámetros
sumar(1, 2, 3, 4);
// 12
sumar('1', 2);
// 12
sumar(1, '2');
//Función anónima asignamos a una variable(constante) sumar
const sumar1 = function(a, b) {
    console.log(a + b);
};
// 5
sumar1(2, 3);
//Función método dentro de objeto
const objetoA = {
    funcionMetodo: function() {
        console.log('Hola');
    }
};
// invocación utilizando la notación punto
objetoA.funcionMetodo();
// invocación utilizando la notación con corchetes
objetoA['funcionMetodo']();

//Función autoejecutable
(function saludar() {
    console.log('Hola');
})();
// error: saludar is not defined
//saludar();

//Función creadora de objetos
function hacerAlgo(a, b) {
    this.a = a;
    this.b = b;
}
// creación del objeto
const objetoFuncion = new hacerAlgo(3,7);
// error porque b es un objeto
//b();
// 1
console.log(objetoFuncion.a);
// 2
console.log(objetoFuncion.b);
// undefined
console.log(this.a);
//Función de flecha (arrow function) incorporadas en ES6
// función normal
function calculo(altura) {
    return 5 * altura / 2;
};
console.log(calculo(2));
// función de flecha
const calculo2 = (altura) => {
    return 5 * altura / 2;
};
console.log(calculo2(6));
// forma simplificada de la función de flecha
const calculo3 = altura => 5 * altura / 2;
console.log(calculo3(4));
