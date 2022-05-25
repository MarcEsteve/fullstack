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