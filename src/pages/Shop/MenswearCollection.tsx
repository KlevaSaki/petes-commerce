import { useMemo, useState } from "react";

import MensCollectionHero from "./MensCollectionHero";
import PromoBanner from "../../components/shop/PromoBanner";
import Newsletter from "../../components/shop/Newsletter";
import RecentlyViewed from "../../components/shop/RecentlyViewed";
import ProductGrid from "../../components/product/ProductGrid";

import { products } from "../../data/products";

export default function MenswearCollection() {
  const [search, setSearch] = useState("");

  const [sortBy, setSortBy] = useState("featured");

  const mensProducts = useMemo(() => {
    let filtered = products.filter(
      (product) => product.gender === "Men"
    );

    if (search.trim()) {
      filtered = filtered.filter((product) =>
        product.name
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "name":
        filtered.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;

      default:
        break;
    }

    return filtered;
  }, [search, sortBy]);

  return (
    <main className="bg-cream">

      <MensCollectionHero />

      <section className="mx-auto max-w-7xl px-4 py-10">

        {/* Heading */}

        <div className="mb-8">

          <h1 className="text-4xl font-semibold text-jungle">

            Menswear Collection

          </h1>

          <p className="mt-3 max-w-xl text-neutral-600">

            Discover timeless menswear, premium footwear and
            accessories designed for every occasion.

          </p>

        </div>

        {/* Search + Sort */}

        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <input
            type="text"
            placeholder="Search menswear..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="h-12 w-full rounded-full border border-neutral-300 bg-white px-6 outline-none transition focus:border-jungle"
          />

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
            className="h-12 rounded-full border border-neutral-300 bg-white px-5 outline-none focus:border-jungle"
          >
            <option value="featured">

              Featured

            </option>

            <option value="price-low">

              Price: Low to High

            </option>

            <option value="price-high">

              Price: High to Low

            </option>

            <option value="name">

              A-Z

            </option>

          </select>

        </div>

        {/* Results */}

        <div className="mb-8 flex items-center justify-between">

          <p className="text-neutral-600">

            Showing

            <span className="mx-2 font-semibold text-jungle">

              {mensProducts.length}

            </span>

            products

          </p>

        </div>

        <ProductGrid
          title=""
          products={mensProducts}
        />

        {mensProducts.length === 0 && (
          <div className="rounded-3xl border border-dashed border-neutral-300 bg-white py-20 text-center">

            <h2 className="text-2xl font-semibold">

              No products found

            </h2>

            <p className="mt-3 text-neutral-500">

              Try another search.

            </p>

          </div>
        )}

        <PromoBanner />

        <Newsletter />

        <RecentlyViewed />

      </section>

    </main>
  );
}