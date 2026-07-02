import type { Product } from "../types/product";
import image20 from "../../src/gallery/image20.jpeg";
import image21 from "../../src/gallery/image21.jpeg"
import image22 from "../../src/gallery/image22.jpeg";
import image23 from "../../src/gallery/image23.jpeg";

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Linen Shirt",
    price: 5900,
    category: "Menswear",
    image: image20,
  },
  {
    id: "2",
    name: "Tailored Blazer",
    price: 14900,
    category: "Menswear",
    image: image21,
  },
  {
    id: "3",
    name: "Luxury Handbag",
    price: 18900,
    category: "Accessories",
    image: image22,
  },
  {
    id: "4",
    name: "Premium Dress",
    price: 11900,
    category: "Womenswear",
    image: image23,
  },
];