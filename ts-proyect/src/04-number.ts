(() => {
  let productPrice = 210;
  productPrice = 300;
  console.log('🚀 ~ productPrice:', productPrice);

  let customerAge: number = 28;
  // customerAge = customerAge + '1';

  customerAge = customerAge + 1;
  console.log('🚀 ~ customerAge:', customerAge);

  //alertas que tsc te avisa
  let productInStock: number;
  console.log('🚀 ~ productInStock:', productInStock);
  if (productInStock > 10) {
    console.log('is greater');
  }
  //NaN es tratado como número tener cuidado ya que parseInt('sassas') lo convierte NaN
  let discount = parseInt('150');
  console.log('🚀 ~ discount:', discount);
  if (discount < 200) {
    console.log('aplicar');
  } else console.log('No aplicar');

  //lo toma como color hex = 255
  let hex = 0xfff;
  console.log('🚀 ~ hex:', hex);

  //es un binario 01 binario =21
  let binario = 0b10101;
  console.log('🚀 ~ binario:', binario);

  //preferible tipar con minuscula en números
  const myNumber: number = 10;
})();
