import { Heart, ShoppingBag } from "lucide-react";
import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-[28px]
        border
        border-neutral-200/80
        bg-white
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-jungle/20
        hover:shadow-[0_20px_60px_rgba(15,61,46,0.08)]
      "
    >
      {/* Image Section */}

      <div className="relative">
        <img
          loading="lazy"
          src={product.image}
          alt={product.name}
          className="
            aspect-[4/5]
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Category Badge */}

        <div
          className="
            absolute
            left-4
            top-4
            rounded-full
            bg-white/90
            px-3
            py-1.5
            text-[10px]
            font-medium
            uppercase
            tracking-[0.15rem]
            backdrop-blur-md
          "
        >
          {product.category}
        </div>

        {/* Wishlist */}

        <button
          className="
            absolute
            right-4
            top-4
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white/90
            backdrop-blur-md
            transition
            hover:bg-white
          "
        >
          <Heart size={18} />
        </button>
      </div>

      {/* Content Section */}

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              className="
                text-base
                font-medium
                text-charcoal
              "
            >
              {product.name}
            </h3>

            <p className="mt-2 text-sm text-neutral-500">
              Crafted for timeless everyday wear.
            </p>
          </div>

          <div
            className="
              rounded-full
              bg-jungle/8
              px-3
              py-2
              text-sm
              font-semibold
              text-jungle
              whitespace-nowrap
            "
          >
            KES {product.price.toLocaleString()}
          </div>
        </div>

        {/* Footer Actions */}

        <div
          className="
            mt-5
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-xs
              uppercase
              tracking-[0.15rem]
              text-neutral-400
            "
          >
            Available Now
          </span>

          <button
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-jungle
              px-4
              py-2
              text-sm
              font-medium
              text-white
              transition
              hover:opacity-90
            "
          >
            <ShoppingBag size={16} />
            Add
          </button>
        </div>
      </div>

      {/* Bottom Accent */}

      <div
        className="
          h-1
          w-0
          bg-jungle
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </article>
  );
}