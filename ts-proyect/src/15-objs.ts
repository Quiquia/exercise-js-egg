import { Product } from './products/product.model';

(() => {
  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({
    title: 'P1',
    createdAt: new Date(1995, 5, 25),
    price: 20,
    stock: 10,
    size: 'M',
  });

  addProduct({
    title: 'P2',
    createdAt: new Date(1995, 5, 26),
    price: 25,
    stock: 1,
    size: 'S',
  });

  console.log('🚀 ~ products:', products);
  // products.push(123)
  products.push({
    title: 'P3',
    createdAt: new Date(2021, 2, 5),
    price: 12,
    stock: 50,
  });
})();
