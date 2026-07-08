export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;

  category: string;

  gender: "Men" | "Women" | "Unisex";

  brand?: string;

  color?: string;

  size?: string[];

  isNew?: boolean;

  isSale?: boolean;
}