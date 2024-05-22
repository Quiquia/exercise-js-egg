import { area } from "./area.js";
import { perimetro } from "./perimeter.js";
import { rectangulo1, rectangulo2, rectangulo3 } from "./rectangleData.js";

const arrayRectangulos = [rectangulo1, rectangulo2, rectangulo3];
console.log("🚀 ~ arrayRectangulos:", arrayRectangulos);

arrayRectangulos.forEach((rectangulo) => {
  const template = `
  <table border="1">
  <tr>
    <th>${area(rectangulo)}</th>
    <th>${perimetro(rectangulo)}</th>
  </tr>
   </table>
  `;
  console.log("🚀 ~ arrayRectangulos.forEach ~ template:", template);
});
