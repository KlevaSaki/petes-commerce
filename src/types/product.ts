export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;

  category: string;

  gender: "Men" | "Women" | "Unisex";

  brand?: string;

  color?: string;

  size?: string[];

  isSale?: boolean;

  newArrival?: boolean;
}