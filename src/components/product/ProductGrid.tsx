import ProductCard from "./ProductCard";
import type { Product } from "../../types/product";

interface ProductGridProps {
  title: string;
  products: Product[];
}

export default function ProductGrid({
  title,
  products,
}: ProductGridProps) {
  return (
    <section className="py-24">
      {/* Section Header */}

      <div className="mb-14">
        <h2
          className="
            text-3xl
            font-light
            tracking-tight
            md:text-5xl
          "
        >
          {title}
        </h2>

        <p
          className="
            mt-3
            max-w-xl
            text-neutral-500
          "
        >
          Discover thoughtfully curated pieces
          designed for everyday luxury.
        </p>
      </div>

      {/* Product Grid */}

      <div
        className="
          grid
          grid-cols-2
          gap-x-5
          gap-y-12
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}