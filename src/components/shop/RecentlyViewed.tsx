import { ArrowRight } from "lucide-react";
import ProductCard from "../../components/product/ProductCard";
import { products } from "../../data/products";

/**
 * Recently Viewed
 *
 * Displays products the customer may
 * want to revisit.
 *
 * Currently uses sample products.
 * Later this can be connected to localStorage
 * or your backend.
 */

export default function RecentlyViewed() {
  return (
    <section className="my-28">
      {/* Section Header */}

      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <span
            className="
              text-xs
              uppercase
              tracking-[0.25rem]
              text-jungle
            "
          >
            Continue Shopping
          </span>

          <h2
            className="
              mt-4
              text-4xl
              font-light
              tracking-tight
              md:text-5xl
            "
          >
            Recently Viewed
          </h2>

          <p className="mt-4 max-w-xl text-neutral-500">
            Pick up where you left off and continue exploring
            your favourite pieces.
          </p>
        </div>

        <button
          className="
            inline-flex
            items-center
            gap-2
            self-start
            rounded-full
            border
            border-neutral-300
            bg-white
            px-6
            py-3
            text-sm
            transition-all
            hover:border-jungle
            hover:bg-jungle
            hover:text-white
          "
        >
          View All

          <ArrowRight
            size={18}
            className="transition-transform hover:translate-x-1"
          />
        </button>
      </div>

      {/* Product Carousel */}

      <div
        className="
          flex
          gap-6
          overflow-x-auto
          pb-4
          snap-x
          snap-mandatory
          scroll-smooth
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {products.slice(0, 6).map((product) => (
          <div
            key={product.id}
            className="
              min-w-[300px]
              snap-start
              md:min-w-[340px]
            "
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}