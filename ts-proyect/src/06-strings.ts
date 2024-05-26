(() => {
  let productTitle = 'My title';
  // productTitle = 22;
  // productTitle = null;
  // productTitle = undefined;

  productTitle = 'chambio de titulo';
  console.log('🚀 ~ productTitle:', productTitle);

  const productDescription = "'mi mim imimimi'";
  console.log('🚀 ~ productDescription:', productDescription);

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
  title:${productTitle}
  description:${productDescription}
  price:${productPrice}
  isNew:${isNew}
  `;
  console.log('🚀 ~ summary:', summary);

  //preferible tipar con minuscula es buena practica
  const myString: string = '';
})();
