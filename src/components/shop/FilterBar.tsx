import {
  ChevronDown,
  Search,
  SlidersHorizontal,
} from "lucide-react";

/**
 * Filter Bar
 *
 * Sticky shopping toolbar.
 * Allows customers to search, filter and sort products.
 */

export default function FilterBar() {
  return (
    <section className="sticky top-0 z-40 border-y border-neutral-200/70 bg-white/90 backdrop-blur-xl">
      <div
        className="
          mx-auto
          flex
          max-w-[1440px]
          flex-col
          gap-5
          px-4
          py-5
          sm:px-6
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:px-8
        "
      >
        {/* Search */}

        <div
          className="
            flex
            flex-1
            items-center
            gap-3
            rounded-full
            border
            border-neutral-200
            bg-cream
            px-5
            py-3
            transition
            focus-within:border-jungle
            focus-within:ring-2
            focus-within:ring-jungle/10
          "
        >
          <Search
            size={18}
            className="text-neutral-400"
          />

          <input
            type="text"
            placeholder="Search products..."
            className="
              w-full
              bg-transparent
              outline-none
              placeholder:text-neutral-400
            "
          />
        </div>

        {/* Filters */}

        <div className="flex flex-wrap items-center gap-3">
          <FilterButton label="Category" />

          <FilterButton label="Size" />

          <FilterButton label="Colour" />

          <FilterButton label="Price" />

          <FilterButton label="Newest" />

          <button
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-neutral-200
              bg-white
              px-5
              py-3
              transition-all
              hover:border-jungle
              hover:bg-jungle
              hover:text-white
            "
          >
            <SlidersHorizontal size={18} />

            Filters
          </button>
        </div>

        {/* Results */}

        <div
          className="
            whitespace-nowrap
            text-sm
            text-neutral-500
          "
        >
          Showing{" "}
          <span className="font-semibold text-charcoal">
            24
          </span>{" "}
          of{" "}
          <span className="font-semibold text-charcoal">
            243
          </span>{" "}
          products
        </div>
      </div>
    </section>
  );
}

/**
 * Small reusable filter button.
 */

function FilterButton({
  label,
}: {
  label: string;
}) {
  return (
    <button
      className="
        flex
        items-center
        gap-2
        rounded-full
        border
        border-neutral-200
        bg-white
        px-5
        py-3
        text-sm
        transition-all
        hover:border-jungle
        hover:text-jungle
      "
    >
      {label}

      <ChevronDown size={16} />
    </button>
  );
}