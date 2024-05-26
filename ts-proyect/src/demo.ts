async () => {
  const myCart = [];
  const products = [];
  let limit = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET',
    });
    const data = await rta.json();
    products.concat(data);
  }

  function getTotal() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].prize;
      console.log('🚀 ~ getTotal ~ total:', total);
    }

    return total;
  }

  function addProduct(index) {
    if (getTotal() <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  for (let i = 0; i < products.length; i++) {
    addProduct(i);
  }

  const total = getTotal();
  console.log(total);

  const person = {
    name: 'Nicolas',
    lastName: 'Molina',
  };
  const rta = person;
  console.log(rta);
};
