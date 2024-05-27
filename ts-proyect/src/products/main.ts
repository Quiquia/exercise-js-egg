import { addProduct, caclStock, products } from './product.service';

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

const totalStock = caclStock();

console.log('🚀 ~ products:', products);
console.log('🚀 ~ totalStock:', totalStock);
