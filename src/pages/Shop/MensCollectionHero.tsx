import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import image20 from "../../gallery/image20.jpeg";

export default function MensCollectionHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}

      <div className="relative h-[70vh] min-h-[520px] w-full">
        <img
          src={image20}
          alt="Menswear Collection"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-jungle/95 via-jungle/80 to-jungle/40" />

        {/* Content */}

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Breadcrumb */}

              <p className="mb-4 text-sm uppercase tracking-[0.3rem] text-cream/70">
                Home / Collections / Menswear
              </p>

              <h1 className="text-5xl font-semibold leading-tight text-cream md:text-6xl lg:text-7xl">
                Menswear
                <span className="block text-cream/80">
                  Collection
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
                Discover elevated essentials, statement pieces,
                premium footwear and accessories curated for
                the modern gentleman.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="#products"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-cream
                    px-7
                    py-3
                    text-sm
                    font-medium
                    text-jungle
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  Shop Collection
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/shop"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-cream/40
                    px-7
                    py-3
                    text-sm
                    font-medium
                    text-cream
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:bg-white/10
                  "
                >
                  View All Products
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Fade */}

        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-cream to-transparent" />
      </div>
    </section>
  );
}