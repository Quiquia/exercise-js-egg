type Sizes = 'S' | 'M' | 'L' | 'XL';
type Product = {
  title: string;
  createdAt: Date;
  price: number;
  stock: number;
  size?: Sizes;
};

export { Product, Sizes };
