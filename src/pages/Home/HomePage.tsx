import Container from "../../components/layout/Container";
import Hero from "../../components/home/Hero";
import FeaturedCollections from "../../components/home/FeaturedCollections";
import ProductGrid from "../../components/product/ProductGrid";

import { products } from "../../data/products";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Container>
        <FeaturedCollections />

        <ProductGrid
          title="New Arrivals"
          products={products}
        />
      </Container>
    </>
  );
}