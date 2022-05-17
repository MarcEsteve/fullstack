// kebap-case (no permitido en JavaScript)
// const last-name = 'Doe';
// snake_case (recomendado en otros lenguajes como Python)
const last_name = 'last_name';
// PascalCase (recomendado en JavaScript para las clases)
const LastName = 'LastName';
// camelCase (recomendado en JavaScript para las variables y funciones)
const lastName = 'lastName';
document.write(lastName);
const person = 'John Doe', carName = 'Volvo', price = 200;
// const person = 'John Doe'; 
// const carName = 'Volvo';
// const price = 200;
let x; //Creando la variable
x = 5;  //Asigna valor, de tipo numérico entero y valor 5
x = "Texto"; //Asigna valor, de tipo string y valor Texto
// Infinity
const variable1 = 1/0;
// NaN
const variable2 = parseFloat('prueba');
let variable4;
// undefined
console.log(variable4);
// error
//console.log(variable_nodeclarada);
const variable3 = null;
// true
console.log(null == undefined);
// false
console.log(null === undefined );
//VAR y LET
var alert1 = 5;
// permitido
var alert1 = '';
let alert2 = 5;
// no permitido porque ya se declaró antes
// let alert2 = 5;
alert2 = 6; //Se permite asignar de nuevo pero no declarar
const pi = 3.14;
// error
// pi = 3;
//NUMBER
const numero0 = 1;
const numero1 = 20.1;
// 32
const numero2 = 3.2e1;
// Equivalentes con exponente base diferente a 10
const numeroexp =3.2*3**3;
const numeroexp2 = 3.2 * Math.pow(3,3);
// 300
const numero3 = 3e2;
// hexadecimal
const numero4 = 0x1f;
// binario
const numero5 = 0b1010;
// octal
const numero6 = 0o744;
// otra forma de declarar una variable de tipo numérico
const numero7 = Number(2);
//BOOLEAN true/false 'verdaro/falso' 1/0 abierto/cerrado
const boolean1 = true;
const boolean2 = false;
//STRINGS
const str1 = "Hola 'a' todos";
const str2 = 'Hola "a" todos';
const str3 = "''";
const str4 = "''";
//Propieda lenght
const string1 = 'hola';
// 4
console.log(string1.length);