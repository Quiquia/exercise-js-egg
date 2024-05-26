(() => {
  //tipado IMPLICITO o enferido
  let isEnable = true;
  // isEnable = 'as';
  // isEnable = '123';
  isEnable = false;

  //tipado EXPLICITO
  let isNew: boolean = false;
  console.log('🚀 ~ isNew:', isNew);
  isNew = true;
  console.log('🚀 ~ isNew:', isNew);

  const random = Math.random();
  console.log('🚀 ~ random:', random);

  isNew = random >= 0.5 ? true : false;
  console.log('🚀 ~ isNew:', isNew);

  //preferible tipar con minuscula
  const myBoolean: boolean = true;
})();
