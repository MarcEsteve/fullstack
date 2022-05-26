//Ejercicio 1: escribir una programa con cuatro funciones de flecha: sumar, restar, multiplicar y dividir (cada una de ellas debe aceptar dos parámetros y devolver el resultado). Posteriormente invocar a las cuatro funciones con valores arbitrarios
// const sumar =(x,y) =>{
//     return x+y;
// }; 
// const restar =(x,y) =>{
//     return x-y;
// };
// const multiplicar =(x,y) =>{
//     return x*y;
// };
// const dividir =(x,y) =>{
//     return x/y;
// };
// console.log(sumar(1,2));
// console.log(restar(1,2));
// console.log(multiplicar(1,2));
// console.log(dividir(1,2));
//Ejercicio 2: adaptar el programa del ejercicio anterior simplificando las funciones de flecha eliminando las llaves y el return.
// const sumar =(x,y) => x+y; 
// const restar =(x,y) => x-y;
// const multiplicar =(x,y) =>x*y;
// const dividir =(x,y) => x/y;
// console.log(sumar(4,2));
// console.log(restar(3,1));
// console.log(multiplicar(7,5));
// console.log(dividir(12,6));
//Ejercicio 3: adaptar las cuatro funciones del Ejercicio 2 para que reciban un callback que sea invocado dentro de la función con el resultado de la operación. Posteriormente invocar a las cuatro funciones creando una función de callback por separado y pasándola después por parámetro. Utilizar la herramienta de depuración de Chrome (Herramientas de desarrollador --> Source) para comprobar cómo se ejecuta el programa.
const sumar2 =(x,y,callback) => callback(x+y); 
const restar2 =(x,y,callback) => callback(x-y);
const multiplicar2 =(x,y,callback) =>callback(x*y);
const dividir2 =(x,y,callback) => callback(x/y);

// const callback = (resultado) => {
//     console.log(resultado);
// }
//Ejercicio 4 colocar el callback definido dentro
// sumar2(4,2,(resultado) => {
//     console.log(resultado);
// });
// restar2(3,1,(resultado) => {
//     console.log(resultado);
// });
// multiplicar2(5,7,(resultado) => {
//     console.log(resultado);
// });
// dividir2(6,8,(resultado) => {
//     console.log(resultado);
// });
//Ejercicio 5 setTimeout() de cada funcion, 1s, 2s, 3s y 4s respectivamente
// setTimeout(() => {
//     console.log(sumar2(4,2,(resultado) => {
//         console.log(resultado);
//     }));
// }, 1000);
// setTimeout(() => {
//     console.log(restar2(3,1,(resultado) => {
//         console.log(resultado);
//     }));
// }, 2000);
// setTimeout(() => {
//     console.log(multiplicar2(5,7,(resultado) => {
//         console.log(resultado);
//     }));
// }, 3000);
// setTimeout(() => {
//     console.log(dividir2(6,8,(resultado) => {
//         console.log(resultado);
//     }));
// }, 4000);
// document.getElementById("id1").innerHTML = "dskadjasd";

/*
código síncrono
*/
// const consultarDatabase = () => {
//     const startPoint = new Date().getTime();
//     while (new Date().getTime() - startPoint <= 2000);
//     return "Consulta realizada";
// }
// console.log("Primera consulta al servidor");
// const consulta1 = consultarDatabase();
// console.log(consulta1);
// console.log("Segunda consulta al servidor");
// const consulta2 = consultarDatabase();
// console.log(consulta2);
// console.log("Más tareas a realizar...");

/*
código asíncrono
*/
const consultarDatabase = (callback) => {
    setTimeout(() => {
    callback("Consulta realizada");
    }, 2000);
}
this.dsdsd
console.log("Primera consulta al servidor");
consultarDatabase(function(consulta) {
console.log(consulta);
});
console.log("Segunda consulta al servidor");
consultarDatabase(function(consulta) {
console.log(consulta);
});
console.log("Más tareas a realizar...");