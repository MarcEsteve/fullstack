//setTimeout y setInterval son las funciones asíncronas de JavaScript más simples

// setTimeout(() => {
//     console.log('Esta instrucción se ejecuta después de 5 segundos');
// }, 5000);
// setInterval(() => {
//     console.log('Esta instrucción se ejecuta cada 5 segundos');
// }, 5000);

//Anidación de funciones asíncronas
setTimeout(() => {
    console.log('Hola');
    setTimeout(() => {
        console.log('Adiós');
    }, 500);
}, 1000)

setTimeout(() => {
    console.log('Buenas tardes');
}, 100)

console.log('Buenos días');