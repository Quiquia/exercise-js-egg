(() => {
  const login = (data: { email: string; password: number }) => {
    console.log(data.email, data.password);
  };

  login({
    email: 'vane@gmail.com',
    password: 123,
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    price: number;
    stock: number;
    size?: Sizes;
  }) => {
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
    title: 'P3',
    createdAt: new Date(1995, 5, 26),
    price: 25,
    stock: 1,
    size: 'S',
  });

  console.log('🚀 ~ products:', products);
})();
