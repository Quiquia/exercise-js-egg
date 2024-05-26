(() => {
  let price = [1, 2, 3, 4, 5, 6, 7, 8, 'Hola', true];
  // price.push('asas');
  // price.push(true);
  // price.push({});

  price.push(122);
  price = [12, 12, 12];

  let products = ['Hola', true];
  products.push(true);

  let mixed: string | number | boolean[] = [];
  let mixed2: (string | number | boolean | object)[] = ['carlos', 29, true];
  mixed2.push(false);
  mixed2.push({});
  mixed2.push([]);

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  numbers.map((item) => item * 2);
  console.log('🚀 ~ numbers:', numbers);
})();
