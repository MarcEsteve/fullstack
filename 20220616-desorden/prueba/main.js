// función tipada
function sumar1(x, y) {
    return x + y;
}
// función anónima tipada con inferencia de tipo
var sumar2 = function (x, y) { return x + y; };
// función de flecha tipada con inferencia de tipo
var sumar3 = function (x, y) { return x + y; };
// función de flecha tipada sin inferencia de tipo (se utiliza el tipo Function)
var sumar4 = function (x, y) { return x + y; };
// creación de una variable que posteriormente almacenará una función
var sumar5;
// error
// sumar5 = 5;
sumar5 = sumar4;
console.log(sumar1(3, 1));
// sin parámetros opcionales (ejemplo de dos parámetros obligatorios)
var construirNombre1 = function (nombre, apellidos) {
    return nombre + ' ' + apellidos;
};
// error porque solamente se ha pasado un parámetro
//const resultado1 = construirNombre1('Bob');
// error porque se han pasado tres parámetros
//const resultado2 = construirNombre1('Bob', 'Adams', 'Sr.');
// correcto
var resultado3 = construirNombre1('Bob', 'Adams');
console.log(resultado3);
// los parámetros opcionales no pueden ubicarse antes que los obligatorios. Si no se suministran, su valor es undefined
var construirNombre2 = function (nombre, apellidos) {
    return apellidos ? nombre + ' ' + apellidos : nombre;
};
// correcto
var resultado4 = construirNombre2('Bob');
// error porque la función acepta uno o dos parámetros
// const resultado5 = construirNombre2('Bob', 'Adams', 'Sr.');
// correcto
var resultado6 = construirNombre2('Bob', 'Adams');
var construirNombres = function (nombre, apellidos) {
    if (apellidos === void 0) { apellidos = 'Smith'; }
    return nombre + ' ' + apellidos;
};
// correcto, el segundo parámetro es opcional
var resultado1 = construirNombres('Bob');
console.log(resultado1);
// correcto
var resultado2 = construirNombres('Bob', undefined);
console.log(resultado2);
// error porque se han pasado tres parámetros
//const resultado5 = construirNombre1('Bob', 'Adams', 'Sr.');
//el número de parámetros no necesariamente tiene que ser fijo. Puede utilizarse el operador de propagación o rest (...)
var construirNombre3 = function (nombre) {
    var resto = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        resto[_i - 1] = arguments[_i];
    }
    return "".concat(nombre, " ").concat(resto.join(' '));
};
var persona = construirNombre3('Joseph', 'Samuel', 'Lucas', 'MacKinzie', 'Marc');
console.log(persona);
function pickCard(x) {
    return (typeof x === 'string') ? x + 1 : x + 2;
}
// correcto
console.log(pickCard(4));
// correcto
console.log(pickCard('Hola'));
// error porque la función sobrecargada no recibe valores booleanos
// pickCard(true);
