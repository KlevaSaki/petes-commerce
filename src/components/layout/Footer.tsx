import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "./Container";

export default function Footer() {
  return (
    <footer
      className="
        mt-32
        overflow-hidden
        bg-jungle
        text-white
      "
    >
      <Container>
        {/* Top Section */}

        <div
          className="
            border-b
            border-white/10
            py-20
          "
        >
          <div
            className="
              flex
              flex-col
              gap-10
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.25rem]
                  text-white/60
                "
              >
                Stay Connected
              </p>

              <h2
                className="
                  mt-4
                  max-w-2xl
                  text-4xl
                  font-light
                  leading-tight
                  md:text-6xl
                "
              >
                Join our world of
                timeless style.
              </h2>
            </div>

            {/* Newsletter */}

            <div className="w-full max-w-md">
              <div
                className="
                  flex
                  overflow-hidden
                  rounded-full
                  border
                  border-white/20
                  bg-white/5
                  backdrop-blur-sm
                "
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    flex-1
                    bg-transparent
                    px-6
                    py-4
                    outline-none
                    placeholder:text-white/50
                  "
                />

                <button
                  className="
                    flex
                    items-center
                    gap-2
                    bg-white
                    px-6
                    text-jungle
                    transition
                    hover:bg-cream
                  "
                >
                  Join

                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section */}

        <div
          className="
            grid
            gap-12
            py-20
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {/* Brand */}

          <div className="lg:col-span-2">
            <h3
              className="
                text-4xl
                font-light
                tracking-[0.3rem]
              "
            >
              LUXE DISTRICT
            </h3>

            <p
              className="
                mt-6
                max-w-md
                leading-8
                text-white/70
              "
            >
              Curating premium products crafted
              with exceptional quality,
              timeless design and effortless
              sophistication.
            </p>
          </div>

          <div
          className="
            mx-auto
            w-full
            rounded-[32px]
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-sm
          "
        >
          {/* Grid goes here */}

            <div
            className="
              mx-auto
              mt-8
              grid
              max-w-3xl
              grid-cols-2
              gap-12
              text-left
              md:gap-24
            "
          >
            {/* Shop */}

            <div>
              <h4
                className="
                  mb-6
                  text-xs
                  uppercase
                  tracking-[0.25rem]
                  text-white/50
                "
              >
                Shop
              </h4>

              <ul className="space-y-4">
                <li>
                  <Link
                    to="/shop"
                    className="
                      text-white/80
                      transition
                      hover:text-cream
                    "
                  >
                    All Products
                  </Link>
                </li>

                <li>
                  <Link
                    to="/collections"
                    className="
                      text-white/80
                      transition
                      hover:text-cream
                    "
                  >
                    Collections
                  </Link>
                </li>

                <li>
                  <Link
                    to="/new-arrivals"
                    className="
                      text-white/80
                      transition
                      hover:text-cream
                    "
                  >
                    New Arrivals
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}

            <div>
              <h4
                className="
                  mb-6
                  text-xs
                  uppercase
                  tracking-[0.25rem]
                  text-white/50
                "
              >
                Company
              </h4>

              <ul className="space-y-4">
                <li>
                  <Link
                    to="/about"
                    className="
                      text-white/80
                      transition
                      hover:text-cream
                    "
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="
                      text-white/80
                      transition
                      hover:text-cream
                    "
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    to="/faq"
                    className="
                      text-white/80
                      transition
                      hover:text-cream
                    "
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        
        </div>

        {/* Bottom Bar */}

        <div
          className="
            flex
            flex-col
            gap-4
            py-8
            text-sm
            text-white/50
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © 2026 BRAND. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="hover:text-white"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="hover:text-white"
            >
              Terms
            </Link>

            <Link
              to="/cookies"
              className="hover:text-white"
            >
              Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}