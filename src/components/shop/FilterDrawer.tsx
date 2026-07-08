import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import type { Product } from "../../types/product";
import {
  defaultProductFilters,
  type ProductFiltersState,
} from "../../types/productFilters";

interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;

  products: Product[];

  filters: ProductFiltersState;

  setFilters: React.Dispatch<
    React.SetStateAction<ProductFiltersState>
  >;
}

export default function FilterDrawer({
  open,
  onClose,
  products,
  filters,
  setFilters,
}: FilterDrawerProps) {
  // --------------------------------------------
  // Dynamic Filter Values
  // --------------------------------------------

  const categories = [
    ...new Set(products.map((product) => product.category)),
  ].sort();

  const brands = [
    ...new Set(
      products
        .map((product) => product.brand)
        .filter(Boolean)
    ),
  ].sort() as string[];

  const colors = [
    ...new Set(
      products
        .map((product) => product.color)
        .filter(Boolean)
    ),
  ].sort() as string[];

  const sizes = [
    ...new Set(
      products.flatMap(
        (product) => product.size ?? []
      )
    ),
  ].sort();

  // --------------------------------------------
  // Helpers
  // --------------------------------------------

  const toggleArrayValue = (
    value: string,
    values: string[]
  ) => {
    return values.includes(value)
      ? values.filter((item) => item !== value)
      : [...values, value];
  };

  const colorMap: Record<string, string> = {
    Black: "#111827",
    White: "#ffffff",
    Grey: "#9CA3AF",
    Brown: "#7C4F2D",
    Beige: "#E7D3B1",
    Navy: "#1E3A5F",
    Olive: "#556B2F",
    Green: "#0F3D2E",
    Blue: "#2563EB",
    Red: "#DC2626",
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}

          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Drawer */}

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 28,
              stiffness: 240,
            }}
            className="
              fixed
              right-0
              top-0
              z-50
              flex
              h-screen
              w-full
              max-w-md
              flex-col
              bg-cream
              shadow-2xl
            "
          >
            {/* Header */}

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-neutral-200
                px-6
                py-5
              "
            >
              <div>
                <h2 className="text-xl font-semibold text-jungle">
                  Filters
                </h2>

                <p className="mt-1 text-sm text-neutral-500">
                  Refine your shopping experience.
                </p>
              </div>

              <button
                onClick={onClose}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  transition
                  hover:bg-neutral-200
                "
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content */}

            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">

              {/* =======================================================
                  CATEGORY SECTION
                  ======================================================= */}

              <section>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-jungle">
                  Categories
                </h3>

                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => {
                    const active =
                      filters.category.includes(category);

                    return (
                      <button
                        key={category}
                        onClick={() =>
                          setFilters((prev) => ({
                            ...prev,
                            category: toggleArrayValue(
                              category,
                              prev.category
                            ),
                          }))
                        }
                        className={`
                          rounded-full
                          border
                          px-4
                          py-2
                          text-sm
                          transition-all
                          duration-300

                          ${
                            active
                              ? "border-jungle bg-jungle text-white"
                              : "border-neutral-300 bg-white text-charcoal hover:border-jungle"
                          }
                        `}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* Brand section goes here */}
              <section>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-jungle">
                    Brands
                </h3>

                <div className="flex flex-wrap gap-3">
                    {brands.map((brand) => {
                    const active = filters.brand.includes(brand);

                    return (
                        <button
                        key={brand}
                        onClick={() =>
                            setFilters((prev) => ({
                            ...prev,
                            brand: toggleArrayValue(
                                brand,
                                prev.brand
                            ),
                            }))
                        }
                        className={`
                            rounded-full
                            border
                            px-4
                            py-2
                            text-sm
                            transition-all
                            duration-300

                            ${
                            active
                                ? "border-jungle bg-jungle text-white"
                                : "border-neutral-300 bg-white hover:border-jungle"
                            }
                        `}
                        >
                        {brand}
                        </button>
                    );
                    })}
                </div>
                </section>
              {/* Colour section goes here */}
                    <section>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-jungle">
                            Colours
                        </h3>

                        <div className="flex flex-wrap gap-4">
                            {colors.map((color) => {
                            const active =
                                filters.color.includes(color);

                            return (
                                <button
                                key={color}
                                onClick={() =>
                                    setFilters((prev) => ({
                                    ...prev,
                                    color: toggleArrayValue(
                                        color,
                                        prev.color
                                    ),
                                    }))
                                }
                                title={color}
                                className={`
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-full
                                    border-2
                                    transition-all
                                    duration-300

                                    ${
                                    active
                                        ? "border-jungle scale-110"
                                        : "border-transparent hover:scale-105"
                                    }
                                `}
                                >
                                <span
                                    className="h-7 w-7 rounded-full border border-neutral-300"
                                    style={{
                                    backgroundColor:
                                        colorMap[color] ?? "#cccccc",
                                    }}
                                />
                                </button>
                            );
                            })}
                        </div>
                        </section>
              {/* Size section goes here */}
            <section>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-jungle">
                    Sizes
                </h3>

                <div className="flex flex-wrap gap-3">
                    {sizes.map((size) => {
                    const active =
                        filters.size.includes(size);

                    return (
                        <button
                        key={size}
                        onClick={() =>
                            setFilters((prev) => ({
                            ...prev,
                            size: toggleArrayValue(
                                size,
                                prev.size
                            ),
                            }))
                        }
                        className={`
                            h-11
                            min-w-[48px]
                            rounded-xl
                            border
                            text-sm
                            font-medium
                            transition-all
                            duration-300

                            ${
                            active
                                ? "border-jungle bg-jungle text-white"
                                : "border-neutral-300 bg-white hover:border-jungle"
                            }
                        `}
                        >
                        {size}
                        </button>
                    );
                    })}
                </div>
                </section>
              {/* Price section goes here */}
              <section>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-jungle">
                    Price Range
                </h3>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                    <label className="mb-2 block text-xs uppercase tracking-wide text-neutral-500">
                        Min
                    </label>

                    <input
                        type="number"
                        min={0}
                        value={filters.minPrice}
                        onChange={(e) =>
                        setFilters((prev) => ({
                            ...prev,
                            minPrice: Number(e.target.value),
                        }))
                        }
                        className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-jungle"
                    />
                    </div>

                    <div>
                    <label className="mb-2 block text-xs uppercase tracking-wide text-neutral-500">
                        Max
                    </label>

                    <input
                        type="number"
                        value={
                        filters.maxPrice === Infinity
                            ? ""
                            : filters.maxPrice
                        }
                        placeholder="No limit"
                        onChange={(e) =>
                        setFilters((prev) => ({
                            ...prev,
                            maxPrice: e.target.value
                            ? Number(e.target.value)
                            : Infinity,
                        }))
                        }
                        className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-jungle"
                    />
                    </div>
                </div>
                </section>
              {/* Special section goes here */}
              <section>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-jungle">
                    Special
                </h3>

                <div className="space-y-4">
                    <label className="flex cursor-pointer items-center justify-between">
                    <span className="text-sm font-medium">
                        New Arrivals
                    </span>

                    <input
                        type="checkbox"
                        checked={filters.newOnly}
                        onChange={(e) =>
                        setFilters((prev) => ({
                            ...prev,
                            newOnly: e.target.checked,
                        }))
                        }
                        className="h-5 w-5 accent-[#0F3D2E]"
                    />
                    </label>

                    <label className="flex cursor-pointer items-center justify-between">
                    <span className="text-sm font-medium">
                        On Sale
                    </span>

                    <input
                        type="checkbox"
                        checked={filters.saleOnly}
                        onChange={(e) =>
                        setFilters((prev) => ({
                            ...prev,
                            saleOnly: e.target.checked,
                        }))
                        }
                        className="h-5 w-5 accent-[#0F3D2E]"
                    />
                    </label>
                </div>
                </section>
            </div>

            {/* Footer */}

            <div
              className="
                border-t
                border-neutral-200
                p-6
              "
            >
              <button
                onClick={() =>
                  setFilters(defaultProductFilters)
                }
                className="
                  w-full
                  rounded-full
                  border
                  border-jungle
                  py-3
                  text-sm
                  font-medium
                  text-jungle
                  transition
                  hover:bg-jungle
                  hover:text-white
                "
              >
                Reset Filters
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}