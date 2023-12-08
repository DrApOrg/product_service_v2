export interface Product {
  supplierId: string;
  name: string;
  price: number;
  image: string;
  stock: number;
  characteristics: {
    description: string;
    size: number;
    color: string[];
  };
  createdAt: string;
  updatedAt: string;
}
