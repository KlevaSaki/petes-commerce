import type { Product } from "../types/product";
import type { ProductFiltersState } from "../types/productFilters";

export function filterProducts(
  products: Product[],
  filters: ProductFiltersState
): Product[] {
  let filtered = [...products];

  // Search
  if (filters.search.trim()) {
    const query = filters.search.toLowerCase();

    filtered = filtered.filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.brand?.toLowerCase().includes(query) ||
        product.color?.toLowerCase().includes(query)
      );
    });
  }

  // Category
  if (filters.category.length) {
    filtered = filtered.filter((product) =>
      filters.category.includes(product.category)
    );
  }

  // Brand
  if (filters.brand.length) {
    filtered = filtered.filter((product) =>
      filters.brand.includes(product.brand ?? "")
    );
  }

  // Color
  if (filters.color.length) {
    filtered = filtered.filter((product) =>
      filters.color.includes(product.color ?? "")
    );
  }

  // Size
  if (filters.size.length) {
    filtered = filtered.filter((product) =>
      product.size?.some((size) =>
        filters.size.includes(size)
      )
    );
  }

  // Price
  filtered = filtered.filter(
  (product) =>
    product.price >= filters.minPrice &&
    product.price <= filters.maxPrice
);

  // Sale
  if (filters.saleOnly) {
    filtered = filtered.filter((product) => product.isSale);
  }

  // New Arrivals
  if (filters.newOnly) {
    filtered = filtered.filter((product) => product.newArrival);
  }

  // Sorting
  switch (filters.sort) {
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

    case "newest":
      filtered.sort((a, b) =>
        Number(Boolean(b.newArrival)) -
        Number(Boolean(a.newArrival))
      );
      break;

    default:
      break;
  }

  return filtered;
}