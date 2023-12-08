import { Product } from './product';

export interface Category {
  _id?: string;
  name: string;
  description: string;
  image: string;
  subcategories?: Subcategory[];
}

export interface Subcategory {
  name: string;
  description: string;
  image: string;
  products?: Product[];
}
