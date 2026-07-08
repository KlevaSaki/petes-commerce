import { Search, SlidersHorizontal } from "lucide-react";
import type { Product } from "../../types/product";
import type {
  ProductFiltersState,
  SortOption,
} from "../../types/productFilters";

interface ProductFiltersProps {
  products: Product[];
  filters: ProductFiltersState;
  setFilters: React.Dispatch<
    React.SetStateAction<ProductFiltersState>
  >;
  onOpenFilters: () => void;
}

export default function ProductFilters({
  filters,
  setFilters,
  onOpenFilters,
}: ProductFiltersProps) {
  return (
    <div className="space-y-5">
      {/* Search + Actions */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}

        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400"
          />

          <input
            type="text"
            value={filters.search}
            placeholder="Search products..."
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                search: e.target.value,
              }))
            }
            className="
              h-12
              w-full
              rounded-full
              border
              border-neutral-300
              bg-white
              pl-12
              pr-5
              text-sm
              outline-none
              transition
              focus:border-jungle
            "
          />
        </div>

        {/* Actions */}

        <div className="flex gap-3">
          {/* Sort */}

          <select
            value={filters.sort}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                sort: e.target.value as SortOption,
              }))
            }
            className="
              h-12
              rounded-full
              border
              border-neutral-300
              bg-white
              px-5
              text-sm
              outline-none
              transition
              focus:border-jungle
            "
          >
            <option value="featured">
              Featured
            </option>

            <option value="newest">
              Newest
            </option>

            <option value="price-low">
              Price: Low → High
            </option>

            <option value="price-high">
              Price: High → Low
            </option>

            <option value="name">
              Name A–Z
            </option>
          </select>

          {/* Filter Button */}

          <button
            onClick={onOpenFilters}
            className="
              flex
              h-12
              items-center
              gap-2
              rounded-full
              bg-jungle
              px-5
              text-sm
              font-medium
              text-white
              transition
              hover:opacity-90
            "
          >
            <SlidersHorizontal size={18} />

            Filters
          </button>
        </div>
      </div>
    </div>
  );
}