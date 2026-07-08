import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import ProductCard from "./ProductCard";
import type { Product } from "../../types/product";

interface ProductGridProps {
  title?: string;
  products: Product[];

  showLoadMore?: boolean;
  onLoadMore?: () => void;
}

export default function ProductGrid({
  title,
  products,
  showLoadMore = false,
  onLoadMore,
}: ProductGridProps) {
  if (!products.length) {
    return null;
  }

  return (
    <section className="py-8">
      {/* Section Header */}

      {title && (
        <div className="mb-14">
          <h2
            className="
              text-3xl
              font-light
              tracking-tight
              text-charcoal
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
      )}

      {/* Product Grid */}

      <motion.div
        layout
        className="
          grid
          grid-cols-2
          gap-x-5
          gap-y-12
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          2xl:grid-cols-5
        "
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            layout
            transition={{
              duration: 0.3,
            }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      {/* Load More */}

      {showLoadMore && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={onLoadMore}
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
      )}
    </section>
  );
}