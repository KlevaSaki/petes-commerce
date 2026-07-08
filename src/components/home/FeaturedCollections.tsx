import {
  useEffect,
  useRef,
  useState,
} from "react";

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import image17 from "../../gallery/mens/ChatGPT Image Jul 2, 2026, 12_23_01 PM.png";
import image23 from "../../gallery/womens/womens cloth.png";
import image4 from "../../gallery/accessories/accessories.jpg";

/**
 * Featured Collections
 *
 * Editorial collection showcase.
 * Active card is tracked with
 * IntersectionObserver.
 */

const collections = [
  {
    id: 1,
    title: "Menswear",
    description:
      "Tailored essentials crafted for timeless style, premium comfort and effortless sophistication.",
    image: image17,
    link: "/menswear-collection",
  },
  {
    id: 2,
    title: "Womenswear",
    description:
      "Elegant silhouettes designed to inspire confidence for every occasion.",
    image: image23,
    link: "/womenswear-collection",
  },
  {
    id: 3,
    title: "Accessories",
    description:
      "Refined finishing touches that elevate every outfit with understated luxury.",
    image: image4,
    link: "/accessories-collection",
  },
];

export default function FeaturedCollections() {
  const [activeCollection, setActiveCollection] =
    useState(1);

  const cardRefs =
    useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = Number(
                entry.target.getAttribute("data-id")
              );

              setActiveCollection(id);
            }
          });
        },
        {
          threshold: 0.55,
          rootMargin: "-15% 0px -15% 0px",
        }
      );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream via-cream to-white py-24">
      {/* Decorative Background */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-40 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-jungle/5 blur-[140px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-jungle/10
              bg-jungle/5
              px-4
              py-2
              text-xs
              font-medium
              uppercase
              tracking-[0.3rem]
              text-jungle
            "
          >
            Curated Collections
          </span>

          <h2
            className="
              mt-8
              text-4xl
              font-light
              tracking-tight
              text-charcoal
              sm:text-5xl
              lg:text-6xl
            "
          >
            Designed Around
            <span className="block text-jungle">
              Your Lifestyle
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-base
              leading-8
              text-neutral-600
              sm:text-lg
            "
          >
            Discover thoughtfully curated collections that
            combine timeless craftsmanship, modern elegance
            and everyday versatility.
          </p>
        </div>

        {/* Collections */}

        <div className="mt-24 space-y-12">
          {collections.map((collection, index) => {
            const active =
              activeCollection === collection.id;

            const reversed = index % 2 === 1;

            return (
              <article
                key={collection.id}
                data-id={collection.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`
                  group
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-neutral-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-500

                  ${
                    active
                      ? "border-jungle/20 shadow-[0_25px_60px_rgba(15,61,46,0.08)]"
                      : "hover:border-jungle/15 hover:shadow-xl"
                  }
                `}
              >
                <div
                  className={`
                    grid
                    items-center
                    gap-10
                    p-6
                    lg:grid-cols-2
                    lg:p-10

                    ${
                      reversed
                        ? "lg:[&>*:first-child]:order-2"
                        : ""
                    }
                  `}
                >
                  {/* Image */}
                                    {/* Image */}

                  <div className="overflow-hidden rounded-[28px]">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="
                        aspect-[4/5]
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* Content */}

                  <div className="min-w-0">
                    {/* Collection Number */}

                    <div className="flex items-center gap-4">
                      <span
                        className="
                          text-sm
                          font-medium
                          tracking-[0.35rem]
                          text-jungle/40
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div
                        className={`
                          h-px
                          rounded-full
                          bg-jungle
                          transition-all
                          duration-500
                          ${
                            active
                              ? "w-24 opacity-100"
                              : "w-12 opacity-30"
                          }
                        `}
                      />
                    </div>

                    {/* Badge */}

                    <div className="mt-8">
                      <span
                        className="
                          inline-flex
                          rounded-full
                          border
                          border-jungle/10
                          bg-jungle/5
                          px-4
                          py-2
                          text-xs
                          font-medium
                          uppercase
                          tracking-[0.22rem]
                          text-jungle
                        "
                      >
                        {index === 0
                          ? "Featured Collection"
                          : "Curated Collection"}
                      </span>
                    </div>

                    {/* Title */}

                    <h3
                      className="
                        mt-8
                        text-3xl
                        font-light
                        tracking-tight
                        text-charcoal
                        sm:text-4xl
                        lg:text-5xl
                      "
                    >
                      {collection.title}
                    </h3>

                    {/* Description */}

                    <p
                      className="
                        mt-6
                        max-w-xl
                        text-base
                        leading-8
                        text-neutral-600
                        sm:text-lg
                      "
                    >
                      {collection.description}
                    </p>

                    {/* CTA */}

                    <div className="mt-10">
                      <Link
                        to={collection.link}
                        className="inline-flex"
                      >
                        <button
                          className={`
                            group/button
                            inline-flex
                            items-center
                            gap-3
                            rounded-full
                            border
                            px-7
                            py-4
                            text-sm
                            font-medium
                            transition-all
                            duration-300

                            ${
                              active
                                ? "border-jungle bg-jungle text-white shadow-lg shadow-jungle/20"
                                : "border-neutral-300 bg-white text-charcoal hover:border-jungle hover:bg-jungle hover:text-white"
                            }
                          `}
                        >
                          Explore Collection

                          <ArrowRight
                            size={18}
                            className="
                              transition-transform
                              duration-300
                              group-hover/button:translate-x-1
                            "
                          />
                        </button>
                      </Link>
                    </div>

                    {/* Active Indicator */}

                    <div className="mt-10">
                      <div
                        className={`
                          h-1
                          rounded-full
                          bg-gradient-to-r
                          from-jungle
                          to-jungle/10
                          transition-all
                          duration-500

                          ${
                            active
                              ? "w-40"
                              : "w-20 opacity-40"
                          }
                        `}
                      />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}