import { ArrowRight } from "lucide-react";
import image9 from "../../gallery/ChatGPT Image Jul 2, 2026, 12_18_03 PM.png";

/**
 * Homepage Hero
 */

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-cream
        pt-8
        pb-8
      "
    >
      {/* Background Accent */}

      <div
        className="
          absolute
          -top-32
          -right-32
          h-[500px]
          w-[500px]
          rounded-full
          bg-jungle/5
          blur-3xl
        "
      />

      <div
        className="
          mx-auto
          max-w-[1440px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-2
          "
        >
          {/* LEFT CONTENT */}

          <div className="relative z-10">
            <div
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
                tracking-[0.2rem]
                text-jungle
              "
            >
              New Collection 2026
            </div>

            <h1
              className="
                mt-8
                text-5xl
                font-light
                leading-[0.95]
                tracking-tight
                text-charcoal
                md:text-7xl
                lg:text-8xl
              "
            >
              Modern Luxury

              <br />

              Redefined
            </h1>

            <p
              className="
                mt-8
                max-w-lg
                text-lg
                leading-8
                text-neutral-600
              "
            >
              Curated collections crafted for
              individuals who value timeless
              elegance, premium quality and
              contemporary style.
            </p>

            <div
              className="
                mt-10
                flex
                flex-col
                gap-4
                sm:flex-row
              "
            >
              <button
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-jungle
                  px-8
                  py-4
                  text-white
                  transition
                  hover:scale-[1.02]
                "
              >
                Shop Collection

                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}

          <div className="relative">
            <div
              className="
                aspect-[4/5]
                w-full
                overflow-hidden
                rounded-[40px]
                bg-jungle
              "
            >
              <img
                src={image9}
                alt="Luxury Fashion"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />
            </div>

            {/* Floating Card */}

            <div
              className="
                absolute
                -bottom-6
                left-6
                rounded-3xl
                border
                border-white/20
                bg-white/90
                p-5
                backdrop-blur-md
                shadow-xl
              "
            >
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                Featured
              </p>

              <h3 className="mt-2 text-lg font-medium">
                Summer Essentials
              </h3>

              <p className="mt-1 text-sm text-neutral-500">
                Premium collection now available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}