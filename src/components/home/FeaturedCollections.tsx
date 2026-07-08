import {
  useEffect,
  useRef,
  useState,
} from "react";

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import image17 from "../../gallery/ChatGPT Image Jul 2, 2026, 12_23_01 PM.png";
import image23 from "../../gallery/womens cloth.png";
import image4 from "../../gallery/accessories.jpg";

/**
 * Featured Collections
 *
 * Editorial scroll experience.
 * The active collection is detected
 * using IntersectionObserver.
 */

const collections = [
  {
    id: 1,
    title: "Menswear",
    description:
      "Tailored essentials crafted for timeless style.",
    image: image17,
    link: "/menswear-collection"
  },
  {
    id: 2,
    title: "Womenswear",
    description:
      "Modern silhouettes designed with elegance.",
    image: image23,
    link: "/womenswear-collection"
  },
  {
    id: 3,
    title: "Accessories",
    description:
      "Refined finishing touches for every occasion.",
    image: image4,
    link: "/accessories-collection"
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
          threshold: 0.6,
          rootMargin: "-20% 0px -20% 0px",
        }
      );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="rounded-[20px] bg-gradient-to-b from-cream to-white px-4 py-20">
      {/* Header */}

      <div className="mx-auto mb-24 text-center">
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
            mt-5
            text-5xl
            font-light
            tracking-tight
            md:text-6xl
          "
        >
          Discover Your Style
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-neutral-500
          "
        >
          Carefully selected collections designed
          to blend luxury, versatility and timeless
          appeal.
        </p>
      </div>

      {/* Collections */}

      <div className="mx-auto flex flex-col gap-24">
        {collections.map((collection, index) => {
          const active =
            activeCollection === collection.id;

          return (
            <article
              key={collection.id}
              data-id={collection.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`
                group
                grid
                items-center
                gap-12
                rounded-[40px]
                transition-opacity
                duration-500
                lg:grid-cols-2
                
              `}
            >
              {/* Image */}

              <div className="overflow-hidden rounded-[36px]">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className={`
                    aspect-[4/5]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105

                  `}
                />
              </div>

              {/* Content */}

              <div className="px-2 lg:px-8">
                <span
                  className="
                    rounded-full
                    border
                    border-jungle/15
                    bg-jungle/5
                    px-4
                    py-2
                    text-xs
                    uppercase
                    tracking-[0.25rem]
                    text-jungle
                  "
                >
                  {index === 0
                    ? "Featured"
                    : "Collection"}
                </span>

                <h3
                  className={`
                    mt-8
                    text-4xl
                    font-light
                    tracking-tight
                  `}
                >
                  {collection.title}
                </h3>

                <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-500">
                  {collection.description}
                </p>

                <Link to={collection.link}>                  <button
                    className={`
                      mt-10
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      px-8
                      py-4
                      text-sm
                      font-medium
                      transition-all
                      duration-500

                      ${
                        active
                          ? "bg-jungle text-white scale-110 shadow-xl shadow-jungle/30"
                          : "bg-white text-charcoal border border-neutral-200 hover:border-jungle hover:text-jungle"
                      }
                    `}
                  >
                    Explore Collection

                    <ArrowRight
                      size={18}
                      className={`
                        transition-all
                        duration-500

                        ${
                          active
                            ? "translate-x-1"
                            : ""
                        }
                      `}
                    />
                  </button>
                </Link>

                {/* Decorative Divider */}

                <div
                  className={`
                    mt-10
                    h-[2px]
                    rounded-full
                    bg-gradient-to-r
                    from-jungle
                    to-transparent
                    transition-all
                    duration-700

                    ${
                      active
                        ? "w-36 opacity-100"
                        : "w-20 opacity-40"
                    }
                  `}
                />
              </div>
            </article>
          );
        })}
      </div>

      {/* Bottom Decorative Blur */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-jungle/5
          blur-3xl
        "
      />
    </section>
  );
}