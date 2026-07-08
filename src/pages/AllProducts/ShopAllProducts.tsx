import CollectionHero from "../../components/shop/CollectionHero";
import FilterBar from "../../components/shop/FilterBar";
// import CategoryCards from "../../components/shop/CategoryCards";
import ProductGrid from "../../components/product/ProductGrid";
import PromoBanner from "../../components/shop/PromoBanner";
import Newsletter from "../../components/shop/Newsletter";
import RecentlyViewed from "../../components/shop/RecentlyViewed";

import { products } from "../../data/products";

/**
 * Shop Collection Page
 *
 * Main shopping experience.
 * All shopping sections are assembled here.
 */

export default function ShopAllProducts() {
  return (
    <main className="bg-cream">
      <FilterBar />

      <CollectionHero />

      <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8">
        {/* <CategoryCards /> */}

        <div>
          <ProductGrid
            title="All Products"
            products={products}
          />
        </div>

        <PromoBanner />

        <Newsletter />

        <RecentlyViewed />
      </div>
    </main>
  );
}