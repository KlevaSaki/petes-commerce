import type { Product } from "../types/product";
import image20 from "../../src/gallery/mens/image24.jpeg";
import image22 from "../../src/gallery/mens/image22.jpeg";

export const womensProducts: Product[] = [
    {
    id: "1",
    slug: "Classic Converse",
    name: "Classic Converse",
    price: 3500,
    category: "Menswear",
    image: image20,
    gender: "Women"
  },
  {
    id: "3",
    slug: "Luxury Converse",
    name: "Luxury Converse",
    price: 4000,
    category: "Accessories",
    image: image22,
    gender: "Women"
  },
]