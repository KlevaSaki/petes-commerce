import { ArrowRight } from "lucide-react";
import bannerImage from "../../gallery/ChatGPT Image Jul 2, 2026, 12_18_03 PM.png";

/**
 * Promotional Banner
 *
 * Editorial campaign banner displayed
 * between product sections.
 */

export default function PromoBanner() {
  return (
    <section className="my-24">
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-[40px]
        "
      >
        {/* Background Image */}

        <img
          src={bannerImage}
          alt="Summer Collection"
          className="
            h-[650px]
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />

        {/* Decorative Glow */}

        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        {/* Content */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            px-8
            md:px-16
          "
        >
          <div className="max-w-2xl text-white">
            <span
              className="
                inline-flex
                rounded-full
                border
                border-white/20
                bg-white/10
                px-4
                py-2
                text-xs
                uppercase
                tracking-[0.25rem]
                backdrop-blur-md
              "
            >
              Limited Time
            </span>

            <h2
              className="
                mt-8
                text-5xl
                font-light
                leading-tight
                md:text-7xl
              "
            >
              Mid Season
              <br />
              Sale
            </h2>

            <p
              className="
                mt-6
                max-w-xl
                text-lg
                leading-8
                text-white/80
              "
            >
              Refresh your wardrobe with timeless
              pieces crafted for modern living.
              Enjoy exclusive savings on selected
              collections for a limited time.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-8
                  py-4
                  font-medium
                  text-charcoal
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-jungle
                  hover:text-white
                "
              >
                Shop Sale

                <ArrowRight size={18} />
              </button>

              <button
                className="
                  rounded-full
                  border
                  border-white/30
                  bg-white/10
                  px-8
                  py-4
                  text-white
                  backdrop-blur-md
                  transition
                  hover:bg-white/20
                "
              >
                Explore Collection
              </button>
            </div>
          </div>
        </div>

        {/* Floating Discount Card */}

        <div
          className="
            absolute
            bottom-8
            right-8
            hidden
            rounded-3xl
            border
            border-white/20
            bg-white/10
            p-8
            text-center
            text-white
            backdrop-blur-xl
            lg:block
          "
        >
          <p className="text-xs uppercase tracking-[0.25rem] text-white/70">
            Save Up To
          </p>

          <h3 className="mt-2 text-6xl font-light">
            40%
          </h3>

          <p className="mt-2 text-sm text-white/80">
            Selected Items
          </p>
        </div>
      </div>
    </section>
  );
}