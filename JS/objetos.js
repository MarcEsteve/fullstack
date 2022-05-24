const persona = {
    nombre: 'Alejandro',
    'lugar de residencia': 'Madrid'
};
// Alejandro
console.log(persona.nombre);
// Alejandro
console.log(persona['nombre']);
// error
//console.log(persona.lugar de residencia);
// en este caso son obligatorios los corchetes
//Madrid
console.log(persona['lugar de residencia']);
persona['lugar de residencia'] = 'Sevilla';
// Sevilla
console.log(persona['lugar de residencia']);
const propiedad = 'nombre';
// undefined porque busca la variable propiedad dentro del objeto persona
console.log(persona.propiedad);
// Alejandro, busca la variable propiedad que tiene el valor string "nombre"
console.log(persona[propiedad]);

const persona1 = {
    nombre: 'Carmen',
    apellidos: 'González',
    datos: {
        dirección: 'Sevilla',
        otrodato: "Cualquier texto"
    }
};
// Sevilla
console.log(persona1.datos.dirección);
// Cualquier texto
console.log(persona1.datos.otrodato);
//{dirección: 'Sevilla', otrodato: 'Cualquier texto'}
console.log(persona1.datos);

//En el espacio de memoria de un objeto no se almacena el propio objeto (sus propiedades), sino una dirección de memoria (referencia) que apunta al objeto.
const coche1 = { marca: 'Ford', modelo: 'Focus' };
const coche2 = { marca: 'Ford', modelo: 'Focus' };
// devuelve false porque no comparten referencia
console.log(coche1 == coche2);
// devuelve false porque no comparten referencia
console.log(coche1 === coche2);
// devuelve true porque el valor es el mismo y son de tipo string
console.log(coche1.modelo === coche2.modelo);
console.log(coche1.marca === coche2.marca);
const coche3 = coche1;
// devuelve true porque comparten referencia
console.log(coche1 === coche3);

//El borrado de propiedades en objetos se realiza con delete.
const x = {
    peras: 3,
    fresas: 20
};
console.log(x);
delete x.fresas;
console.log(x);
// Object.keys() e includes
const y = {
    //Atributos
    peras: 3,
    fresas: 20,
    // Método, no se debe utilizar aquí la sintaxis de la función de flecha porque this en ese caso apuntaría al objeto global
    contar: function () {
        console.log(this.peras + this.fresas);
    }
};
// se guarda en un array el nombre de todas las propiedades del objeto x
const nombresPropiedades = Object.keys(y);
// ["peras", "fresas", "contar"]
console.log(nombresPropiedades);
// true
console.log(nombresPropiedades.includes('fresas'));

// Forma alternativa de comprobar la existencia de una propiedad en un objeto es utilizando "in"
const z = {
    peras: 3,
    fresas: 20,
    contar: function() {
    // no se puede utilizar aquí función de flecha porque this apuntaría al objeto global
        console.log(this.peras + this.fresas);
    }
};
// true
console.log('fresas' in z);

//Extender de forma dinámica Objetos
// creación de un objeto vacío
const alejandro = {};
console.log(alejandro);
// agregando un método nuevo
alejandro.saludar = () => {
    console.log('Hola');
};
console.log(alejandro);

//Recorrer "iterar" un Objeto lo haremos con for..in
const iterar = {
    manzanas: 3,
    platanos: 20
};
for (let key in iterar) {
    // manzanas y platanos (en distintas líneas)
    console.log(key);
    // string y string (en distintas líneas)
    console.log(typeof(key));
    // 3 y 20 (en distintas líneas)
    console.log(iterar[key]);
    // undefined y undefined porque busca la propiedad iterar.key (2 veces) y no existe
    console.log(iterar.key);
}
// Iterar con Object.keys()
const w = {
    peras: 3,
    fresas: 20
};
console.log(w);
// claves es un array
const claves = Object.keys(w);
// ["peras", "fresas"]
console.log(claves);
// bucle for...of para recorrer un array
for (let key of claves) {
    // peras y fresas (en distintas líneas)
    console.log(key);
    // 3 y 20 (en distintas líneas)
    console.log(w[key]);
}
// bucle for...in para recorrer un array
for (let i in claves) {
    // 0 y 1 (en distintas líneas)
    console.log(i);
    // peras y fresas (en distintas líneas)
    console.log(claves[i])
    // 3 y 20 (en distintas líneas)
    console.log(w[claves[i]]);
}

//Crear atributos y métodos 
// obligatorio utilizar function para posteriomente crear objetos con new
const Person = function(name,lastname) {
    // atributo público porque está declarado con this
    this.name = name || '';
    // atributo público porque está declarado con const
    this.lastname = lastname || '';
    // atributo privado porque está declarado con const
    const myName = this.name;
    // método privado porque está declarado con const
    const fullName = () => {
        return myName + ' ' + lastname;
    };
    // método público porque está declarado con this
    this.introduce = () => {
        return 'Hola, mi nombre es ' + fullName();
    };
};
const oscar = new Person('Óscar','Esteve');
// Óscar -- Atributo público
console.log(oscar.name);
// Hola, mi nombre es Óscar Esteve -- Método público
console.log(oscar.introduce());
// Esteve -- Atributo público
console.log(oscar.lastname);
// undefined porque el atributo es privado
console.log(oscar.myName);
// error porque el método no privado y no se puede acceder a él (es undefined) e invocar a undefined genera un error
//console.log(oscar.fullName());

const marc = new Person('Marc','Esteve');
// Marc
console.log(marc.name);
// Esteve -- Atributo público
console.log(marc.lastname);
// Hola, mi nombre es Marc Esteve
console.log(marc.introduce());
// undefined porque el atributo es privado
//console.log(marc.myName);
// error porque el método no privado y no se puede acceder a él (es undefined) e invocar a undefined genera un error
//console.log(marc.fullName());

//Creación de objetos
const objeto1 = {
    nombre: 'Juanito',
    // función clásica de JavaScript sin function (opción recomendada)
    mostrarNombre() {
        console.log(this.nombre);
    }
}
// Juanito
objeto1.mostrarNombre();
// Juanito
console.log(objeto1.nombre);
//Creación con function()
const objeto2 = {
    nombre: 'Alejandro',
    // función clásica de JavaScript con function
    mostrarNombre: function() {
        console.log(this.nombre);
    }
}
// Alejandro
objeto2.mostrarNombre();
// Alejandro
console.log(objeto2.nombre);
//Creación con función de flecha
const objeto3 = {
    nombre: 'Alejandro',
    // función de flecha
    mostrarNombre: () => {
        console.log(this.nombre);
    }
}
// undefined
objeto3.mostrarNombre();