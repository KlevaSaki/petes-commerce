import type { Product } from "../types/product";
import image20 from "../../src/gallery/image20.jpeg";
import image21 from "../../src/gallery/image21.jpeg"
import image22 from "../../src/gallery/image22.jpeg";
import image23 from "../../src/gallery/image23.jpeg";

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Converse",
    price: 3500,
    category: "Menswear",
    image: image20,
    gender: "Women"
  },
  {
    id: "2",
    name: "Tailored Converse",
    price: 3000,
    category: "Menswear",
    image: image21,
    gender: "Men"
  },
  {
    id: "3",
    name: "Luxury Converse",
    price: 4000,
    category: "Accessories",
    image: image22,
    gender: "Women"
  },
  {
    id: "4",
    name: "Premium Converse",
    price: 3400,
    category: "Womenswear",
    image: image23,
    gender: "Unisex"
  },
];