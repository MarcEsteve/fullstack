//Ejercicio 3 pàg. 204
// Ejercicio 3: escribe un programa que compruebe que el substring "abc" existe en un string dado, pero no puede encontrarse ni al comienzo, ni al final.

let ejercicio3 = "xyz l xyz a xyz";
//let existeABC = ejercicio3.indexOf("abc");
//Cumple que existe del 0 al 14 pero repasemos donde
// if ((ejercicio3.indexOf("abc") != -1) && (ejercicio3.indexOf("abc") !=0) && (ejercicio3.lastIndexOf("abc") != ejercicio3.length-3))  {
//     console.log("Existe ABC dentro del string");
// } else {
//     console.log("Existe ABC al principio o al final");    
// }
//Se podria hacer con slice del 1 al length -2

//Ejercicio 4: escribe un programa que dado un string y una determinado posición,compruebe que el carácter anterior y el posterior son iguales o no.
let stringPos = "Hola uuenas";
let pos = 6;

// if ((stringPos.charAt(pos)==stringPos.charAt(pos-1)) || (stringPos.charAt(pos)==stringPos.charAt(pos+1))) {
//     console.log("La letra anterior o posterior es igual");
// } else {
//     console.log("No son iguales las letras anterior y posterior");
// }
//Ejercicio 7: escribe un programa que elimine el último carácter de un string.
let text = "Hola buenas";
text = text.slice(0,-1);
console.log(text);
text = text.substring(0, text.length-1);
console.log(text);
