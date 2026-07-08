// import { ArrowRight } from "lucide-react";
import heroImage from "../../gallery/ChatGPT Image Jul 2, 2026, 12_18_03 PM.png";

/**
 * Collection Hero
 *
 * Editorial hero section for the shop page.
 * Introduces the collection while keeping
 * the focus on shopping.
 */

export default function CollectionHero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Decorative Background */}

      <div className="absolute inset-0">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-jungle/5 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-jungle/5 blur-3xl" />
      </div>

      <div
        className="
          relative
          mx-auto
          grid
          min-h-[75vh]
          max-w-[1440px]
          items-center
          gap-16
          px-4
          py-20
          sm:px-6
          lg:grid-cols-2
          lg:px-8
        "
      >
        {/* Left Content */}

        <div>
          <span
            className="
              inline-flex
              items-center
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
            All Year Collection 2026
          </span>

          <h1
            className="
              mt-8
              text-5xl
              font-light
              leading-[0.92]
              tracking-tight
              text-charcoal
              md:text-7xl
            "
          >
            Timeless
            <br />
            Luxury
            <br />
            Essentials
          </h1>

          <p
            className="
              mt-8
              max-w-xl
              text-lg
              leading-8
              text-neutral-600
            "
          >
            Discover refined fashion designed to
            elevate everyday living. Every piece is
            carefully selected to balance premium
            craftsmanship, comfort and effortless style.
          </p>

          {/* <div className="mt-10 flex flex-wrap gap-5">
            <button
              className="
                flex
                items-center
                gap-2
                rounded-full
                bg-jungle
                px-8
                py-4
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              Shop Now

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button
              className="
                rounded-full
                border
                border-neutral-300
                bg-white
                px-8
                py-4
                transition-all
                duration-300
                hover:border-jungle
                hover:text-jungle
              "
            >
              Explore Collections
            </button>
          </div> */}

          {/* Collection Stats */}

          <div className="mt-14 flex gap-10">
            <div>
              <h3 className="text-2xl font-light text-charcoal">
                250+
              </h3>

              <p className="mt-1 text-sm text-neutral-500">
                Premium Products
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light text-charcoal">
                30+
              </h3>

              <p className="mt-1 text-sm text-neutral-500">
                New Arrivals
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light text-charcoal">
                4.9★
              </h3>

              <p className="mt-1 text-sm text-neutral-500">
                Customer Rating
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}

        <div className="relative">
          <div className="overflow-hidden rounded-[40px]">
            <img
              src={heroImage}
              alt="Collection Hero"
              className="
                aspect-[4/5]
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </div>

          {/* Floating Card */}

          <div
            className="
              absolute
              bottom-8
              left-8
              rounded-3xl
              border
              border-white/20
              bg-white/85
              p-6
              shadow-2xl
              backdrop-blur-xl
            "
          >
            <p className="text-xs uppercase tracking-[0.25rem] text-neutral-500">
              Featured Collection
            </p>

            <h3 className="mt-3 text-2xl font-light">
              Everyday Luxury
            </h3>

            <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-500">
              Versatile pieces designed to transition
              effortlessly from work to weekend.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}