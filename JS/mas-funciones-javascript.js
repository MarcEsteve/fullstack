// const hacerAlgo = (arg1, arg2) => {
//     // apunta al objeto global
//     console.log(this);
//     // la variables se convierten en globales
//     this.a = arg1;
//     this.b = arg2;
//     // pepito
//     console.log(a);
//     // juanito
//     console.log(b);
// }
// const resultado = hacerAlgo('pepito', 'juanito');
// // pepito
// console.log(a);
// // juanito
// console.log(b);
// error no existen
// console.log(c);
// error no existen
// console.log(d);

//El this llamado por un objeto creado con new de una función

// function hacerAlgo(argu1, argu2) {
    // hacerAlgo {}
    // console.log(this);
    // this.a = argu1;
    // this.b = argu2;
    // Hola
    // console.log(this.a);
    // undefined
    // console.log(this.c);
    // error
    // console.log(a);
    // error
    // console.log(b);
// }
// let resultado = new hacerAlgo('Hola', 'Buenos dias');
// Hola
// console.log(resultado.a);
// Buenos dias
// console.log(resultado.b);
// error
// console.log(resultado.c);
// error
// console.log(resultado.d);
// error
// console.log(a);
// error
// console.log(b);
// error
// console.log(c);
// error
// console.log(d);

//Argumentos para las funciones
// function saludar(saludo) {
//     if (!saludo) console.log('no hay saludo');
//     else console.log(saludo);
// }
// no hay saludo
// saludar();
// hola
// saludar('hola');
// hola
// saludar('hola', 'Alejandro');

//Objeto "arguments"
function saludar() {
    const saludo = arguments[0];
    const nombre = arguments[1];
    const apellido = arguments[2];
    // Fernández
    console.log(arguments[2]);
    // Undefined
    console.log(arguments[3]);
    // Adiós, Carlos!
    console.log(saludo + ', ' + nombre + ' ' + apellido + '!');
}
saludar('Adiós', 'Carlos', 'Fernández');

//Declaración global window.hola(), this.hola() y hola() 

function hola() {
    console.log('Buenas tardes');
}
console.log(this);
// Buenas tardes
window.hola();
// Buenas tardes
this.hola();
// Buenas tardes
hola();

//SCOPE
// function saludar() {
//     var edad = 14;
// }
// saludar();
// error
//console.log(edad);
// function saludar() {
//     edad = 25; //Variable global tiene SCOPE global
// }
// function saludar2() {
//     // 25
//     console.log(edad);
// }
// console.log(edad);
// saludar();
// saludar2()
// 25
// console.log(edad);

// Declarar con var al principio la convierte en GLOBAL
// var edad = 25; //identico que "edad = 25;"
// function saludar() {
//     // 25
//     console.log(edad);
// }
// saludar();

//Con var
function saludar1() {
    // var i;
    for (var i = 0; i < 10; i++) {
        console.log('Hola');
    }
    // 10, aunque se podría pensar que i en este punto no debería existir porque se creó en el ámbito del for
    console.log(i);
}
saludar1();
//Con let
function saludar2() {
    for (let i = 0; i < 10; i++) {
        console.log('Hola');
    }
    // error porque con let no hay Hoisting
    //console.log(i);
}
saludar2();

// error porque con let no hay Hoisting
//console.log(a);
let a = 4;
function varTest1() {
    let x = 31;
    if (true) {
        // error porque la variable x todavía no existe
        //console.log(x);
        let x = 71;
        // 71
        console.log(x);
    }
    // 31
    console.log(x);
}
varTest1();
function varTest2() {
    let x = 31;
    if (true) {
        // 31
        console.log(x);
    }
    // 31
    console.log(x);
}
varTest2();