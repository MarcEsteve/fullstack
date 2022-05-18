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
const string1 = 'hola buenos dias';
// 16
console.log(string1.length);
//El método indexOf
const stringOf = 'hola';
// 3
console.log(stringOf.indexOf('a'));
// 1
console.log(stringOf.indexOf('ol'));
// -1
console.log(stringOf.indexOf('r'));
//El método substring
const strsub = 'hola';
// 'ol'
console.log(strsub.substring(1, 3));
// 'ola'
console.log(strsub.substring(1));
//El método charAt
const strCharat = 'hola';
// h
console.log(strCharat.charAt(0));
// a
console.log(strCharat.charAt(3));
//
console.log(strCharat.charAt(4));
// h
console.log(strCharat[0]);
// a
console.log(strCharat[3]);
// undefined
console.log(strCharat[4]);
//Ejercicio ARRAY new Array(,), [,]
const semana=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo",];
// console.log(semana[0]);
// console.log(semana[1]);
console.log(semana[2]); //Miércoles OK
// console.log(semana[3]);
// console.log(semana[4]);
// console.log(semana[5]);
// console.log(semana[6]);
//Lenght para arrays
console.log(semana.length);
//Arrays dimensiones
const array9 = new Array('Carmen', 'Juan');
array9[3] = 'Alejandro';
// [ 'Carmen', 'Juan', <1 empty item>, 'Alejandro' ]
array9[1] = 'Carlos';
// [ 'Carmen', 'Carlos', <1 empty item>, 'Alejandro' ]
console.log(array9);
//Undefined
console.log(array9[2]);
//Acortar ARRAY
const array10 = new Array('Carmen', 'Juan');
array10.length = 1;
// [ 'Carmen' ]
console.log(array10);
// Ejercicio de acortar la varaible ARRAY semana hasta el Jueves
semana.length = 4;
console.log(semana);
semana.length = 7;
console.log(semana);
//DATE
const date1 = new Date();
// Wed May 18 2022 10:18:04 GMT+0200 (hora de verano de Europa central)
console.log(date1);
// milisegundos en formato Unix
const milisegundos = new Date().getTime();
console.log(milisegundos);
const dia = new Date().getDay();
console.log(dia);
const hora = new Date().getHours();
console.log(hora);
//