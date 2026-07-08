export type SortOption =
  | "featured"
  | "newest"
  | "price-low"
  | "price-high"
  | "name";

export interface ProductFiltersState {
  search: string;

  category: string[];

  brand: string[];

  color: string[];

  size: string[];

  minPrice: number;
  maxPrice: number;

  sort: SortOption;

  saleOnly: boolean;

  newOnly: boolean;
}

export const defaultProductFilters: ProductFiltersState = {
  search: "",

  category: [],

  brand: [],

  color: [],

  size: [],

  minPrice: 0,
  maxPrice: Infinity,

  sort: "featured",

  saleOnly: false,

  newOnly: false,
};