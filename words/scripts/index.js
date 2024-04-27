const frase = prompt("Ingrese una palabra o frase");

const cantidad = frase.length;

console.log(cantidad);

const fraseMinusculas = frase.toLowerCase();
const fraseMayusculas = frase.toUpperCase();

const minMay = fraseMayusculas + fraseMinusculas;
console.log(minMay);

alert(minMay);
