let numeros = [0,1,2,3,4,5];
//Ejercicio 1 
//Recorrer los valores del array numeros con un for 
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
//recorrer los valores con un for...of
for (let pepito of numeros) {
    console.log(pepito);
}
//Ejercicio 2 escribe un programa que almacene los nombres de tres colores en un array y los muestre por pantalla mediante un bucle for...of
let colores = ["amarillo","azul","rojo"];
for (let color of colores) {
    console.log(color);
}
//Ejercicio 3: escribe un programa con un array que almacene los nombres de tres colores. A continuación, crea otro array vacío e inserta en él todos los elementos del primer array mediante un for...of y el método push.
let colores3=[];
for (let color of colores) {
    colores3.push(color);
}
//Ejercicio 4: escribe un programa que dado dos arrays, devuelva el número de elementos que son iguales.
let elementos1 = ["mar", "rio", "sol"];
let elementos2 = ["oceano", "rio", "mar"];
let repetidos =[];
let contador=0;
for (let element1 of elementos1) {
    for (let element2 of elementos2) {
        if (element1==element2) {
            contador++; //contador = contador +1
            repetidos.push(element1);
        }
    }
}
console.log(`El número de repetidos es ${contador}`);
console.log("Hay " + contador + " elementos iguales entre los dos array. Estos son: " +  repetidos);
//Ejercicio 5: escribe un programa que extraiga una porción del array a partir de una posición inferior y una superior y lo almacene en otro array.
let tierra = ["mar", "rio", "sol","oceano", "nuves"];
let tierra2 = tierra.slice(1,4);
console.log(tierra2);
// console.log(tierra);