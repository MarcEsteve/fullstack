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

sumar2(4,2,(resultado) => {
    console.log(resultado);
});
restar2(3,1,(resultado) => {
    console.log(resultado);
});
multiplicar2(5,7,(resultado) => {
    console.log(resultado);
});
dividir2(6,8,(resultado) => {
    console.log(resultado);
});