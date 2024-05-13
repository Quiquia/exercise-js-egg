import { lengthOf } from "./lengthOf.js";
import { palindromeMath } from "./math.js";
import { palindrome } from "./palindrome.js";
import { stringIncludes } from "./stringIncludes.js";
import { titleFormat } from "./titleFormat.js";

/* seleccionar una etiqueta del HTML */

/*const selector = document.getElementById("mensaje");

selector.innerHTML = "Conexión exitosa entre html y Js";

prompt("Preguntar algo");

const entrada = prompt("¿Qué producto desea comprar?");

console.log(entrada);

alert(entrada);

const nombre = prompt("¿Cuál es su nombre?");

const mensaje = "Bienvenido " + nombre;

console.log(mensaje);
alert(mensaje); */

/*--------- exercise: length string ----------*/

lengthOf("hola");
lengthOf("");
lengthOf(".");
lengthOf("");

/*--------- exercise  charAt, slice, toUpperCase, toLowerCase - string ----------*/

titleFormat("estoy ESTRESADA. QUIERO GRITAR");
titleFormat("ESTOY MOLESTA, QUIERO JUGAR CON MICHI");
titleFormat("estoy aburrida, QUIERO VOLVER A MI PAÍS");

/*--------- exercise: includes string -is sensitive  ----------*/
stringIncludes(
  "Vane se fue de viaje pero se siente estresada por el viaje",
  "carro"
);

stringIncludes(
  "Vane se fue de viaje pero se siente estresada por el viaje",
  "fue"
);

stringIncludes(
  "Vane se fue de viaje pero se siente estresada por el viaje",
  "sienTe"
);

/*--------- exercise: slipt, join, reverse : string  ----------*/

palindrome("hola");

palindrome("mama");

palindrome("hannah");

let number = [1, 2, 4, 9, -5];
palindromeMath(number);
