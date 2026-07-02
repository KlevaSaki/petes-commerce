import ProductCard from "./ProductCard";
import type { Product } from "../../types/product";
import { ArrowDown } from "lucide-react";

interface ProductGridProps {
  title: string;
  products: Product[];
}

export default function ProductGrid({
  title,
  products,
}: ProductGridProps) {
  return (
    <section className="py-8">
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

       <div className="mt-16 flex justify-center">
        <button
          className="
            group
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-neutral-300
            bg-white
            px-8
            py-4
            text-sm
            font-medium
            tracking-wide
            text-neutral-900
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-jungle
            hover:bg-jungle
            hover:text-white
            hover:shadow-lg
          "
        >
          <span>Load More</span>

          <ArrowDown
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:translate-y-1
            "
          />
        </button>
      </div>
    </section>
  );
}