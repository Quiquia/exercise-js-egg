const numero1 = Number(prompt("Ingrese primer número"));

const numero2 = Number(prompt("Ingrese segundo número"));

const dividir = (number1, number2) => {
  if (!isNaN(number1) && !isNaN(number2)) {
    let resul = number1 / number2;
    console.log("🚀 ~ dividir ~ resul:", resul);
  } else {
    alert("No es un número");
  }
};

dividir(numero1, numero2);
