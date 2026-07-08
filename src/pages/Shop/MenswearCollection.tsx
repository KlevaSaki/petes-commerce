import { useMemo, useState } from "react";

import MensCollectionHero from "./MensCollectionHero";
import ProductFilters from "../../components/shop/ProductFilters";
import FilterDrawer from "../../components/shop/FilterDrawer";
import PromoBanner from "../../components/shop/PromoBanner";
import Newsletter from "../../components/shop/Newsletter";
import RecentlyViewed from "../../components/shop/RecentlyViewed";
import ProductGrid from "../../components/product/ProductGrid";

import { products } from "../../data/products";

import {
  defaultProductFilters,
} from "../../types/productFilters";

import { filterProducts } from "../../utils/filterProducts";

export default function MenswearCollection() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [filters, setFilters] = useState(defaultProductFilters);

  /**
   * Only men's products
   */
  const mensProducts = useMemo(() => {
    return products.filter(
      (product) => product.gender === "Men"
    );
  }, []);

  /**
   * Filtered Products
   */
  const filteredProducts = useMemo(() => {
    return filterProducts(mensProducts, filters);
  }, [mensProducts, filters]);

  return (
    <main className="bg-cream">
      <MensCollectionHero />

      <section className="mx-auto max-w-7xl px-4 py-10">
        {/* Heading */}

        <div className="mb-10">
          <h1 className="text-4xl font-semibold text-jungle">
            Menswear Collection
          </h1>

          <p className="mt-3 max-w-2xl text-neutral-600">
            Discover timeless menswear, premium footwear and
            accessories designed for every occasion.
          </p>
        </div>

        {/* Sticky Toolbar */}

        <div
          className="
            sticky
            top-16
            z-20
            mb-8
            rounded-[28px]
            border
            border-neutral-200
            bg-cream/90
            p-5
            backdrop-blur-lg
          "
        >
          <ProductFilters
            products={mensProducts}
            filters={filters}
            setFilters={setFilters}
            onOpenFilters={() =>
              setDrawerOpen(true)
            }
          />
        </div>

        {/* Filter Drawer */}

        <FilterDrawer
          open={drawerOpen}
          onClose={() =>
            setDrawerOpen(false)
          }
          products={mensProducts}
          filters={filters}
          setFilters={setFilters}
        />

        {/* Results */}

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-charcoal">
              Products
            </h2>

            <p className="mt-2 text-sm text-neutral-500">
              Showing{" "}
              <span className="font-semibold text-jungle">
                {filteredProducts.length}
              </span>{" "}
              product
              {filteredProducts.length !== 1 && "s"}
            </p>
          </div>
        </div>

        {/* Products */}

        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div
            className="
              rounded-[32px]
              border
              border-dashed
              border-neutral-300
              bg-white
              py-24
              text-center
            "
          >
            <h2 className="text-3xl font-semibold text-charcoal">
              No products found
            </h2>

            <p className="mt-4 text-neutral-500">
              Try adjusting your filters or search terms.
            </p>

            <button
              onClick={() =>
                setFilters(defaultProductFilters)
              }
              className="
                mt-8
                rounded-full
                bg-jungle
                px-8
                py-3
                font-medium
                text-white
                transition
                hover:opacity-90
              "
            >
              Clear Filters
            </button>
          </div>
        )}

        <PromoBanner />

        <Newsletter />

        <RecentlyViewed />
      </section>
    </main>
  );
}