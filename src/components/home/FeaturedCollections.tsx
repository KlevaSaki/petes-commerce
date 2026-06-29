import { ArrowRight } from "lucide-react";
import image2 from "../../gallery/image2.jpeg";
import image3 from "../../gallery/image3.jpeg";
import image4 from "../../gallery/image4.jpeg";

/**
 * Featured Collections
 */

const collections = [
  {
    id: 1,
    title: "Menswear",
    description: "Tailored essentials crafted for timeless style.",
    image:image2,
  },
  {
    id: 2,
    title: "Womenswear",
    description: "Modern silhouettes designed with elegance.",
    image:image3,
  },
  {
    id: 3,
    title: "Accessories",
    description: "Refined finishing touches for every occasion.",
    image:image4
  }
];

export default function FeaturedCollections() {
  return (
    <section className="rounded-[20px] px-4 bg-linear-to-b from-cream to-white py-12">
      <section className="py-28">
      {/* Section Header */}

      <div className="mb-16 text-center">
        <span
          className="
            text-xs
            uppercase
            tracking-[0.25rem]
            text-jungle
          "
        >
          Curated Collections
        </span>

        <h2
          className="
            mt-4
            text-4xl
            md:text-6xl
            font-light
            tracking-tight
          "
        >
          Discover Your Style
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-neutral-500
          "
        >
          Carefully selected collections designed
          to blend luxury, versatility and timeless appeal.
        </p>
      </div>

      {/* Layout */}

      <div
        className="
          grid
          gap-6
          lg:grid-cols-3
        "
      >
        {/* Large Collection */}

        <article
          className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            lg:col-span-2
          "
        >
          <img
            src={collections[0].image}
            alt={collections[0].title}
            className="
              h-[650px]
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

          <div
            className="
              absolute
              bottom-0
              left-0
              p-8
              md:p-10
              text-white
            "
          >
            <span
              className="
                rounded-full
                bg-white/15
                px-4
                py-2
                text-xs
                uppercase
                tracking-[0.2rem]
                backdrop-blur-md
              "
            >
              Featured
            </span>

            <h3
              className="
                mt-5
                text-4xl
                md:text-5xl
                font-light
              "
            >
              {collections[0].title}
            </h3>

            <p className="mt-4 max-w-md text-white/80">
              {collections[0].description}
            </p>

            <button
              className="
                mt-6
                flex
                items-center
                gap-2
                rounded-full
                bg-jungle
                px-6
                py-3
                text-sm
                font-medium
                transition
                hover:opacity-90
              "
            >
              Explore Collection
              <ArrowRight size={18} />
            </button>
          </div>
        </article>

        {/* Right Column */}

        <div className="flex flex-col gap-6">
          {collections.slice(1).map((collection) => (
            <article
              key={collection.id}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
              "
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="
                  h-[312px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-6
                  text-white
                "
              >
                <h3
                  className="
                    text-2xl
                    font-light
                  "
                >
                  {collection.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    text-white/80
                  "
                >
                  {collection.description}
                </p>

                <div
                  className="
                    mt-4
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                  "
                >
                  Explore
                  <ArrowRight
                    size={16}
                    className="
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      </section>
    </section>
    
  );
}