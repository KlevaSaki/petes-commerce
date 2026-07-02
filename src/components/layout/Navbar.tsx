import { Menu, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Container from "./Container";

/**
 * Main Site Navigation
 */

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      label: "Shop",
      path: "/shop",
    },
    {
      label: "Collections",
      path: "/collections",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-jungle/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}

          {/* <Link
            to="/"
            className="text-xl font-semibold tracking-[0.25rem] text-cream"
          >
            LUXE DISTRICT
          </Link> */}

          <Link
            to="/"
            className="flex flex-col items-center leading-none text-cream select-none"
          >
            <span
              className="
                font-serif
                text-[1.2rem]
                font-light
                tracking-[0.35rem]
              "
            >
              LUXE
            </span>

            <span
              className="
                -mt-0.1
                text-[0.55rem]
                uppercase
                tracking-[0.5rem]
                font-light
                opacity-80
                whitespace-nowrap
              "
            >
              DISTRICT
            </span>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden gap-10 md:flex text-cream text-xs">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-sm uppercase tracking-wider transition-opacity hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}

          <div className="hidden items-center gap-4 md:flex text-cream cursor-pointer">
            <User size={20} />

            <ShoppingBag size={20} />
          </div>

          {/* Mobile Toggle */}

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden"
          >
            {isOpen ? <X className="text-cream" /> : <Menu className="text-cream" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="border-t border-border bg-cream md:hidden">
          <Container>
            <nav className="flex flex-col py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="py-3 uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}