const d = document,
  $valueLast = d.getElementById("value-last"),
  $valueCurrent = d.getElementById("value-current"),
  $operadorBtn = d.querySelectorAll(".operador"),
  $numberBtn = d.querySelectorAll(".number"),
  $delete = d.getElementById("delete"),
  $deleteAll = d.getElementById("delete-all");

class Calculator {
  addition(num1, num2) {
    return num1 + num2;
  }
  subtraction(num1, num2) {
    return num1 - num2;
  }
  division(num1, num2) {
    return num1 / num2;
  }
  multiplication(num1, num2) {
    return num1 * num2;
  }
}

class Display {
  constructor($valueCurrent, $valueLast) {
    this.$valueLast = $valueLast;
    this.$valueCurrent = $valueCurrent;
    this.calculator = new Calculator();
    this.tipoOperacion = undefined;
    this.valueLast = "";
    this.valueCurrent = "";
    this.signos = {
      addition: "+",
      subtraction: "-",
      division: "/",
      multiplication: "x",
    };
  }

  delete() {
    this.valueCurrent = this.valueCurrent.toString().slice(0, -1);
    this.imprimirValores();
  }

  deleteAll() {
    this.valueCurrent = "";
    this.valueLast = "";
    this.tipoOperacion = undefined;
    this.imprimirValores();
  }

  computar(tipo) {
    console.log("🚀 ~ Display ~ computar ~ tipo:", tipo);
    this.tipoOperacion !== "equal" && this.calcular();
    this.tipoOperacion = tipo;
    this.valueLast = this.valueCurrent || this.valueLast;
    this.$valueCurrent.textContent = "";
    this.imprimirValores();
  }

  agregarNumero(numero) {
    console.log("🚀 ~ Display ~ agregarNumero ~ numero:", numero);
    if (numero === "." && this.valueCurrent.includes(".")) return;
    this.valueCurrent = this.valueCurrent.toString() + numero.toString();

    this.imprimirValores();
  }

  imprimirValores() {
    this.$valueCurrent.textContent = this.valueCurrent;
    this.$valueLast.textContent = `${this.valueLast} ${
      this.signos[this.tipoOperacion] || ""
    }`;
  }

  calcular() {
    const numeroAnterior = parseFloat(this.valueLast);
    const numeroActual = parseFloat(this.valueCurrent);

    if (isNaN(numeroActual) || isNaN(numeroAnterior)) return;
    this.valueCurrent = this.calculator[this.tipoOperacion](
      numeroAnterior,
      numeroActual
    );
  }
}

const display = new Display($valueCurrent, $valueLast);

$numberBtn.forEach((btn) => {
  btn.addEventListener("click", () => display.agregarNumero(btn.innerHTML));
});

$operadorBtn.forEach((btn) => {
  btn.addEventListener("click", () => display.computar(btn.value));
});

$deleteAll.addEventListener("click", () => display.deleteAll());
$delete.addEventListener("click", () => display.delete());
