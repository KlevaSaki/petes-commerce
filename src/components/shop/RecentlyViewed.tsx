import { ArrowRight } from "lucide-react";
import ProductCard from "../../components/product/ProductCard";
import { products } from "../../data/products";

/**
 * Recently Viewed
 *
 * Displays products the customer may
 * want to revisit.
 *
 * Later this can be connected to
 * localStorage or your backend.
 */

export default function RecentlyViewed() {
  return (
    <section className="my-28">
      <div
        className="
          overflow-hidden
          rounded-[36px]
          border
          border-neutral-200
          bg-white
          px-6
          py-8
          shadow-sm
          sm:px-8
          lg:px-10
        "
      >
        {/* Header */}

        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span
              className="
                inline-flex
                rounded-full
                border
                border-jungle/10
                bg-jungle/5
                px-4
                py-2
                text-[11px]
                font-medium
                uppercase
                tracking-[0.25rem]
                text-jungle
              "
            >
              Continue Shopping
            </span>

            <h2
              className="
                mt-6
                text-3xl
                font-light
                tracking-tight
                text-charcoal
                md:text-4xl
              "
            >
              Recently Viewed
            </h2>

            <p className="mt-3 max-w-xl text-neutral-500">
              Pick up where you left off and continue
              exploring your favourite pieces.
            </p>
          </div>

          <button
            className="
              group
              inline-flex
              items-center
              gap-3
              self-start
              rounded-full
              border
              border-neutral-300
              bg-white
              px-6
              py-3
              text-sm
              font-medium
              text-charcoal
              transition-all
              duration-300
              hover:border-jungle
              hover:bg-jungle
              hover:text-white
            "
          >
            View All

            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        </div>

        {/* Carousel */}

        <div className="relative">
          {/* Left Fade */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-10
              h-full
              w-8
              bg-gradient-to-r
              from-white
              to-transparent
            "
          />

          {/* Right Fade */}

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-10
              h-full
              w-8
              bg-gradient-to-l
              from-white
              to-transparent
            "
          />

          <div
            className="
              flex
              gap-5
              overflow-x-auto
              pb-3
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
                  min-w-[240px]
                  max-w-[240px]
                  snap-start
                  sm:min-w-[250px]
                  sm:max-w-[250px]
                  lg:min-w-[260px]
                  lg:max-w-[260px]
                  flex-shrink-0
                "
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}