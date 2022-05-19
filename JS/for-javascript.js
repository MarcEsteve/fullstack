var x;
for (let i = 0; i < 5; i++) {
    // 0, 1, 2, 3, 4 (en distintas líneas)
    console.log(i);
}
for (let i = 1; i < 6; i++) {
    // 1, 2, 3, 4, 5 (en distintas líneas)
    console.log(i);
}
for (x = 1; x < 6; x++) {
    // 1, 2, 3, 4, 5 (en distintas líneas)
    console.log(x);
}
//FOR del ejercicio 8
for (let i = 1; i <= 50; i++) {
    // Del 1 al 50
    console.log(i);
}

const array = ['En', 'un', 'lugar', 'de', 'la', 'mancha'];
const len = array.length; //Valor 6
// recorre un array mediante un for clásico
for (let i = 0; i < len; i++) {
// En, un, lugar, de, la, mancha (en distintas líneas)
    console.log(array[i]);
    document.write(array[i] + " ");
}
document.write("<br>");
// i es el índice del array : array[i]
// "En" es igual que array[0]
// "un" es igual que array[1]
// "lugar" es igual que array[2]
// "de" es igual que array[3]
// "la" es igual que array[4]
// "mancha" es igual que array[5]

//Ejercicio 9 tabla de multiplicar del 5
for (let i = 0; i < 11; i++) {
    // Tabla 5x1 al 5x10
    document.write("5x" + i + "=" + 5*i + "<br>");
    console.log();
}
//Ejercicio 10 Pida con un prompt al usuario un nombre y repita 10 veces
let palabra = prompt("Escribe cualquier palabra:", "Escribe aqui");
for (let i = 0; i < 10; i++) {
    document.write(palabra + "<br>");
}
//Ejercicio 11 pide al usuario un número y decremento hasta 0
var numero = prompt("Escribe cualquier número positivo:", "Escribe aqui");
numero = parseInt(numero);
while ((typeOf(numero) == "number") && (numero >=0)) {
    console.log("Es un número natural")
    for (let i = numero; i >= 0; i--) {
        if (i==0) {
            document.write(i);
        } else {
            document.write( i + ", ");
        }
    }
}
numero = prompt("Introduzca un número positivo:", "Escribe aqui");
numero = parseInt(numero);