/*const numero1 = Number(prompt("Ingrese primer número"));

const numero2 = Number(prompt("Ingrese segundo número"));

const suma = numero1 + numero2;
const mensajeSuma = "El resultado de la suma es " + suma;

alert(mensajeSuma);

const promedio = suma / 2;
const triple = promedio * 3;
const resultadoMenosDiez = triple - 10;

const mensajeFinal = "El resultado menos 10 es " + resultadoMenosDiez;
alert(mensajeFinal); */

// --------- suma de números -------------

const cantidad = Number(prompt("¿Cuantos números quieres sumar?"));

let sumatoria = 0;

/*for (let index = 1; index <= cantidad; index++) {
  sumatoria = sumatoria + index;

  console.log(sumatoria);
}*/

for (let index = 1; index <= cantidad; index++) {
  const numeroAsumar = Number(prompt("Ingrese un número a sumar"));
  sumatoria = sumatoria + numeroAsumar;
}