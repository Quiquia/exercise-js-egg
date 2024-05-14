import { area } from "./area.js";
import { perimetro } from "./perimeter.js";
import { rectangulo1, rectangulo2, rectangulo3 } from "./rectangleData.js";

const arrayRectangulos = [rectangulo1, rectangulo2, rectangulo3];
console.log("🚀 ~ arrayRectangulos:", arrayRectangulos);

arrayRectangulos.forEach((rectangulo) => {
  area(rectangulo);
  perimetro(rectangulo);
});
