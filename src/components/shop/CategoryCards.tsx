import { ArrowRight } from "lucide-react";

import mensImage from "../../gallery/ChatGPT Image Jul 2, 2026, 12_23_01 PM.png";
import womensImage from "../../gallery/image23.jpeg";
import accessoriesImage from "../../gallery/image4.jpeg";

/**
 * Featured Shopping Categories
 *
 * Editorial category cards that help customers
 * quickly navigate to collections.
 */

const categories = [
  {
    id: 1,
    title: "Menswear",
    description: "Tailored essentials for effortless everyday style.",
    image: mensImage,
  },
  {
    id: 2,
    title: "Womenswear",
    description: "Contemporary silhouettes designed with elegance.",
    image: womensImage,
  },
  {
    id: 3,
    title: "Accessories",
    description: "The finishing touches that complete every outfit.",
    image: accessoriesImage,
  },
];

export default function CategoryCards() {
  return (
    <section>
      {/* Section Header */}

      <div className="mb-12">
        <span
          className="
            text-xs
            uppercase
            tracking-[0.25rem]
            text-jungle
          "
        >
          Browse Collections
        </span>

        <h2
          className="
            mt-4
            text-4xl
            font-light
            tracking-tight
            md:text-5xl
          "
        >
          Shop By Category
        </h2>

        <p className="mt-4 max-w-2xl text-neutral-500">
          Explore curated collections designed to help you
          discover timeless pieces for every occasion.
        </p>
      </div>

      {/* Category Grid */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <article
            key={category.id}
            className="
              group
              relative
              overflow-hidden
              rounded-[32px]
            "
          >
            <img
              src={category.image}
              alt={category.title}
              className="
                aspect-[4/5]
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Content */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                p-8
                text-white
              "
            >
              <h3
                className="
                  text-3xl
                  font-light
                "
              >
                {category.title}
              </h3>

              <p className="mt-3 max-w-sm text-white/80">
                {category.description}
              </p>

              <button
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-charcoal
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-jungle
                  hover:text-white
                "
              >
                Explore

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </button>
            </div>

            {/* Top Label */}

            <div
              className="
                absolute
                left-6
                top-6
                rounded-full
                bg-white/90
                px-4
                py-2
                text-xs
                uppercase
                tracking-[0.2rem]
                text-charcoal
                backdrop-blur-md
              "
            >
              Collection
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}