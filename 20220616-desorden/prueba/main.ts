// función tipada
function sumar1(x: number, y: number): number {
    return x + y;
}
// función anónima tipada con inferencia de tipo
const sumar2 = function(x: number, y: number): number { return x + y; };
// función de flecha tipada con inferencia de tipo
const sumar3 = (x: number, y: number): number => x + y;
// función de flecha tipada sin inferencia de tipo (se utiliza el tipo Function)
const sumar4: Function = (x: number, y: number): number => x + y;
// creación de una variable que posteriormente almacenará una función
let sumar5: Function;
// error
// sumar5 = 5;
sumar5 = sumar4;
console.log(sumar1(3,1));

// sin parámetros opcionales (ejemplo de dos parámetros obligatorios)
const construirNombre1 = (nombre: string, apellidos: string) => {
    return nombre + ' ' + apellidos;
};
// error porque solamente se ha pasado un parámetro
//const resultado1 = construirNombre1('Bob');
// error porque se han pasado tres parámetros
//const resultado2 = construirNombre1('Bob', 'Adams', 'Sr.');
// correcto
const resultado3 = construirNombre1('Bob', 'Adams');
console.log(resultado3);
// los parámetros opcionales no pueden ubicarse antes que los obligatorios. Si no se suministran, su valor es undefined
const construirNombre2 = (nombre: string, apellidos?: string) => {
return apellidos ? nombre + ' ' + apellidos : nombre;
};
// correcto
const resultado4 = construirNombre2('Bob');
// error porque la función acepta uno o dos parámetros
// const resultado5 = construirNombre2('Bob', 'Adams', 'Sr.');
// correcto
const resultado6 = construirNombre2('Bob', 'Adams');

const construirNombres = (nombre: string, apellidos = 'Smith') => {
    return nombre + ' ' + apellidos;
};
// correcto, el segundo parámetro es opcional
const resultado1 = construirNombres('Bob');
console.log(resultado1);
// correcto
const resultado2 = construirNombres('Bob', undefined);
console.log(resultado2);
// error porque se han pasado tres parámetros
//const resultado5 = construirNombre1('Bob', 'Adams', 'Sr.');

//el número de parámetros no necesariamente tiene que ser fijo. Puede utilizarse el operador de propagación o rest (...)
const construirNombre3 = (nombre: string, ...resto: string[]) => {
    return `${nombre} ${resto.join(' ')}`;
};
const persona = construirNombre3('Joseph', 'Samuel', 'Lucas', 'MacKinzie','Marc');
console.log(persona);

//Sobrecarga de funciones en TypeScript
function pickCard(x: string): string;
function pickCard(x: number): number;
function pickCard(x: number | string): number | string {
    return (typeof x === 'string') ? x+1 : x+2;
}
// correcto
console.log(pickCard(4));
// correcto
console.log(pickCard('Hola'));
// error porque la función sobrecargada no recibe valores booleanos
// pickCard(true);