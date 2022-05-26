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