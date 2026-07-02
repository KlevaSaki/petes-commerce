import { ArrowRight, Mail } from "lucide-react";

/**
 * Newsletter
 *
 * Premium newsletter signup section.
 * Encourages visitors to receive new arrivals,
 * style inspiration and exclusive offers.
 */

export default function Newsletter() {
  return (
    <section className="my-28">
      <div
        className="
          relative
          overflow-hidden
          rounded-[40px]
          bg-jungle
          px-8
          py-16
          text-white
          md:px-16
          md:py-20
        "
      >
        {/* Decorative Background */}

        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

        <div
          className="
            relative
            grid
            gap-12
            lg:grid-cols-2
            lg:items-center
          "
        >
          {/* Left */}

          <div>
            <span
              className="
                inline-flex
                items-center
                gap-2
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
              <Mail size={14} />

              Join Our Community
            </span>

            <h2
              className="
                mt-8
                text-4xl
                font-light
                leading-tight
                md:text-6xl
              "
            >
              Stay Ahead
              <br />
              Of Every Collection
            </h2>

            <p
              className="
                mt-6
                max-w-xl
                text-lg
                leading-8
                text-white/75
              "
            >
              Be the first to discover new arrivals,
              exclusive releases, seasonal collections,
              and members-only offers delivered directly
              to your inbox.
            </p>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <h3 className="text-3xl font-light">
                  Weekly
                </h3>

                <p className="mt-1 text-sm text-white/70">
                  Style Inspiration
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-light">
                  Early
                </h3>

                <p className="mt-1 text-sm text-white/70">
                  Access To New Drops
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-light">
                  VIP
                </h3>

                <p className="mt-1 text-sm text-white/70">
                  Exclusive Promotions
                </p>
              </div>
            </div>
          </div>

          {/* Right */}

          <div
            className="
              rounded-[32px]
              border
              border-white/10
              bg-white/10
              p-8
              backdrop-blur-xl
            "
          >
            <h3 className="text-2xl font-light">
              Subscribe
            </h3>

            <p className="mt-3 text-white/75">
              Join thousands of fashion lovers receiving
              exclusive updates every week.
            </p>

            <div className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/10
                  px-5
                  py-4
                  placeholder:text-white/50
                  outline-none
                  transition
                  focus:border-white
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/10
                  px-5
                  py-4
                  placeholder:text-white/50
                  outline-none
                  transition
                  focus:border-white
                "
              />

              <button
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-white
                  px-6
                  py-4
                  font-medium
                  text-charcoal
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-cream
                "
              >
                Subscribe Now

                <ArrowRight size={18} />
              </button>

              <p className="text-center text-sm text-white/60">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
);
}