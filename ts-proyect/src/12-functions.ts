(() => {
  //Literal types
  type Size = 'XS' | 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    creatAt: Date,
    stock: number,
    size: Size
  ) {
    return {
      title,
      creatAt,
      stock,
      size,
    };
  }

  const product1 = createProductToJson('P1', new Date(), 12, 'M');
  product1.creatAt;
  product1.size;
  product1.stock;
  console.log('🚀 ~ product1:', product1);

  const createProductToJsonV2 = (
    title: string,
    creatAt: Date,
    stock: number,
    size?: Size
  ) => {
    return {
      title,
      creatAt,
      stock,
      size,
    };
  };

  const product2 = createProductToJsonV2('P2', new Date(), 15);
  product2.size;
  console.log('🚀 ~   product2.size;:', product2.size);
})();
