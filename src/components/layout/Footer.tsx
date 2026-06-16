import { Link } from "react-router-dom";

import Container from "./Container";

/**
 * Site Footer
 */

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-4">
          {/* Brand */}

          <div>
            <h3 className="mb-4 text-lg font-semibold tracking-wider text-jungle">
              BRAND
            </h3>

            <p className="text-sm leading-7 text-gray-600">
              Premium products crafted with quality,
              simplicity, and timeless style.
            </p>
          </div>

          {/* Shop */}

          <div>
            <h4 className="mb-4 font-medium">
              Shop
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop">All Products</Link>
              </li>

              <li>
                <Link to="/collections">
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}

          <div>
            <h4 className="mb-4 font-medium">
              Company
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}

          <div>
            <h4 className="mb-4 font-medium">
              Newsletter
            </h4>

            <input
              type="email"
              placeholder="Email address"
              className="
                w-full
                border
                border-border
                bg-white
                px-4
                py-3
                outline-none
              "
            />

            <button
              className="
                mt-3
                w-full
                bg-jungle
                py-3
                text-white
                transition-opacity
                hover:opacity-90
              "
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="border-t border-border py-6 text-center text-sm text-gray-500">
          © 2026 BRAND. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}