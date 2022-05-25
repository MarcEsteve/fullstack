const objeto1 = {
    gestor:"Banco X",
    cliente: "Marc",
    mensaje: "Hola",
    transferencia: "La transferencia OK"
}
console.log(objeto1.cliente);
console.log(objeto1.mensaje);
const objeto2 = {
    gestor:"Banco Y",
    cliente: "Cristina",
    mensaje() {
        console.log( "Hola" + this.cliente);
    },
    transferencia() {
        console.log("La transferencia de " + this.gestor +  " se ha realizado correctamente");
    }
}
const objeto3 = {
    gestor:"Banco Z",
    cliente: "Rut",
    mensaje() {
        console.log( "Hola" + this.cliente);
    },
    transferencia() {
        console.log("La transferencia de " + this.gestor +  " se ha realizado correctamente");
    }
}
//Almacena las propiedades del objeto en un array
arrayObj1=Object.keys(objeto1)
console.log(arrayObj1);
arrayObj2=Object.keys(objeto2)
console.log(arrayObj2);
arrayObj3=Object.keys(objeto3)
console.log(arrayObj3);
lon1 =arrayObj1.length;//4
console.log(typeof(objeto2[arrayObj2[3]]));
for (let i = 0; i < lon1; i++) {
    console.log(objeto1[arrayObj1[i]]);
}
lon2 =arrayObj2.length;//4
for (let i = 0; i < lon2; i++) {
    console.log(objeto2[arrayObj2[i]]);
}
lon3 =arrayObj3.length;//4
for (let i = 0; i < lon3; i++) {
    console.log(objeto3[arrayObj3[i]]);
}
// Ejercicio 1 Resuelto Alex Macho Salas
// const banco1 = {
//     gestor: "10",
//     cliente: "Carlos",
//     mensaje() {
//         console.log("Hola cliente " + this.cliente)
//     },
//     trasferencia() {
//         console.log("Su tranferencia ha sido realizada por el gestor " + this.gestor)
//     }
// }
// const banco2 = {
//     gestor: "25",
//     cliente: "Carla",
//     mensaje() {
//         console.log("Hola cliente " + this.cliente)
//     },
//     trasferencia() {
//         console.log("Su tranferencia ha sido realizada por el gestor " + this.gestor)
//     }
// }
// const banco3 = {
//     gestor: "12",
//     cliente: "Esteban",
//     mensaje() {
//         console.log("Hola cliente " + this.cliente)
//     },
//     trasferencia() {
//         console.log("Su tranferencia ha sido realizada por el gestor " + this.gestor)
//     }
// }
// arraybnc1=Object.keys(banco1)
// arraybnc2=Object.keys(banco2)
// arraybnc3=Object.keys(banco3)
// console.log(arraybnc1)
// console.log(arraybnc2)
// console.log(arraybnc3)
// for (let i = 0; i < arraybnc1.length; i++) {
//     if (typeof(banco1[arraybnc1[i]])=="function") {
//         banco1[arraybnc1[i]]();
//     } else {
//         console.log(banco1[arraybnc1[i]]);
//     }
// }
// for (let i = 0; i < arraybnc2.length; i++) {
//     if (typeof(banco2[arraybnc2[i]])=="function") {
//         banco2[arraybnc2[i]]();
//     } else {
//         console.log(banco2[arraybnc2[i]]);
//     }
// }
// for (let i = 0; i < arraybnc3.length; i++) {
//     if (typeof(banco3[arraybnc3[i]])=="function") {
//         banco3[arraybnc3[i]]();
//     } else {
//         console.log(banco3[arraybnc3[i]]);
//     }
// }